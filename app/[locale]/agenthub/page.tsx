import { Link } from "@/i18n/navigation";
import ContactCTA from "@/components/ContactCTA";

type Props = { params: Promise<{ locale: string }> };

const CONTENT = {
  fr: {
    badge: "Plateforme IA",
    tagline: "Accélérateur de transformation numérique",
    headline: "AgentHub Platform",
    subtitle: "La plateforme IA qui transforme vos membres PME en 90 jours. Conçue pour les chambres de commerce, associations d'affaires et organismes d'accompagnement du Québec.",
    cta_demo: "Demander une démo",
    cta_contact: "Parler à l'équipe",
    for_who_label: "Pour qui",
    for_who_title: "Fait pour les acteurs de l'écosystème PME",
    for_who_items: [
      { icon: "🏛️", title: "Chambres de commerce", desc: "Accompagnez vos membres PME avec un parcours IA structuré, mesurable et certifiant." },
      { icon: "🤝", title: "Associations d'affaires", desc: "Offrez une valeur différenciée à vos membres grâce à des cohortes IA pilotées par vos équipes." },
      { icon: "📊", title: "Organismes d'accompagnement", desc: "Outillez vos conseillers avec ATLAS, notre IA qui génère des diagnostics personnalisés en minutes." },
    ],
    features_label: "Fonctionnalités",
    features_title: "Tout ce qu'il vous faut pour piloter l'IA en organisation",
    features: [
      { icon: "🧠", title: "Diagnostic de maturité IA", desc: "Évaluation automatisée de la posture IA de chaque PME membre en moins de 20 minutes." },
      { icon: "🗺️", title: "Parcours personnalisés", desc: "11 phases d'accélération adaptées au niveau de chaque organisation — de la sensibilisation à la gouvernance." },
      { icon: "📈", title: "Tableau de bord Geneviève", desc: "Vue consolidée de toute votre cohorte : progression, alertes, actions prioritaires, en temps réel." },
      { icon: "🎓", title: "Certificats de parcours", desc: "Chaque PME membre reçoit un certificat attestant son niveau de maturité IA à l'issue du programme." },
      { icon: "🤖", title: "ATLAS — IA conseillère", desc: "Votre assistante IA intégrée qui répond aux questions des membres et génère des recommandations contextuelles." },
      { icon: "🔒", title: "Gouvernance & conformité", desc: "Cadre de gouvernance IA inclus, conforme à la Loi 25 et aligné sur les meilleures pratiques canadiennes." },
    ],
    journey_label: "Parcours type",
    journey_title: "De la sensibilisation à la certification en 90 jours",
    journey_steps: [
      { phase: "J1–15", title: "Onboarding & diagnostic", desc: "Inscription des membres, évaluation de maturité IA, profil de départ par organisation." },
      { phase: "J15–45", title: "Phases d'accélération", desc: "Modules IA appliqués, ateliers pratiques, suivi par ATLAS et votre équipe de conseillers." },
      { phase: "J45–75", title: "Déploiement & gouvernance", desc: "Mise en place de cas d'usage IA réels, cadre de gouvernance, premières mesures de ROI." },
      { phase: "J75–90", title: "Certification & bilan", desc: "Rapport de progression, certificat de maturité IA, recommandations pour la suite du parcours." },
    ],
    stats: [
      { value: "11", label: "Phases d'accélération", sub: "Sensibilisation → Gouvernance" },
      { value: "90j", label: "Durée du programme", sub: "De l'onboarding au certificat" },
      { value: "3×", label: "Gain de décision", sub: "Par rapport aux méthodes traditionnelles" },
      { value: "12", label: "PME par cohorte", sub: "Accompagnement personnalisé garanti" },
    ],
    testimonial: {
      quote: "AgentHub a radicalement changé notre façon de piloter la transformation numérique de nos membres. Le diagnostic de maturité IA nous a permis d'identifier en quelques jours ce qui aurait pris des mois à analyser.",
      name: "Marie-Christine Bolduc",
      role: "Directrice générale, Chambre de commerce régionale",
    },
    faq_label: "Questions fréquentes",
    faqs: [
      { q: "Combien de PME peut-on accompagner par cohorte ?", a: "Une cohorte standard comprend 8 à 12 PME membres. Nous pouvons adapter la taille selon vos capacités d'accompagnement." },
      { q: "Faut-il des compétences IA chez nos conseillers ?", a: "Non. AgentHub est conçu pour être utilisé par des équipes non-techniques. ATLAS, notre IA, guide à la fois les membres et vos conseillers." },
      { q: "Où sont hébergées les données ?", a: "100% au Canada. Toutes les données sont stockées sur infrastructure canadienne, conformes à la Loi 25 du Québec." },
    ],
  },
  en: {
    badge: "AI Platform",
    tagline: "Digital transformation accelerator",
    headline: "AgentHub Platform",
    subtitle: "The AI platform that transforms your SMB members in 90 days. Designed for Quebec chambers of commerce, business associations and support organizations.",
    cta_demo: "Request a demo",
    cta_contact: "Talk to the team",
    for_who_label: "Who it's for",
    for_who_title: "Built for SMB ecosystem players",
    for_who_items: [
      { icon: "🏛️", title: "Chambers of commerce", desc: "Support your SMB members with a structured, measurable and certifying AI journey." },
      { icon: "🤝", title: "Business associations", desc: "Offer differentiated value to your members through AI cohorts led by your teams." },
      { icon: "📊", title: "Support organizations", desc: "Equip your advisors with ATLAS, our AI that generates personalized diagnostics in minutes." },
    ],
    features_label: "Features",
    features_title: "Everything you need to lead AI in your organization",
    features: [
      { icon: "🧠", title: "AI maturity diagnostic", desc: "Automated assessment of each member SMB's AI posture in under 20 minutes." },
      { icon: "🗺️", title: "Personalized journeys", desc: "11 acceleration phases adapted to each organization's level — from awareness to governance." },
      { icon: "📈", title: "Geneviève dashboard", desc: "Consolidated view of your entire cohort: progress, alerts, priority actions, in real time." },
      { icon: "🎓", title: "Journey certificates", desc: "Each member SMB receives a certificate attesting their AI maturity level upon program completion." },
      { icon: "🤖", title: "ATLAS — AI advisor", desc: "Your integrated AI assistant that answers member questions and generates contextual recommendations." },
      { icon: "🔒", title: "Governance & compliance", desc: "Included AI governance framework, compliant with Quebec Law 25 and aligned with Canadian best practices." },
    ],
    journey_label: "Typical journey",
    journey_title: "From awareness to certification in 90 days",
    journey_steps: [
      { phase: "D1–15", title: "Onboarding & diagnostic", desc: "Member enrollment, AI maturity assessment, baseline profile per organization." },
      { phase: "D15–45", title: "Acceleration phases", desc: "Applied AI modules, practical workshops, follow-up by ATLAS and your advisor team." },
      { phase: "D45–75", title: "Deployment & governance", desc: "Implementation of real AI use cases, governance framework, first ROI measurements." },
      { phase: "D75–90", title: "Certification & review", desc: "Progress report, AI maturity certificate, recommendations for the next phase." },
    ],
    stats: [
      { value: "11", label: "Acceleration phases", sub: "Awareness → Governance" },
      { value: "90d", label: "Program duration", sub: "From onboarding to certificate" },
      { value: "3×", label: "Decision speed gain", sub: "vs. traditional methods" },
      { value: "12", label: "SMBs per cohort", sub: "Guaranteed personalized support" },
    ],
    testimonial: {
      quote: "AgentHub radically changed how we drive digital transformation for our members. The AI maturity diagnostic helped us identify in days what would have taken months to analyze.",
      name: "Marie-Christine Bolduc",
      role: "Executive Director, Regional Chamber of Commerce",
    },
    faq_label: "FAQ",
    faqs: [
      { q: "How many SMBs can we support per cohort?", a: "A standard cohort includes 8 to 12 member SMBs. We can adapt the size to your support capacity." },
      { q: "Do our advisors need AI skills?", a: "No. AgentHub is designed for non-technical teams. ATLAS, our AI, guides both members and your advisors." },
      { q: "Where is data hosted?", a: "100% in Canada. All data is stored on Canadian infrastructure, compliant with Quebec Law 25." },
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

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-xl text-slate-700 leading-relaxed mb-8 font-medium">
            &ldquo;{c.testimonial.quote}&rdquo;
          </blockquote>
          <div className="text-sm font-bold text-slate-900">{c.testimonial.name}</div>
          <div className="text-sm text-slate-400 mt-1">{c.testimonial.role}</div>
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
