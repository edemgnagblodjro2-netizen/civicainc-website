import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const FOOTER_LINKS = [
  {
    col: "Nos plateformes",
    items: [
      { label: "AgentHub Platform", href: "/plateformes" as const },
      { label: "ATLAS Insights", href: "/plateformes" as const },
      { label: "AttenteZéro", href: "/plateformes" as const },
      { label: "NexHire EIP", href: "/plateformes" as const },
    ],
  },
  {
    col: "Entreprise",
    items: [
      { label: "Pourquoi CivicAI", href: "/pourquoi" as const },
      { label: "Innovation", href: "/innovation" as const },
      { label: "Carrières", href: "/carrieres" as const },
      { label: "Contact", href: "/contact" as const },
    ],
  },
  {
    col: "Support",
    items: [
      { label: "Sécurité & conformité", href: "/pourquoi" as const },
      { label: "Centre d'aide", href: "/contact" as const },
      { label: "Politique de confidentialité", href: "/politique-confidentialite" as const },
      { label: "Conditions d'utilisation", href: "/conditions-utilisation" as const },
    ],
  },
  {
    col: "Secteurs",
    items: [
      { label: "Chambres de commerce", href: "/plateformes" as const },
      { label: "Municipalités", href: "/plateformes" as const },
      { label: "PME québécoises", href: "/pourquoi" as const },
      { label: "Secteur public", href: "/pourquoi" as const },
    ],
  },
];

const SOCIAL = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0a1730" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
];

export default async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer>

      {/* ── Main links grid ── */}
      <div style={{ background: "#0a1730" }}>
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          {/* Brand */}
          <div className="flex items-center gap-3 mb-10">
            <Image
              src="/logo-civicai.png"
              alt="CivicAI"
              width={32}
              height={32}
              className="object-contain"
            />
            <span
              className="text-xl font-bold text-white"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              CivicAI Inc.
            </span>
          </div>

          {/* 4-column link grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {FOOTER_LINKS.map((col) => (
              <div key={col.col}>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {col.col}
                </p>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 text-sm transition-colors group"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" className="flex-shrink-0 group-hover:translate-x-0.5 transition-transform">
                          <path d="M1 1L5 5L1 9" stroke="#ffd23e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="group-hover:text-white transition-colors">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Social + tagline bar ── */}
      <div style={{ background: "#060e1a", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/30 max-w-sm leading-relaxed">
            {t("tagline")} — Trois-Rivières, Québec, Canada 🍁
          </p>
          <div className="flex items-center gap-4">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-white/40 hover:text-white transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Platform logos ── */}
      <div style={{ background: "#060e1a" }}>
        <div
          className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center gap-6"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
          <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.2)" }}>
            Nos marques
          </span>
          {[
            { src: "/logo-civicai.png", alt: "CivicAI", label: "CivicAI Inc." },
            { src: "/logo-atlas.png", alt: "ATLAS", label: "ATLAS Insights" },
            { src: "/logo-agenthub.png", alt: "AgentHub", label: "AgentHub Platform" },
          ].map((brand) => (
            <div key={brand.label} className="flex items-center gap-1.5 opacity-30 hover:opacity-60 transition-opacity">
              <Image src={brand.src} alt={brand.alt} width={18} height={18} className="object-contain" />
              <span className="text-white text-xs">{brand.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Copyright ── */}
      <div style={{ background: "#040810" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-end">
          <p className="text-xs" style={{ color: "rgba(255,211,62,0.6)" }}>
            {t("legal")}
          </p>
        </div>
      </div>

      {/* ── Help bar ── */}
      <div style={{ background: "#0a1730", borderTop: "2px solid #1857e8" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "#ffd23e" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a1730" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <p className="text-white/60 text-sm">
              Notre équipe est prête à vous aider — contactez-nous en tout temps.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white px-4 py-2 rounded transition-all hover:opacity-90"
              style={{ background: "#1857e8" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Demander une démo
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded transition-all hover:bg-white/10"
              style={{ color: "#ffd23e", border: "1px solid rgba(255,211,62,0.3)" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
              Commentaires
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
