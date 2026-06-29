import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import ContactCTA from "@/components/ContactCTA";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale !== "en";
  return {
    title: isFr
      ? "AttenteZéro — Services Municipaux Intelligents par IA | CivicAI"
      : "AttenteZéro — Smart Municipal Services Powered by AI | CivicAI",
    description: isFr
      ? "Plateforme IA et géolocalisation pour municipalités et organismes publics. Services communautaires en temps réel, accessibles et inclusifs au Québec."
      : "AI and geolocation platform for municipalities and public organizations. Real-time, accessible and inclusive community services in Quebec.",
    alternates: {
      canonical: `https://civicainc.ca/${locale}/attentezero`,
      languages: { fr: "https://civicainc.ca/fr/attentezero", en: "https://civicainc.ca/en/attentezero" },
    },
  };
}

const CONTENT = {
  fr: {
    badge: "Bientôt disponible",
    tagline: "Services citoyens intelligents",
    headline: "AttenteZéro",
    subtitle: "Éliminez les files d'attente citoyennes grâce à l'intelligence artificielle. Conçu pour les municipalités, institutions publiques et organismes de services aux citoyens.",
    cta_notify: "Être notifié au lancement",
    cta_contact: "Parler à l'équipe",
    coming_banner: "AttenteZéro est actuellement en développement. Soyez parmi les premiers à l'essayer.",
    vision_label: "Notre vision",
    vision_title: "Zéro temps d'attente. Citoyens servis en temps réel.",
    vision_body: "Les citoyens méritent des services publics aussi fluides que les meilleures expériences privées. AttenteZéro apporte la puissance de l'IA aux services municipaux — sans transformer vos équipes en équipes tech.",
    problems_label: "Le problème actuel",
    problems: [
      { icon: "⏳", title: "Files d'attente longues", desc: "En moyenne 47 minutes d'attente pour un service municipal en personne au Québec." },
      { icon: "📞", title: "Appels répétés inutiles", desc: "60% des appels entrants aux services citoyens concernent le statut d'une demande existante." },
      { icon: "😤", title: "Frustration citoyenne", desc: "L'insatisfaction des citoyens face aux délais est la principale cause de plaintes auprès des élus." },
      { icon: "💼", title: "Surcharge des agents", desc: "Les agents passent 40% de leur temps sur des tâches répétitives à faible valeur ajoutée." },
    ],
    features_label: "Ce qu'AttenteZéro va offrir",
    features: [
      { icon: "🤖", title: "Gestion intelligente des files", desc: "IA prédictive qui anticipe les pics d'affluence et redirige les citoyens vers les créneaux disponibles." },
      { icon: "📱", title: "Portail citoyen mobile", desc: "Prise de rendez-vous, suivi de demande, notifications push — depuis n'importe quel appareil." },
      { icon: "📊", title: "Analytics en temps réel", desc: "Tableau de bord opérationnel : temps d'attente moyen, taux de service, satisfaction, alertes." },
      { icon: "🔗", title: "Intégration systèmes existants", desc: "Compatible avec les principaux logiciels municipaux québécois sans remplacement des systèmes en place." },
      { icon: "🌐", title: "Multilingue & accessible", desc: "Français, anglais, et langues communautaires. Conforme aux normes WCAG 2.1 niveau AA." },
      { icon: "🛡️", title: "Données hébergées au Canada", desc: "Toutes les données citoyennes restent au Canada. Conformité totale avec la Loi 25." },
    ],
    timeline_label: "Calendrier de lancement",
    timeline: [
      { date: "T3 2026", title: "Programme pilote", desc: "3 à 5 municipalités partenaires — accès anticipé et accompagnement dédié." },
      { date: "T4 2026", title: "Lancement général", desc: "Disponibilité complète pour toutes les municipalités et institutions publiques québécoises." },
      { date: "2027", title: "Expansion nationale", desc: "Déploiement dans d'autres provinces canadiennes et adaptation aux contextes fédéraux." },
    ],
    notify_label: "Rejoignez la liste d'attente prioritaire",
    notify_body: "Soyez les premiers informés du lancement et bénéficiez d'un accès au programme pilote avec tarifs préférentiels.",
    faq_label: "Questions fréquentes",
    faqs: [
      { q: "Quand AttenteZéro sera-t-il disponible ?", a: "Le programme pilote est prévu pour le T3 2026. Les organisations inscrites sur la liste prioritaire seront contactées en premier." },
      { q: "Quels types d'organisations sont ciblés ?", a: "Municipalités, MRC, organismes de services aux citoyens (bureaux d'aide juridique, centres de services scolaires, bureaux gouvernementaux)." },
      { q: "Faut-il remplacer nos systèmes actuels ?", a: "Non. AttenteZéro s'intègre aux logiciels municipaux existants via API. Votre infrastructure reste en place." },
    ],
  },
  en: {
    badge: "Coming soon",
    tagline: "Smart citizen services",
    headline: "AttenteZéro",
    subtitle: "Eliminate citizen wait times with artificial intelligence. Designed for municipalities, public institutions and citizen service organizations.",
    cta_notify: "Get notified at launch",
    cta_contact: "Talk to the team",
    coming_banner: "AttenteZéro is currently in development. Be among the first to try it.",
    vision_label: "Our vision",
    vision_title: "Zero wait time. Citizens served in real time.",
    vision_body: "Citizens deserve public services as smooth as the best private experiences. AttenteZéro brings the power of AI to municipal services — without turning your teams into tech teams.",
    problems_label: "The current problem",
    problems: [
      { icon: "⏳", title: "Long wait times", desc: "On average 47 minutes of wait time for an in-person municipal service in Quebec." },
      { icon: "📞", title: "Unnecessary repeat calls", desc: "60% of incoming calls to citizen services concern the status of an existing request." },
      { icon: "😤", title: "Citizen frustration", desc: "Citizen dissatisfaction with delays is the primary cause of complaints to elected officials." },
      { icon: "💼", title: "Agent overload", desc: "Agents spend 40% of their time on repetitive, low-value tasks." },
    ],
    features_label: "What AttenteZéro will offer",
    features: [
      { icon: "🤖", title: "Smart queue management", desc: "Predictive AI that anticipates peak periods and redirects citizens to available time slots." },
      { icon: "📱", title: "Mobile citizen portal", desc: "Appointment booking, request tracking, push notifications — from any device." },
      { icon: "📊", title: "Real-time analytics", desc: "Operational dashboard: average wait time, service rate, satisfaction, alerts." },
      { icon: "🔗", title: "Integration with existing systems", desc: "Compatible with major Quebec municipal software without replacing existing systems." },
      { icon: "🌐", title: "Multilingual & accessible", desc: "French, English, and community languages. WCAG 2.1 Level AA compliant." },
      { icon: "🛡️", title: "Data hosted in Canada", desc: "All citizen data remains in Canada. Full compliance with Quebec Law 25." },
    ],
    timeline_label: "Launch timeline",
    timeline: [
      { date: "Q3 2026", title: "Pilot program", desc: "3 to 5 partner municipalities — early access and dedicated support." },
      { date: "Q4 2026", title: "General launch", desc: "Full availability for all Quebec municipalities and public institutions." },
      { date: "2027", title: "National expansion", desc: "Deployment in other Canadian provinces and adaptation to federal contexts." },
    ],
    notify_label: "Join the priority waitlist",
    notify_body: "Be the first informed at launch and benefit from access to the pilot program with preferential pricing.",
    faq_label: "FAQ",
    faqs: [
      { q: "When will AttenteZéro be available?", a: "The pilot program is planned for Q3 2026. Organizations on the priority list will be contacted first." },
      { q: "What types of organizations are targeted?", a: "Municipalities, regional county municipalities (MRCs), citizen service organizations (legal aid offices, school service centers, government offices)." },
      { q: "Do we need to replace our current systems?", a: "No. AttenteZéro integrates with existing municipal software via API. Your infrastructure stays in place." },
    ],
  },
};

