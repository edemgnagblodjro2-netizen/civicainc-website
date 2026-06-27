import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Footer() {
  const t = await getTranslations("footer");

  const platformLinks = [
    { href: "/plateformes#agenthub", label: "AgentHub Platform" },
    { href: "/plateformes#nexhire", label: "NexHire EIP" },
    { href: "/plateformes#attentezero", label: "AttenteZéro" },
  ] as const;

  const companyArr = t.raw("company") as string[];
  const companyHrefs = ["/pourquoi", "/innovation", "/carrieres", "/contact"];

  return (
    <footer style={{ background: "#080f1e" }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "#1857e8" }}
              >
                <span className="text-white font-black text-sm">C</span>
              </div>
              <span
                className="font-bold text-white text-lg tracking-tight"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                CivicAI
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              {t("tagline")}
            </p>
            <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.2)" }}>
              Trois-Rivières, Québec, Canada
            </p>
          </div>

          {/* Platforms */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.25)" }}>
              {t("platforms_title")}
            </div>
            <ul className="space-y-3">
              {platformLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.25)" }}>
              {t("company_title")}
            </div>
            <ul className="space-y-3">
              {companyArr.map((label, i) => (
                <li key={label}>
                  <Link
                    href={companyHrefs[i]}
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.2)" }}>
            {t("legal")}
          </p>
          <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.15)" }}>
            {t("made")}
          </p>
        </div>
      </div>
    </footer>
  );
}
