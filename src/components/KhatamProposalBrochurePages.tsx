import React from 'react';
import {
  AI_CREDENTIALS_13,
  DOCUMENT_META,
  EXTRACTED_ASSETS,
  OFFICIAL_CERTIFICATES,
  PM_CREDENTIALS,
} from '../data/protocolData';
import { KhatamProposalDocument } from '../data/khatamProposalsData';

interface KhatamProposalBrochurePagesProps {
  proposal: KhatamProposalDocument;
  onSelectImage?: (src: string, title: string) => void;
  digitalUrl: string;
  digitalQrDataUrl: string;
}

const PageHeaderStrip: React.FC<{
  pageNum: string;
  sectionLabel: string;
  proposalTitle: string;
  digitalUrl: string;
}> = ({ sectionLabel, proposalTitle, digitalUrl }) => (
  <div className="w-full shrink-0">
    {/* Deep Teal-Navy Main Header Band (#1D4760) from Picture8 */}
    <div className="bg-[#1D4760] text-white px-9 py-3.5 flex items-center justify-between gap-4">
      {/* Right in RTL: OWJ Business Council White Logo */}
      <div
        data-pdf-link="https://www.owjbc.com"
        className="shrink-0 flex items-center"
      >
        <img
          src={EXTRACTED_ASSETS.owjLogoWhite}
          alt="OWJ Business Council - مشاوران مدیریت کسب و کار اوج"
          referrerPolicy="no-referrer"
          className="h-11 w-auto object-contain"
        />
      </div>

      {/* Center: Proposal Title + Section Title */}
      <div
        data-pdf-link={digitalUrl}
        className="flex flex-col items-center text-center px-3"
      >
        <span className="text-[10.5px] text-[#7DD3FC] font-semibold">
          پروپوزال رسمی استاندارد جهانی PMI-CPMAI v8 · {proposalTitle}
        </span>
        <span className="text-xs font-extrabold text-white mt-0.5">
          {sectionLabel}
        </span>
      </div>

      {/* Left in RTL: AJA (Abolfazl Jafari Asl) White Logo */}
      <div
        data-pdf-link={digitalUrl}
        className="shrink-0 flex items-center"
      >
        <img
          src={EXTRACTED_ASSETS.ajaLogoWhite}
          alt="Abolfazl Jafari Asl - ابوالفضل جعفری اصل"
          referrerPolicy="no-referrer"
          className="h-10 w-auto object-contain"
        />
      </div>
    </div>

    {/* Sky-Cyan Accent Band (#37A3DC) from Picture8 */}
    <div className="h-3 w-full bg-[#37A3DC]" />
  </div>
);

