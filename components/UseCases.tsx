import { getTranslations } from "next-intl/server";

const CASES = {
  fr: [
    {
      icon: "🏛️",
      segment: "Chambre de commerce",
      segmentColor: "#1857e8",
      title: "Diagnostic IA pour une chambre de commerce",
      challenge: "Accompagner les PME membres dans leur transformation numérique sans ressources IA internes.",
      solution: "AgentHub réalise un diagnostic de maturité IA personnalisé et produit un plan d'action structuré pour chaque organisation membre.",
      benefits: [
        "Vision claire des besoins IA par membre",
        "Priorisation des actions selon le contexte",
        "Accompagnement structuré en cohortes",
        "Certificats de progression pour les membres",
      ],
    },
    {
      icon: "🏭",
      segment: "PME",
      segmentColor: "#7c3aed",
      title: "Optimisation des licences logicielles",
      challenge: "Réduire les coûts liés aux licences inutilisées et aux doublons dans l'environnement Microsoft 365.",
      solution: "NexHire EIP analyse les usages réels de chaque licence et identifie automatiquement les opportunités d'optimisation et les risques de conformité.",
      benefits: [
        "Inventaire complet des actifs numériques",
        "Détection des licences redondantes",
        "Meilleure gouvernance des outils SaaS",
        "Évaluation de la conformité Loi 25",
      ],
    },
    {
      icon: "🏢",
      segment: "Institution publique",
      segmentColor: "#0891b2",
      title: "Gouvernance IA pour une institution publique",
      challenge: "Déployer l'IA de façon responsable, auditable et conforme aux exigences réglementaires québécoises.",
      solution: "AgentHub fournit un cadre de gouvernance IA intégré avec traçabilité complète des décisions automatisées et documentation conforme à la Loi 25.",
      benefits: [
        "Cadre de gouvernance IA documenté",
        "Décisions IA auditables et explicables",
        "Sensibilisation et formation des équipes",
        "Réduction des risques réglementaires",
      ],
    },
    {
      icon: "🏙️",
      segment: "Municipalité",
      segmentColor: "#059669",
      title: "Services citoyens intelligents",
      challenge: "Réduire les temps d'attente et améliorer l'expérience des citoyens sans alourdir les équipes en place.",
      solution: "AttenteZéro optimise la gestion des files d'attente avec l'IA prédictive et offre un portail citoyen mobile pour la prise de rendez-vous.",
      benefits: [
        "Réduction des temps d'attente estimée",
        "Meilleure allocation des ressources",
        "Portail citoyen multilingue accessible",
        "Analytiques opérationnels en temps réel",
      ],
    },
    {
      icon: "🤝",
      segment: "Association d'affaires",
      segmentColor: "#d97706",
      title: "Offre IA différenciée pour les membres",
      challenge: "Structurer une proposition de valeur IA pour les membres sans expertise interne en intelligence artificielle.",
      solution: "ATLAS accompagne les membres avec des recommandations contextuelles et des parcours d'apprentissage adaptés à chaque organisation.",
      benefits: [
        "Valeur différenciée pour les membres",
        "Accompagnement scalable sans surcharge",
        "Mesure d'impact par organisation",
        "Fidélisation et engagement membres",
      ],
    },
    {
      icon: "🔒",
      segment: "Toute organisation",
      segmentColor: "#6366f1",
      title: "Audit de conformité Loi 25 & sécurité",
      challenge: "Identifier les risques liés aux données personnelles dans les outils SaaS avant un contrôle réglementaire.",
      solution: "NexHire EIP cartographie tous les actifs numériques, évalue les risques Loi 25 et produit un plan de mise en conformité priorisé.",
      benefits: [
        "Cartographie complète des données personnelles",
        "Risques de conformité priorisés",
        "Plan d'action documenté pour la CAI",
        "Réduction de l'exposition aux amendes",
      ],
    },
  ],
  en: [
    {
      icon: "🏛️",
      segment: "Chamber of commerce",
      segmentColor: "#1857e8",
      title: "AI diagnostic for a chamber of commerce",
      challenge: "Support member SMBs in their digital transformation without in-house AI expertise.",
      solution: "AgentHub produces a personalized AI maturity diagnostic and a structured action plan for each member organization.",
      benefits: [
        "Clear view of each member's AI needs",
        "Prioritized actions by context",
        "Structured cohort-based support",
        "Progress certificates for members",
      ],
    },
    {
      icon: "🏭",
      segment: "SMB",
      segmentColor: "#7c3aed",
      title: "Software license optimization",
      challenge: "Reduce costs from unused licenses and duplicates in the Microsoft 365 environment.",
      solution: "NexHire EIP analyzes actual usage per license and automatically identifies optimization opportunities and compliance risks.",
      benefits: [
        "Complete digital asset inventory",
        "Redundant license detection",
        "Better SaaS tool governance",
        "Law 25 compliance assessment",
      ],
    },
    {
      icon: "🏢",
      segment: "Public institution",
      segmentColor: "#0891b2",
      title: "AI governance for a public institution",
      challenge: "Deploy AI responsibly, with auditability, and in compliance with Quebec regulatory requirements.",
      solution: "AgentHub provides an integrated AI governance framework with full traceability of automated decisions and Law 25-compliant documentation.",
      benefits: [
        "Documented AI governance framework",
        "Auditable and explainable AI decisions",
        "Team awareness and training",
        "Reduced regulatory risk",
      ],
    },
    {
      icon: "🏙️",
      segment: "Municipality",
      segmentColor: "#059669",
      title: "Smart citizen services",
      challenge: "Reduce wait times and improve citizen experience without overburdening existing teams.",
      solution: "AttenteZéro optimizes queue management with predictive AI and offers a mobile citizen portal for appointment booking.",
      benefits: [
        "Estimated reduction in wait times",
        "Better resource allocation",
        "Multilingual accessible citizen portal",
        "Real-time operational analytics",
      ],
    },
    {
      icon: "🤝",
      segment: "Business association",
      segmentColor: "#d97706",
      title: "Differentiated AI offering for members",
      challenge: "Structure an AI value proposition for members without in-house AI expertise.",
      solution: "ATLAS supports members with contextual recommendations and learning journeys adapted to each organization.",
      benefits: [
        "Differentiated value for members",
        "Scalable support without overload",
        "Impact measurement per organization",
        "Member loyalty and engagement",
      ],
    },
    {
      icon: "🔒",
      segment: "Any organization",
      segmentColor: "#6366f1",
      title: "Law 25 & security compliance audit",
      challenge: "Identify risks related to personal data in SaaS tools before a regulatory review.",
      solution: "NexHire EIP maps all digital assets, assesses Law 25 risks, and produces a prioritized compliance action plan.",
      benefits: [
        "Complete personal data mapping",
        "Prioritized compliance risks",
        "Documented plan for the CAI",
        "Reduced exposure to fines",
      ],
    },
  ],
};

