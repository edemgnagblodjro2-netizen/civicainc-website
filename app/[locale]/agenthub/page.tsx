import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import ContactCTA from "@/components/ContactCTA";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale !== "en";
  return {
    title: isFr
      ? "AgentHub — Le Système d'Exploitation IA pour Organisations Québécoises | CivicAI"
      : "AgentHub — The AI Operating System for Quebec Organizations | CivicAI",
    description: isFr
      ? "Plateforme IA tout-en-un pour chambres de commerce et PME québécoises — diagnostic de maturité, gouvernance Loi 25, automatisations et intelligence métier. Hébergé au Canada."
      : "All-in-one AI platform for Quebec chambers of commerce and SMBs — maturity diagnostic, Law 25 governance, automations and business intelligence. Hosted in Canada.",
    alternates: {
      canonical: `https://civicainc.ca/${locale}/agenthub`,
      languages: { fr: "https://civicainc.ca/fr/agenthub", en: "https://civicainc.ca/en/agenthub" },
    },
  };
}

const CONTENT = {
  fr: {
    badge: "Système d'exploitation IA",
    tagline: "Infrastructure IA pour organisations québécoises",
    headline: "AgentHub Platform",
    subtitle: "Le système d'exploitation IA de votre organisation. Mesurez, gouvernez, automatisez et opérez votre transformation IA — en un seul endroit, conçu pour le Québec.",
    cta_demo: "Demander une démo",
    cta_contact: "Parler à l'équipe",
    for_who_label: "Pour qui",
    for_who_title: "Fait pour les acteurs de l'écosystème PME",
    for_who_items: [
      { icon: "🏛️", title: "Chambres de commerce", desc: "Pilotez la transformation IA de vos membres PME avec un tableau de bord dédié, des rapports de cohorte et un programme certifiant." },
      { icon: "🤝", title: "Associations d'affaires", desc: "Offrez une valeur différenciée à vos membres grâce à un workspace IA opérationnel — bien au-delà du diagnostic." },
      { icon: "📊", title: "Organismes d'accompagnement", desc: "Outillez vos conseillers avec ATLAS et les modules d'intelligence métier pour un accompagnement à forte valeur ajoutée." },
    ],
    features_label: "4 piliers",
    features_title: "Mesurer, Gouverner, Opérer, Amplifier",
    features: [
      { icon: "🔎", title: "Mesure — Diagnostic IA", desc: "Évaluez la posture IA de chaque PME membre en moins de 20 minutes. Score IMAI /100, rapport personnalisé, observatoire de cohorte." },
      { icon: "⚖️", title: "Gouvernance — Loi 25 & IA", desc: "Checklist de conformité Loi 25, générateur de politique IA, registre des outils — conformité garantie, politique prête en 5 minutes." },
      { icon: "⚡", title: "Opérations — Automatisations", desc: "Flux automatiques Power Automate, agents ATLAS personnalisés, 400+ connecteurs pour éliminer les tâches manuelles." },
      { icon: "📈", title: "Rapports & Tableau de bord", desc: "Vue consolidée de toute votre cohorte — progression, alertes, exports CSV, rapport régional PDF avec cobranding." },
      { icon: "🧠", title: "Intelligence métier (à venir)", desc: "Modules RH, Finance, Sales, Marketing et Service Client augmentés par IA — décidez mieux grâce à vos propres données." },
      { icon: "💬", title: "ATLAS — Votre IA intégrée", desc: "Assistante IA contextuelle qui répond aux questions de vos membres, génère des recommandations et s'entraîne sur vos documents." },
    ],
    journey_label: "Les 4 étapes",
    journey_title: "De la mesure à l'amplification — votre trajectoire IA",
    journey_steps: [
      { phase: "Étape 1", title: "Mesurer", desc: "Diagnostic de maturité IA, score IMAI /100, profil de départ par organisation et observatoire de cohorte." },
      { phase: "Étape 2", title: "Gouverner", desc: "Politique IA générée, registre des outils IA, checklist Loi 25 complète — conformité prouvable en quelques heures." },
      { phase: "Étape 3", title: "Opérer", desc: "Rapports automatiques, automatisations Power Automate, Knowledge Hub, M365 Optimizer — l'IA dans vos processus quotidiens." },
      { phase: "Étape 4", title: "Amplifier", desc: "Modules Intelligence métier (RH, Finance, Sales…), agents ATLAS avancés, Marketplace d'agents — l'IA comme avantage concurrentiel." },
    ],
    stats: [
      { value: "6", label: "Modules actifs", sub: "Mesure → Gouvernance → Opérations" },
      { value: "90j", label: "De l'onboarding à l'impact", sub: "Programme cohorte certifiant" },
      { value: "Loi 25", label: "Conformité intégrée", sub: "Cadre de gouvernance IA inclus" },
      { value: "100%", label: "Canada", sub: "Données hébergées au Québec" },
    ],
    faq_label: "Questions fréquentes",
    faqs: [
      { q: "AgentHub est-il uniquement un outil de diagnostic IA ?", a: "Non — c'est le système d'exploitation IA complet de votre organisation. Le diagnostic est le point d'entrée, mais la plateforme couvre la gouvernance, les automatisations, les rapports et l'intelligence métier. Vous commencez par mesurer, puis vous opérez et amplifiez en continu." },
      { q: "Faut-il des compétences IA chez nos conseillers ?", a: "Non. AgentHub est conçu pour les équipes non-techniques. ATLAS guide à la fois les membres PME et vos conseillers. La gouvernance IA génère les politiques automatiquement." },
      { q: "Où sont hébergées les données ?", a: "100% au Canada. Toutes les données sont stockées sur infrastructure canadienne, conformes à la Loi 25 du Québec. Chaque partenaire est isolé — aucune donnée partagée entre chambres." },
    ],
  },
  en: {
    badge: "AI Operating System",
    tagline: "AI infrastructure for Quebec organizations",
    headline: "AgentHub Platform",
    subtitle: "The AI operating system for your organization. Measure, govern, automate and operate your AI transformation — all in one place, built for Quebec.",
    cta_demo: "Request a demo",
    cta_contact: "Talk to the team",
    for_who_label: "Who it's for",
    for_who_title: "Built for SMB ecosystem players",
    for_who_items: [
      { icon: "🏛️", title: "Chambers of commerce", desc: "Lead your member SMBs' AI transformation with a dedicated dashboard, cohort reports and a certifying program." },
      { icon: "🤝", title: "Business associations", desc: "Offer differentiated value to your members with an operational AI workspace — far beyond a simple diagnostic." },
      { icon: "📊", title: "Support organizations", desc: "Equip your advisors with ATLAS and business intelligence modules for high-value-added support." },
    ],
    features_label: "4 pillars",
    features_title: "Measure, Govern, Operate, Amplify",
    features: [
      { icon: "🔎", title: "Measure — AI Diagnostic", desc: "Assess each member SMB's AI posture in under 20 minutes. IMAI score /100, personalized report, cohort observatory." },
      { icon: "⚖️", title: "Govern — Law 25 & AI", desc: "Law 25 compliance checklist, AI policy generator, tool registry — compliance guaranteed, policy ready in 5 minutes." },
      { icon: "⚡", title: "Operate — Automations", desc: "Power Automate workflows, custom ATLAS agents, 400+ connectors to eliminate manual tasks." },
      { icon: "📈", title: "Reports & Dashboard", desc: "Consolidated view of your entire cohort — progress, alerts, CSV exports, regional PDF report with cobranding." },
      { icon: "🧠", title: "Business Intelligence (coming soon)", desc: "HR, Finance, Sales, Marketing and Customer Service modules augmented by AI — make better decisions with your own data." },
      { icon: "💬", title: "ATLAS — Your integrated AI", desc: "Contextual AI assistant that answers your members' questions, generates recommendations and trains on your documents." },
    ],
    journey_label: "4 steps",
    journey_title: "From measurement to amplification — your AI trajectory",
    journey_steps: [
      { phase: "Step 1", title: "Measure", desc: "AI maturity diagnostic, IMAI score /100, baseline profile per organization and cohort observatory." },
      { phase: "Step 2", title: "Govern", desc: "Generated AI policy, AI tools registry, complete Law 25 checklist — provable compliance in a few hours." },
      { phase: "Step 3", title: "Operate", desc: "Automated reports, Power Automate workflows, Knowledge Hub, M365 Optimizer — AI in your daily processes." },
      { phase: "Step 4", title: "Amplify", desc: "Business intelligence modules (HR, Finance, Sales…), advanced ATLAS agents, Agent Marketplace — AI as competitive advantage." },
    ],
    stats: [
      { value: "6", label: "Active modules", sub: "Measure → Govern → Operate" },
      { value: "90d", label: "Onboarding to impact", sub: "Certifying cohort program" },
      { value: "Law 25", label: "Built-in compliance", sub: "Integrated AI governance framework" },
      { value: "100%", label: "Canada", sub: "Data hosted in Quebec" },
    ],
    faq_label: "FAQ",
    faqs: [
      { q: "Is AgentHub only an AI diagnostic tool?", a: "No — it's your organization's complete AI operating system. The diagnostic is the entry point, but the platform covers governance, automations, reports and business intelligence. You start by measuring, then you operate and amplify continuously." },
      { q: "Do our advisors need AI skills?", a: "No. AgentHub is designed for non-technical teams. ATLAS guides both member SMBs and your advisors. The AI governance module automatically generates policies." },
      { q: "Where is data hosted?", a: "100% in Canada. All data is stored on Canadian infrastructure, compliant with Quebec Law 25. Each partner is isolated — no data shared between chambers." },
    ],
  },
};

