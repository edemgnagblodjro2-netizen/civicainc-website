"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";

const PLATFORMS_MENU = [
  {
    href: "/plateformes" as const,
    name: "AgentHub Platform",
    desc: "Gouvernance IA & optimisation SaaS",
    color: "#1857e8",
  },
  {
    href: "/plateformes" as const,
    name: "ATLAS Insights",
    desc: "Analytique pour le secteur public",
    color: "#6366f1",
  },
  {
    href: "/plateformes" as const,
    name: "AttenteZéro",
    desc: "Gestion intelligente des files",
    color: "#0891b2",
  },
  {
    href: "/plateformes" as const,
    name: "NexHire EIP",
    desc: "Recrutement augmenté par l'IA",
    color: "#10b981",
  },
];

export default function Nav({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const otherLocale = locale === "fr" ? "en" : "fr";
  const switchLang = () => {
    const path = window.location.pathname;
    const newPath = path.replace(/^\/(fr|en)(\/|$)/, `/${otherLocale}$2`);
    window.location.assign(newPath || `/${otherLocale}/`);
  };

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(true);
  };
  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(false), 120);
  };

  const segments =
    locale === "fr"
      ? [
          { label: "Chambres de commerce", href: "/plateformes" as const },
          { label: "Municipalités", href: "/plateformes" as const },
          { label: "Entreprises", href: "/plateformes" as const },
        ]
      : [
          { label: "Chambers of Commerce", href: "/plateformes" as const },
          { label: "Municipalities", href: "/plateformes" as const },
          { label: "Enterprises", href: "/plateformes" as const },
        ];

  const otherLinks = [
    { href: "/pourquoi" as const, label: t("why") },
    { href: "/innovation" as const, label: t("innovation") },
    { href: "/actualites" as const, label: t("actualites") },
    { href: "/carrieres" as const, label: t("careers") },
    { href: "/contact" as const, label: t("contact") },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${scrolled ? "shadow-lg" : ""}`}>

      {/* ── Tier 1: Utility bar ── */}
      <div className="hidden md:block" style={{ background: "#0a1730" }}>
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">
          {/* Segment quick links */}
          <div className="flex items-center">
            {segments.map((s, i) => (
              <span key={s.label} className="flex items-center">
                <Link
                  href={s.href}
                  className="text-xs font-medium transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {s.label}
                </Link>
                {i < segments.length - 1 && (
                  <span className="mx-3 text-xs" style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
                )}
              </span>
            ))}
          </div>

          {/* Right: social + lang */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>
              Suivez-nous
            </span>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/civicai-inc-aa2282314/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* X */}
            <a href="https://x.com/startup_aya" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
            <button
              onClick={switchLang}
              className="text-xs font-semibold transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              {otherLocale.toUpperCase()}
            </button>
          </div>
        </div>
      </div>

      {/* ── Tier 2: Logo + utility ── */}
      <div className="bg-white" style={{ borderBottom: "1px solid #f1f5f9" }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <Image
              src="/logo-civicai.png"
              alt="CivicAI"
              width={36}
              height={36}
              className="object-contain"
              onError={() => {}}
            />
            <div className="flex items-baseline gap-1.5">
              <span
                className="font-bold text-[#0a1730] text-lg tracking-tight leading-none"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                CivicAI
              </span>
              <span className="text-slate-400 text-xs font-medium hidden sm:inline">Inc.</span>
            </div>
          </Link>

          {/* Desktop utility right */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/contact"
              className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-[#0a1730] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Contact
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-white px-5 py-2 rounded-full transition-all hover:opacity-90"
              style={{ background: "#1857e8" }}
            >
              {t("demo")}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-slate-600"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Tier 3: Nav bar ── */}
      <div
        className="hidden md:block"
        style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}
      >
        <div className="max-w-7xl mx-auto px-6 h-11 flex items-center gap-1">

          {/* Home icon */}
          <Link
            href="/"
            className="flex items-center justify-center w-9 h-9 rounded text-slate-400 hover:text-[#0a1730] hover:bg-slate-200 transition-colors mr-2"
            aria-label="Accueil"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </Link>

          {/* Plateformes — with dropdown trigger */}
          <div
            className="relative"
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
          >
            <button
              className={`flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded transition-colors ${openDropdown ? "text-[#1857e8] bg-[#eaf1ff]" : "text-slate-600 hover:text-[#0a1730] hover:bg-slate-100"}`}
            >
              {t("platforms")}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                className={`transition-transform ${openDropdown ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>

          {/* Other links */}
          {otherLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium px-3 py-1.5 rounded transition-colors text-slate-600 hover:text-[#0a1730] hover:bg-slate-100 whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── Mega-menu dropdown ── */}
      {openDropdown && (
        <div
          className="absolute left-0 right-0 top-full bg-white shadow-2xl hidden md:block"
          style={{ borderTop: "2px solid #1857e8" }}
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
        >
          <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-12 gap-8">

            {/* Left — links list */}
            <div className="col-span-4 border-r border-slate-100 pr-8">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                Toutes les plateformes
              </p>
              <ul className="space-y-1">
                {PLATFORMS_MENU.map((p) => (
                  <li key={p.name}>
                    <Link
                      href={p.href}
                      onClick={() => setOpenDropdown(false)}
                      className="flex items-center justify-between group px-3 py-3 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: p.color }}
                        />
                        <div>
                          <p className="text-sm font-semibold text-[#0a1730] group-hover:text-[#1857e8] transition-colors">
                            {p.name}
                          </p>
                          <p className="text-xs text-slate-400">{p.desc}</p>
                        </div>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1857e8" strokeWidth="2" strokeLinecap="round" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Center — description */}
            <div className="col-span-4 flex flex-col justify-center">
              <span
                className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4 self-start"
                style={{ background: "#eaf1ff", color: "#1857e8" }}
              >
                Nos plateformes
              </span>
              <h3
                className="text-2xl font-bold text-[#0a1730] leading-snug mb-3"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Trois solutions IA déployées pour les organisations québécoises
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                Gouvernance SaaS, analytique publique, gestion des files d'attente et recrutement augmenté — chaque plateforme répond à un besoin réel.
              </p>
              <Link
                href="/plateformes"
                onClick={() => setOpenDropdown(false)}
                className="self-start inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-full transition-all hover:opacity-90"
                style={{ background: "#1857e8" }}
              >
                Voir toutes les plateformes →
              </Link>
            </div>

            {/* Right — featured card */}
            <div className="col-span-4">
              <div
                className="rounded-2xl p-6 h-full flex flex-col justify-between"
                style={{ background: "linear-gradient(145deg, #0a1730 0%, #1857e8 100%)" }}
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
                    À la une
                  </span>
                  <h4
                    className="text-xl font-bold text-white mt-2 mb-3 leading-tight"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    AgentHub Platform 2.0
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Le nouveau tableau de bord de gouvernance IA — inventaire SaaS automatique, politiques équipe et rapport d'impact documenté.
                  </p>
                </div>
                <Link
                  href="/plateformes"
                  onClick={() => setOpenDropdown(false)}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0a1730] px-5 py-2.5 rounded-full bg-white transition-all hover:bg-slate-100 self-start"
                >
                  Découvrir →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Mobile menu ── */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          {/* Segment links */}
          <div className="px-6 py-3 flex flex-wrap gap-x-4 gap-y-1 border-b border-slate-100" style={{ background: "#f8fafc" }}>
            {segments.map((s) => (
              <Link key={s.label} href={s.href} className="text-xs font-medium text-slate-500" onClick={() => setOpen(false)}>
                {s.label}
              </Link>
            ))}
          </div>

          <div className="px-6 py-5 flex flex-col gap-4">
            {/* Platforms section */}
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{t("platforms")}</p>
            <div className="flex flex-col gap-2 pl-3">
              {PLATFORMS_MENU.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  className="text-sm font-medium text-slate-700 flex items-center gap-2"
                  onClick={() => setOpen(false)}
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.color }} />
                  {p.name}
                </Link>
              ))}
            </div>
            <div className="h-px bg-slate-100" />
            {/* Other links */}
            {otherLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-base font-medium text-slate-700 hover:text-[#0a1730]"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
              <button onClick={() => { switchLang(); setOpen(false); }} className="text-sm font-medium text-slate-400">
                {otherLocale.toUpperCase()}
              </button>
              <Link
                href="/contact"
                className="text-sm font-semibold text-white px-5 py-2 rounded-full"
                style={{ background: "#1857e8" }}
                onClick={() => setOpen(false)}
              >
                {t("demo")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
