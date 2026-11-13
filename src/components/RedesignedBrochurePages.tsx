import React from 'react';
import {
  AI_CREDENTIALS_13,
  CONFIDENTIALITY_STATEMENT,
  CONNECTION_TEST_PROTOCOL,
  DAILY_SCHEDULE,
  DOCUMENT_META,
  EXECUTIVE_LETTER,
  EXTRACTED_ASSETS,
  OFFICIAL_CERTIFICATES,
  PM_CREDENTIALS,
  PROTOCOL_CLAUSES,
  PROTOCOL_INTRO,
} from '../data/protocolData';

interface RedesignedBrochurePagesProps {
  onSelectImage?: (src: string, title: string) => void;
  digitalUrl: string;
  digitalQrDataUrl: string;
}

const PageHeaderStrip: React.FC<{
  pageNum: string;
  sectionLabel: string;
  digitalUrl: string;
}> = ({ sectionLabel, digitalUrl }) => (
  <div className="w-full shrink-0">
    {/* Deep Teal-Navy Main Header Band (#1D4760) from Picture8 */}
    <div className="bg-[#1D4760] text-white px-10 py-4 flex items-center justify-between gap-6">
      {/* Right in RTL: OWJ Business Council White Logo — Large, clear & proportional */}
      <div
        data-pdf-link="https://www.owjbc.com"
        className="shrink-0 flex items-center"
      >
        <img
          src={EXTRACTED_ASSETS.owjLogoWhite}
          alt="OWJ Business Council - مشاوران مدیریت کسب و کار اوج"
          referrerPolicy="no-referrer"
          className="h-12 w-auto object-contain"
        />
      </div>

      {/* Center: Clean Section Title + Digital Link */}
      <div
        data-pdf-link={digitalUrl}
        className="flex flex-col items-center text-center px-4"
      >
        <span className="text-[11px] text-[#7DD3FC] font-medium">
          پروتکل برگزاری بوت‌کمپ آموزشی CPMAI · {DOCUMENT_META.clientProject}
        </span>
        <span className="text-xs font-bold text-white mt-0.5">{sectionLabel}</span>
      </div>

      {/* Left in RTL: AJA (Abolfazl Jafari Asl) White Logo — Large, clear & proportional */}
      <div
        data-pdf-link={digitalUrl}
        className="shrink-0 flex items-center"
      >
        <img
          src={EXTRACTED_ASSETS.ajaLogoWhite}
          alt="Abolfazl Jafari Asl - ابوالفضل جعفری اصل"
          referrerPolicy="no-referrer"
          className="h-11 w-auto object-contain"
        />
      </div>
    </div>

    {/* Sky-Cyan Accent Band (#37A3DC) from Picture8 */}
    <div className="h-3.5 w-full bg-[#37A3DC]" />
  </div>
);

const PageFooterStrip: React.FC<{ pageNum: string; digitalUrl: string }> = ({
  pageNum,
  digitalUrl,
}) => (
  <div className="mt-auto w-full pt-3 select-none shrink-0">
    <div className="relative h-16 w-full flex items-end overflow-hidden">
      {/* Right side in RTL: Deep Teal-Navy Bar (#1D4760) */}
      <div className="w-full h-9 bg-[#1D4760] flex items-center justify-start px-8 text-[11px] text-slate-200">
        <div className="flex items-center gap-3">
          <span className="font-bold text-white">{DOCUMENT_META.organization}</span>
          <span className="text-[#37A3DC]">·</span>
          <span>{DOCUMENT_META.clientProject}</span>
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

      {/* Left side in RTL: Geometric Angled Cyan Trapezoid + Parallel Diagonal Stripe from Picture8 */}
      <div className="absolute left-0 bottom-0 h-16 w-72 pointer-events-none">
        <svg
          viewBox="0 0 320 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* White separator gap behind diagonal */}
          <polygon points="0,0 245,0 302,68 0,68" fill="#FFFFFF" />
          {/* Secondary parallel diagonal stripe (#2E8BC0) */}
          <polygon points="246,32 276,32 304,68 274,68" fill="#2E8BC0" />
          {/* Primary left cyan trapezoid (#37A3DC) */}
          <polygon points="0,0 236,0 290,68 0,68" fill="#37A3DC" />
        </svg>
        <div className="absolute inset-y-0 left-12 flex items-center justify-center">
          <span className="text-white font-black text-xl tracking-wide">{pageNum}</span>
        </div>
      </div>
    </div>
  </div>
);

