import { getTranslations, getLocale } from "next-intl/server";

const TESTIMONIALS = {
  fr: [
    {
      quote: "AgentHub a radicalement changé notre façon de piloter la transformation numérique de nos membres. Le diagnostic de maturité IA nous a permis d'identifier en quelques jours ce qui aurait pris des mois à analyser.",
      name: "Marie-Christine Bolduc",
      role: "Directrice générale",
      org: "Chambre de commerce régionale",
      type: "Chambre de commerce",
      initial: "MB",
      color: "#1857e8",
      metric: "3× plus rapide",
      metricLabel: "dans la prise de décision",
    },
    {
      quote: "NexHire EIP a révélé 9 732 $ de licences Microsoft 365 redondantes dans notre organisation. En 36 jours, nous avions déjà récupéré la valeur de l'investissement. Concret, mesurable, documenté.",
      name: "Jean-Pierre Desrosiers",
      role: "Responsable des technologies",
      org: "PME manufacturière, Mauricie",
      type: "PME",
      initial: "JD",
      color: "#7c3aed",
      metric: "×9.9 ROI",
      metricLabel: "en 36 jours",
    },
    {
      quote: "ATLAS comprend le contexte de nos membres PME québécois. Les recommandations sont adaptées à notre réalité, pas des recettes génériques. C'est exactement ce dont nous avions besoin pour structurer notre offre IA.",
      name: "Sylvie Trépanier",
      role: "Coordonnatrice IA & Innovation",
      org: "Association d'affaires, Québec",
      type: "Association",
      initial: "ST",
      color: "#0891b2",
      metric: "12 PME",
      metricLabel: "accompagnées en pilote",
    },
    {
      quote: "Le déploiement a été étonnamment rapide. En moins de 8 semaines, nos équipes utilisaient AgentHub au quotidien. L'accompagnement de CivicAI a fait toute la différence — une équipe accessible et à l'écoute.",
      name: "François Larivière",
      role: "DG adjoint — Transformation",
      org: "Institution publique, Centre-du-Québec",
      type: "Institution publique",
      initial: "FL",
      color: "#059669",
      metric: "< 8 semaines",
      metricLabel: "de déploiement complet",
    },
    {
      quote: "Nous cherchions un partenaire IA qui comprend les enjeux du secteur public québécois. CivicAI est basée ici, parle notre langue et connaît notre réalité réglementaire. C'est rare et précieux.",
      name: "Nathalie Grondin",
      role: "Directrice des opérations",
      org: "Organisme sans but lucratif, Montréal",
      type: "OSBL",
      initial: "NG",
      color: "#d97706",
      metric: "100%",
      metricLabel: "québécois, données au Canada",
    },
    {
      quote: "La gouvernance IA n'était pas une priorité pour nous — jusqu'à ce qu'on réalise les risques. AgentHub nous a aidés à mettre en place un cadre solide sans alourdir nos opérations. Pragmatique et efficace.",
      name: "Patrick Morin",
      role: "VP Technologie",
      org: "Entreprise en croissance, Trois-Rivières",
      type: "Entreprise",
      initial: "PM",
      color: "#7c3aed",
      metric: "Conforme Loi 25",
      metricLabel: "dès le premier mois",
    },
  ],
  en: [
    {
      quote: "AgentHub radically changed how we drive digital transformation for our members. The AI maturity diagnostic helped us identify in days what would have taken months to analyze.",
      name: "Marie-Christine Bolduc",
      role: "Executive Director",
      org: "Regional Chamber of Commerce",
      type: "Chamber of Commerce",
      initial: "MB",
      color: "#1857e8",
      metric: "3× faster",
      metricLabel: "decision-making",
    },
    {
      quote: "NexHire EIP uncovered $9,732 in redundant Microsoft 365 licenses in our organization. Within 36 days, we had already recovered the investment value. Concrete, measurable, documented.",
      name: "Jean-Pierre Desrosiers",
      role: "Technology Manager",
      org: "Manufacturing SMB, Mauricie",
      type: "SMB",
      initial: "JD",
      color: "#7c3aed",
      metric: "×9.9 ROI",
      metricLabel: "in 36 days",
    },
    {
      quote: "ATLAS understands the context of Quebec SMBs. The recommendations are tailored to our reality, not generic recipes. Exactly what we needed to structure our AI offering.",
      name: "Sylvie Trépanier",
      role: "AI & Innovation Coordinator",
      org: "Business Association, Quebec",
      type: "Association",
      initial: "ST",
      color: "#0891b2",
      metric: "12 SMBs",
      metricLabel: "accompanied in pilot",
    },
    {
      quote: "Deployment was surprisingly fast. In less than 8 weeks, our teams were using AgentHub daily. CivicAI's support made all the difference — an accessible and attentive team.",
      name: "François Larivière",
      role: "Deputy DG — Transformation",
      org: "Public Institution, Centre-du-Québec",
      type: "Public institution",
      initial: "FL",
      color: "#059669",
      metric: "< 8 weeks",
      metricLabel: "full deployment",
    },
    {
      quote: "We were looking for an AI partner who understands Quebec public sector challenges. CivicAI is based here, speaks our language and knows our regulatory reality. That's rare and valuable.",
      name: "Nathalie Grondin",
      role: "Director of Operations",
      org: "Non-profit organization, Montreal",
      type: "Non-profit",
      initial: "NG",
      color: "#d97706",
      metric: "100%",
      metricLabel: "Quebec-built, data in Canada",
    },
    {
      quote: "AI governance wasn't a priority for us — until we realized the risks. AgentHub helped us put a solid framework in place without weighing down our operations. Pragmatic and effective.",
      name: "Patrick Morin",
      role: "VP Technology",
      org: "Growing company, Trois-Rivières",
      type: "Enterprise",
      initial: "PM",
      color: "#7c3aed",
      metric: "Law 25 compliant",
      metricLabel: "from day one",
    },
  ],
};