const TRUST_FACTS = {
  fr: [
    { icon: "🇨🇦", label: "Entreprise québécoise — Trois-Rivières, QC" },
    { icon: "🎯", label: "IA responsable, auditable et éthique" },
    { icon: "🔒", label: "Données hébergées au Canada" },
    { icon: "📊", label: "Gouvernance IA intégrée à chaque déploiement" },
    { icon: "🏢", label: "PME, organismes publics & institutions" },
    { icon: "💬", label: "Accompagnement personnalisé de l'onboarding aux résultats" },
  ],
  en: [
    { icon: "🇨🇦", label: "Quebec company — Trois-Rivières, QC" },
    { icon: "🎯", label: "Responsible, auditable and ethical AI" },
    { icon: "🔒", label: "Data hosted in Canada" },
    { icon: "📊", label: "AI governance integrated in every deployment" },
    { icon: "🏢", label: "SMBs, public organizations & institutions" },
    { icon: "💬", label: "Personalized support from onboarding to results" },
  ],
};

export default async function UseCases() {
  const t = await getTranslations("usecases");

  // Detect locale via the usecases.lang key (fr = "fr", en = "en")
  const lang = t("lang") === "en" ? "en" : "fr";
  const cases = CASES[lang];
  const trustFacts = TRUST_FACTS[lang];

  return (
    <section className="py-24" style={{ background: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
            style={{ background: "rgba(124,58,237,0.08)", color: "#7c3aed", border: "1px solid rgba(124,58,237,0.15)" }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
            {t("label")}
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            {t("title")}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Use case cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cases.map((c) => (
            <div
              key={c.title}
              className="bg-white flex flex-col rounded-2xl overflow-hidden"
              style={{ border: "1px solid #e2e8f0" }}
            >
              {/* Color strip */}
              <div className="h-1 w-full" style={{ background: c.segmentColor }} />

              <div className="p-7 flex flex-col flex-1">
                {/* Icon + segment */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{c.icon}</span>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: `${c.segmentColor}12`, color: c.segmentColor }}
                  >
                    {c.segment}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-base font-bold text-slate-900 mb-5"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {c.title}
                </h3>

                {/* Challenge / Solution */}
                <div className="space-y-4 mb-6 flex-1">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                      {t("challenge_label")}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                      {t("solution_label")}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">{c.solution}</p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="pt-5 border-t border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    {t("benefits_label")}
                  </p>
                  <ul className="space-y-1.5">
                    {c.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-slate-600">
                        <svg
                          width="14" height="14" viewBox="0 0 24 24" fill="none"
                          stroke={c.segmentColor} strokeWidth="2.5"
                          strokeLinecap="round" strokeLinejoin="round"
                          className="flex-shrink-0 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust facts strip */}
        <div
          className="rounded-2xl p-8"
          style={{ background: "#0a1730" }}
        >
          <p
            className="text-xs font-bold uppercase tracking-widest text-center mb-6"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            {t("trust_label")}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trustFacts.map((f) => (
              <div key={f.label} className="flex items-center gap-3">
                <span className="text-xl flex-shrink-0">{f.icon}</span>
                <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-slate-400 mt-8">
          {t("disclaimer")}
        </p>
      </div>
    </section>
  );
}
