import { getTranslations, getLocale } from "next-intl/server";

const PILLARS = {
  fr: [
    {
      icon: "🇨🇦",
      title: "Entreprise canadienne",
      desc: "Fondée au Québec, notre équipe opère 100% au Canada. Vos données ne quittent jamais le territoire canadien.",
    },
    {
      icon: "🔒",
      title: "Protection des données",
      desc: "Architecture multi-tenant, chiffrement bout-en-bout, conformité Loi 25 du Québec et LPRPDE.",
    },
    {
      icon: "🎯",
      title: "IA responsable et centrée sur l'humain",
      desc: "Nos algorithmes sont auditables, nos recommandations explicables. L'humain décide — l'IA assiste.",
    },
    {
      icon: "📊",
      title: "Gouvernance et transparence de l'IA",
      desc: "Cadre de gouvernance inclus dans chaque déploiement. Traçabilité complète des décisions automatisées.",
    },
    {
      icon: "⚡",
      title: "Infrastructure infonuagique sécurisée",
      desc: "Hébergement certifié, haute disponibilité, récupération après sinistre. SLA garanti contractuellement.",
    },
    {
      icon: "🌐",
      title: "Solutions évolutives pour les organisations",
      desc: "De 10 à 10 000 employés. Nos plateformes s'adaptent à la taille et aux ambitions de votre organisation.",
    },
  ],
  en: [
    {
      icon: "🇨🇦",
      title: "Canadian company",
      desc: "Founded in Quebec, our team operates 100% in Canada. Your data never leaves Canadian territory.",
    },
    {
      icon: "🔒",
      title: "Data protection",
      desc: "Multi-tenant architecture, end-to-end encryption, compliance with Quebec Law 25 and PIPEDA.",
    },
    {
      icon: "🎯",
      title: "Responsible & human-centred AI",
      desc: "Our algorithms are auditable, our recommendations explainable. Humans decide — AI assists.",
    },
    {
      icon: "📊",
      title: "AI governance & transparency",
      desc: "Governance framework included in every deployment. Full traceability of automated decisions.",
    },
    {
      icon: "⚡",
      title: "Secure cloud infrastructure",
      desc: "Certified hosting, high availability, disaster recovery. Contractually guaranteed SLA.",
    },
    {
      icon: "🌐",
      title: "Scalable solutions for organizations",
      desc: "From 10 to 10,000 employees. Our platforms adapt to the size and ambitions of your organization.",
    },
  ],
};

export default async function Credibility() {
  const t = await getTranslations("credibility");
  const locale = await getLocale();
  const pillars = locale === "en" ? PILLARS.en : PILLARS.fr;

  return (
    <section className="py-20 bg-white" style={{ borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
            style={{ background: "rgba(124,58,237,0.07)", color: "#7c3aed", border: "1px solid rgba(124,58,237,0.15)" }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            {t("label")}
          </span>
          <h2
            className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            {t("title")}
          </h2>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="flex gap-5 p-6 rounded-2xl transition-shadow hover:shadow-md"
              style={{ border: "1px solid #e2e8f0" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 mt-0.5"
                style={{ background: "#f8fafc" }}
              >
                {p.icon}
              </div>
              <div>
                <h3
                  className="text-sm font-bold text-slate-900 mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust strip */}
        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-6 pt-8"
          style={{ borderTop: "1px solid #f1f5f9" }}
        >
          {[
            { icon: "🍁", label: t("trust_canada") },
            { icon: "🔐", label: t("trust_law25") },
            { icon: "☁️", label: t("trust_cloud") },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
