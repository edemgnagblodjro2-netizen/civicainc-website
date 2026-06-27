"use client";

import { useState, useEffect, useCallback } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

type SlideType = "hero" | "image" | "gradient";

interface Slide {
  id: string;
  type: SlideType;
  badge: string | null;
  headlineKey?: string;
  headline?: string;
  subtitleKey?: string;
  subtitle?: string;
  ctaPrimary: { labelKey?: string; label?: string; href: "/contact" | "/plateformes" | "/pourquoi" };
  ctaSecondary?: { labelKey?: string; label?: string; href: "/plateformes" };
  // image slides
  imageSrc?: string;
  imageOverlay?: string;
  lightBg?: boolean;
  // gradient/svg slides
  gradient?: string;
  glow?: string;
  rightVisual?: "testimonial" | "svg-innovation" | "svg-gouvernance" | "svg-securite" | "svg-pme";
}

const SLIDES: Slide[] = [
  {
    id: "main",
    type: "hero",
    badge: null,
    headlineKey: "title",
    subtitleKey: "subtitle",
    ctaPrimary: { labelKey: "cta_demo", href: "/contact" },
    ctaSecondary: { labelKey: "cta_platforms", href: "/plateformes" },
    gradient: "linear-gradient(135deg, #060e1f 0%, #0a1730 55%, #0d1e3a 100%)",
    glow: "rgba(24,87,232,0.18)",
    rightVisual: "testimonial",
  },
  {
    id: "gouvernance",
    type: "image",
    imageSrc: "/slide-gouvernance.jpg",
    imageOverlay: "linear-gradient(to right, rgba(5,8,20,0.92) 0%, rgba(5,8,20,0.82) 40%, rgba(5,8,20,0.35) 65%, transparent 85%)",
    badge: "Gouvernance IA",
    headline: "Des pratiques de gouvernance solides pour des organisations plus fiables, agiles et durables.",
    subtitle: "Transparence · Responsabilité · Conformité · Performance",
    ctaPrimary: { label: "Voir AgentHub Platform", href: "/plateformes" },
  },
  {
    id: "ia-performance",
    type: "image",
    imageSrc: "/slide-ia.jpg",
    imageOverlay: "linear-gradient(to right, rgba(3,6,15,0.93) 0%, rgba(3,6,15,0.83) 40%, rgba(3,6,15,0.4) 65%, transparent 85%)",
    badge: "Optimisation & Performance IA",
    headline: "Allez plus rapidement avec l'IA de CivicAI.",
    subtitle: "Réduction de coûts. Maximisation des bénéfices. L'intelligence artificielle au service de votre performance.",
    ctaPrimary: { label: "Découvrir nos plateformes", href: "/plateformes" },
  },
  {
    id: "pme",
    type: "image",
    imageSrc: "/slide-pme.jpg",
    imageOverlay: "linear-gradient(to right, rgba(5,10,28,0.92) 0%, rgba(5,10,28,0.82) 40%, rgba(5,10,28,0.3) 65%, transparent 85%)",
    badge: "PME · Entreprises · Institutions",
    headline: "Votre succès, notre priorité.",
    subtitle: "Des solutions IA intelligentes et accessibles pour propulser votre organisation vers l'avenir.",
    ctaPrimary: { label: "Demander une démo", href: "/contact" },
  },
  {
    id: "transformation",
    type: "image",
    imageSrc: "/slide-transformation.jpg",
    imageOverlay: "linear-gradient(to right, rgba(5,10,25,0.92) 0%, rgba(5,10,25,0.82) 40%, rgba(5,10,25,0.3) 65%, transparent 85%)",
    badge: "Transformation numérique",
    headline: "Accélérez votre transformation numérique avec des solutions IA concrètes.",
    subtitle: "De l'évaluation initiale au déploiement — CivicAI vous accompagne à chaque étape.",
    ctaPrimary: { label: "Notre approche", href: "/pourquoi" },
  },
];

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

