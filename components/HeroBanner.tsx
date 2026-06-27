"use client";

import { useState, useEffect, useCallback } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const SLIDES = [
  {
    id: "main",
    gradient: "linear-gradient(135deg, #060e1f 0%, #0a1730 55%, #0d1e3a 100%)",
    glow: "rgba(24,87,232,0.18)",
    glowPos: "top-right",
    badge: null, // uses t("badge")
    headlineKey: "title",
    subtitleKey: "subtitle",
    ctaPrimary: { labelKey: "cta_demo", href: "/contact" as const },
    ctaSecondary: { labelKey: "cta_platforms", href: "/plateformes" as const },
    rightVisual: "testimonial" as const,
  },
  {
    id: "innovation",
    gradient: "linear-gradient(145deg, #060e1f 0%, #0d1e3a 45%, #1857e8 100%)",
    glow: "rgba(24,87,232,0.35)",
    glowPos: "bottom-right",
    badge: "Innovation Technologique",
    headline: "L'intelligence artificielle au cœur de votre transformation",
    subtitle: "Trois plateformes IA déployées en 90 jours pour accélérer votre organisation québécoise.",
    ctaPrimary: { label: "Découvrir nos plateformes", href: "/plateformes" as const },
    rightVisual: "svg-innovation" as const,
  },
  {
    id: "gouvernance",
    gradient: "linear-gradient(145deg, #051818 0%, #083030 45%, #0d6e6e 100%)",
    glow: "rgba(13,110,110,0.4)",
    glowPos: "bottom-right",
    badge: "Gouvernance IA",
    headline: "Maîtrisez vos outils SaaS avec une gouvernance IA robuste",
    subtitle: "Politiques claires, accès contrôlés, licences optimisées — documentés et mesurables dès le premier mois.",
    ctaPrimary: { label: "Voir AgentHub Platform", href: "/plateformes" as const },
    rightVisual: "svg-gouvernance" as const,
  },
  {
    id: "securite",
    gradient: "linear-gradient(145deg, #05080f 0%, #0e0b2a 50%, #2d2a6e 100%)",
    glow: "rgba(99,102,241,0.4)",
    glowPos: "bottom-right",
    badge: "Sécurité TI",
    headline: "Architecture sécurisée et certifiée pour le secteur public",
    subtitle: "Multi-tenant isolé, conformité québécoise, protection des données garantie — la confiance comme fondation.",
    ctaPrimary: { label: "Pourquoi CivicAI", href: "/pourquoi" as const },
    rightVisual: "svg-securite" as const,
  },
  {
    id: "pme",
    gradient: "linear-gradient(145deg, #0a1730 0%, #08253a 50%, #0891b2 100%)",
    glow: "rgba(8,145,178,0.4)",
    glowPos: "bottom-right",
    badge: "PME · PMI · Entreprises",
    headline: "Les PME québécoises propulsées par l'IA responsable",
    subtitle: "De la chambre de commerce à l'entreprise individuelle — CivicAI accompagne chaque organisation vers le numérique.",
    ctaPrimary: { label: "Demander une démo", href: "/contact" as const },
    rightVisual: "svg-pme" as const,
  },
];

const SVG_VISUALS: Record<string, React.ReactNode> = {
  "svg-innovation": (
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" className="opacity-30">
      <circle cx="90" cy="90" r="60" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" />
      <circle cx="90" cy="90" r="30" fill="rgba(255,255,255,0.08)" stroke="white" strokeWidth="1.5" />
      <circle cx="90" cy="90" r="8" fill="white" fillOpacity="0.5" />
      {[0, 90, 180, 270].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 90 + 30 * Math.cos(rad);
        const y1 = 90 + 30 * Math.sin(rad);
        const x2 = 90 + 60 * Math.cos(rad);
        const y2 = 90 + 60 * Math.sin(rad);
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="1.5" />;
      })}
      {[0, 90, 180, 270].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x = 90 + 63 * Math.cos(rad);
        const y = 90 + 63 * Math.sin(rad);
        return <circle key={deg} cx={x} cy={y} r="6" fill="white" fillOpacity="0.45" />;
      })}
      {[45, 135, 225, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x = 90 + 63 * Math.cos(rad);
        const y = 90 + 63 * Math.sin(rad);
        return <circle key={deg} cx={x} cy={y} r="4" fill="white" fillOpacity="0.25" />;
      })}
    </svg>
  ),
  "svg-gouvernance": (
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" className="opacity-30">
      <path d="M90 15 L155 45 L155 105 C155 138 120 160 90 170 C60 160 25 138 25 105 L25 45 Z" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)" />
      <path d="M90 40 L135 62 L135 102 C135 124 113 140 90 148 C67 140 45 124 45 102 L45 62 Z" stroke="white" strokeWidth="1" fill="rgba(255,255,255,0.05)" />
      <path d="M68 93 L82 107 L113 77" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "svg-securite": (
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" className="opacity-30">
      <rect x="40" y="82" width="100" height="75" rx="8" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)" />
      <path d="M60 82 L60 62 C60 40 120 40 120 62 L120 82" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="90" cy="119" r="12" fill="rgba(255,255,255,0.18)" stroke="white" strokeWidth="1.5" />
      <line x1="90" y1="131" x2="90" y2="143" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      {[[40, 30], [140, 30], [20, 90], [160, 90]].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="white" fillOpacity="0.25" />
      ))}
    </svg>
  ),
  "svg-pme": (
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" className="opacity-30">
      <rect x="20" y="80" width="45" height="75" rx="4" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)" />
      <rect x="67" y="55" width="45" height="100" rx="4" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.08)" />
      <rect x="115" y="68" width="45" height="87" rx="4" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)" />
      <path d="M35 70 C55 50 70 45 90 30 C110 15 135 40 150 55" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="90" cy="30" r="5" fill="white" fillOpacity="0.6" />
      <circle cx="35" cy="70" r="4" fill="white" fillOpacity="0.35" />
      <circle cx="150" cy="55" r="4" fill="white" fillOpacity="0.35" />
    </svg>
  ),
};

