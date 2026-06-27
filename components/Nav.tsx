"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

export default function Nav({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const otherLocale = locale === "fr" ? "en" : "fr";
  const switchLang = () => {
    router.push(pathname, { locale: otherLocale as "fr" | "en" });
  };

  const links = [
    { href: "/plateformes" as const, label: t("platforms") },
    { href: "/pourquoi" as const, label: t("why") },
    { href: "/innovation" as const, label: t("innovation") },
    { href: "/carrieres" as const, label: t("careers") },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-150 ${
        scrolled ? "bg-white border-b border-slate-200" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="bg-slate-950 px-3 py-1.5">
            <span className="text-white font-black text-sm tracking-widest uppercase">
              CivicAI
            </span>
          </div>
          <span className="text-slate-400 text-xs font-medium hidden sm:inline tracking-wide">
            Inc.
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 flex-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs font-semibold text-slate-500 hover:text-slate-900 uppercase tracking-widest transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <button
            onClick={switchLang}
            className="text-xs font-semibold text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-colors"
          >
            {otherLocale.toUpperCase()}
          </button>
          <Link
            href="/contact"
            className="text-xs font-semibold bg-slate-950 hover:bg-slate-800 text-white px-4 py-2.5 uppercase tracking-widest transition-colors"
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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs font-semibold text-slate-500 uppercase tracking-widest"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
            <button onClick={switchLang} className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
              {otherLocale.toUpperCase()}
            </button>
            <Link
              href="/contact"
              className="text-xs font-semibold bg-slate-950 text-white px-4 py-2.5 uppercase tracking-widest"
              onClick={() => setOpen(false)}
            >
              {t("demo")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