const SVG_SECURITE = (
  <svg width="160" height="160" viewBox="0 0 180 180" fill="none" className="opacity-30">
    <rect x="40" y="82" width="100" height="75" rx="8" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)" />
    <path d="M60 82 L60 62 C60 40 120 40 120 62 L120 82" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <circle cx="90" cy="119" r="12" fill="rgba(255,255,255,0.18)" stroke="white" strokeWidth="1.5" />
    <line x1="90" y1="131" x2="90" y2="143" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="40" cy="30" r="4" fill="white" fillOpacity="0.25" />
    <circle cx="140" cy="30" r="4" fill="white" fillOpacity="0.25" />
    <circle cx="20" cy="90" r="4" fill="white" fillOpacity="0.25" />
    <circle cx="160" cy="90" r="4" fill="white" fillOpacity="0.25" />
  </svg>
);

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
  const headline = slide.headlineKey ? t(slide.headlineKey as Parameters<typeof t>[0]) : (slide.headline ?? "");
  const subtitle = slide.subtitleKey ? t(slide.subtitleKey as Parameters<typeof t>[0]) : (slide.subtitle ?? "");
  const ctaLabel = slide.ctaPrimary.labelKey ? t(slide.ctaPrimary.labelKey as Parameters<typeof t>[0]) : (slide.ctaPrimary.label ?? "");
  const ctaSecLabel = slide.ctaSecondary?.labelKey ? t(slide.ctaSecondary.labelKey as Parameters<typeof t>[0]) : slide.ctaSecondary?.label;

  const minH = "calc(100vh - 144px)";

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "calc(100vh - 144px)", minHeight: "560px" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background: gradient or image ── */}
      {slide.type === "image" && slide.imageSrc ? (
        <div className="absolute inset-0">
          <Image
            key={`img-${slide.id}`}
            src={slide.imageSrc}
            alt={badge ?? ""}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={false}
          />
          {!slide.lightBg && slide.imageOverlay && (
            <div className="absolute inset-0" style={{ background: slide.imageOverlay }} />
          )}
        </div>
      ) : (
        <>
          <div className="absolute inset-0 transition-all duration-1000" style={{ background: slide.gradient }} />
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
          {slide.glow && (
            <div
              className="absolute -top-32 -right-32 w-[560px] h-[560px] pointer-events-none"
              style={{ background: `radial-gradient(circle, ${slide.glow} 0%, transparent 65%)` }}
            />
          )}
        </>
      )}

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-44 pb-14 flex flex-col h-full">

        {slide.type === "image" ? (
          /* Full-bleed image slide */
          slide.lightBg ? (
            /* Light-background slide: image has embedded text, show only CTA at bottom */
            <div className="flex-1 flex items-end justify-center pb-8">
              <div key={`txt-${animKey}`} style={{ animation: "fadeSlideIn 0.55s ease both" }}>
                <Link
                  href={slide.ctaPrimary.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white px-7 py-3.5 rounded-full shadow-lg transition-all hover:opacity-90 active:scale-95"
                  style={{ background: "#1857e8" }}
                >
                  {ctaLabel} <span>→</span>
                </Link>
              </div>
            </div>
          ) : (
          /* Dark image slide: text anchored left */
          <div className="flex-1 flex items-center">
            <div
              key={`txt-${animKey}`}
              className="max-w-xl"
              style={{ animation: "fadeSlideIn 0.55s ease both" }}
            >
              {badge && (
                <div
                  className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full border text-xs font-semibold text-white/80"
                  style={{ borderColor: "rgba(255,255,255,0.2)", background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#ffd23e", boxShadow: "0 0 6px #ffd23e80" }} />
                  {badge}
                </div>
              )}

              {headline && (
                <h1
                  className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-5"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {headline}
                </h1>
              )}

              {subtitle && (
                <p className="text-base lg:text-lg leading-relaxed mb-8 max-w-md" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {subtitle}
                </p>
              )}

              <Link
                href={slide.ctaPrimary.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white px-7 py-3.5 rounded-full transition-all hover:opacity-90 active:scale-95"
                style={{ background: "#1857e8" }}
              >
                {ctaLabel} <span>→</span>
              </Link>
            </div>
          </div>
          )
        ) : (
          /* Gradient slide: 2-column layout */
          <div className="flex-1 grid lg:grid-cols-2 gap-14 items-center">

            {/* Left — text */}
            <div key={`txt-${animKey}`} style={{ animation: "fadeSlideIn 0.5s ease both" }}>
              <div
                className="inline-flex items-center gap-2 mb-7 px-3.5 py-1.5 rounded-full border text-xs font-medium text-white/70"
                style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#ffd23e", boxShadow: "0 0 6px #ffd23e80" }} />
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
                  href={slide.ctaPrimary.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-full transition-all hover:opacity-90 active:scale-95"
                  style={{ background: "#1857e8" }}
                >
                  {ctaLabel} <span>→</span>
                </Link>
                {ctaSecLabel && slide.ctaSecondary && (
                  <Link
                    href={slide.ctaSecondary.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 px-6 py-3 rounded-full border transition-all hover:bg-white/10 hover:text-white"
                    style={{ borderColor: "rgba(255,255,255,0.2)" }}
                  >
                    {ctaSecLabel}
                  </Link>
                )}
              </div>
            </div>

            {/* Right — visual */}
            <div
              key={`vis-${animKey}`}
              className="hidden lg:flex justify-end"
              style={{ animation: "fadeSlideIn 0.6s ease both" }}
            >
              {slide.rightVisual === "testimonial" ? (
                <div className="flex flex-col gap-4 w-full max-w-sm">

                  {/* Value proposition card */}
                  <div
                    className="w-full rounded-2xl overflow-hidden shadow-2xl"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    {/* Card header */}
                    <div
                      className="px-6 py-4 flex items-center justify-between"
                      style={{ background: "linear-gradient(135deg, #0d1e3a 0%, #1857e8 100%)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      <span className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                        Pourquoi CivicAI ?
                      </span>
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(255,211,62,0.15)", color: "#ffd23e", border: "1px solid rgba(255,211,62,0.3)" }}
                      >
                        Éditeur logiciel
                      </span>
                    </div>

                    {/* Feature rows */}
                    {[
                      { icon: "⚡", label: "Déploiement", value: "En 30 à 90 jours" },
                      { icon: "🔒", label: "Sécurité", value: "Multi-tenant isolé" },
                      { icon: "📊", label: "Résultats", value: "Mesurables & documentés" },
                      { icon: "🍁", label: "Origine", value: "Développé au Québec" },
                    ].map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between px-6 py-3"
                        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-base leading-none">{row.icon}</span>
                          <span className="text-white/50 text-xs font-medium">{row.label}</span>
                        </div>
                        <span className="text-white text-xs font-semibold">{row.value}</span>
                      </div>
                    ))}
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
                <div
                  className="w-64 h-64 lg:w-72 lg:h-72 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {SVG_SECURITE}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Sector chips — bottom of all slides except light-bg */}
        {!slide.lightBg && <div className="mt-10 pt-6 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: slide.type === "image" ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.3)" }}
          >
            {t("sectors_label")}
          </p>
          <div className="flex flex-wrap gap-2">
            {sectorItems.map((s) => (
              <span
                key={s.label}
                className="text-xs px-3.5 py-1.5 rounded-full border"
                style={{
                  color: slide.type === "image" ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.45)",
                  borderColor: slide.type === "image" ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)",
                  background: slide.type === "image" ? "rgba(0,0,0,0.25)" : "transparent",
                  backdropFilter: slide.type === "image" ? "blur(4px)" : "none",
                }}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all"
        style={{
          background: slide.lightBg ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.3)",
          border: slide.lightBg ? "1px solid rgba(0,0,0,0.12)" : "1px solid rgba(255,255,255,0.15)",
          backdropFilter: "blur(6px)",
        }}
        aria-label="Précédent"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={slide.lightBg ? "#0a1730" : "white"} strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all"
        style={{
          background: slide.lightBg ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.3)",
          border: slide.lightBg ? "1px solid rgba(0,0,0,0.12)" : "1px solid rgba(255,255,255,0.15)",
          backdropFilter: "blur(6px)",
        }}
        aria-label="Suivant"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={slide.lightBg ? "#0a1730" : "white"} strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === current ? "28px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background: slide.lightBg
                ? (i === current ? "#1857e8" : "rgba(0,0,0,0.25)")
                : (i === current ? "#ffd23e" : "rgba(255,255,255,0.3)"),
              transition: "all 0.35s ease",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
