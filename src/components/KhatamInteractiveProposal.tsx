import React, { useMemo, useState } from 'react';
import {
  CheckSquare,
  ExternalLink,
  FileText,
  Layers,
  Lock,
  Printer,
  Search,
  ShieldCheck,
  Square,
  TrendingUp,
  ZoomIn,
} from 'lucide-react';
import {
  AI_CREDENTIALS_13,
  DOCUMENT_META,
  EXTRACTED_ASSETS,
  OFFICIAL_CERTIFICATES,
  PM_CREDENTIALS,
} from '../data/protocolData';
import {
  KHATAM_PROPOSALS,
  KhatamProposalDocument,
} from '../data/khatamProposalsData';

interface KhatamInteractiveProposalProps {
  proposal: KhatamProposalDocument;
  digitalQrDataUrl: string;
  onSwitchToBrochure: () => void;
  onPrintPdf: () => void;
  onSelectImage: (src: string, title: string) => void;
  onSelectProposal?: (proposalId: string) => void;
}

export const KhatamInteractiveProposal: React.FC<
  KhatamInteractiveProposalProps
> = ({
  proposal,
  digitalQrDataUrl,
  onSwitchToBrochure,
  onPrintPdf,
  onSelectImage,
  onSelectProposal,
}) => {
  const [activePhaseIdx, setActivePhaseIdx] = useState<number>(0);
  const [credFilter, setCredFilter] = useState<'all' | 'ai' | 'pm'>('all');
  const [credSearch, setCredSearch] = useState('');
  const [signOffChecked, setSignOffChecked] = useState<Record<number, boolean>>(
    { 0: true, 1: true, 2: false, 3: false, 4: false }
  );

  const toggleSignOff = (idx: number) => {
    setSignOffChecked((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const filteredCredentials = useMemo(() => {
    const combined = [
      ...AI_CREDENTIALS_13.map((item) => ({
        ...item,
        groupLabel: 'هوش مصنوعی و CPMAI',
      })),
      ...PM_CREDENTIALS.map((item) => ({
        ...item,
        groupLabel: 'مدیریت پروژه بین‌الملل',
      })),
    ];
    return combined.filter((item) => {
      const matchesTab =
        credFilter === 'all' ||
        (credFilter === 'ai' && item.category === 'ai') ||
        (credFilter === 'pm' && item.category === 'pm');
      const q = credSearch.trim().toLowerCase();
      const matchesQuery =
        !q ||
        item.titleFa.toLowerCase().includes(q) ||
        (item.code && item.code.toLowerCase().includes(q)) ||
        item.organizationFa.toLowerCase().includes(q);
      return matchesTab && matchesQuery;
    });
  }, [credFilter, credSearch]);

  const activePhase =
    proposal.cpmaiPhases[activePhaseIdx] || proposal.cpmaiPhases[0];

  return (
    <main className="no-print flex-1">
      {/* ==================== 1. HERO & FORMAL PROPOSAL LETTERHEAD ==================== */}
      <section className="relative bg-white border-b border-slate-200/90 overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Right Column in RTL: Official Letterhead & Executive Pitch */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                {/* Top Metadata Bar + Navy OWJ Logo */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
                    <span className="px-2.5 py-1 rounded-md bg-[#1D4760] text-white font-bold">
                      پروپوزال رسمی شماره {proposal.proposalNum}
                    </span>
                    <span className="text-[#0284C7] font-extrabold">
                      {proposal.tierBadge}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono-num text-slate-500">
                      شماره: {proposal.letterNumber}
                    </span>
                  </div>

                  <img
                    src={EXTRACTED_ASSETS.owjLogoNavy}
                    alt="لوگوی مشاوران مدیریت کسب و کار اوج"
                    referrerPolicy="no-referrer"
                    className="h-11 w-auto object-contain"
                  />
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm font-extrabold text-[#0284C7]">
                    {proposal.coverSubtitle}
                  </p>
                  <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0B253A] leading-[1.3] tracking-tight">
                    {proposal.coverMainTitle}
                  </h1>
                  <p className="text-lg sm:text-xl font-extrabold text-[#1D4760]">
                    مخاطب اختصاصی: {proposal.recipientShortOnCover}
                  </p>
                </div>

                {/* Formal Letterhead Card (به / از / موضوع) */}
                <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-5 space-y-2.5 text-xs sm:text-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-200 text-xs text-slate-500">
                    <span>شناسنامه مکاتبه رسمی پیشنهاد فنی و مالی (Proposal)</span>
                    <span className="font-mono-num font-bold text-[#1D4760]">
                      تاریخ: {proposal.letterDate} · طبقه‌بندی: محرمانه تجاری
                    </span>
                  </div>
                  <div className="space-y-1.5 leading-relaxed">
                    <div className="flex items-start gap-2">
                      <span className="font-black text-[#1D4760] w-14 shrink-0">
                        به:
                      </span>
                      <span className="font-bold text-slate-900">
                        {proposal.recipientTitle}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-black text-[#1D4760] w-14 shrink-0">
                        از:
                      </span>
                      <span className="font-semibold text-slate-800">
                        {proposal.senderTitle}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-black text-[#0284C7] w-14 shrink-0">
                        موضوع:
                      </span>
                      <span className="font-extrabold text-[#0B253A]">
                        {proposal.subject}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Executive Lead Paragraph */}
                <p className="text-xs sm:text-sm text-slate-700 leading-[2] text-justify bg-sky-50/50 border border-sky-200/80 rounded-2xl p-4">
                  {proposal.executiveLead}
                </p>
              </div>

              {/* Action Buttons & Contact Strip */}
              <div className="space-y-5 pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={onSwitchToBrochure}
                    className="px-5 py-3 text-xs sm:text-sm font-bold text-white bg-[#1D4760] hover:bg-[#0284C7] rounded-xl transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <FileText className="w-4 h-4" />
                    <span>مشاهده کاتالوگ ۸ صفحه‌ای چاپی (A4)</span>
                  </button>
                  <button
                    type="button"
                    onClick={onPrintPdf}
                    className="px-5 py-3 text-xs sm:text-sm font-bold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-xl transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Printer className="w-4 h-4" />
                    <span>دانلود مستقیم PDF پروپوزال</span>
                  </button>
                  <a
                    href="#workbook"
                    className="px-4 py-3 text-xs sm:text-sm font-semibold text-[#1D4760] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors whitespace-nowrap shrink-0"
                  >
                    کاربرگ ۶ فاز CPMAI v8
                  </a>
                  <a
                    href="#investment"
                    className="px-4 py-3 text-xs sm:text-sm font-semibold text-[#059669] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors whitespace-nowrap shrink-0"
                  >
                    جدول سرمایه‌گذاری و ROI
                  </a>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <img
                    src={EXTRACTED_ASSETS.contactStrip}
                    alt="اطلاعات تماس مشاوران مدیریت کسب و کار اوج"
                    referrerPolicy="no-referrer"
                    className="w-full max-w-2xl h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Left Column in RTL: Interactive Cover Preview */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div
                onClick={onSwitchToBrochure}
                className="relative w-full max-w-[460px] aspect-[1648/2381] rounded-2xl overflow-hidden border border-slate-200 shadow-xl group cursor-pointer bg-white"
              >
                <img
                  src={EXTRACTED_ASSETS.coverFull}
                  alt={proposal.coverMainTitle}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                />

                {/* Bottom 29.5% Cover Typography & QR Code */}
                <div className="absolute inset-x-0 bottom-0 h-[29.5%] px-5 pb-3.5 pt-2 flex flex-col justify-between text-right">
                  <div className="space-y-1">
                    <p className="text-[12px] sm:text-[13.5px] font-black text-[#0F172A] leading-tight whitespace-nowrap">
                      {proposal.coverMainTitle}
                    </p>
                    <p className="text-sm sm:text-base font-black text-[#0F172A] leading-tight whitespace-nowrap">
                      {DOCUMENT_META.organization}
                    </p>
                    <div className="w-full h-[2px] bg-[#37A3DC] my-1.5" />

                    <div className="flex items-center justify-between gap-2 pt-0.5">
                      {digitalQrDataUrl && (
                        <div className="shrink-0 bg-white/95 border border-[#37A3DC] rounded-lg p-1 shadow-sm flex items-center gap-1.5">
                          <img
                            src={digitalQrDataUrl}
                            alt="QR نسخه دیجیتال"
                            className="w-10 h-10 object-contain"
                          />
                          <div className="text-right pr-0.5">
                            <span className="text-[7.5px] font-extrabold text-white bg-[#1D4760] px-1 py-0.5 rounded block">
                              پروپوزال {proposal.proposalNum}
                            </span>
                            <span className="text-[8px] font-bold text-[#0284C7] block mt-0.5">
                              نسخه دیجیتال
                            </span>
                          </div>
                        </div>
                      )}

                      <div className="text-left">
                        <p className="text-xs sm:text-[13px] font-extrabold text-[#37A3DC] whitespace-nowrap">
                          {proposal.recipientShortOnCover}
                        </p>
                        <span className="text-[8.5px] font-semibold text-slate-500 block">
                          کد: {proposal.letterNumber}
                        </span>
                      </div>
                    </div>
                  </div>

                  <img
                    src={EXTRACTED_ASSETS.contactStrip}
                    alt="اطلاعات تماس مشاوران مدیریت کسب و کار اوج"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="absolute top-3 left-3 bg-[#1D4760]/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5 text-[#37A3DC]" />
                  <span>مشاهده کاتالوگ ۸ صفحه‌ای A4</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Column Key Proposal Metrics Strip */}
          <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 space-y-1">
              <span className="text-xs text-slate-500 block">
                مخاطبان هدف و ظرفیت کارگاه
              </span>
              <strong className="text-sm font-extrabold text-[#0B253A] block">
                {proposal.investment.capacity}
              </strong>
              <span className="text-xs text-[#0284C7] block">
                {proposal.tierBadge}
              </span>
            </div>

            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 space-y-1">
              <span className="text-xs text-slate-500 block">
                مدت زمان و ساختار اجرایی
              </span>
              <strong className="text-base font-extrabold text-[#0B253A] block">
                {proposal.totalHours} ({proposal.sessionsFormat})
              </strong>
              <span className="text-xs text-slate-600 block">
                منطبق با استاندارد جهانی PMI-CPMAI v8
              </span>
            </div>

            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 space-y-1">
              <span className="text-xs text-slate-500 block">
                برآورد سرمایه‌گذاری کل
              </span>
              <strong className="text-base font-extrabold text-[#0284C7] block">
                {proposal.investment.totalAmount}
              </strong>
              <span className="text-xs text-emerald-700 font-semibold block">
                صرفه‌جویی سالانه: {proposal.roiAnalysis.annualSavings}
              </span>
            </div>

            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 space-y-1">
              <span className="text-xs text-slate-500 block">
                پروتکل امنیتی و حاکمیت داده
              </span>
              <strong className="text-sm font-extrabold text-[#059669] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>۱۰۰٪ آفلاین (Air-Gapped On-Premise)</span>
              </strong>
              <span className="text-xs text-slate-600 block">
                بدون اتصال به اینترنت یا سرویس‌های ابری خارجی
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SPECIAL CASCADE SECTION FOR PROPOSAL #1 (SUPREME COMMAND 4-6 LEADERS) ==================== */}
      {proposal.cascadeGovernance && (
        <section className="py-14 lg:py-18 bg-gradient-to-b from-[#0B253A] to-[#153447] text-white border-b border-white/10">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-10 space-y-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/15 pb-6">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 rounded-md bg-[#37A3DC] text-white text-xs font-extrabold">
                  ویژه کمیته ارشد ۴ تا ۶ نفره فرماندهی عالی و شورای عالی قرارگاه
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  {proposal.cascadeGovernance.title}
                </h2>
                <p className="text-sm sm:text-base text-sky-200 max-w-4xl leading-relaxed">
                  {proposal.cascadeGovernance.subtitle}
                </p>
              </div>
              <div className="shrink-0 bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-right">
                <span className="text-xs text-sky-300 block">
                  پوشش کامل کل هرم سازمانی قرارگاه
                </span>
                <strong className="text-lg font-black text-white">
                  ۹ پروپوزال مجزا در ۳ سطح فرماندهی، ستاد و هلدینگ‌ها
                </strong>
              </div>
            </div>

            {/* 4 Executive Persuasion Pillars: Why PMI-CPMAI v8 is Mandatory for Top Leadership */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {proposal.cascadeGovernance.whyCpmaiPoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/5 border border-white/15 p-6 space-y-2.5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-[#37A3DC] text-white text-xs font-black flex items-center justify-center shrink-0">
                      ۰{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-white">
                      {pt.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-[1.95] text-justify">
                    {pt.description}
                  </p>
                </div>
              ))}
            </div>

            {/* 3-Tier Cascade Governance Matrix */}
            <div className="space-y-4">
              <h3 className="text-lg font-extrabold text-[#7DD3FC]">
                ساختار ۳ سطحی آبشاری (Cascade Governance) جهت استقرار هماهنگ در سراسر قرارگاه:
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {proposal.cascadeGovernance.tiers.map((tier, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#0F172A]/80 border border-[#37A3DC]/40 p-6 flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
                        <span className="text-sm font-black text-[#37A3DC]">
                          {tier.level}
                        </span>
                        <span className="px-2.5 py-0.5 rounded bg-white/10 text-xs font-bold text-white">
                          {tier.duration}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs text-slate-400 block">
                          مخاطبان هدف:
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-white leading-relaxed">
                          {tier.audience}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs text-slate-400 block">
                          هدف راهبردی:
                        </span>
                        <p className="text-xs text-slate-200 leading-relaxed text-justify">
                          {tier.objective}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/10">
                      <span className="text-[11px] font-bold text-emerald-400 block">
                        خروجی ملموس: {tier.outcome}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Directory of All 9 Dedicated Proposals */}
            <div className="rounded-2xl bg-white/5 border border-white/15 p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-sm sm:text-base font-extrabold text-white">
                  فهرست جامع ۹ پروپوزال اختصاصی قرارگاه سازندگی خاتم‌الانبیاء (ص) (هر پروپوزال دارای مخزن و لینک مستقل):
                </h4>
                <span className="text-xs text-sky-300">
                  برای مشاهده یا دریافت PDF هر پروپوزال روی آن کلیک کنید
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {KHATAM_PROPOSALS.map((item) => {
                  const isCurrent = item.id === proposal.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => onSelectProposal?.(item.id)}
                      className={`rounded-xl p-3.5 border transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                        isCurrent
                          ? 'bg-[#37A3DC]/25 border-[#37A3DC] text-white'
                          : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-200'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-extrabold text-[#7DD3FC]">
                            پروپوزال شماره {item.proposalNum} (سطح {item.tierLevel})
                          </span>
                          <span className="font-mono-num text-[11px] text-slate-300">
                            {item.totalHours}
                          </span>
                        </div>
                        <p className="text-xs font-bold text-white leading-snug">
                          {item.recipientShortOnCover}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10.5px]">
                        <span className="text-emerald-300 font-semibold">
                          {item.investment.totalAmount}
                        </span>
                        <a
                          href={item.githubPagesUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-sky-300 hover:underline flex items-center gap-1 font-latin"
                          dir="ltr"
                        >
                          <span>GitHub Link</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==================== 2. STRATEGIC CONTEXT, KEY ENTITIES & 4 CORE CHALLENGES ==================== */}
      <section
        id="context"
        className="py-14 lg:py-18 max-w-[1320px] mx-auto px-6 lg:px-10 space-y-10"
      >
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div className="space-y-1">
              <span className="text-xs font-extrabold text-[#0284C7]">
                بخش اول پروپوزال · تحلیل وضعیت موجود و ضرورت تحول
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B253A]">
                ۱. {proposal.strategicContextTitle}
              </h2>
            </div>
            <span className="px-3.5 py-1.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs font-bold text-[#1D4760] shrink-0">
              کد اختصاصی سند: {proposal.letterNumber}
            </span>
          </div>

          <p className="text-sm sm:text-base leading-[2.1] text-slate-700 text-justify">
            {proposal.strategicContextLead}
          </p>

          {/* Key Entities, Institutes & Workshops */}
          <div className="rounded-xl bg-[#F8FAFC] border border-slate-200/90 p-5 space-y-3">
            <h3 className="text-xs sm:text-sm font-extrabold text-[#1D4760]">
              مؤسسات، هلدینگ‌ها، رده‌ها و کارگاه‌های عملیاتی تحت پوشش این پروپوزال:
            </h3>
            <div className="flex flex-wrap gap-2">
              {proposal.keyEntitiesAndSites.map((site, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200/90 text-xs font-bold text-[#0B253A] shadow-2xs"
                >
                  • {site}
                </span>
              ))}
            </div>
          </div>

          {/* 4 Strategic Challenges */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-black text-[#0B253A]">
              چالش‌های چهارگانه کلیدی که بدون متدولوژی PMI-CPMAI v8 مانع بهره‌وری می‌شوند:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {proposal.challenges.map((ch) => (
                <div
                  key={ch.num}
                  className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-6 space-y-2.5 hover:border-[#37A3DC] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#1D4760] text-white text-sm font-black flex items-center justify-center shrink-0">
                      {ch.num}
                    </span>
                    <h4 className="text-base font-extrabold text-[#0B253A]">
                      {ch.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-[1.95] text-justify">
                    {ch.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. 7 AI PATTERNS & BUSINESS KPIs BENCHMARK ==================== */}
      <section
        id="patterns"
        className="py-14 lg:py-18 bg-white border-y border-slate-200/90"
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 space-y-12">
          {/* 7 AI Patterns */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-[#0284C7]">
                  بخش دوم پروپوزال · معماری شناختی PMI-CPMAI
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0B253A]">
                  ۲. انطباق الگوهای هفت‌گانه هوش مصنوعی (7 AI Patterns) با مسائل مجموعه
                </h2>
              </div>
              <span className="text-xs font-latin font-bold text-slate-500">
                PMI-CPMAI Seven Patterns of AI
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {proposal.aiPatterns.map((pat) => (
                <div
                  key={pat.num}
                  className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-5 flex flex-col justify-between space-y-3 hover:shadow-md transition-shadow"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[#0284C7] text-white text-xs font-black flex items-center justify-center shrink-0">
                        {pat.num}
                      </span>
                      <span className="text-xs font-latin font-bold text-[#0284C7]">
                        {pat.titleEn}
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-[#0B253A]">
                      {pat.titleFa}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-[1.9] text-justify">
                      {pat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business KPIs Table (Baseline vs. Target) */}
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-xl sm:text-2xl font-black text-[#0B253A]">
                جدول شاخص‌های کلیدی عملکرد کسب‌وکار (Business KPIs — Baseline vs. Target)
              </h3>
              <span className="text-xs font-bold text-[#059669]">
                تعهدات قابل اندازه‌گیری در فاز اول متدولوژی CPMAI
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
              <table className="w-full text-right border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#1D4760] text-white">
                    <th className="py-3.5 px-4 font-bold">
                      شاخص کلیدی عملکرد (Business KPI)
                    </th>
                    <th className="py-3.5 px-4 font-bold">
                      وضعیت فعلی (Baseline)
                    </th>
                    <th className="py-3.5 px-4 font-bold">
                      هدف‌گذاری پس از استقرار (Target)
                    </th>
                    <th className="py-3.5 px-4 font-bold">واحد اندازه‌گیری</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {proposal.kpis.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}
                    >
                      <td className="py-3.5 px-4 font-extrabold text-[#0B253A]">
                        {row.kpi}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        {row.baseline}
                      </td>
                      <td className="py-3.5 px-4 font-extrabold text-[#059669]">
                        {row.target}
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 text-xs">
                        {row.unit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ROI & Go/No-Go Evaluation Matrix */}
          <div className="rounded-2xl bg-gradient-to-l from-[#0B253A] to-[#1D4760] text-white p-6 sm:p-8 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4">
              <div className="flex items-center gap-2.5">
                <TrendingUp className="w-5 h-5 text-[#37A3DC]" />
                <h3 className="text-lg sm:text-xl font-black">
                  تحلیل بازگشت سرمایه (ROI) و ممیزی ۹گانه امکان‌سنجی هوش مصنوعی (AI Go / No-Go)
                </h3>
              </div>
              <span className="px-3 py-1 rounded-lg bg-[#37A3DC] text-white text-xs font-black">
                سرمایه‌گذاری کل دوره: {proposal.roiAnalysis.budgetFormatted}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm leading-relaxed">
              <div className="space-y-2 bg-white/5 border border-white/10 rounded-xl p-4">
                <span className="font-extrabold text-[#7DD3FC] block">
                  برآورد منافع مستقیم مالی (Tangible Annual Savings):
                </span>
                <p className="text-slate-100 text-justify">
                  {proposal.roiAnalysis.annualSavings}
                </p>
                <span className="font-extrabold text-[#7DD3FC] block pt-2">
                  منافع استراتژیک و غیرملموس (Intangible Benefits):
                </span>
                <p className="text-slate-200 text-justify">
                  {proposal.roiAnalysis.intangibleBenefits}
                </p>
              </div>

              <div className="space-y-2 bg-white/5 border border-white/10 rounded-xl p-4">
                <span className="font-extrabold text-[#7DD3FC] block">
                  مقایسه با روش‌های سنتی (AI vs. Heuristic Rules):
                </span>
                <p className="text-slate-100 text-justify">
                  {proposal.roiAnalysis.heuristicComparison}
                </p>
                <span className="font-extrabold text-emerald-300 block pt-2">
                  نتیجه ممیزی ۹ پرسش کلیدی Go / No-Go:
                </span>
                <p className="text-slate-200 text-justify">
                  {proposal.roiAnalysis.goNoGoSummary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. 6-PHASE PMI-CPMAI v8 WORKBOOK & SIGN-OFF CHECKLIST ==================== */}
      <section
        id="workbook"
        className="py-14 lg:py-18 max-w-[1320px] mx-auto px-6 lg:px-10 space-y-10"
      >
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
            <div className="space-y-1">
              <span className="text-xs font-extrabold text-[#0284C7]">
                بخش سوم پروپوزال · استاندارد اجرایی PMI-CPMAI v8
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B253A]">
                ۳. نقشه راه و کاربرگ عملیاتی ۶ فاز متدولوژی PMI-CPMAI v8
              </h2>
            </div>
            <span className="text-xs text-slate-500">
              روی هر فاز کلیک کنید یا نمای کامل ۶ فاز را در پایین مشاهده نمایید
            </span>
          </div>

          {/* Interactive Phase Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {proposal.cpmaiPhases.map((ph, idx) => {
              const isSelected = idx === activePhaseIdx;
              return (
                <button
                  key={ph.phaseNum}
                  type="button"
                  onClick={() => setActivePhaseIdx(idx)}
                  className={`p-3 rounded-xl border text-right transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#1D4760] text-white border-[#1D4760] shadow-sm'
                      : 'bg-[#F8FAFC] text-slate-700 border-slate-200 hover:border-[#37A3DC]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold mb-1">
                    <span className={isSelected ? 'text-[#7DD3FC]' : 'text-[#0284C7]'}>
                      فاز {ph.phaseNum}
                    </span>
                    <span className="font-latin text-[10px] opacity-80">
                      {ph.phaseNum}
                    </span>
                  </div>
                  <div className="text-xs font-extrabold truncate">
                    {ph.titleFa}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Highlighted Active Phase Card */}
          {activePhase && (
            <div className="rounded-2xl border-2 border-[#37A3DC] bg-sky-50/40 p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sky-200 pb-3">
                <div>
                  <span className="text-xs font-bold text-[#0284C7] block">
                    جزئیات اجرایی فاز انتخاب‌شده
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-[#0B253A]">
                    فاز {activePhase.phaseNum}: {activePhase.titleFa} (
                    <span className="font-latin text-base text-[#0284C7]">
                      {activePhase.titleEn}
                    </span>
                    )
                  </h3>
                </div>
                <span className="px-3 py-1.5 rounded-lg bg-[#1D4760] text-white text-xs font-bold">
                  خروجی فاز: {activePhase.deliverable}
                </span>
              </div>

              <p className="text-sm font-bold text-slate-800">
                {activePhase.summary}
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activePhase.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#0284C7] font-black mt-0.5">•</span>
                    <span className="text-justify">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Complete 6-Phase Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {proposal.cpmaiPhases.map((phase, idx) => (
              <div
                key={phase.phaseNum}
                onClick={() => setActivePhaseIdx(idx)}
                className={`rounded-2xl border p-5 flex flex-col justify-between space-y-3 cursor-pointer transition-all ${
                  idx === activePhaseIdx
                    ? 'border-[#0284C7] bg-white shadow-md'
                    : 'border-slate-200/90 bg-[#F8FAFC] hover:border-slate-300'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="text-sm font-black text-[#1D4760]">
                      فاز {phase.phaseNum}: {phase.titleFa}
                    </span>
                    <span className="text-[11px] font-latin font-bold text-[#0284C7]">
                      {phase.titleEn}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-slate-800 leading-snug">
                    {phase.summary}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600 leading-relaxed">
                    {phase.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#37A3DC] font-bold">•</span>
                        <span className="text-justify">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-[11px]">
                  <span className="font-bold text-[#0284C7]">تحویل‌شدنی:</span>
                  <span className="font-extrabold text-[#0B253A]">
                    {phase.deliverable}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Phase VI Deployment Sign-Off Checklist */}
          <div className="rounded-2xl bg-[#0B253A] text-white p-6 sm:p-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/15 pb-3">
              <div>
                <span className="text-xs font-bold text-[#7DD3FC] block">
                  ممیزی نهایی فاز ششم (Phase VI Operational Audit)
                </span>
                <h3 className="text-lg font-black text-white">
                  چک‌لیست تعاملی تأیید نهایی استقرار و بهره‌برداری (Deployment Sign-Off Checklist)
                </h3>
              </div>
              <span className="text-xs text-slate-300">
                قابل تیک‌زدن جهت ممیزی پروژه‌های هوش مصنوعی مجموعه
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {proposal.signOffChecklist.map((item, idx) => {
                const isChecked = Boolean(signOffChecked[idx]);
                return (
                  <div
                    key={idx}
                    onClick={() => toggleSignOff(idx)}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                      isChecked
                        ? 'bg-emerald-950/50 border-emerald-500/50 text-emerald-100'
                        : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                    <span className="text-xs sm:text-sm font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. AIR-GAPPED SECURITY, CURRICULUM, CAPSTONE & INVESTMENT ==================== */}
      <section
        id="investment"
        className="py-14 lg:py-18 bg-white border-t border-slate-200/90"
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 space-y-12">
          {/* 100% Offline Air-Gapped Architecture */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6 sm:p-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <Lock className="w-5 h-5 text-emerald-700" />
                <h2 className="text-lg sm:text-xl font-black text-[#0B253A]">
                  ۴. پروتکل امنیتی و پشته نرم‌افزاری ۱۰۰٪ آفلاین (Air-Gapped On-Premise Stack)
                </h2>
              </div>
              <span className="px-3 py-1 rounded-lg bg-emerald-700 text-white text-xs font-bold">
                تضمین عدم خروج داده از شبکه داخلی قرارگاه
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              {proposal.airGappedNote}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {proposal.airGappedTools.map((tool, idx) => (
                <span
                  key={idx}
                  dir="ltr"
                  className="px-3 py-1.5 rounded-lg bg-white border border-emerald-200 text-xs font-latin font-bold text-[#0B253A] shadow-2xs"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Curriculum & Modules */}
          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-extrabold text-[#0284C7] block">
                  بخش پنجم پروپوزال · برنامه درسی و کارگاهی
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#0B253A]">
                  ۵. {proposal.curriculumTitle} ({proposal.totalHours} —{' '}
                  {proposal.sessionsFormat})
                </h2>
              </div>
              <span className="px-3.5 py-1.5 rounded-xl bg-[#1D4760] text-white text-xs font-bold">
                مجموع ساعات: {proposal.totalHours}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {proposal.modules.map((mod, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-5 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-[#1D4760] text-white text-xs font-bold">
                        {mod.code}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-sky-100 text-[#0284C7] text-xs font-extrabold">
                        {mod.hours}
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-[#0B253A]">
                      {mod.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                      {mod.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Capstone Pilot Box */}
            <div className="rounded-2xl border-2 border-[#37A3DC] bg-sky-50/50 p-6 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base sm:text-lg font-black text-[#1D4760]">
                  پروژه عملی پایانی (Capstone Pilot): {proposal.capstone.title}
                </h3>
                <span className="px-3 py-1 rounded-md bg-[#0284C7] text-white text-xs font-bold">
                  خروجی عملیاتی قابل استقرار در مجموعه
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                {proposal.capstone.deliverable}
              </p>
            </div>
          </div>

          {/* Executive Investment Table */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-xl sm:text-2xl font-black text-[#0B253A]">
                ۶. جدول برآورد سرمایه‌گذاری و شرایط برگزاری
              </h2>
              <span className="text-xs text-slate-500">
                شامل تدوین کاربرگ‌های اختصاصی، استقرار مدل‌های بومی آفلاین و گواهینامه معتبر
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-300 shadow-sm">
              <table className="w-full text-right border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#0B253A] text-white">
                    <th className="py-4 px-4 font-bold">مخاطبان هدف</th>
                    <th className="py-4 px-4 font-bold">ظرفیت مجاز</th>
                    <th className="py-4 px-4 font-bold">مدت زمان دوره</th>
                    <th className="py-4 px-4 font-bold">نرخ هر ساعت آموزشی</th>
                    <th className="py-4 px-4 font-bold">مبلغ کل سرمایه‌گذاری</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white font-semibold">
                    <td className="py-4 px-4 text-slate-800">
                      {proposal.investment.targetAudience}
                    </td>
                    <td className="py-4 px-4 text-slate-700 whitespace-nowrap">
                      {proposal.investment.capacity}
                    </td>
                    <td className="py-4 px-4 text-slate-700 whitespace-nowrap">
                      {proposal.investment.duration}
                    </td>
                    <td className="py-4 px-4 text-slate-700 whitespace-nowrap">
                      {proposal.investment.hourlyRate}
                    </td>
                    <td className="py-4 px-4 font-black text-[#0284C7] text-base whitespace-nowrap">
                      {proposal.investment.totalAmount}
                      <span className="block text-xs text-slate-500 font-normal mt-0.5">
                        ({proposal.investment.totalAmountWords})
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 6. INSTRUCTOR AUTHORITY & 23 INTERNATIONAL CREDENTIALS ==================== */}
      <section
        id="instructor"
        className="py-14 lg:py-20 bg-[#F8F7F4] border-t border-slate-200/90"
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 space-y-12">
          {/* Design #2 Two-Column Instructor Banner */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-l from-[#0B253A] via-[#1E1B4B] to-[#3B1D5E] text-white shadow-lg border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-5">
                    <div className="flex items-center gap-4">
                      <img
                        src={EXTRACTED_ASSETS.owjLogoWhite}
                        alt="OWJ Business Council"
                        referrerPolicy="no-referrer"
                        className="h-12 w-auto object-contain"
                      />
                      <div className="h-8 w-px bg-white/20" />
                      <span className="text-xs sm:text-sm font-semibold text-sky-300">
                        طراح و مدرس دوره:
                      </span>
                    </div>
                    <img
                      src={EXTRACTED_ASSETS.ajaLogoWhite}
                      alt="AJA Abolfazl Jafari Asl"
                      referrerPolicy="no-referrer"
                      className="h-11 w-auto object-contain"
                    />
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                    {DOCUMENT_META.instructorName}
                  </h2>
                  <p className="text-lg sm:text-xl font-bold text-sky-200">
                    {DOCUMENT_META.instructorRole}
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-indigo-100 max-w-2xl">
                    {DOCUMENT_META.instructorDistinction}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div
                      onClick={() =>
                        onSelectImage(
                          EXTRACTED_ASSETS.qrCode,
                          'کد QR رسمی ابوالفضل جعفری اصل'
                        )
                      }
                      className="bg-white p-2.5 rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform shrink-0"
                    >
                      <img
                        src={EXTRACTED_ASSETS.qrCode}
                        alt="QR Code Abolfazl Jafari Asl"
                        referrerPolicy="no-referrer"
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-semibold text-sky-300 block">
                        اسکن جهت استعلام مدارک بین‌المللی مدرس
                      </span>
                      <p className="text-xs text-slate-300">
                        دارای ۱۳ گواهینامه تخصصی هوش مصنوعی از PMI و Cognilytica آمریکا + ۱۰ مدرک بین‌المللی مدیریت پروژه
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative bg-[#2B2653] flex items-center justify-center p-6">
                <div
                  onClick={() =>
                    onSelectImage(
                      EXTRACTED_ASSETS.instructorBanner,
                      'ابوالفضل جعفری اصل — مدیرعامل شرکت مشاوران مدیریت کسب و کار اوج'
                    )
                  }
                  className="relative w-full h-full min-h-[300px] rounded-xl overflow-hidden border border-white/15 shadow-xl group cursor-pointer"
                >
                  <img
                    src={EXTRACTED_ASSETS.instructorBanner}
                    alt={DOCUMENT_META.instructorName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-left"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Searchable 23 Credentials Explorer */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
              <div>
                <h3 className="text-xl font-black text-[#0B253A]">
                  فهرست کامل ۲۳ گواهینامه بین‌المللی مدرس (۱۳ مدرک هوش مصنوعی + ۱۰ مدرک مدیریت پروژه)
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  قابل فیلتر بر اساس حوزه تخصصی هوش مصنوعی (PMI / Cognilytica) و مدیریت پروژه (PMP / PgMP / PfMP / PMO)
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={credSearch}
                    onChange={(e) => setCredSearch(e.target.value)}
                    placeholder="جستجو در مدارک..."
                    className="pr-9 pl-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0284C7]"
                  />
                </div>
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setCredFilter('all')}
                    className={`px-3 py-1.5 rounded-lg cursor-pointer ${
                      credFilter === 'all'
                        ? 'bg-[#1D4760] text-white'
                        : 'text-slate-600'
                    }`}
                  >
                    همه (۲۳)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCredFilter('ai')}
                    className={`px-3 py-1.5 rounded-lg cursor-pointer ${
                      credFilter === 'ai'
                        ? 'bg-[#1D4760] text-white'
                        : 'text-slate-600'
                    }`}
                  >
                    هوش مصنوعی (۱۳)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCredFilter('pm')}
                    className={`px-3 py-1.5 rounded-lg cursor-pointer ${
                      credFilter === 'pm'
                        ? 'bg-[#1D4760] text-white'
                        : 'text-slate-600'
                    }`}
                  >
                    مدیریت پروژه (۱۰)
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredCredentials.map((cred) => (
                <div
                  key={cred.id}
                  className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-[#1D4760] text-white text-xs font-mono-num font-bold flex items-center justify-center shrink-0">
                      {cred.index}
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-[#0B253A]">
                        {cred.titleFa}
                      </p>
                      <span className="text-[11px] text-slate-500">
                        {cred.organizationFa}
                      </span>
                    </div>
                  </div>
                  {cred.code && (
                    <span className="text-xs font-latin font-bold text-[#0284C7] shrink-0">
                      {cred.code}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Official PMI Certificates */}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6">
              {OFFICIAL_CERTIFICATES.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => onSelectImage(cert.image, cert.titleFa)}
                  className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-200 bg-[#F8FAFC] p-4 shadow-2xs hover:shadow-md transition-all"
                >
                  <div className="overflow-hidden rounded-xl bg-white border border-slate-100">
                    <img
                      src={cert.image}
                      alt={cert.titleEn}
                      referrerPolicy="no-referrer"
                      className="w-full h-56 object-contain group-hover:scale-[1.01] transition-transform"
                    />
                  </div>
                  <div className="pt-3 flex items-center justify-between text-xs">
                    <span className="font-extrabold text-[#1D4760]">
                      {cert.titleFa}
                    </span>
                    <span className="font-mono-num font-bold text-[#0284C7]">
                      شماره گواهینامه: #{cert.certNumber}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
