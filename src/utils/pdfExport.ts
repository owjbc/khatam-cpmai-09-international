import { toJpeg } from 'html-to-image';
import { jsPDF } from 'jspdf';

let cachedFontEmbedCSS: string | null = null;

/**
 * Fetches Google Fonts CSS and converts font URLs to base64 data URIs
 * so html-to-image can embed Vazirmatn & Plus Jakarta Sans without
 * touching cross-origin document.styleSheets.cssRules (avoiding SecurityError).
 */
async function getEmbeddedFontCss(): Promise<string> {
  if (cachedFontEmbedCSS !== null) {
    return cachedFontEmbedCSS;
  }

  try {
    const cssUrl =
      'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Plus+Jakarta+Sans:wght@500;600;700&family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap';
    const cssResponse = await fetch(cssUrl);
    if (!cssResponse.ok) {
      cachedFontEmbedCSS = '';
      return '';
    }
    let cssText = await cssResponse.text();

    const urlRegex = /url\((['"]?)(https:\/\/[^)'"]+)\1\)/g;
    const matches = Array.from(cssText.matchAll(urlRegex));

    await Promise.all(
      matches.map(async (match) => {
        const fullMatch = match[0];
        const fontUrl = match[2];
        try {
          const fontRes = await fetch(fontUrl);
          if (!fontRes.ok) return;
          const blob = await fontRes.blob();
          const dataUrl = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          });
          cssText = cssText.split(fullMatch).join(`url("${dataUrl}")`);
        } catch {
          // Ignore individual font file failure
        }
      })
    );

    cachedFontEmbedCSS = cssText;
    return cssText;
  } catch {
    cachedFontEmbedCSS = '';
    return '';
  }
}

export async function exportBrochureToPdf(
  pageElements: HTMLElement[],
  onProgress?: (msg: string) => void,
  filename: string = 'OWJ-CPMAI-Protocol-Redesigned-A4.pdf'
): Promise<void> {
  onProgress?.('در حال بارگذاری فونت‌ها و تصاویر...');

  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
  }

  const fontEmbedCSS = await getEmbeddedFontCss();

  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true,
  });

  const pageWidthMm = 210;
  const pageHeightMm = 297;

  for (let i = 0; i < pageElements.length; i++) {
    const el = pageElements[i];
    onProgress?.(`در حال رندر صفحه ${i + 1} از ${pageElements.length}...`);

    const width = el.offsetWidth || 850;
    const height = el.offsetHeight || 1202;

    const dataUrl = await toJpeg(el, {
      width,
      height,
      quality: 0.96,
      pixelRatio: 2,
      backgroundColor: '#ffffff',
      cacheBust: true,
      fontEmbedCSS,
      style: {
        margin: '0px',
        marginLeft: '0px',
        marginRight: '0px',
        marginTop: '0px',
        marginBottom: '0px',
        padding: el.style.padding || undefined,
        left: '0px',
        right: '0px',
        top: '0px',
        transform: 'none',
        width: `${width}px`,
        height: `${height}px`,
        maxWidth: 'none',
        boxShadow: 'none',
      },
    });

    if (i > 0) {
      pdf.addPage('a4', 'portrait');
    }

    pdf.addImage(
      dataUrl,
      'JPEG',
      0,
      0,
      pageWidthMm,
      pageHeightMm,
      undefined,
      'FAST'
    );

    // Embed real interactive PDF Hyperlink Annotations for all [data-pdf-link] elements on this page
    const pageRect = el.getBoundingClientRect();
    const linkNodes = Array.from(el.querySelectorAll<HTMLElement>('[data-pdf-link]'));
    for (const node of linkNodes) {
      const targetUrl = node.getAttribute('data-pdf-link');
      if (!targetUrl) continue;

      const nodeRect = node.getBoundingClientRect();
      if (nodeRect.width <= 0 || nodeRect.height <= 0) continue;

      const relX = nodeRect.left - pageRect.left;
      const relY = nodeRect.top - pageRect.top;

      const xMm = (relX / pageRect.width) * pageWidthMm;
      const yMm = (relY / pageRect.height) * pageHeightMm;
      const wMm = (nodeRect.width / pageRect.width) * pageWidthMm;
      const hMm = (nodeRect.height / pageRect.height) * pageHeightMm;

      pdf.link(xMm, yMm, wMm, hMm, { url: targetUrl });
    }
  }

  onProgress?.('در حال ذخیره فایل PDF...');
  pdf.save(filename);
}