const PageFooterStrip: React.FC<{
  pageNum: string;
  proposalShort: string;
  digitalUrl: string;
}> = ({ pageNum, proposalShort, digitalUrl }) => (
  <div className="mt-auto w-full pt-2 select-none shrink-0">
    <div className="relative h-15 w-full flex items-end overflow-hidden">
      {/* Right side in RTL: Deep Teal-Navy Bar (#1D4760) */}
      <div className="w-full h-9 bg-[#1D4760] flex items-center justify-start px-7 text-[10.5px] text-slate-200">
        <div className="flex items-center gap-2.5">
          <span className="font-bold text-white">{DOCUMENT_META.organization}</span>
          <span className="text-[#37A3DC]">·</span>
          <span className="truncate max-w-[235px]">{proposalShort}</span>
          <span className="text-[#37A3DC]">·</span>
          <a
            href={`https://${DOCUMENT_META.website}`}
            target="_blank"
            rel="noreferrer"
            data-pdf-link={`https://${DOCUMENT_META.website}`}
            className="font-latin text-slate-200 underline decoration-[#37A3DC]"
            dir="ltr"
          >
            {DOCUMENT_META.website}
          </a>
          <span className="text-[#37A3DC]">·</span>
          <a
            href={digitalUrl}
            target="_blank"
            rel="noreferrer"
            data-pdf-link={digitalUrl}
            className="text-[#7DD3FC] font-bold underline"
          >
            مشاهده نسخه دیجیتال
          </a>
        </div>
      </div>

      {/* Left side in RTL: Geometric Angled Cyan Trapezoid + Parallel Diagonal Stripe */}
      <div className="absolute left-0 bottom-0 h-15 w-68 pointer-events-none">
        <svg
          viewBox="0 0 320 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <polygon points="0,0 245,0 302,68 0,68" fill="#FFFFFF" />
          <polygon points="246,32 276,32 304,68 274,68" fill="#2E8BC0" />
          <polygon points="0,0 236,0 290,68 0,68" fill="#37A3DC" />
        </svg>
        <div className="absolute inset-y-0 left-12 flex items-center justify-center">
          <span className="text-white font-black text-xl tracking-wide">
            {pageNum}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export const KhatamProposalBrochurePages: React.FC<
  KhatamProposalBrochurePagesProps
> = ({ proposal, onSelectImage, digitalUrl, digitalQrDataUrl }) => {
  return (
    <div className="w-full overflow-x-auto pb-6">
      <div className="flex flex-col items-center space-y-10 print:space-y-0 min-w-[850px]">
        {/* ==================== PAGE 1: COVER (EXACT PICTURE 5 GEOMETRY + SINGLE-LINE TITLES + QR) ==================== */}
        <article className="print-page w-[850px] h-[1202px] m-0 bg-white shadow-xl border border-slate-200 relative overflow-hidden select-none shrink-0">
          {/* Full Uncropped Picture5.jpg Cover Background */}
          <img
            src={EXTRACTED_ASSETS.coverFull}
            alt={`${proposal.coverMainTitle} - ${proposal.recipientShortOnCover}`}
            referrerPolicy="no-referrer"
            onClick={() =>
              onSelectImage?.(
                EXTRACTED_ASSETS.coverFull,
                `طرح روی جلد — ${proposal.recipientShortOnCover}`
              )
            }
            className="absolute inset-0 w-full h-full object-fill block cursor-pointer"
          />

          {/* Bottom 29.5% Overlay: Exact Original Cover Alignment + Compact Digital QR Badge */}
          <div className="absolute inset-x-0 bottom-0 h-[29.5%] z-10 px-12 pb-6 pt-9 flex flex-col justify-between">
            {/* Upper Block: Full-Width Single-Line Right-Aligned Titles + Cyan Rule */}
            <div className="w-full">
              <div className="pr-4 space-y-2.5 text-right">
                <h1 className="text-[25px] font-black text-[#0F172A] leading-tight tracking-tight whitespace-nowrap">
                  {proposal.coverMainTitle}
                </h1>
                <h2 className="text-[32px] font-black text-[#0F172A] leading-tight whitespace-nowrap">
                  {DOCUMENT_META.organization}
                </h2>
              </div>

              {/* Full-Width Cyan Horizontal Line */}
              <div className="w-full h-[2.5px] bg-[#37A3DC] mt-4 mb-3.5" />

              {/* Row Below Cyan Line: Right = Compact Digital QR Card | Left = Recipient Title */}
              <div className="flex items-center justify-between gap-4">
                {/* Right in RTL: Compact Digital Interactive Version QR Badge */}
                <a
                  href={digitalUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-pdf-link={digitalUrl}
                  className="shrink-0 bg-white/95 border border-[#37A3DC]/80 rounded-xl px-3 py-2 shadow-sm flex items-center gap-3 hover:bg-sky-50/70 transition-colors"
                  title="مشاهده نسخه دیجیتال و تعاملی پروپوزال"
                >
                  {digitalQrDataUrl && (
                    <img
                      src={digitalQrDataUrl}
                      alt="QR Code نسخه دیجیتال پروپوزال"
                      className="w-14 h-14 object-contain rounded-md border border-slate-200/80 p-0.5 bg-white shrink-0"
                    />
                  )}
                  <div className="text-right space-y-0.5 pl-1">
                    <span className="inline-block text-[9.5px] font-extrabold text-white bg-[#1D4760] px-2 py-0.5 rounded">
                      نسخه دیجیتال پروپوزال {proposal.proposalNum}
                    </span>
                    <p className="text-[10.5px] font-extrabold text-[#0F172A] leading-snug">
                      مشاهده آنلاین و نقشه راه اجرایی
                    </p>
                    <p className="text-[10px] font-bold text-[#0284C7] underline underline-offset-2">
                      اسکن QR یا کلیک روی کادر ↗
                    </p>
                  </div>
                </a>

                {/* Left in RTL: Client / Recipient Short Title on Single Unbroken Line */}
                <div className="text-left">
                  <span className="text-[22px] font-extrabold text-[#37A3DC] whitespace-nowrap tracking-tight block">
                    {proposal.recipientShortOnCover}
                  </span>
                  <span className="text-[11px] font-bold text-slate-600 block mt-0.5">
                    {proposal.tierBadge} · کد سند: {proposal.letterNumber}
                  </span>
                </div>
              </div>
            </div>

            {/* Preserved Contact Strip Image at the very bottom */}
            <a
              href={`https://${DOCUMENT_META.website}`}
              target="_blank"
              rel="noreferrer"
              data-pdf-link={`https://${DOCUMENT_META.website}`}
              className="w-full pt-1 block"
            >
              <img
                src={EXTRACTED_ASSETS.contactStrip}
                alt="اطلاعات تماس مشاوران مدیریت کسب و کار اوج"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain"
              />
            </a>
          </div>
        </article>

        {/* ==================== PAGE 2: OFFICIAL PROPOSAL LETTERHEAD, STRATEGIC CONTEXT & CHALLENGES ==================== */}
        <article className="print-page w-[850px] h-[1202px] m-0 bg-white shadow-xl border border-slate-200 flex flex-col overflow-hidden shrink-0">
          <PageHeaderStrip
            pageNum="۲"
            proposalTitle={proposal.recipientShortOnCover}
            sectionLabel="شناسنامه رسمی پروپوزال، ضرورت استراتژیک و چالش‌های کلیدی"
            digitalUrl={digitalUrl}
          />

          <div className="px-9 py-5 flex-1 flex flex-col justify-between">
            {/* Formal Executive Letterhead Box */}
            <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4 space-y-2.5">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2 text-xs">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded bg-[#1D4760] text-white font-bold text-[11px]">
                    پروپوزال رسمی شماره {proposal.proposalNum}
                  </span>
                  <span className="font-bold text-[#0284C7]">
                    {proposal.tierBadge}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-[11px] text-slate-600 font-mono-num">
                  <span>
                    شماره: <strong className="text-slate-900">{proposal.letterNumber}</strong>
                  </span>
                  <span>
                    تاریخ: <strong className="text-slate-900">{proposal.letterDate}</strong>
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-1.5 text-[11.5px] leading-relaxed">
                <div className="flex items-start gap-2">
                  <span className="font-extrabold text-[#1D4760] shrink-0 w-14">
                    به:
                  </span>
                  <span className="font-bold text-slate-900">
                    {proposal.recipientTitle}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-extrabold text-[#1D4760] shrink-0 w-14">
                    از:
                  </span>
                  <span className="font-semibold text-slate-800">
                    {proposal.senderTitle} (تنها دارنده ایرانی گواهینامه‌های ۱۳گانه هوش مصنوعی از PMI و Cognilytica آمریکا)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-extrabold text-[#0284C7] shrink-0 w-14">
                    موضوع:
                  </span>
                  <span className="font-extrabold text-[#0B253A]">
                    {proposal.subject}
                  </span>
                </div>
              </div>
            </div>

            {/* Strategic Lead & Key Workshops/Entities */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between border-b border-slate-200 pb-1">
                <h2 className="text-sm font-black text-[#1D4760]">
                  ۱. {proposal.strategicContextTitle}
                </h2>
                <span className="text-[10.5px] font-bold text-[#0284C7]">
                  چارچوب حکمرانی داده و هوش مصنوعی (PMI-CPMAI v8)
                </span>
              </div>

              <p className="text-[11.5px] text-slate-700 leading-[1.85] text-justify bg-white border border-slate-200/80 rounded-xl p-3">
                {proposal.executiveLead} {proposal.strategicContextLead}
              </p>

              {/* Key Workshops / Sub-Institutes Chips */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 space-y-1.5">
                <span className="text-[10.5px] font-extrabold text-[#1D4760] block">
                  مراکز، مؤسسات و کارگاه‌های کلیدی تحت پوشش این پروپوزال:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {proposal.keyEntitiesAndSites.map((site, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-semibold text-slate-700 bg-white border border-slate-200 px-2 py-0.5 rounded-md"
                    >
                      • {site}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 4 Core Strategic Challenges */}
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-slate-200 pb-1">
                <h3 className="text-sm font-black text-[#1D4760]">
                  چالش‌های چهارگانه راهبردی و عملیاتی و ضرورت استقرار CPMAI v8
                </h3>
                <span className="text-[10.5px] text-slate-500">
                  تحلیل آسیب‌شناختی وضعیت موجود
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {proposal.challenges.map((ch) => (
                  <div
                    key={ch.num}
                    className="rounded-xl border border-slate-200/90 bg-[#F8FAFC] p-3 space-y-1"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-[#1D4760] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                        {ch.num}
                      </span>
                      <h4 className="text-[12px] font-extrabold text-[#0B253A] leading-snug">
                        {ch.title}
                      </h4>
                    </div>
                    <p className="text-[10.5px] text-slate-600 leading-relaxed text-justify">
                      {ch.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Cascade Overview Bar (If Proposal #1) OR Offline Security Summary */}
            {proposal.cascadeGovernance ? (
              <div className="rounded-xl bg-[#0B253A] text-white p-3.5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#7DD3FC]">
                    معماری آبشاری استقرار سراسری در ۳ سطح سازمانی قرارگاه خاتم‌الانبیاء (ص) (۹ پروپوزال مجزا)
                  </span>
                  <span className="text-[10px] text-slate-300">
                    حکمرانی یکپارچه از فرماندهی عالی تا ۷ هلدینگ تخصصی
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2.5 text-[10.5px]">
                  {proposal.cascadeGovernance.tiers.map((t, idx) => (
                    <div
                      key={idx}
                      className="bg-white/10 border border-white/15 rounded-lg p-2 space-y-0.5"
                    >
                      <div className="font-extrabold text-[#37A3DC]">{t.level}</div>
                      <div className="text-white font-semibold">{t.duration}</div>
                      <div className="text-[9.5px] text-slate-300 leading-snug">
                        {t.outcome}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-xl bg-[#0B253A] text-white px-4 py-3 flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <span className="text-xs font-extrabold text-[#7DD3FC] block">
                    تضمین حاکمیت داده و امنیت سایبری ۱۰۰٪ آفلاین (Air-Gapped On-Premise)
                  </span>
                  <p className="text-[10.5px] text-slate-200 leading-relaxed">
                    کلیه مدل‌ها، داده‌های کارگاهی و مستندات مالی و فنی بدون هیچ‌گونه اتصال به اینترنت خارجی، صرفاً بر روی سرورهای محلی قرارگاه پردازش می‌شوند.
                  </p>
                </div>
                <span className="shrink-0 px-3 py-1.5 rounded-lg bg-[#37A3DC] text-white text-[11px] font-black">
                  {proposal.totalHours} آموزش عملیاتی
                </span>
              </div>
            )}
          </div>

          <PageFooterStrip
            pageNum="۲"
            proposalShort={proposal.recipientShortOnCover}
            digitalUrl={digitalUrl}
          />
        </article>

        {/* ==================== PAGE 3: 7 AI PATTERNS & PHASE I BUSINESS KPIs + ROI ==================== */}
        <article className="print-page w-[850px] h-[1202px] m-0 bg-white shadow-xl border border-slate-200 flex flex-col overflow-hidden shrink-0">
          <PageHeaderStrip
            pageNum="۳"
            proposalTitle={proposal.recipientShortOnCover}
            sectionLabel="انطباق الگوهای هفت‌گانه هوش مصنوعی (7 AI Patterns) و شاخص‌های کلیدی عملکرد (KPIs)"
            digitalUrl={digitalUrl}
          />

          <div className="px-9 py-5 flex-1 flex flex-col justify-between">
            {/* Section 2: 7 AI Patterns */}
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-slate-200 pb-1">
                <h2 className="text-sm font-black text-[#1D4760]">
                  ۲. انطباق الگوهای هفت‌گانه هوش مصنوعی (PMI-CPMAI Seven AI Patterns) با مسائل مجموعه
                </h2>
                <span className="text-[10.5px] font-latin font-semibold text-[#0284C7]">
                  7 AI Patterns Mapping
                </span>
              </div>

              <div className="grid grid-cols-1 gap-1.5">
                {proposal.aiPatterns.map((pat) => (
                  <div
                    key={pat.num}
                    className="rounded-lg border border-slate-200/90 bg-[#F8FAFC] px-3 py-2 flex items-start gap-2.5"
                  >
                    <span className="w-5 h-5 rounded bg-[#0284C7] text-white text-[10.5px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {pat.num}
                    </span>
                    <div className="flex-1 text-[11px] leading-relaxed">
                      <div className="flex items-center justify-between gap-2">
                        <strong className="text-[#0B253A] font-extrabold">
                          {pat.titleFa}
                        </strong>
                        <span className="font-latin text-[10px] font-semibold text-[#0284C7] shrink-0">
                          {pat.titleEn}
                        </span>
                      </div>
                      <p className="text-slate-600 text-[10.5px] text-justify mt-0.5">
                        {pat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phase I Business KPIs Table */}
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-slate-200 pb-1">
                <h3 className="text-sm font-black text-[#1D4760]">
                  جدول شاخص‌های کلیدی عملکرد کسب‌وکار (Business KPIs — Baseline vs. Target)
                </h3>
                <span className="text-[10.5px] text-slate-500">
                  معیارهای سنجش موفقیت فاز اول CPMAI
                </span>
              </div>

              <div className="overflow-hidden rounded-xl border border-slate-200">
                <table className="w-full text-right border-collapse text-[11px]">
                  <thead>
                    <tr className="bg-[#1D4760] text-white">
                      <th className="py-2 px-3 font-bold">شاخص کلیدی عملکرد (KPI)</th>
                      <th className="py-2 px-3 font-bold">وضعیت فعلی (Baseline)</th>
                      <th className="py-2 px-3 font-bold">هدف‌گذاری پس از استقرار (Target)</th>
                      <th className="py-2 px-3 font-bold">واحد سنجش</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {proposal.kpis.map((row, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}
                      >
                        <td className="py-2 px-3 font-extrabold text-[#0B253A]">
                          {row.kpi}
                        </td>
                        <td className="py-2 px-3 text-slate-600">{row.baseline}</td>
                        <td className="py-2 px-3 font-bold text-[#059669]">
                          {row.target}
                        </td>
                        <td className="py-2 px-3 text-slate-500 text-[10px]">
                          {row.unit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ROI & Go/No-Go Matrix Summary Card */}
            <div className="rounded-xl border border-[#37A3DC]/50 bg-sky-50/50 p-3 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-[#1D4760]">
                  تحلیل بازگشت سرمایه (ROI) و ماتریس امکان‌سنجی ۹گانه (AI Go / No-Go)
                </span>
                <span className="text-[10.5px] font-extrabold text-[#0284C7]">
                  سرمایه‌گذاری دوره: {proposal.roiAnalysis.budgetFormatted}
                </span>
              </div>
              <p className="text-[10.5px] text-slate-700 leading-relaxed text-justify">
                <strong className="text-[#0B253A]">صرفه‌جویی مستقیم سالانه: </strong>
                {proposal.roiAnalysis.annualSavings} ·{' '}
                <strong className="text-[#0B253A]">مزایای استراتژیک: </strong>
                {proposal.roiAnalysis.intangibleBenefits}
              </p>
              <p className="text-[10px] text-slate-600 leading-relaxed text-justify">
                <strong className="text-[#0284C7]">ممیزی Go/No-Go: </strong>
                {proposal.roiAnalysis.goNoGoSummary}
              </p>
            </div>
          </div>

          <PageFooterStrip
            pageNum="۳"
            proposalShort={proposal.recipientShortOnCover}
            digitalUrl={digitalUrl}
          />
        </article>

        {/* ==================== PAGE 4: 6-PHASE CPMAI v8 WORKBOOK & SIGN-OFF CHECKLIST ==================== */}
        <article className="print-page w-[850px] h-[1202px] m-0 bg-white shadow-xl border border-slate-200 flex flex-col overflow-hidden shrink-0">
          <PageHeaderStrip
            pageNum="۴"
            proposalTitle={proposal.recipientShortOnCover}
            sectionLabel="کاربرگ عملیاتی ۶ فاز متدولوژی PMI-CPMAI v8 و چک‌لیست ممیزی استقرار"
            digitalUrl={digitalUrl}
          />

          <div className="px-9 py-5 flex-1 flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between border-b border-slate-200 pb-1">
                <h2 className="text-sm font-black text-[#1D4760]">
                  ۳. نقشه راه و کاربرگ عملیاتی ۶ فاز متدولوژی PMI-CPMAI v8 (Iteration Cycle)
                </h2>
                <span className="text-[10.5px] font-latin font-bold text-[#0284C7]">
                  CPMAI v8 Six-Phase Methodology
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {proposal.cpmaiPhases.map((phase) => (
                  <div
                    key={phase.phaseNum}
                    className="rounded-xl border border-slate-200/90 bg-[#F8FAFC] p-3 flex flex-col justify-between space-y-2"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between border-b border-slate-200/80 pb-1">
                        <span className="text-[11.5px] font-black text-[#1D4760]">
                          فاز {phase.phaseNum}: {phase.titleFa}
                        </span>
                        <span className="text-[9.5px] font-latin font-bold text-[#0284C7]">
                          {phase.titleEn}
                        </span>
                      </div>
                      <p className="text-[10.5px] font-bold text-slate-800 leading-snug">
                        {phase.summary}
                      </p>
                      <ul className="space-y-1 text-[10px] text-slate-600 leading-relaxed">
                        {phase.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#37A3DC] font-bold shrink-0">•</span>
                            <span className="text-justify">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-1.5 border-t border-slate-200/70 flex items-center justify-between text-[10px]">
                      <span className="font-bold text-[#0284C7]">خروجی فاز:</span>
                      <span className="font-extrabold text-[#0B253A] truncate max-w-[260px]">
                        {phase.deliverable}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deployment Sign-Off Checklist */}
            <div className="rounded-2xl border border-slate-200 bg-[#0B253A] text-white p-4 space-y-2">
              <div className="flex items-center justify-between border-b border-white/15 pb-1.5">
                <h3 className="text-xs font-extrabold text-[#7DD3FC]">
                  چک‌لیست ممیزی و تأیید نهایی استقرار (Phase VI Deployment Sign-Off Checklist)
                </h3>
                <span className="text-[10px] text-slate-300">
                  الزامی پیش از بهره‌برداری عملیاتی مدل‌ها
                </span>
              </div>
              <div className="grid grid-cols-1 gap-1.5">
                {proposal.signOffChecklist.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-[10.5px] bg-white/5 rounded-lg px-3 py-1.5 border border-white/10"
                  >
                    <span className="w-4 h-4 rounded border border-[#37A3DC] bg-[#37A3DC]/20 text-[#7DD3FC] flex items-center justify-center text-[10px] font-bold shrink-0">
                      ✓
                    </span>
                    <span className="text-slate-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <PageFooterStrip
            pageNum="۴"
            proposalShort={proposal.recipientShortOnCover}
            digitalUrl={digitalUrl}
          />
        </article>

        {/* ==================== PAGE 5: AIR-GAPPED ARCHITECTURE, CURRICULUM, CAPSTONE & INVESTMENT ==================== */}
        <article className="print-page w-[850px] h-[1202px] m-0 bg-white shadow-xl border border-slate-200 flex flex-col overflow-hidden shrink-0">
          <PageHeaderStrip
            pageNum="۵"
            proposalTitle={proposal.recipientShortOnCover}
            sectionLabel="معماری امنیتی ۱۰۰٪ آفلاین (Air-Gapped)، سرفصل‌های دوره و جدول سرمایه‌گذاری"
            digitalUrl={digitalUrl}
          />

          <div className="px-9 py-5 flex-1 flex flex-col justify-between">
            {/* 100% Offline Air-Gapped Security Box */}
            <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3.5 space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-black text-[#1D4760]">
                  ۴. الزامات امنیتی، حاکمیت داده و پشته نرم‌افزاری ۱۰۰٪ آفلاین (Air-Gapped On-Premise)
                </h2>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">
                  ایزوله از اینترنت عمومی
                </span>
              </div>
              <p className="text-[10.5px] text-slate-600 leading-relaxed text-justify">
                {proposal.airGappedNote}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {proposal.airGappedTools.map((tool, i) => (
                  <span
                    key={i}
                    dir="ltr"
                    className="text-[10px] font-latin font-semibold bg-white border border-slate-200 text-[#0B253A] px-2.5 py-1 rounded-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Curriculum Modules */}
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-slate-200 pb-1">
                <h3 className="text-xs font-black text-[#1D4760]">
                  ۵. {proposal.curriculumTitle} ({proposal.totalHours} — {proposal.sessionsFormat})
                </h3>
                <span className="text-[10.5px] font-bold text-[#0284C7]">
                  تطبیق کامل با ویرایش هشتم PMI-CPMAI v8
                </span>
              </div>

              <div className="grid grid-cols-1 gap-1.5">
                {proposal.modules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-slate-200/90 bg-white px-3 py-2 flex items-start justify-between gap-3"
                  >
                    <div className="space-y-0.5 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-[#1D4760] text-white text-[10px] font-bold shrink-0">
                          {mod.code}
                        </span>
                        <h4 className="text-[11.5px] font-extrabold text-[#0B253A]">
                          {mod.title}
                        </h4>
                      </div>
                      <p className="text-[10.5px] text-slate-600 leading-relaxed text-justify">
                        {mod.description}
                      </p>
                    </div>
                    <span className="shrink-0 px-2.5 py-1 rounded-md bg-sky-50 border border-sky-200 text-[#0284C7] font-bold text-[10.5px]">
                      {mod.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Capstone Project Box */}
            <div className="rounded-xl border border-[#37A3DC]/60 bg-sky-50/60 p-3 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold text-[#1D4760]">
                  پروژه عملی پایانی (Capstone Pilot): {proposal.capstone.title}
                </span>
                <span className="text-[10px] font-bold text-[#0284C7]">
                  خروجی ملموس سازمانی
                </span>
              </div>
              <p className="text-[10.5px] text-slate-700 leading-relaxed text-justify">
                {proposal.capstone.deliverable}
              </p>
            </div>

            {/* Financial Investment Table */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-black text-[#1D4760]">
                  ۶. جدول برآورد سرمایه‌گذاری و شرایط برگزاری
                </h3>
                <span className="text-[10px] text-slate-500">
                  شامل تدوین کاربرگ‌های اختصاصی، استقرار مدل‌های آفلاین و صدور گواهینامه
                </span>
              </div>

              <div className="overflow-hidden rounded-xl border border-slate-300">
                <table className="w-full text-right border-collapse text-[11px]">
                  <thead>
                    <tr className="bg-[#0B253A] text-white">
                      <th className="py-2 px-3 font-bold">مخاطبان هدف</th>
                      <th className="py-2 px-3 font-bold">ظرفیت مجاز</th>
                      <th className="py-2 px-3 font-bold">مدت دوره</th>
                      <th className="py-2 px-3 font-bold">نرخ هر ساعت</th>
                      <th className="py-2 px-3 font-bold">مبلغ کل سرمایه‌گذاری</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[#F8FAFC] font-semibold">
                      <td className="py-2.5 px-3 text-slate-800">
                        {proposal.investment.targetAudience}
                      </td>
                      <td className="py-2.5 px-3 text-slate-700 whitespace-nowrap">
                        {proposal.investment.capacity}
                      </td>
                      <td className="py-2.5 px-3 text-slate-700 whitespace-nowrap">
                        {proposal.investment.duration}
                      </td>
                      <td className="py-2.5 px-3 text-slate-700 whitespace-nowrap">
                        {proposal.investment.hourlyRate}
                      </td>
                      <td className="py-2.5 px-3 font-black text-[#0284C7] whitespace-nowrap">
                        {proposal.investment.totalAmount}
                        <span className="block text-[9.5px] text-slate-500 font-normal">
                          ({proposal.investment.totalAmountWords})
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <PageFooterStrip
            pageNum="۵"
            proposalShort={proposal.recipientShortOnCover}
            digitalUrl={digitalUrl}
          />
        </article>

        {/* ==================== PAGE 6: INSTRUCTOR & 10 PM CREDENTIALS (DESIGN #2) ==================== */}
        <article className="print-page w-[850px] h-[1202px] m-0 bg-white shadow-xl border border-slate-200 flex flex-col overflow-hidden shrink-0">
          <PageHeaderStrip
            pageNum="۶"
            proposalTitle={proposal.recipientShortOnCover}
            sectionLabel="معرفی راهبر و مدرس دوره و گواهینامه‌های بین‌المللی مدیریت پروژه"
            digitalUrl={digitalUrl}
          />

          <div className="px-9 py-5 flex-1 flex flex-col justify-between">
            {/* Design #2: Executive Dark Navy/Indigo Two-Column Instructor Card */}
            <div className="rounded-2xl overflow-hidden bg-gradient-to-l from-[#0B253A] via-[#1E1B4B] to-[#3B1D5E] text-white shadow-lg border border-slate-800">
              <div className="grid grid-cols-12 items-stretch">
                {/* Right Column (7 cols): Logos, Name, Role, Distinction & QR Code */}
                <div className="col-span-7 p-5 flex flex-col justify-between space-y-3 text-right">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-3 border-b border-white/15 pb-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={EXTRACTED_ASSETS.owjLogoWhite}
                          alt="OWJ Business Council"
                          referrerPolicy="no-referrer"
                          className="h-9 w-auto object-contain"
                        />
                        <div className="h-6 w-px bg-white/20" />
                        <span className="text-xs font-semibold text-sky-300">
                          طراح و مدرس دوره:
                        </span>
                      </div>
                      <img
                        src={EXTRACTED_ASSETS.ajaLogoWhite}
                        alt="AJA Abolfazl Jafari Asl"
                        referrerPolicy="no-referrer"
                        className="h-8 w-auto object-contain"
                      />
                    </div>

                    <h2 className="text-3xl font-black tracking-tight text-white leading-tight">
                      {DOCUMENT_META.instructorName}
                    </h2>
                    <p className="text-base font-bold text-sky-200">
                      {DOCUMENT_META.instructorRole}
                    </p>
                    <p className="text-xs leading-relaxed text-indigo-100">
                      {DOCUMENT_META.instructorDistinction}
                    </p>
                  </div>

                  {/* Bottom Row: QR Code + Caption */}
                  <div className="pt-3 border-t border-white/15 flex items-center gap-4">
                    <div
                      onClick={() =>
                        onSelectImage?.(
                          EXTRACTED_ASSETS.qrCode,
                          'کد QR رسمی ابوالفضل جعفری اصل'
                        )
                      }
                      className="bg-white p-2 rounded-xl shadow-md cursor-pointer shrink-0"
                    >
                      <img
                        src={EXTRACTED_ASSETS.qrCode}
                        alt="QR Code Abolfazl Jafari Asl"
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <div className="space-y-1 text-right">
                      <p className="text-xs font-bold text-white">
                        کد QR ارتباطی و استعلام مدارک بین‌المللی مدرس
                      </p>
                      <p className="text-[11px] text-slate-300">
                        دارای تجربه مستقیم تدریس و مشاوره در مگاپروژه‌های ملی، نفت، گاز و زیرساخت
                      </p>
                      <p className="text-[11px] font-latin text-sky-300" dir="ltr">
                        (PMI-CPMAI) · (CPMAI v7) · (PMI)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Left Column (5 cols): Framed Instructor Portrait Card */}
                <div className="col-span-5 relative flex items-center justify-center p-4 bg-black/20">
                  <div
                    onClick={() =>
                      onSelectImage?.(
                        EXTRACTED_ASSETS.instructorBanner,
                        'ابوالفضل جعفری اصل — مدیرعامل شرکت مشاوران مدیریت کسب و کار اوج'
                      )
                    }
                    className="relative w-full h-[255px] rounded-2xl overflow-hidden border border-white/20 shadow-xl cursor-pointer bg-[#2B2653]"
                  >
                    <img
                      src={EXTRACTED_ASSETS.instructorBanner}
                      alt={DOCUMENT_META.instructorName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: '18% center' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 10 International Project Management Credentials */}
            <div className="space-y-2 my-2">
              <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
                <h3 className="text-sm font-extrabold text-[#1D4760]">
                  سوابق علمی و گواهینامه‌های بین‌المللی مدیریت پروژه، پورتفولیو و PMO
                </h3>
                <span className="text-xs text-slate-500">۱۰ گواهینامه و مرتبه تخصصی</span>
              </div>

              <div className="grid grid-cols-1 gap-1.5">
                {PM_CREDENTIALS.map((cred) => (
                  <div
                    key={cred.id}
                    className="flex items-center justify-between gap-4 px-3.5 py-2 rounded-lg bg-[#F8FAFC] border border-slate-200/80"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono-num font-bold text-[#37A3DC] w-5 shrink-0">
                        {cred.index}.
                      </span>
                      <p className="text-[12.5px] font-semibold text-slate-800 leading-snug">
                        {cred.titleFa}
                      </p>
                    </div>
                    <span className="text-[11px] font-latin font-semibold text-slate-500 shrink-0">
                      {cred.code}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Preserved 4 International Accreditation Logos */}
            <div className="pt-1.5 border-t border-slate-200">
              <div className="grid grid-cols-4 gap-4 items-center justify-items-center bg-white py-2 px-4 rounded-xl border border-slate-200/70">
                <img
                  src={EXTRACTED_ASSETS.pmiLogo}
                  alt="Project Management Institute (PMI)"
                  referrerPolicy="no-referrer"
                  className="h-11 w-auto object-contain"
                />
                <img
                  src={EXTRACTED_ASSETS.axelosLogo}
                  alt="AXELOS Global Best Practice"
                  referrerPolicy="no-referrer"
                  className="h-9 w-auto object-contain"
                />
                <img
                  src={EXTRACTED_ASSETS.ipmaLogo}
                  alt="IPMA International Project Management Association"
                  referrerPolicy="no-referrer"
                  className="h-11 w-auto object-contain"
                />
                <img
                  src={EXTRACTED_ASSETS.iranPmaLogo}
                  alt="انجمن مدیریت پروژه ایران IranPMA"
                  referrerPolicy="no-referrer"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          <PageFooterStrip
            pageNum="۶"
            proposalShort={proposal.recipientShortOnCover}
            digitalUrl={digitalUrl}
          />
        </article>

        {/* ==================== PAGE 7: 13 AI CERTIFICATES & OFFICIAL PMI CERTS ==================== */}
        <article className="print-page w-[850px] h-[1202px] m-0 bg-white shadow-xl border border-slate-200 flex flex-col overflow-hidden shrink-0">
          <PageHeaderStrip
            pageNum="۷"
            proposalTitle={proposal.recipientShortOnCover}
            sectionLabel="گواهینامه‌های ۱۳گانه هوش مصنوعی از Cognilytica و PMI آمریکا"
            digitalUrl={digitalUrl}
          />

          <div className="px-9 py-6 flex-1 flex flex-col justify-between">
            <div className="text-center space-y-1.5 pb-3 border-b border-slate-200">
              <h2 className="text-2xl font-black text-[#1D4760]">
                {DOCUMENT_META.instructorName}
              </h2>
              <p className="text-[13px] font-bold text-[#0284C7] max-w-2xl mx-auto leading-relaxed">
                اولین و تنها ایرانی دارنده تمامی گواهینامه‌های ۱۳گانه هوش مصنوعی از Cognilytica آمریکا و انستیتو مدیریت پروژه آمریکا (PMI) (CPMAI v7) (PMI-CPMAI)
              </p>
            </div>

            <div className="grid grid-cols-1 gap-1.5 my-2">
              {AI_CREDENTIALS_13.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 px-3.5 py-2 rounded-lg bg-[#F8FAFC] border border-slate-200/80"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[11px] font-mono-num font-bold text-[#37A3DC] w-5 shrink-0">
                      {item.index}.
                    </span>
                    <p className="text-[12px] font-semibold text-slate-800 leading-snug">
                      {item.titleFa}
                    </p>
                  </div>
                  <span className="text-[10px] font-latin text-slate-400 shrink-0">
                    {item.code}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <div className="grid grid-cols-2 gap-5">
                {OFFICIAL_CERTIFICATES.map((cert) => (
                  <div
                    key={cert.id}
                    onClick={() => onSelectImage?.(cert.image, cert.titleFa)}
                    className="group cursor-pointer rounded-xl overflow-hidden border border-slate-200 bg-[#F8FAFC] p-2.5 shadow-sm"
                  >
                    <div className="overflow-hidden rounded-lg bg-white">
                      <img
                        src={cert.image}
                        alt={cert.titleEn}
                        referrerPolicy="no-referrer"
                        className="w-full h-44 object-contain"
                      />
                    </div>
                    <div className="pt-2 px-1 flex items-center justify-between text-[11px] text-slate-600">
                      <span className="font-bold text-[#1D4760] truncate">
                        {cert.titleFa}
                      </span>
                      <span className="font-mono-num text-[10px] text-[#0284C7] shrink-0">
                        #{cert.certNumber}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <PageFooterStrip
            pageNum="۷"
            proposalShort={proposal.recipientShortOnCover}
            digitalUrl={digitalUrl}
          />
        </article>

        {/* ==================== PAGE 8: FULL BACK COVER (EXACT PICTURE 7) ==================== */}
        <article className="print-page w-[850px] h-[1202px] m-0 bg-white shadow-xl border border-slate-200 relative overflow-hidden select-none shrink-0">
          <img
            src={EXTRACTED_ASSETS.backCoverMap}
            alt="پشت جلد — اطلاعات تماس و نقشه دفتر مرکزی مشاوران مدیریت کسب و کار اوج"
            referrerPolicy="no-referrer"
            onClick={() =>
              onSelectImage?.(
                EXTRACTED_ASSETS.backCoverMap,
                'پشت جلد — اطلاعات تماس و نقشه موقعیت شرکت مشاوران مدیریت کسب و کار اوج'
              )
            }
            className="w-full h-full object-fill block cursor-pointer"
          />
          <a
            href={`https://${DOCUMENT_META.website}`}
            target="_blank"
            rel="noreferrer"
            data-pdf-link={`https://${DOCUMENT_META.website}`}
            aria-label="وب‌سایت رسمی مشاوران مدیریت کسب و کار اوج"
            className="absolute inset-x-10 bottom-10 h-64 block"
          />
        </article>
      </div>
    </div>
  );
};
