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
    const onScroll = () => setScrolled(window.scrollY > 8);
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-7 h-7 rounded-lg bg-blue-700 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 16 16"
              fill="none"
            >
              <rect x="2" y="2" width="5" height="5" rx="1" fill="white" opacity="0.9" />
              <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.6" />
              <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.6" />
              <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.9" />
            </svg>
          </div>
          <span className="text-slate-900 font-semibold text-sm tracking-tight">
            CivicAI
          </span>
          <span className="text-slate-400 text-xs font-normal hidden sm:inline">
            Inc.
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <button
            onClick={switchLang}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-2.5 py-1 rounded-md border border-slate-200 hover:border-slate-300 transition-all"
          >
            {otherLocale.toUpperCase()}
          </button>
          <Link
            href="/contact"
            className="text-sm font-semibold bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors"
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
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-5 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="py-2.5 px-3 text-sm text-slate-700 hover:bg-slate-50 rounded-md"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-3 mt-2 border-t border-slate-100">
            <button
              onClick={switchLang}
              className="text-xs font-semibold text-slate-500 border border-slate-200 px-2.5 py-1 rounded-md"
            >
              {otherLocale.toUpperCase()}
            </button>
            <Link
              href="/contact"
              className="text-sm font-semibold bg-blue-700 text-white px-4 py-2 rounded-lg"
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