export default async function AgentHubPage({ params }: Props) {
  const { locale } = await params;
  const c = locale === "en" ? CONTENT.en : CONTENT.fr;
  const color = "#1857e8";

  return (
    <>
      {/* Hero */}
      <section style={{ background: "#0a1730", paddingTop: "144px" }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                style={{ background: "rgba(24,87,232,0.2)", color: "#60a5fa", border: "1px solid rgba(24,87,232,0.3)" }}
              >
                {c.badge}
              </span>
              <span className="text-xs text-white/30 font-medium">{c.tagline}</span>
            </div>
            <h1
              className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-none"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              AgentHub<br />
              <span style={{ color }}>Platform</span>
            </h1>
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
        {/* Gradient bottom fade */}
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

      {/* For who */}
      <section className="py-20" style={{ background: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color }}>{c.for_who_label}</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900" style={{ fontFamily: "var(--font-poppins)" }}>{c.for_who_title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.for_who_items.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8" style={{ border: "1px solid #e2e8f0" }}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color }}>{c.features_label}</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900" style={{ fontFamily: "var(--font-poppins)" }}>{c.features_title}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.features.map((f) => (
              <div key={f.title} className="rounded-2xl p-7" style={{ border: "1px solid #e2e8f0" }}>
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-base font-bold text-slate-900 mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20" style={{ background: "#0a1730" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: "#60a5fa" }}>{c.journey_label}</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-poppins)" }}>{c.journey_title}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.journey_steps.map((step, i) => (
              <div key={step.phase} className="rounded-2xl p-7" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: `${color}30`, color: "#60a5fa" }}
                  >
                    {step.phase}
                  </span>
                  <span className="text-white/30 text-sm font-bold">{i + 1}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
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
