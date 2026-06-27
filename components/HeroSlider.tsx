"use client";

import { useState, useEffect, useCallback } from "react";
import { Link } from "@/i18n/navigation";

const SLIDES = [
  {
    badge: "Innovation Technologique",
    headline: "L'intelligence artificielle au cœur de votre transformation",
    sub: "Trois plateformes IA déployées en 90 jours pour accélérer votre organisation québécoise.",
    cta: "Découvrir nos plateformes",
    href: "/plateformes" as const,
    gradient: "linear-gradient(145deg, #060e1f 0%, #0d1e3a 45%, #1857e8 100%)",
    accentGlow: "rgba(24,87,232,0.45)",
    icon: (
      <svg width="180" height="180" viewBox="0 0 180 180" fill="none" className="opacity-25">
        <circle cx="90" cy="90" r="60" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" />
        <circle cx="90" cy="90" r="30" fill="rgba(255,255,255,0.1)" stroke="white" strokeWidth="1.5" />
        <circle cx="90" cy="90" r="8" fill="white" fillOpacity="0.6" />
        <line x1="90" y1="30" x2="90" y2="60" stroke="white" strokeWidth="1.5" />
        <line x1="90" y1="120" x2="90" y2="150" stroke="white" strokeWidth="1.5" />
        <line x1="30" y1="90" x2="60" y2="90" stroke="white" strokeWidth="1.5" />
        <line x1="120" y1="90" x2="150" y2="90" stroke="white" strokeWidth="1.5" />
        <circle cx="90" cy="30" r="6" fill="white" fillOpacity="0.5" />
        <circle cx="90" cy="150" r="6" fill="white" fillOpacity="0.5" />
        <circle cx="30" cy="90" r="6" fill="white" fillOpacity="0.5" />
        <circle cx="150" cy="90" r="6" fill="white" fillOpacity="0.5" />
        <circle cx="47" cy="47" r="5" fill="white" fillOpacity="0.3" />
        <circle cx="133" cy="47" r="5" fill="white" fillOpacity="0.3" />
        <circle cx="47" cy="133" r="5" fill="white" fillOpacity="0.3" />
        <circle cx="133" cy="133" r="5" fill="white" fillOpacity="0.3" />
      </svg>
    ),
  },
  {
    badge: "Gouvernance IA",
    headline: "Maîtrisez vos outils SaaS avec une gouvernance IA robuste",
    sub: "Politiques claires, accès contrôlés, licences optimisées — documentés et mesurables dès le premier mois.",
    cta: "Voir AgentHub Platform",
    href: "/plateformes" as const,
    gradient: "linear-gradient(145deg, #051818 0%, #083030 45%, #0d6e6e 100%)",
    accentGlow: "rgba(13,110,110,0.45)",
    icon: (
      <svg width="180" height="180" viewBox="0 0 180 180" fill="none" className="opacity-25">
        <path d="M90 15 L155 45 L155 105 C155 138 120 160 90 170 C60 160 25 138 25 105 L25 45 Z" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)" />
        <path d="M90 40 L135 62 L135 102 C135 124 113 140 90 148 C67 140 45 124 45 102 L45 62 Z" stroke="white" strokeWidth="1" fill="rgba(255,255,255,0.05)" />
        <path d="M68 92 L82 106 L112 76" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    badge: "Sécurité TI",
    headline: "Architecture sécurisée et certifiée pour le secteur public",
    sub: "Multi-tenant isolé, conformité québécoise, protection des données garantie — la confiance comme fondation.",
    cta: "Pourquoi CivicAI",
    href: "/pourquoi" as const,
    gradient: "linear-gradient(145deg, #05080f 0%, #0e0b2a 50%, #2d2a6e 100%)",
    accentGlow: "rgba(99,102,241,0.45)",
    icon: (
      <svg width="180" height="180" viewBox="0 0 180 180" fill="none" className="opacity-25">
        <rect x="40" y="80" width="100" height="75" rx="8" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)" />
        <path d="M60 80 L60 60 C60 38 120 38 120 60 L120 80" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="90" cy="117" r="12" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="1.5" />
        <line x1="90" y1="129" x2="90" y2="143" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="40" cy="30" r="4" fill="white" fillOpacity="0.3" />
        <circle cx="140" cy="30" r="4" fill="white" fillOpacity="0.3" />
        <circle cx="20" cy="90" r="4" fill="white" fillOpacity="0.3" />
        <circle cx="160" cy="90" r="4" fill="white" fillOpacity="0.3" />
      </svg>
    ),
  },
  {
    badge: "PME · PMI · Entreprises",
    headline: "Les PME québécoises propulsées par l'IA responsable",
    sub: "De la chambre de commerce à l'entreprise individuelle — CivicAI accompagne chaque organisation vers le numérique.",
    cta: "Demander une démo",
    href: "/contact" as const,
    gradient: "linear-gradient(145deg, #0a1730 0%, #08253a 50%, #0891b2 100%)",
    accentGlow: "rgba(8,145,178,0.45)",
    icon: (
      <svg width="180" height="180" viewBox="0 0 180 180" fill="none" className="opacity-25">
        <rect x="20" y="80" width="45" height="75" rx="4" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)" />
        <rect x="67" y="55" width="45" height="100" rx="4" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.08)" />
        <rect x="115" y="68" width="45" height="87" rx="4" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)" />
        <path d="M35 70 C55 50 70 45 90 30 C110 15 135 40 150 55" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="90" cy="30" r="5" fill="white" fillOpacity="0.6" />
        <circle cx="35" cy="70" r="4" fill="white" fillOpacity="0.4" />
        <circle cx="150" cy="55" r="4" fill="white" fillOpacity="0.4" />
      </svg>
    ),
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next, paused]);

  const slide = SLIDES[current];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "500px", transition: "background 1s ease" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background — changes with slide */}
      <div
        className="absolute inset-0"
        key={current}
        style={{ background: slide.gradient }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial glow bottom-right */}
      <div
        className="absolute -bottom-20 right-10 w-96 h-96 pointer-events-none transition-all duration-1000"
        style={{ background: `radial-gradient(circle, ${slide.accentGlow} 0%, transparent 65%)` }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: text */}
          <div>
            <span
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(255,211,62,0.15)", color: "#ffd23e", border: "1px solid rgba(255,211,62,0.3)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              {slide.badge}
            </span>

            <h2
              className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              {slide.headline}
            </h2>

            <p className="text-white/55 text-base leading-relaxed mb-8 max-w-lg">
              {slide.sub}
            </p>

            <Link
              href={slide.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-full transition-all hover:opacity-90 active:scale-95"
              style={{ background: "#1857e8" }}
            >
              {slide.cta} <span>→</span>
            </Link>
          </div>

          {/* Right: decorative icon */}
          <div className="hidden lg:flex items-center justify-center">
            <div
              className="w-72 h-72 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {slide.icon}
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-white/20"
        style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
        aria-label="Diapositive précédente"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-white/20"
        style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
        aria-label="Diapositive suivante"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Diapositive ${i + 1}`}
            className="transition-all duration-300"
            style={{
              width: i === current ? "28px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background: i === current ? "#ffd23e" : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