export default async function AttenteZeroPage({ params }: Props) {
  const { locale } = await params;
  const c = locale === "en" ? CONTENT.en : CONTENT.fr;
  const color = "#0891b2";

  return (
    <>
      {/* Hero */}
      <section style={{ background: "#0a1730", paddingTop: "144px" }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                style={{ background: "rgba(8,145,178,0.2)", color: "#22d3ee", border: "1px solid rgba(8,145,178,0.3)" }}
              >
                {c.badge}
              </span>
              <span className="text-xs text-white/30 font-medium">{c.tagline}</span>
            </div>
            <h1
              className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-none"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Attente<span style={{ color }}>Zéro</span>
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
                {c.cta_notify}
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V4a1 1 0 10-2 0v1.083A6 6 0 006 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
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
        <div style={{ height: 60, background: "linear-gradient(to bottom, #0a1730, #ecfeff)" }} />
      </section>

      {/* Coming soon banner */}
      <section style={{ background: "#ecfeff" }}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3 rounded-2xl px-6 py-4" style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
            <svg width="18" height="18" fill="none" stroke={color} viewBox="0 0 24 24" strokeWidth={2} className="flex-shrink-0">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p className="text-sm font-medium" style={{ color }}>{c.coming_banner}</p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20" style={{ background: "#ecfeff" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color }}>{c.vision_label}</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-poppins)", color: "#0a1730" }}>{c.vision_title}</h2>
          <p className="text-lg leading-relaxed" style={{ color: "#164e63" }}>{c.vision_body}</p>
        </div>
      </section>

      {/* Problems */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color }}>{c.problems_label}</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.problems.map((p) => (
              <div key={p.title} className="rounded-2xl p-7" style={{ border: "1px solid #e2e8f0" }}>
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-base font-bold text-slate-900 mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20" style={{ background: "#0a1730" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: "#22d3ee" }}>{c.features_label}</span>
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

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color }}>{c.timeline_label}</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {c.timeline.map((t, i) => (
              <div key={t.date} className="text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-sm font-bold"
                  style={{ background: i === 0 ? color : "rgba(8,145,178,0.15)", color: i === 0 ? "white" : color }}
                >
                  {i + 1}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color }}>{t.date}</div>
                <h3 className="text-base font-bold text-slate-900 mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{t.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notify CTA */}
      <section className="py-20" style={{ background: `${color}08` }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>{c.notify_label}</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">{c.notify_body}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white font-bold text-sm px-8 py-4 rounded-xl transition-all hover:opacity-90"
            style={{ background: color }}
          >
            {c.cta_notify}
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center" style={{ fontFamily: "var(--font-poppins)" }}>{c.faq_label}</h2>
          <div className="space-y-4">
            {c.faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl p-7" style={{ border: "1px solid #e2e8f0" }}>
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