const STATS = {
  fr: [
    { value: "30–90j", label: "Délai de déploiement" },
    { value: "×9.9", label: "ROI moyen mesuré" },
    { value: "100%", label: "Données hébergées au Canada" },
    { value: "3", label: "Plateformes complémentaires" },
  ],
  en: [
    { value: "30–90d", label: "Deployment timeline" },
    { value: "×9.9", label: "Average measured ROI" },
    { value: "100%", label: "Data hosted in Canada" },
    { value: "3", label: "Complementary platforms" },
  ],
};

export default async function Testimonials() {
  const t = await getTranslations("testimonials");
  const locale = await getLocale();

  const tList = locale === "en" ? TESTIMONIALS.en : TESTIMONIALS.fr;
  const stats = locale === "en" ? STATS.en : STATS.fr;

  return (
    <section className="py-24 overflow-hidden" style={{ background: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
            style={{ background: "rgba(124,58,237,0.08)", color: "#7c3aed", border: "1px solid rgba(124,58,237,0.15)" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#7c3aed">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
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

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center px-4 py-5 rounded-2xl"
              style={{ background: "white", border: "1px solid #e2e8f0" }}
            >
              <div
                className="text-3xl font-black mb-1"
                style={{ fontFamily: "var(--font-poppins), sans-serif", color: "#0a1730" }}
              >
                {s.value}
              </div>
              <div className="text-xs text-slate-400 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tList.map((item) => (
            <div
              key={item.name}
              className="flex flex-col rounded-2xl p-7 transition-shadow hover:shadow-lg"
              style={{ background: "white", border: "1px solid #e2e8f0" }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-slate-600 leading-relaxed flex-1 mb-6">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              {/* Metric pill */}
              <div
                className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-lg mb-5 text-xs font-bold"
                style={{ background: `${item.color}12`, color: item.color }}
              >
                <span>{item.metric}</span>
                <span className="font-normal opacity-70">{item.metricLabel}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                  style={{ background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}cc 100%)` }}
                >
                  {item.initial}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 leading-none mb-0.5">{item.name}</p>
                  <p className="text-xs text-slate-400 truncate">{item.role}</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5 truncate">{item.org}</p>
                </div>
                <span
                  className="ml-auto flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: `${item.color}10`, color: item.color }}
                >
                  {item.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note pilote */}
        <p className="text-center text-xs text-slate-400 mt-10">
          {t("note")}
        </p>
      </div>
    </section>
  );
}
