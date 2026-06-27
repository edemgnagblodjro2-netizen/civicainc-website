import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Footer() {
  const t = await getTranslations("footer");

  const platformLinks = [
    { href: "/plateformes#agenthub", label: "AgentHub Platform" },
    { href: "/plateformes#nexhire", label: "NexHire EIP" },
    { href: "/plateformes#attentezero", label: "AttenteZéro" },
  ] as const;

  const companyLinks = [
    { href: "/pourquoi", label: locale => locale === "fr" ? "Pourquoi CivicAI" : "Why CivicAI" },
    { href: "/innovation", label: () => "Innovation" },
    { href: "/carrieres", label: locale => locale === "fr" ? "Carrières" : "Careers" },
    { href: "/contact", label: () => "Contact" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pb-16 border-b border-slate-800">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="bg-white px-3 py-1.5">
                <span className="text-slate-950 font-black text-sm tracking-widest uppercase">
                  CivicAI
                </span>
              </div>
              <span className="text-slate-500 text-xs font-medium tracking-wide">Inc.</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-4">
              {t("tagline")}
            </p>
            <p className="text-xs text-slate-600 uppercase tracking-widest">
              Trois-Rivières, Québec, Canada
            </p>
          </div>

          {/* Platforms */}
          <div>
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.2em] mb-5">
              {t("platforms_title")}
            </div>
            <ul className="space-y-3">
              {platformLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.2em] mb-5">
              {t("company_title")}
            </div>
            <ul className="space-y-3">
              {[
                { href: "/pourquoi", label: t("company_title") === "Company" ? "Why CivicAI" : "Pourquoi CivicAI" },
                { href: "/innovation", label: "Innovation" },
                { href: "/carrieres", label: t("company_title") === "Company" ? "Careers" : "Carrières" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-slate-600 uppercase tracking-widest">{t("legal")}</p>
          <p className="text-xs text-slate-700 uppercase tracking-widest">{t("made")}</p>
        </div>
      </div>
    </footer>
  );
}
