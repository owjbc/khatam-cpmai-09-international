import React, { useState } from 'react';
import {
  ArrowLeft,
  Building2,
  Check,
  Compass,
  Copy,
  Cpu,
  Crown,
  ExternalLink,
  FileText,
  Globe2,
  HardHat,
  Layers,
  Anchor,
  Flame,
  Zap,
  Pickaxe,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { DOCUMENT_META, EXTRACTED_ASSETS } from '../data/protocolData';
import {
  KHATAM_PROPOSALS,
  KhatamProposalDocument,
} from '../data/khatamProposalsData';

interface KhatamCircularHubPortalProps {
  selectedProposalId: string;
  onSelectProposalAndOpen: (
    proposalId: string,
    targetMode: 'interactive' | 'brochure'
  ) => void;
  onFocusProposal: (proposalId: string) => void;
}

interface OrbitalNodeConfig {
  id: string;
  angleDeg: number;
  shortTitle: string;
  subLabel: string;
  badgeColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ORBITAL_NODES_8: OrbitalNodeConfig[] = [
  {
    id: 'khatam-02',
    angleDeg: -90, // Top (12 o'clock)
    shortTitle: 'ستاد مرکز و معاونت‌ها',
    subLabel: 'پروپوزال ۲ · معاونین ستادی و کوثر (۹۶ ساعت)',
    badgeColor: '#0284C7',
    icon: Building2,
  },
  {
    id: 'khatam-03',
    angleDeg: -45, // Top-Right (1:30)
    shortTitle: 'هلدینگ نفت، گاز و پتروشیمی',
    subLabel: 'پروپوزال ۳ · پالایشگاه و پتروشیمی (۹۶ ساعت)',
    badgeColor: '#0369A1',
    icon: Flame,
  },
  {
    id: 'khatam-04',
    angleDeg: 0, // Right (3 o'clock)
    shortTitle: 'هلدینگ راه و شهرسازی',
    subLabel: 'پروپوزال ۴ · کریدورهای ریلی و تونل‌سازی',
    badgeColor: '#0D9488',
    icon: HardHat,
  },
  {
    id: 'khatam-05',
    angleDeg: 45, // Bottom-Right (4:30)
    shortTitle: 'هلدینگ نیرو (آب، برق و کشاورزی)',
    subLabel: 'پروپوزال ۵ · سدسازی، نیروگاه و انتقال آب',
    badgeColor: '#059669',
    icon: Zap,
  },
  {
    id: 'khatam-06',
    angleDeg: 90, // Bottom (6 o'clock)
    shortTitle: 'هلدینگ تخصصی دریایی',
    subLabel: 'پروپوزال ۶ · سازه‌های دریایی و بنادر',
    badgeColor: '#2563EB',
    icon: Anchor,
  },
  {
    id: 'khatam-07',
    angleDeg: 135, // Bottom-Left (7:30)
    shortTitle: 'هلدینگ صنعت و معدن',
    subLabel: 'پروپوزال ۷ · فولاد، مس، طلا و زغال‌سنگ',
    badgeColor: '#D97706',
    icon: Pickaxe,
  },
  {
    id: 'khatam-08',
    angleDeg: 180, // Left (9 o'clock)
    shortTitle: 'هلدینگ فناوری اطلاعات و ارتباطات',
    subLabel: 'پروپوزال ۸ · ارتباطات، فیبر نوری و دیتاسنتر',
    badgeColor: '#4F46E5',
    icon: Cpu,
  },
  {
    id: 'khatam-09',
    angleDeg: -135, // Top-Left (10:30)
    shortTitle: 'هلدینگ تخصصی برون‌مرزی',
    subLabel: 'پروپوزال ۹ · صدور خدمات مهندسی و فیدیک',
    badgeColor: '#7C3AED',
    icon: Globe2,
  },
];

export const KhatamCircularHubPortal: React.FC<
  KhatamCircularHubPortalProps
> = ({
  selectedProposalId,
  onSelectProposalAndOpen,
  onFocusProposal,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [copiedRepoId, setCopiedRepoId] = useState<string | null>(null);

  const activeId = hoveredId || selectedProposalId || 'khatam-01';
  const activeProposal: KhatamProposalDocument =
    KHATAM_PROPOSALS.find((p) => p.id === activeId) || KHATAM_PROPOSALS[0];

  const commandProposal = KHATAM_PROPOSALS[0]; // khatam-01

  const handleCopyLink = (e: React.MouseEvent, id: string, url: string) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(url);
    setCopiedRepoId(id);
    setTimeout(() => setCopiedRepoId(null), 2000);
  };

  // Geometry constants for the 820x820 radial canvas
  const canvasSize = 820;
  const center = canvasSize / 2; // 410
  const orbitRadius = 285;

  return (
    <main className="no-print flex-1 bg-[#F8F7F4]">
      {/* ==================== 1. RADIAL COMMAND HERO & CIRCULAR ECOSYSTEM MAP ==================== */}
      <section className="relative bg-gradient-to-b from-[#071928] via-[#0B253A] to-[#13334C] text-white overflow-hidden border-b border-white/15">
        {/* Subtle Architectural Grid Background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at center, #37A3DC 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-10 py-10 lg:py-14 space-y-10">
          {/* Top Executive Title Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/15">
            <div className="space-y-2.5 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5 text-xs text-sky-300 font-semibold">
                <span>درگاه متمرکز و یکپارچه پروپوزال‌های ۹گانه PMI-CPMAI v8</span>
                <span aria-hidden="true">·</span>
                <span>معماری آبشاری ۳ سطحی</span>
                <span aria-hidden="true">·</span>
                <span>شرکت مشاوران مدیریت کسب و کار اوج</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
                منظومه جامع استقرار استاندارد جهانی مدیریت پروژه‌های هوش مصنوعی (PMI-CPMAI v8) در قرارگاه سازندگی خاتم‌الانبیاء (ص)
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                در این پرتال متمرکز، **کمیته ارشد فرماندهی عالی و شورای عالی (پروپوزال شماره ۱)** در هسته مرکزی دایره حکمرانی قرار داشته و **ستاد قرب مرکز به همراه ۷ هلدینگ تخصصی (پروپوزال‌های ۲ تا ۹)** در مدار پیرامونی آن چیده شده‌اند. با کلیک روی هر گره می‌توانید پروپوزال تعاملی، کاتالوگ ۸ صفحه‌ای چاپی A4 یا لینک گیت‌هاب مستقل آن را باز نمایید.
              </p>
            </div>

            {/* Summary Metrics Box */}
            <div className="shrink-0 grid grid-cols-3 gap-3 bg-white/5 border border-white/15 rounded-2xl p-4 text-center">
              <div className="px-3 space-y-0.5 border-l border-white/10">
                <span className="text-2xl font-black text-[#37A3DC] block">۹</span>
                <span className="text-[11px] text-slate-300 block">
                  پروپوزال و مخزن مستقل
                </span>
              </div>
              <div className="px-3 space-y-0.5 border-l border-white/10">
                <span className="text-2xl font-black text-amber-400 block">۳</span>
                <span className="text-[11px] text-slate-300 block">
                  سطح حکمرانی و اجرا
                </span>
              </div>
              <div className="px-3 space-y-0.5">
                <span className="text-2xl font-black text-emerald-400 block">
                  ۱۰۰٪
                </span>
                <span className="text-[11px] text-slate-300 block">
                  آفلاین (Air-Gapped)
                </span>
              </div>
            </div>
          </div>

          {/* Main Interactive Split: Left/Center = 360° Radial Hub Diagram | Right = Live Selected Proposal Inspector */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
            {/* ==================== CIRCULAR / RADIAL 9-NODE DIAGRAM (7 COLS ON XL) ==================== */}
            <div className="xl:col-span-7 flex flex-col items-center justify-center">
              {/* Desktop/Tablet Radial Canvas */}
              <div className="hidden md:flex items-center justify-center w-full overflow-visible py-2">
                <div
                  className="relative select-none shrink-0"
                  style={{ width: `${canvasSize}px`, height: `${canvasSize}px` }}
                >
                  {/* SVG Concentric Orbital Rings & Radial Connecting Spokes */}
                  <svg
                    viewBox={`0 0 ${canvasSize} ${canvasSize}`}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                  >
                    <defs>
                      <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#37A3DC" stopOpacity="0.28" />
                        <stop offset="65%" stopColor="#0284C7" stopOpacity="0.08" />
                        <stop offset="100%" stopColor="#0B253A" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Ambient Center Glow */}
                    <circle
                      cx={center}
                      cy={center}
                      r={360}
                      fill="url(#hubGlow)"
                    />

                    {/* Outer Decorative Ring */}
                    <circle
                      cx={center}
                      cy={center}
                      r={345}
                      fill="none"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="1"
                    />

                    {/* Primary Main Orbit Ring (r = 285) */}
                    <circle
                      cx={center}
                      cy={center}
                      r={orbitRadius}
                      fill="none"
                      stroke="rgba(55,163,220,0.45)"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                    />

                    {/* Inner Command Halo Ring (r = 148) */}
                    <circle
                      cx={center}
                      cy={center}
                      r={148}
                      fill="none"
                      stroke="rgba(251,191,36,0.4)"
                      strokeWidth="1.5"
                    />

                    {/* 8 Radial Spokes from Center (410,410) to Each of the 8 Surrounding Nodes */}
                    {ORBITAL_NODES_8.map((node) => {
                      const rad = (node.angleDeg * Math.PI) / 180;
                      const x2 = center + orbitRadius * Math.cos(rad);
                      const y2 = center + orbitRadius * Math.sin(rad);
                      const isNodeActive = activeId === node.id;

                      return (
                        <g key={node.id}>
                          <line
                            x1={center}
                            y1={center}
                            x2={x2}
                            y2={y2}
                            stroke={
                              isNodeActive
                                ? '#38BDF8'
                                : 'rgba(125, 211, 252, 0.25)'
                            }
                            strokeWidth={isNodeActive ? '3' : '1.5'}
                          />
                          {/* Directional Pulse Dot along the Spoke */}
                          <circle
                            cx={center + (orbitRadius * 0.56) * Math.cos(rad)}
                            cy={center + (orbitRadius * 0.56) * Math.sin(rad)}
                            r={isNodeActive ? 4.5 : 3}
                            fill={isNodeActive ? '#FBBF24' : '#37A3DC'}
                          />
                        </g>
                      );
                    })}
                  </svg>

                  {/* ==================== CENTER NUCLEUS: PROPOSAL #1 (SUPREME COMMAND & HIGH COUNCIL) ==================== */}
                  <div
                    onClick={() =>
                      onSelectProposalAndOpen('khatam-01', 'interactive')
                    }
                    onMouseEnter={() => {
                      setHoveredId('khatam-01');
                      onFocusProposal('khatam-01');
                    }}
                    onMouseLeave={() => setHoveredId(null)}
                    style={{
                      left: `${center}px`,
                      top: `${center}px`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className={`absolute z-20 w-[248px] h-[248px] rounded-full p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 ${
                      activeId === 'khatam-01'
                        ? 'bg-gradient-to-b from-[#1E3A5F] via-[#0F2942] to-[#091929] border-2 border-amber-400 shadow-[0_0_45px_rgba(251,191,36,0.35)] scale-[1.03]'
                        : 'bg-gradient-to-b from-[#16324F] to-[#0B2136] border-2 border-[#37A3DC]/80 hover:border-amber-400 shadow-2xl'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-400/60 flex items-center justify-center mb-1.5">
                      <Crown className="w-5 h-5 text-amber-300" />
                    </div>
                    <span className="text-[10.5px] font-extrabold text-amber-300 tracking-wide">
                      هسته مرکزی · پروپوزال شماره ۱
                    </span>
                    <h3 className="text-sm font-black text-white leading-snug mt-1">
                      شورای عالی و فرماندهی قرارگاه سازندگی خاتم‌الانبیاء (ص)
                    </h3>
                    <p className="text-[10.5px] text-sky-200 mt-1 leading-tight">
                      کمیته ارشد راهبری کلان (۴ تا ۶ نفر) · ۱۶ ساعت
                    </p>

                    <div className="mt-2.5 flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProposalAndOpen('khatam-01', 'interactive');
                        }}
                        className="px-2.5 py-1 rounded-md bg-amber-400 hover:bg-amber-300 text-slate-950 text-[10px] font-black transition-colors cursor-pointer"
                      >
                        مشاهده پروپوزال
                      </button>
                      <a
                        href={commandProposal.githubPagesUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white text-[10px] font-bold flex items-center gap-1"
                        title="لینک گیت‌هاب مستقل پروپوزال ۱"
                      >
                        <span>لینک</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>

                  {/* ==================== 8 SURROUNDING ORBITAL NODES (CENTRAL HQ + 7 HOLDINGS) ==================== */}
                  {ORBITAL_NODES_8.map((node) => {
                    const proposalObj = KHATAM_PROPOSALS.find(
                      (p) => p.id === node.id
                    );
                    if (!proposalObj) return null;

                    const rad = (node.angleDeg * Math.PI) / 180;
                    const x = center + orbitRadius * Math.cos(rad);
                    const y = center + orbitRadius * Math.sin(rad);
                    const isSelected = activeId === node.id;
                    const IconComp = node.icon;

                    return (
                      <div
                        key={node.id}
                        onClick={() =>
                          onSelectProposalAndOpen(node.id, 'interactive')
                        }
                        onMouseEnter={() => {
                          setHoveredId(node.id);
                          onFocusProposal(node.id);
                        }}
                        onMouseLeave={() => setHoveredId(null)}
                        style={{
                          left: `${x}px`,
                          top: `${y}px`,
                          transform: 'translate(-50%, -50%)',
                        }}
                        className={`absolute z-20 w-[196px] rounded-2xl p-3 text-right cursor-pointer transition-all duration-200 ${
                          isSelected
                            ? 'bg-white text-[#0B253A] border-2 border-[#37A3DC] shadow-[0_0_30px_rgba(55,163,220,0.45)] scale-105'
                            : 'bg-[#0F2942]/95 hover:bg-[#163859] text-white border border-white/20 shadow-lg'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1.5 mb-1">
                          <span
                            className={`text-[10px] font-extrabold ${
                              isSelected ? 'text-[#0284C7]' : 'text-[#7DD3FC]'
                            }`}
                          >
                            پروپوزال شماره {proposalObj.proposalNum} · سطح{' '}
                            {proposalObj.tierLevel}
                          </span>
                          <div
                            className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-white"
                            style={{ backgroundColor: node.badgeColor }}
                          >
                            <IconComp className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <h4
                          className={`text-xs font-black leading-snug ${
                            isSelected ? 'text-[#0B253A]' : 'text-white'
                          }`}
                        >
                          {node.shortTitle}
                        </h4>

                        <p
                          className={`text-[10px] mt-0.5 truncate ${
                            isSelected ? 'text-slate-600' : 'text-slate-300'
                          }`}
                        >
                          {node.subLabel}
                        </p>

                        <div
                          className={`mt-2 pt-1.5 border-t flex items-center justify-between gap-1 ${
                            isSelected ? 'border-slate-200' : 'border-white/10'
                          }`}
                        >
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectProposalAndOpen(node.id, 'interactive');
                            }}
                            className={`text-[10px] font-extrabold cursor-pointer hover:underline ${
                              isSelected ? 'text-[#0284C7]' : 'text-sky-300'
                            }`}
                          >
                            ورود به پروپوزال ↙
                          </button>

                          <a
                            href={proposalObj.githubPagesUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className={`text-[9.5px] font-bold flex items-center gap-0.5 hover:underline ${
                              isSelected ? 'text-slate-600' : 'text-slate-300'
                            }`}
                            title="باز کردن لینک گیت‌هاب مستقل"
                          >
                            <span>لینک مستقیم</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile / Small Screen Fallback for Radial Wheel */}
              <div className="md:hidden w-full space-y-3">
                <div
                  onClick={() => onFocusProposal('khatam-01')}
                  className="rounded-2xl bg-gradient-to-l from-[#1E3A5F] to-[#0F2942] border-2 border-amber-400 p-4 text-center space-y-2"
                >
                  <span className="text-xs font-extrabold text-amber-300 block">
                    هسته مرکزی دایره · پروپوزال شماره ۱
                  </span>
                  <h3 className="text-base font-black text-white">
                    {commandProposal.recipientShortOnCover}
                  </h3>
                  <div className="flex justify-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() =>
                        onSelectProposalAndOpen('khatam-01', 'interactive')
                      }
                      className="px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 text-xs font-bold"
                    >
                      مشاهده پروپوزال ۱
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ORBITAL_NODES_8.map((node) => {
                    const p = KHATAM_PROPOSALS.find((x) => x.id === node.id)!;
                    return (
                      <div
                        key={node.id}
                        onClick={() => onFocusProposal(node.id)}
                        className="rounded-xl bg-white/10 border border-white/15 p-3 flex items-center justify-between"
                      >
                        <div>
                          <span className="text-[10px] text-sky-300 font-bold block">
                            پروپوزال {p.proposalNum}
                          </span>
                          <span className="text-xs font-bold text-white">
                            {node.shortTitle}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            onSelectProposalAndOpen(node.id, 'interactive')
                          }
                          className="px-2.5 py-1 rounded bg-[#37A3DC] text-white text-[10px] font-bold"
                        >
                          باز کردن
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ==================== RIGHT COLUMN: LIVE SELECTED PROPOSAL INSPECTOR (5 COLS ON XL) ==================== */}
            <div className="xl:col-span-5">
              <div className="rounded-2xl bg-white text-[#0F172A] border border-slate-200 shadow-2xl p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-4">
                  <div>
                    <span className="text-xs font-extrabold text-[#0284C7] block">
                      پیش‌نمایش زنده گره انتخاب‌شده در دایره حکمرانی
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-[#0B253A] mt-0.5">
                      پروپوزال شماره {activeProposal.proposalNum}:{' '}
                      {activeProposal.recipientShortOnCover}
                    </h2>
                  </div>
                  <span className="text-xs font-mono-num font-bold text-slate-500 shrink-0">
                    {activeProposal.letterNumber}
                  </span>
                </div>

                {/* Key Attributes */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80 space-y-0.5">
                    <span className="text-slate-500 block">سطح سازمانی و ظرفیت</span>
                    <strong className="text-[#0B253A] font-extrabold block">
                      {activeProposal.investment.capacity}
                    </strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80 space-y-0.5">
                    <span className="text-slate-500 block">مدت زمان کارگاه</span>
                    <strong className="text-[#0B253A] font-extrabold block">
                      {activeProposal.totalHours} ({activeProposal.sessionsFormat})
                    </strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80 space-y-0.5">
                    <span className="text-slate-500 block">مبلغ کل سرمایه‌گذاری</span>
                    <strong className="text-[#0284C7] font-black block">
                      {activeProposal.investment.totalAmount}
                    </strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80 space-y-0.5">
                    <span className="text-slate-500 block">صرفه‌جویی سالانه (ROI)</span>
                    <strong className="text-emerald-700 font-extrabold block truncate">
                      {activeProposal.roiAnalysis.annualSavings}
                    </strong>
                  </div>
                </div>

                {/* Subject & Lead */}
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="font-bold text-[#1D4760]">
                    موضوع: {activeProposal.subject}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify line-clamp-4">
                    {activeProposal.executiveLead}
                  </p>
                </div>

                {/* Key Workshops / Institutes under this node */}
                <div className="space-y-1.5">
                  <span className="text-xs font-extrabold text-[#1D4760] block">
                    مؤسسات، کارگاه‌ها و رده‌های کلیدی تحت پوشش:
                  </span>
                  <div className="text-xs text-slate-600 leading-relaxed">
                    {activeProposal.keyEntitiesAndSites.slice(0, 5).join(' · ')}
                  </div>
                </div>

                {/* Dedicated GitHub Pages URL Box */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-extrabold text-[#1D4760]">
                      لینک اختصاصی گیت‌هاب این پروپوزال:
                    </span>
                    <button
                      type="button"
                      onClick={(e) =>
                        handleCopyLink(
                          e,
                          activeProposal.id,
                          activeProposal.githubPagesUrl
                        )
                      }
                      className="text-[#0284C7] hover:underline font-bold flex items-center gap-1 cursor-pointer"
                    >
                      {copiedRepoId === activeProposal.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600">کپی شد!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>کپی لینک</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={activeProposal.githubPagesUrl}
                    target="_blank"
                    rel="noreferrer"
                    dir="ltr"
                    className="block text-xs font-latin font-bold text-[#0284C7] hover:underline break-all"
                  >
                    {activeProposal.githubPagesUrl}
                  </a>
                </div>

                {/* Action CTAs for the Selected Proposal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <button
                    type="button"
                    onClick={() =>
                      onSelectProposalAndOpen(activeProposal.id, 'interactive')
                    }
                    className="py-3 px-4 rounded-xl bg-[#1D4760] hover:bg-[#0B253A] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
                  >
                    <Layers className="w-4 h-4 text-[#37A3DC]" />
                    <span>ورود به نمای وب تعاملی پروپوزال</span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      onSelectProposalAndOpen(activeProposal.id, 'brochure')
                    }
                    className="py-3 px-4 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
                  >
                    <FileText className="w-4 h-4" />
                    <span>کاتالوگ ۸ صفحه‌ای چاپی (A4)</span>
                  </button>
                </div>

                <a
                  href={activeProposal.githubPagesUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>باز کردن در پنجره مستقل گیت‌هاب ({activeProposal.repoName})</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#0284C7]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2. COMPLETE HYPERLINKED DIRECTORY OF ALL 9 PROPOSALS ==================== */}
      <section className="py-14 lg:py-18 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-10 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1">
            <span className="text-xs font-extrabold text-[#0284C7]">
              فهرست جامع و هایپرلینک‌های مستقیم ۹ مخزن گیت‌هاب
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B253A]">
              دسترسی مستقیم به هر ۹ پروپوزال و کاتالوگ‌های ۸ صفحه‌ای A4
            </h2>
          </div>
          <p className="text-xs text-slate-500">
            هر پروپوزال دارای لینک گیت‌هاب مجزا، نمای وب تعاملی و کاتالوگ ۸ صفحه‌ای استاندارد چاپ A4 است
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KHATAM_PROPOSALS.map((prop) => {
            const isTier1 = prop.tierLevel === 1;
            const isTier2 = prop.tierLevel === 2;

            return (
              <div
                key={prop.id}
                className={`rounded-2xl bg-white border p-6 flex flex-col justify-between space-y-5 transition-all hover:shadow-lg ${
                  isTier1
                    ? 'border-amber-400 ring-1 ring-amber-300/50'
                    : isTier2
                      ? 'border-[#0284C7]'
                      : 'border-slate-200/90'
                }`}
              >
                <div className="space-y-3">
                  {/* Top Metadata Line (Unboxed clean text) */}
                  <div className="flex items-center justify-between text-xs text-slate-500 pb-2.5 border-b border-slate-100">
                    <span className="font-extrabold text-[#1D4760]">
                      پروپوزال شماره {prop.proposalNum} · سطح {prop.tierLevel}
                    </span>
                    <span className="font-mono-num">{prop.letterNumber}</span>
                  </div>

                  <h3 className="text-lg font-black text-[#0B253A] leading-snug">
                    {prop.recipientShortOnCover}
                  </h3>

                  <p className="text-xs font-bold text-[#0284C7] leading-relaxed">
                    {prop.tierBadge}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed text-justify line-clamp-3">
                    {prop.executiveLead}
                  </p>

                  {/* Metrics inline */}
                  <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-100">
                    <span className="text-slate-500">
                      مدت دوره: <strong className="text-slate-800">{prop.totalHours}</strong>
                    </span>
                    <span className="font-extrabold text-[#0284C7]">
                      {prop.investment.totalAmount}
                    </span>
                  </div>

                  {/* Direct Hyperlink Box */}
                  <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 flex items-center justify-between gap-2">
                    <a
                      href={prop.githubPagesUrl}
                      target="_blank"
                      rel="noreferrer"
                      dir="ltr"
                      className="text-[11px] font-latin font-semibold text-[#0284C7] hover:underline truncate"
                    >
                      {prop.githubPagesUrl}
                    </a>
                    <button
                      type="button"
                      onClick={(e) =>
                        handleCopyLink(e, prop.id, prop.githubPagesUrl)
                      }
                      className="text-[11px] font-bold text-slate-600 hover:text-[#0B253A] shrink-0 flex items-center gap-1 cursor-pointer"
                    >
                      {copiedRepoId === prop.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        onSelectProposalAndOpen(prop.id, 'interactive')
                      }
                      className="py-2.5 px-3 rounded-xl bg-[#1D4760] hover:bg-[#0B253A] text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      نمای وب تعاملی
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        onSelectProposalAndOpen(prop.id, 'brochure')
                      }
                      className="py-2.5 px-3 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      کاتالوگ ۸ صفحه‌ای A4
                    </button>
                  </div>

                  <a
                    href={prop.githubPagesUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>باز کردن لینک مستقیم گیت‌هاب</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#0284C7]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};