export const RedesignedBrochurePages: React.FC<RedesignedBrochurePagesProps> = ({
  onSelectImage,
  digitalUrl,
  digitalQrDataUrl,
}) => {
  return (
    <div className="w-full overflow-x-auto pb-6">
      <div className="flex flex-col items-center space-y-10 print:space-y-0 min-w-[850px]">
        {/* ==================== PAGE 1: COVER (EXACT PICTURE 5 GEOMETRY + SINGLE-LINE TITLES + QR) ==================== */}
        <article className="print-page w-[850px] h-[1202px] m-0 bg-white shadow-xl border border-slate-200 relative overflow-hidden select-none shrink-0">
          {/* Full Uncropped Picture5.jpg Cover Background */}
          <img
            src={EXTRACTED_ASSETS.coverFull}
            alt="پروتکل برگزاری بوت کمپ آموزشی CPMAI - شرکت مشاوران مدیریت کسب و کار اوج"
            referrerPolicy="no-referrer"
            onClick={() =>
              onSelectImage?.(EXTRACTED_ASSETS.coverFull, 'طرح روی جلد — پتروشیمی دماوند')
            }
            className="absolute inset-0 w-full h-full object-fill block cursor-pointer"
          />

          {/* Bottom 29.5% Overlay: Exact Original Cover Alignment + Compact Digital QR Badge */}
          <div className="absolute inset-x-0 bottom-0 h-[29.5%] z-10 px-12 pb-6 pt-9 flex flex-col justify-between">
            {/* Upper Block: Full-Width Single-Line Right-Aligned Titles + Cyan Rule */}
            <div className="w-full">
              <div className="pr-4 space-y-2.5 text-right">
                <h1 className="text-[27px] font-black text-[#0F172A] leading-tight tracking-tight whitespace-nowrap">
                  {DOCUMENT_META.title}
                </h1>
                <h2 className="text-[33px] font-black text-[#0F172A] leading-tight whitespace-nowrap">
                  {DOCUMENT_META.organization}
                </h2>
              </div>

              {/* Full-Width Cyan Horizontal Line (Exact Match to Original Cover) */}
              <div className="w-full h-[2.5px] bg-[#37A3DC] mt-4 mb-3.5" />

              {/* Row Below Cyan Line: Right = Compact Digital QR Card | Left = طرح پتروشیمی دماوند */}
              <div className="flex items-center justify-between gap-6">
                {/* Right in RTL: Compact Digital Interactive Version QR Badge */}
                <a
                  href={digitalUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-pdf-link={digitalUrl}
                  className="shrink-0 bg-white/95 border border-[#37A3DC]/80 rounded-xl px-3 py-2 shadow-sm flex items-center gap-3 hover:bg-sky-50/70 transition-colors"
                  title="مشاهده نسخه دیجیتال و تعاملی پروتکل"
                >
                  {digitalQrDataUrl && (
                    <img
                      src={digitalQrDataUrl}
                      alt="QR Code نسخه دیجیتال پروتکل"
                      className="w-14 h-14 object-contain rounded-md border border-slate-200/80 p-0.5 bg-white shrink-0"
                    />
                  )}
                  <div className="text-right space-y-0.5 pl-1">
                    <span className="inline-block text-[9.5px] font-extrabold text-white bg-[#1D4760] px-2 py-0.5 rounded">
                      نسخه دیجیتال و تعاملی
                    </span>
                    <p className="text-[11px] font-extrabold text-[#0F172A] leading-snug">
                      مشاهده آنلاین و چک‌لیست اجرایی
                    </p>
                    <p className="text-[10px] font-bold text-[#0284C7] underline underline-offset-2">
                      اسکن QR یا کلیک روی کادر ↗
                    </p>
                  </div>
                </a>

                {/* Left in RTL: Client Project Title (Exact Original Left Position & Cyan Color) */}
                <div className="text-left">
                  <span className="text-[32px] font-extrabold text-[#37A3DC] whitespace-nowrap tracking-tight">
                    {DOCUMENT_META.clientProject}
                  </span>
                </div>
              </div>
            </div>

            {/* Preserved Contact Strip Image at the very bottom (also hyperlinked in PDF) */}
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

        {/* ==================== PAGE 2: INSTRUCTOR & PM CREDENTIALS ==================== */}
        <article className="print-page w-[850px] h-[1202px] m-0 bg-white shadow-xl border border-slate-200 flex flex-col overflow-hidden shrink-0">
          <PageHeaderStrip
            pageNum="۲"
            sectionLabel="معرفی مدرس و گواهینامه‌های بین‌المللی مدیریت پروژه"
            digitalUrl={digitalUrl}
          />

          <div className="px-9 py-5 flex-1 flex flex-col justify-between">
            {/* Design #2: Executive Dark Navy/Indigo Two-Column Instructor Card */}
            <div className="rounded-2xl overflow-hidden bg-gradient-to-l from-[#0B253A] via-[#1E1B4B] to-[#3B1D5E] text-white shadow-lg border border-slate-800">
              <div className="grid grid-cols-12 items-stretch">
                {/* Right Column (7 cols): Logos, Name, Role, Distinction & QR Code */}
                <div className="col-span-7 p-5 flex flex-col justify-between space-y-3 text-right">
                  <div className="space-y-2.5">
                    {/* Top Row: OWJ Logo + مدرس دوره + AJA Logo */}
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
                          مدرس دوره:
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
                        کد QR ارتباطی و استعلام مدارک مدرس
                      </p>
                      <p className="text-[11px] text-slate-300">
                        برای مشاهده تصویر کامل کد QR روی آن کلیک نمایید
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
                  سوابق علمی و گواهینامه‌های بین‌المللی مدیریت پروژه
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

            {/* Preserved 4 International Accreditation Logos from Page 2 Bottom */}
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

          <PageFooterStrip pageNum="۲" digitalUrl={digitalUrl} />
        </article>

        {/* ==================== PAGE 3: 13 AI CERTIFICATES & OFFICIAL PMI CERTS ==================== */}
        <article className="print-page w-[850px] h-[1202px] m-0 bg-white shadow-xl border border-slate-200 flex flex-col overflow-hidden shrink-0">
          <PageHeaderStrip
            pageNum="۳"
            sectionLabel="گواهینامه‌های ۱۳گانه هوش مصنوعی از Cognilytica و PMI آمریکا"
            digitalUrl={digitalUrl}
          />

          <div className="px-9 py-6 flex-1 flex flex-col justify-between">
            {/* Header Banner */}
            <div className="text-center space-y-1.5 pb-3 border-b border-slate-200">
              <h2 className="text-2xl font-black text-[#1D4760]">
                {DOCUMENT_META.instructorName}
              </h2>
              <p className="text-[13px] font-bold text-[#0284C7] max-w-2xl mx-auto leading-relaxed">
                اولین و تنها ایرانی دارنده تمامی گواهینامه‌های ۱۳گانه هوش مصنوعی از Cognilytica آمریکا و انستیتو مدیریت پروژه آمریکا (PMI) (CPMAI v7) (PMI-CPMAI)
              </p>
            </div>

            {/* 13 AI Certifications List */}
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

            {/* Preserved Official PMI Certificates (Picture6 & Picture3) */}
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
                      <span className="font-bold text-[#1D4760] truncate">{cert.titleFa}</span>
                      <span className="font-mono-num text-[10px] text-[#0284C7] shrink-0">
                        #{cert.certNumber}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <PageFooterStrip pageNum="۳" digitalUrl={digitalUrl} />
        </article>

        {/* ==================== PAGE 4: OFFICIAL EXECUTIVE LETTER ==================== */}
        <article className="print-page w-[850px] h-[1202px] m-0 bg-white shadow-xl border border-slate-200 flex flex-col overflow-hidden shrink-0">
          <PageHeaderStrip
            pageNum="۴"
            sectionLabel="نامه رسمی دپارتمان کوچینگ به کارفرمای محترم"
            digitalUrl={digitalUrl}
          />

          <div className="p-14 flex-1 flex flex-col justify-center">
            <div className="max-w-2xl mx-auto w-full bg-[#FAF9F5] border border-stone-200/90 rounded-2xl p-12 shadow-sm space-y-10 relative">
              <div className="text-center space-y-2 border-b border-stone-200 pb-6">
                <p className="text-lg font-bold text-[#1D4760]">
                  {EXECUTIVE_LETTER.invocation}
                </p>
                <p className="text-xs text-slate-500">
                  خطاب به مدیریت و واحد مجری و ناظر کارگاه‌های آموزشی — {DOCUMENT_META.clientProject}
                </p>
              </div>

              <p className="text-lg leading-[2.35] text-slate-800 text-justify font-normal">
                {EXECUTIVE_LETTER.body}
              </p>

              <div className="pt-8 border-t border-stone-200 flex items-end justify-between">
                <div className="text-xs text-slate-500 space-y-1">
                  <p>موضوع: ابلاغ پروتکل اجرایی بوت‌کمپ CPMAI</p>
                  <p>پیوست: ضوابط فنی، تجهیزاتی، پذیرایی و مالکیت معنوی</p>
                </div>
                <div className="text-center space-y-1.5 pl-4">
                  <p className="text-sm font-medium text-slate-600">
                    {EXECUTIVE_LETTER.signOff}
                  </p>
                  <p className="text-base font-extrabold text-[#0284C7]">
                    {EXECUTIVE_LETTER.department}
                  </p>
                  <p className="text-sm font-bold text-[#1D4760]">
                    {EXECUTIVE_LETTER.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <PageFooterStrip pageNum="۴" digitalUrl={digitalUrl} />
        </article>

        {/* ==================== PAGE 5: HALL PREPARATION & SYSTEM SPECS ==================== */}
        <article className="print-page w-[850px] h-[1202px] m-0 bg-white shadow-xl border border-slate-200 flex flex-col overflow-hidden shrink-0">
          <PageHeaderStrip
            pageNum="۵"
            sectionLabel="الزامات فنی، سخت‌افزاری و آماده‌سازی سالن برگزاری"
            digitalUrl={digitalUrl}
          />

          <div className="px-9 py-6 flex-1 flex flex-col justify-between space-y-4">
            {/* Protocol Intro Box */}
            <div className="bg-[#1D4760] text-white p-5 rounded-xl space-y-1.5">
              <div className="text-xs font-semibold text-[#7DD3FC]">
                دستورالعمل آماده‌سازی محیط آموزشی
              </div>
              <p className="text-sm leading-relaxed font-medium text-slate-100">
                {PROTOCOL_INTRO}
              </p>
            </div>

            {/* Clauses 1 to 5 from Page 5 */}
            <div className="space-y-3.5">
              {PROTOCOL_CLAUSES.slice(0, 5).map((clause) => (
                <div
                  key={clause.id}
                  className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 space-y-2.5"
                >
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                    <h3 className="text-sm font-extrabold text-[#1D4760]">
                      {clause.index}. {clause.title}
                    </h3>
                    <span className="text-xs text-[#0284C7] font-semibold">الزام اجرایی</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed text-justify">
                    {clause.leadText}
                  </p>

                  {clause.bullets && (
                    <div className="grid grid-cols-2 gap-2 pt-0.5">
                      {clause.bullets.map((b, idx) => (
                        <div
                          key={idx}
                          className="bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 text-xs font-semibold text-slate-800 flex items-center gap-2"
                        >
                          <span className="text-[#0284C7]">•</span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {clause.highlightNote && (
                    <div className="bg-amber-50/90 border border-amber-200/90 rounded-lg px-3.5 py-2.5 text-xs text-amber-950 leading-relaxed font-medium">
                      {clause.highlightNote}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <PageFooterStrip pageNum="۵" digitalUrl={digitalUrl} />
        </article>

        {/* ==================== PAGE 6: PRE-CLASS CONNECTION TEST POSTER & PROTOCOL ==================== */}
        <article className="print-page w-[850px] h-[1202px] m-0 bg-white shadow-xl border border-slate-200 flex flex-col overflow-hidden shrink-0">
          <PageHeaderStrip
            pageNum="۶"
            sectionLabel="پروتکل شروع دوره — تست اتصال و دسترسی به ابزارهای هوش مصنوعی"
            digitalUrl={digitalUrl}
          />

          <div className="p-9 flex-1 grid grid-cols-12 gap-8 items-center">
            {/* Right Column in RTL: Structured 3-Step Protocol & Instructions */}
            <div className="col-span-6 space-y-5">
              <div className="space-y-2 border-b border-slate-200 pb-4">
                <span className="text-xs font-bold text-[#10B981]">
                  {CONNECTION_TEST_PROTOCOL.kicker}
                </span>
                <h2 className="text-3xl font-black text-[#1D4760] leading-tight">
                  {CONNECTION_TEST_PROTOCOL.headline}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {CONNECTION_TEST_PROTOCOL.subheadline}
                </p>
              </div>

              <div className="space-y-3">
                {CONNECTION_TEST_PROTOCOL.steps.map((step) => (
                  <div
                    key={step.num}
                    className="p-4 rounded-xl bg-[#1D4760] text-white space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-extrabold text-white">{step.title}</span>
                      <span className="text-lg font-black text-amber-400">{step.num}</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-[#1D4760]">
                    {CONNECTION_TEST_PROTOCOL.ctaTitle}
                  </span>
                  <a
                    href={CONNECTION_TEST_PROTOCOL.testUrlFull}
                    target="_blank"
                    rel="noreferrer"
                    data-pdf-link={CONNECTION_TEST_PROTOCOL.testUrlFull}
                    className="px-3 py-1 rounded-md bg-[#1D4760] text-[#10B981] font-latin text-xs font-bold underline"
                  >
                    {CONNECTION_TEST_PROTOCOL.testUrl}
                  </a>
                </div>
                <div className="space-y-1.5">
                  {CONNECTION_TEST_PROTOCOL.checkItems.map((ci, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                    >
                      <span className="text-[#10B981] font-bold">✓</span>
                      <span>{ci}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1.5">
                <p className="text-xs font-bold text-emerald-950 leading-relaxed">
                  {CONNECTION_TEST_PROTOCOL.footerNote}
                </p>
                <p className="text-xs font-extrabold text-[#059669]">
                  {CONNECTION_TEST_PROTOCOL.badgeText}
                </p>
              </div>
            </div>

            {/* Left Column in RTL: Embedded Full-Resolution Poster Image (also hyperlinked to gemini.google.com) */}
            <div className="col-span-6 flex items-center justify-center">
              <div
                data-pdf-link={CONNECTION_TEST_PROTOCOL.testUrlFull}
                onClick={() =>
                  onSelectImage?.(
                    EXTRACTED_ASSETS.connectionTestPoster,
                    'پوستر پروتکل شروع دوره — قبل از کلاس، اتصالت را تست کن'
                  )
                }
                className="w-full max-w-[380px] rounded-2xl overflow-hidden shadow-xl border border-slate-200 cursor-pointer bg-[#0A1120]"
              >
                <img
                  src={EXTRACTED_ASSETS.connectionTestPoster}
                  alt="پروتکل شروع دوره - قبل از کلاس اتصالت را تست کن"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>

          <PageFooterStrip pageNum="۶" digitalUrl={digitalUrl} />
        </article>

        {/* ==================== PAGE 7: CATERING, SCHEDULE, IP & CONFIDENTIALITY ==================== */}
        <article className="print-page w-[850px] h-[1202px] m-0 bg-white shadow-xl border border-slate-200 flex flex-col overflow-hidden shrink-0">
          <PageHeaderStrip
            pageNum="۷"
            sectionLabel="پذیرایی، زمان‌بندی، حقوق مالکیت معنوی و مستندسازی"
            digitalUrl={digitalUrl}
          />

          <div className="px-9 py-6 flex-1 flex flex-col justify-between space-y-5">
            {/* Clauses 6, 7, 8 from Page 6 */}
            <div className="space-y-4">
              {PROTOCOL_CLAUSES.slice(5, 8).map((clause) => (
                <div
                  key={clause.id}
                  className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-5 space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
                    <h3 className="text-base font-extrabold text-[#1D4760]">
                      {clause.index}. {clause.title}
                    </h3>
                    <span className="text-xs text-[#0284C7] font-semibold">
                      ضوابط انضباطی و رفاهی
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed text-justify">
                    {clause.leadText}
                  </p>

                  {clause.bullets && (
                    <div className="grid grid-cols-4 gap-2.5 pt-1">
                      {DAILY_SCHEDULE.map((slot) => (
                        <div
                          key={slot.id}
                          className="bg-white p-3 rounded-lg border border-slate-200 text-center space-y-1"
                        >
                          <span className="text-xs font-extrabold text-[#0284C7] block">
                            {slot.timeRange}
                          </span>
                          <span className="text-[11px] font-semibold text-slate-800 block">
                            {slot.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {clause.highlightNote && (
                    <div className="bg-rose-50 border border-rose-200 rounded-lg px-4 py-2.5 text-xs text-rose-900 font-bold">
                      {clause.highlightNote}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Preserved Copyright Shield Image & Confidentiality Notice */}
            <div className="rounded-2xl bg-[#1D4760] text-white p-7 flex items-center gap-6">
              <div
                onClick={() =>
                  onSelectImage?.(
                    EXTRACTED_ASSETS.copyrightShield,
                    'نشان حفاظت از حقوق مالکیت مادی و معنوی شرکت اوج'
                  )
                }
                className="shrink-0 cursor-pointer"
              >
                <img
                  src={EXTRACTED_ASSETS.copyrightShield}
                  alt="حفظ حقوق مالکیت معنوی شرکت اوج"
                  referrerPolicy="no-referrer"
                  className="w-28 h-28 object-contain rounded-2xl"
                />
              </div>
              <div className="space-y-2.5 text-right">
                <div className="text-xs font-semibold text-[#7DD3FC]">
                  بیانیه رسمی صیانت از محتوای اختصاصی و محرمانگی سند
                </div>
                <p className="text-[13px] leading-relaxed text-slate-100 text-justify">
                  {CONFIDENTIALITY_STATEMENT.body}
                </p>
                <p className="text-xs font-bold text-white pt-1">
                  {CONFIDENTIALITY_STATEMENT.closing}
                </p>
              </div>
            </div>
          </div>

          <PageFooterStrip pageNum="۷" digitalUrl={digitalUrl} />
        </article>

        {/* ==================== PAGE 8: BACK COVER & LOCATION MAP (FULL UNCROPPED PICTURE 7) ==================== */}
        <article className="print-page w-[850px] h-[1202px] m-0 bg-white shadow-xl border border-slate-200 relative overflow-hidden select-none shrink-0">
          <div
            data-pdf-link={`https://${DOCUMENT_META.website}`}
            className="w-full h-full relative"
          >
            <img
              src={EXTRACTED_ASSETS.backCoverMap}
              alt="OWJ Business Council Back Cover and Tajrish Location Map"
              referrerPolicy="no-referrer"
              onClick={() =>
                onSelectImage?.(
                  EXTRACTED_ASSETS.backCoverMap,
                  'پشت جلد و نقشه موقعیت دفتر میدان تجریش — مشاوران مدیریت کسب و کار اوج'
                )
              }
              className="w-full h-full object-fill block cursor-pointer"
            />
          </div>
        </article>
      </div>
    </div>
  );
};