const TRUST_BADGES = [
  {
    label: "Gouvernance IA",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Sécurité certifiée",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    label: "Optimisation mesurable",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  { label: "Entreprise québécoise", icon: <span className="text-sm leading-none">🍁</span> },
];

export default function HeroBanner() {
  const t = useTranslations("hero");
  const ts = useTranslations("sectors");
  const sectorItems = ts.raw("items") as { icon: string; label: string }[];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setAnimKey((k) => k + 1);
  }, []);

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next, paused]);

  const slide = SLIDES[current];

  const badge = slide.id === "main" ? t("badge") : slide.badge;
  const headline = slide.id === "main" ? t("title") : slide.headline;
  const subtitle = slide.id === "main" ? t("subtitle") : slide.subtitle;
  const ctaPrimaryLabel = slide.id === "main" ? t("cta_demo") : slide.ctaPrimary?.label;
  const ctaPrimaryHref = slide.ctaPrimary?.href ?? "/contact";
  const ctaSecondaryLabel = slide.id === "main" ? t("cta_platforms") : undefined;
  const ctaSecondaryHref = slide.id === "main" ? "/plateformes" as const : undefined;

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: slide.gradient, transition: "background 1s ease", minHeight: "calc(100vh - 144px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] pointer-events-none transition-all duration-1000"
        style={{ background: `radial-gradient(circle, ${slide.glow} 0%, transparent 65%)` }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(24,87,232,0.07) 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — text */}
          <div key={`text-${animKey}`} style={{ animation: "fadeSlideIn 0.5s ease both" }}>
            <div
              className="inline-flex items-center gap-2 mb-7 px-3.5 py-1.5 rounded-full border text-xs font-medium text-white/70"
              style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#ffd23e", boxShadow: "0 0 6px #ffd23e80" }}
              />
              {badge}
            </div>

            <h1
              className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-5"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              {headline}
            </h1>

            <p className="text-base lg:text-lg text-white/55 leading-relaxed mb-8 max-w-lg">
              {subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={ctaPrimaryHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-full transition-all hover:opacity-90 active:scale-95"
                style={{ background: "#1857e8" }}
              >
                {ctaPrimaryLabel} <span>→</span>
              </Link>
              {ctaSecondaryLabel && ctaSecondaryHref && (
                <Link
                  href={ctaSecondaryHref}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 px-6 py-3 rounded-full border transition-all hover:bg-white/10 hover:text-white"
                  style={{ borderColor: "rgba(255,255,255,0.2)" }}
                >
                  {ctaSecondaryLabel}
                </Link>
              )}
            </div>
          </div>

          {/* Right — visual */}
          <div key={`visual-${animKey}`} className="flex justify-center lg:justify-end" style={{ animation: "fadeSlideIn 0.6s ease both" }}>

            {slide.rightVisual === "testimonial" ? (
              /* ── Testimonial card (slide 1) ── */
              <div className="flex flex-col items-end gap-5 w-full max-w-sm">
                <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
                  {/* Person area */}
                  <div
                    className="h-44 relative flex flex-col items-center justify-end pb-4"
                    style={{ background: "linear-gradient(150deg, #1e3a5f 0%, #1857e8 60%, #6366f1 100%)" }}
                  >
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.07) 1px,transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                    <div className="relative z-10">
                      <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
                        <circle cx="44" cy="30" r="18" fill="rgba(255,255,255,0.22)" />
                        <path d="M6 88 C6 62 22 54 44 54 C66 54 82 62 82 88" fill="rgba(255,255,255,0.16)" />
                      </svg>
                    </div>
                    <div
                      className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(255,211,62,0.15)", color: "#ffd23e", border: "1px solid rgba(255,211,62,0.3)" }}
                    >
                      CCI Régionale
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="p-5" style={{ background: "rgba(255,255,255,0.06)", borderTop: "none", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <p className="text-white/80 text-sm leading-relaxed mb-4 italic">
                      &ldquo;La gouvernance IA de CivicAI nous a permis de reprendre le contrôle de nos outils SaaS et de réduire nos coûts de licence en moins de 90 jours.&rdquo;
                    </p>
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: "#1857e8" }}>
                        MC
                      </div>
                      <div>
                        <p className="text-white text-xs font-semibold">Marie-Claude T.</p>
                        <p className="text-white/40 text-xs">Directrice numérique — Chambre de commerce</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="grid grid-cols-2 gap-2.5 w-full">
                  {TRUST_BADGES.map((b) => (
                    <div
                      key={b.label}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-white/60"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <span className="text-white/45 flex-shrink-0">{b.icon}</span>
                      {b.label}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* ── SVG visual (slides 2-5) ── */
              <div
                className="w-64 h-64 lg:w-72 lg:h-72 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {SVG_VISUALS[slide.rightVisual]}
              </div>
            )}
          </div>
        </div>

        {/* Sector chips */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <p className="text-white/30 text-xs uppercase tracking-widest mb-3">{t("sectors_label")}</p>
          <div className="flex flex-wrap gap-2">
            {sectorItems.map((s) => (
              <span
                key={s.label}
                className="text-white/45 text-xs px-3.5 py-1.5 rounded-full border"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/20"
        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
        aria-label="Précédent"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/20"
        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
        aria-label="Suivant"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === current ? "26px" : "7px",
              height: "7px",
              borderRadius: "4px",
              background: i === current ? "#ffd23e" : "rgba(255,255,255,0.28)",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Fade-in keyframe */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
