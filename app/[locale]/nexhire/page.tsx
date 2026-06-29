import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import ContactCTA from "@/components/ContactCTA";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale !== "en";
  return {
    title: isFr
      ? "NexHire EIP — Gouvernance Microsoft 365 & Optimisation SaaS | CivicAI"
      : "NexHire EIP — Microsoft 365 Governance & SaaS Optimization | CivicAI",
    description: isFr
      ? "Plateforme de gouvernance SaaS et optimisation des licences Microsoft 365. Détectez les coûts cachés et mesurez la performance réelle de votre organisation."
      : "SaaS governance platform and Microsoft 365 license optimization. Detect hidden costs and measure your organization's real performance.",
    alternates: {
      canonical: `https://civicainc.ca/${locale}/nexhire`,
      languages: { fr: "https://civicainc.ca/fr/nexhire", en: "https://civicainc.ca/en/nexhire" },
    },
  };
}

const CONTENT = {
  fr: {
    badge: "Intelligence d'affaires",
    tagline: "Audit & optimisation de vos actifs numériques",
    headline: "NexHire EIP",
    headline2: "Enterprise Intelligence Platform",
    subtitle: "Découvrez exactement où votre organisation perd de l'argent en licences, en doublons et en risques de conformité — en moins de 36 jours.",
    cta_demo: "Demander un audit gratuit",
    cta_contact: "Parler à un expert",
    problem_label: "Le problème",
    problem_title: "Vos actifs numériques vous coûtent plus cher que prévu",
    problems: [
      { icon: "💸", title: "Licences non utilisées", desc: "En moyenne 23% des licences SaaS achetées par une organisation ne sont jamais utilisées." },
      { icon: "🔄", title: "Doublons invisibles", desc: "Microsoft 365, Adobe, Zoom, Slack — plusieurs équipes achètent les mêmes outils sans le savoir." },
      { icon: "⚠️", title: "Risques Loi 25", desc: "Données personnelles dans des applications non conformes exposent votre organisation à des amendes." },
      { icon: "📉", title: "ROI IA non mesuré", desc: "Vous investissez en IA mais ne savez pas mesurer ce que ça rapporte concrètement." },
    ],
    how_label: "Comment ça marche",
    how_title: "Un audit complet en 3 étapes",
    how_steps: [
      { num: "01", title: "Collecte & analyse", desc: "Connexion sécurisée à vos sources (Microsoft 365, logiciels RH, outils SaaS). NexHire cartographie automatiquement tous vos actifs numériques." },
      { num: "02", title: "Détection intelligente", desc: "Notre moteur IA identifie les licences redondantes, les accès obsolètes, les risques de conformité et les opportunités d'optimisation." },
      { num: "03", title: "Rapport & plan d'action", desc: "Vous recevez un rapport détaillé avec les économies potentielles chiffrées, les risques priorisés et un plan d'action en 90 jours." },
    ],
    features_label: "Modules",
    features: [
      { icon: "🔍", title: "Audit Microsoft 365", desc: "Analyse complète des licences M365 : utilisation réelle vs facturée, doublons, accès inactifs." },
      { icon: "📋", title: "Inventaire SaaS", desc: "Cartographie de tous vos outils cloud — shadow IT inclus — avec coût total de possession." },
      { icon: "🛡️", title: "Conformité Loi 25", desc: "Identification des données personnelles dans vos systèmes et évaluation du niveau de conformité." },
      { icon: "📈", title: "ROI IA mesuré", desc: "Tableau de bord des gains générés par vos initiatives IA — économies, temps récupéré, productivité." },
      { icon: "📊", title: "Benchmarks sectoriels", desc: "Comparez vos coûts et niveaux d'efficacité aux organisations similaires dans votre secteur." },
      { icon: "🔔", title: "Alertes continues", desc: "Surveillance continue post-audit : nouvelles licences inutilisées, nouveaux risques, alertes en temps réel." },
    ],
    stats: [
      { value: "×9.9", label: "ROI moyen", sub: "En 36 jours" },
      { value: "9 732$", label: "Économies détectées", sub: "Cas réel — PME manufacturière" },
      { value: "36j", label: "Délai de rapport", sub: "De l'audit au plan d'action" },
      { value: "23%", label: "Licences non utilisées", sub: "Moyenne organisations auditées" },
    ],
    faq_label: "Questions fréquentes",
    faqs: [
      { q: "Quelle est la durée minimale de l'engagement ?", a: "L'audit initial peut se faire en mode ponctuel (rapport unique). La surveillance continue est proposée en abonnement mensuel." },
      { q: "Est-ce que NexHire accède à nos données confidentielles ?", a: "Non. NexHire analyse les métadonnées d'utilisation (qui utilise quoi, quand) — pas le contenu des fichiers ou communications." },
      { q: "Quels systèmes sont compatibles ?", a: "Microsoft 365, Google Workspace, Salesforce, HubSpot, Slack, Zoom, et la plupart des outils SaaS courants via connecteurs OAuth." },
    ],
  },
  en: {
    badge: "Business intelligence",
    tagline: "Audit & optimization of your digital assets",
    headline: "NexHire EIP",
    headline2: "Enterprise Intelligence Platform",
    subtitle: "Discover exactly where your organization is losing money on licenses, duplicates and compliance risks — in less than 36 days.",
    cta_demo: "Request a free audit",
    cta_contact: "Talk to an expert",
    problem_label: "The problem",
    problem_title: "Your digital assets are costing you more than expected",
    problems: [
      { icon: "💸", title: "Unused licenses", desc: "On average, 23% of SaaS licenses purchased by an organization are never used." },
      { icon: "🔄", title: "Invisible duplicates", desc: "Microsoft 365, Adobe, Zoom, Slack — multiple teams buy the same tools without knowing." },
      { icon: "⚠️", title: "Law 25 risks", desc: "Personal data in non-compliant applications exposes your organization to fines." },
      { icon: "📉", title: "Unmeasured AI ROI", desc: "You invest in AI but can't measure what it concretely returns." },
    ],
    how_label: "How it works",
    how_title: "A complete audit in 3 steps",
    how_steps: [
      { num: "01", title: "Collection & analysis", desc: "Secure connection to your sources (Microsoft 365, HR software, SaaS tools). NexHire automatically maps all your digital assets." },
      { num: "02", title: "Smart detection", desc: "Our AI engine identifies redundant licenses, obsolete access, compliance risks and optimization opportunities." },
      { num: "03", title: "Report & action plan", desc: "You receive a detailed report with quantified potential savings, prioritized risks and a 90-day action plan." },
    ],
    features_label: "Modules",
    features: [
      { icon: "🔍", title: "Microsoft 365 audit", desc: "Complete analysis of M365 licenses: actual vs. billed usage, duplicates, inactive access." },
      { icon: "📋", title: "SaaS inventory", desc: "Map all your cloud tools — including shadow IT — with total cost of ownership." },
      { icon: "🛡️", title: "Law 25 compliance", desc: "Identify personal data in your systems and assess compliance level." },
      { icon: "📈", title: "Measured AI ROI", desc: "Dashboard of gains generated by your AI initiatives — savings, time recovered, productivity." },
      { icon: "📊", title: "Sector benchmarks", desc: "Compare your costs and efficiency levels to similar organizations in your sector." },
      { icon: "🔔", title: "Continuous alerts", desc: "Ongoing post-audit monitoring: new unused licenses, new risks, real-time alerts." },
    ],
    stats: [
      { value: "×9.9", label: "Average ROI", sub: "In 36 days" },
      { value: "$9,732", label: "Savings detected", sub: "Real case — manufacturing SMB" },
      { value: "36d", label: "Report turnaround", sub: "From audit to action plan" },
      { value: "23%", label: "Unused licenses", sub: "Average across audited organizations" },
    ],
    faq_label: "FAQ",
    faqs: [
      { q: "What is the minimum commitment?", a: "The initial audit can be done as a one-time engagement (single report). Continuous monitoring is offered as a monthly subscription." },
      { q: "Does NexHire access our confidential data?", a: "No. NexHire analyzes usage metadata (who uses what, when) — not the content of files or communications." },
      { q: "Which systems are compatible?", a: "Microsoft 365, Google Workspace, Salesforce, HubSpot, Slack, Zoom, and most common SaaS tools via OAuth connectors." },
    ],
  },
};

