import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Footer() {
  const t = await getTranslations("footer");

  const platformLinks = [
    { href: "/plateformes", label: "AgentHub Platform" },
    { href: "/plateformes", label: "NexHire EIP" },
    { href: "/plateformes", label: "AttenteZéro" },
  ] as const;

  const companyLinks = [
    { href: "/pourquoi", label: t("company_title") === "Company" ? "Why CivicAI" : "Pourquoi CivicAI" },
    { href: "/innovation", label: "Innovation" },
    { href: "/carrieres", label: t("company_title") === "Company" ? "Careers" : "Carrières" },
    { href: "/contact", label: "Contact" },
  ] as const;

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="5" height="5" rx="1" fill="white" opacity="0.9" />
                  <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.6" />
                  <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.6" />
                  <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.9" />
                </svg>
              </div>
              <span className="text-white font-semibold text-sm">CivicAI Inc.</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
            <p className="text-xs text-slate-500 mt-4">Trois-Rivières, Québec, Canada</p>
          </div>

          {/* Platforms */}
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              {t("platforms_title")}
            </div>
            <ul className="space-y-2.5">
              {platformLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              {t("company_title")}
            </div>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-slate-500">{t("legal")}</p>
          <p className="text-xs text-slate-600">{t("made")}</p>
        </div>
      </div>
    </footer>
  );
}