export default async function NexHirePage({ params }: Props) {
  const { locale } = await params;
  const c = locale === "en" ? CONTENT.en : CONTENT.fr;
  const color = "#7c3aed";

  return (
    <>
      {/* Hero */}
      <section style={{ background: "#0a1730", paddingTop: "144px" }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                style={{ background: "rgba(124,58,237,0.2)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.3)" }}
              >
                {c.badge}
              </span>
              <span className="text-xs text-white/30 font-medium">{c.tagline}</span>
            </div>
            <h1
              className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-2 leading-none"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              NexHire<br />
              <span style={{ color }}>EIP</span>
            </h1>
            <p className="text-base font-semibold mb-6" style={{ color: "rgba(167,139,250,0.7)" }}>
              {c.headline2}
            </p>
            <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-2xl">
              {c.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all hover:opacity-90"
                style={{ background: color }}
              >
                {c.cta_demo}
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3.5 rounded-xl transition-all hover:bg-white/10"
                style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                {c.cta_contact}
              </Link>
            </div>
          </div>
        </div>
        <div style={{ height: 60, background: "linear-gradient(to bottom, #0a1730, #ffffff)" }} />
      </section>

      {/* Stats */}
      <section className="bg-white pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {c.stats.map((s) => (
              <div key={s.label} className="text-center px-4 py-6 rounded-2xl" style={{ border: "1px solid #e2e8f0" }}>
                <div className="text-3xl font-black mb-1" style={{ fontFamily: "var(--font-poppins)", color }}>{s.value}</div>
                <div className="text-sm font-semibold text-slate-900 mb-0.5">{s.label}</div>
                <div className="text-xs text-slate-400">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20" style={{ background: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color }}>{c.problem_label}</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900" style={{ fontFamily: "var(--font-poppins)" }}>{c.problem_title}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.problems.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-7" style={{ border: "1px solid #e2e8f0" }}>
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-base font-bold text-slate-900 mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color }}>{c.how_label}</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900" style={{ fontFamily: "var(--font-poppins)" }}>{c.how_title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {c.how_steps.map((step) => (
              <div key={step.num} className="relative">
                <div
                  className="text-6xl font-black mb-4 leading-none"
                  style={{ fontFamily: "var(--font-poppins)", color: `${color}15` }}
                >
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20" style={{ background: "#0a1730" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: "#a78bfa" }}>{c.features_label}</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.features.map((f) => (
              <div key={f.title} className="rounded-2xl p-7" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{f.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "#f8fafc" }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center" style={{ fontFamily: "var(--font-poppins)" }}>{c.faq_label}</h2>
          <div className="space-y-4">
            {c.faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-7" style={{ border: "1px solid #e2e8f0" }}>
                <h3 className="text-base font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
