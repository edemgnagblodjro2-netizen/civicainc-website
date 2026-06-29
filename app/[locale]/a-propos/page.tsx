import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import ContactCTA from "@/components/ContactCTA";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale !== "en";
  return {
    title: isFr
      ? "À Propos — CivicAI Inc., Éditeur de Logiciels IA à Trois-Rivières, Québec"
      : "About — CivicAI Inc., AI Software Publisher in Trois-Rivières, Quebec",
    description: isFr
      ? "CivicAI Inc. est basée à Trois-Rivières, Québec. Découvrez notre mission, notre équipe et notre engagement pour une intelligence artificielle concrète et mesurable."
      : "CivicAI Inc. is based in Trois-Rivières, Quebec. Discover our mission, team and commitment to concrete, measurable artificial intelligence.",
    alternates: {
      canonical: `https://civicainc.ca/${locale}/a-propos`,
      languages: { fr: "https://civicainc.ca/fr/a-propos", en: "https://civicainc.ca/en/a-propos" },
    },
  };
}

const CONTENT = {
  fr: {
    badge: "À propos de CivicAI",
    headline: "Nous croyons que l'IA devrait travailler pour les organisations québécoises — pas contre elles.",
    mission_label: "Notre mission",
    mission_title: "Rendre l'intelligence artificielle accessible, responsable et rentable pour chaque organisation au Québec.",
    mission_body: "CivicAI Inc. a été fondée avec une conviction simple : trop d'organisations québécoises — chambres de commerce, PME, municipalités, institutions publiques — voient l'IA comme une menace ou une complexité inaccessible. Notre rôle est de changer ça. Nous construisons des plateformes IA concrètes, mesurables et adaptées à la réalité des organisations d'ici.",
    origin_label: "Notre histoire",
    origin_title: "Né d'un constat terrain",
    origin_body: "Après des années à observer la transformation numérique des organisations québécoises, notre équipe a identifié un écart persistant : les outils IA existants étaient soit trop génériques, soit conçus pour de grandes entreprises internationales. Les chambres de commerce et les PME locales étaient laissées pour compte. CivicAI est née de cette frustration — et de la certitude qu'on pouvait faire mieux, ici, en français, avec des données qui restent au Canada.",
    values_label: "Nos valeurs",
    values_title: "Ce qui guide chaque décision",
    values: [
      {
        icon: "🇨🇦",
        title: "Ancrage québécois",
        desc: "Nous opérons au Québec, pour le Québec. Nos équipes, nos serveurs et nos contrats sont ici. Pas de délocalisation cachée.",
      },
      {
        icon: "🤝",
        title: "Partenariat réel",
        desc: "Nous ne sommes pas des vendeurs de licences. Nous sommes des partenaires de transformation — présents de l'onboarding aux résultats.",
      },
      {
        icon: "📏",
        title: "Résultats mesurables",
        desc: "Chaque déploiement est suivi d'indicateurs concrets. Si on ne peut pas le mesurer, on ne le promet pas.",
      },
      {
        icon: "🔍",
        title: "Transparence totale",
        desc: "Nos algorithmes sont auditables, nos recommandations explicables. Vous comprenez toujours pourquoi l'IA vous suggère quelque chose.",
      },
      {
        icon: "🛡️",
        title: "Respect de la vie privée",
        desc: "Loi 25, LPRPDE, architecture multi-tenant. La protection des données de vos membres n'est pas une option — c'est notre fondation.",
      },
      {
        icon: "🌱",
        title: "IA centrée sur l'humain",
        desc: "La technologie amplifie vos équipes, elle ne les remplace pas. Chaque outil que nous construisons garde l'humain en contrôle.",
      },
    ],
    platforms_label: "Nos plateformes",
    platforms_title: "Trois produits, un écosystème cohérent",
    platforms: [
      {
        name: "AgentHub Platform",
        color: "#1857e8",
        href: "/agenthub" as const,
        desc: "Accélérateur de transformation IA pour chambres de commerce et organismes d'accompagnement. Diagnostics, cohortes, certificats.",
      },
      {
        name: "NexHire EIP",
        color: "#7c3aed",
        href: "/nexhire" as const,
        desc: "Audit intelligent des actifs numériques. Licences redondantes, conformité Loi 25, ROI IA mesuré en 36 jours.",
      },
      {
        name: "AttenteZéro",
        color: "#0891b2",
        href: "/attentezero" as const,
        desc: "Gestion intelligente des files d'attente citoyennes pour municipalités et institutions publiques. Lancement T3 2026.",
      },
    ],
    stats: [
      { value: "2025", label: "Année de fondation", sub: "Trois-Rivières, Québec" },
      { value: "3", label: "Plateformes actives", sub: "AgentHub, NexHire, AttenteZéro" },
      { value: "×9.9", label: "ROI moyen constaté", sub: "Sur les déploiements pilotes" },
      { value: "100%", label: "Données au Canada", sub: "Hébergement et équipes locaux" },
    ],
    contact_label: "Travailler ensemble",
    contact_title: "Une question, un projet, une idée ?",
    contact_body: "Notre équipe est basée à Trois-Rivières et répond sous 24h.",
    contact_cta: "Nous contacter",
    careers_cta: "Voir les postes ouverts",
    location: "Trois-Rivières, Québec, Canada",
  },
  en: {
    badge: "About CivicAI",
    headline: "We believe AI should work for Quebec organizations — not against them.",
    mission_label: "Our mission",
    mission_title: "Make artificial intelligence accessible, responsible and profitable for every organization in Quebec.",
    mission_body: "CivicAI Inc. was founded on a simple conviction: too many Quebec organizations — chambers of commerce, SMBs, municipalities, public institutions — see AI as a threat or an inaccessible complexity. Our role is to change that. We build concrete, measurable AI platforms adapted to the reality of local organizations.",
    origin_label: "Our story",
    origin_title: "Born from a field observation",
    origin_body: "After years observing the digital transformation of Quebec organizations, our team identified a persistent gap: existing AI tools were either too generic or designed for large international corporations. Local chambers of commerce and SMBs were left behind. CivicAI was born from that frustration — and the certainty that we could do better, here, in French, with data that stays in Canada.",
    values_label: "Our values",
    values_title: "What guides every decision",
    values: [
      {
        icon: "🇨🇦",
        title: "Quebec roots",
        desc: "We operate in Quebec, for Quebec. Our teams, servers and contracts are here. No hidden offshoring.",
      },
      {
        icon: "🤝",
        title: "Real partnership",
        desc: "We're not license vendors. We're transformation partners — present from onboarding to results.",
      },
      {
        icon: "📏",
        title: "Measurable results",
        desc: "Every deployment is tracked with concrete indicators. If we can't measure it, we don't promise it.",
      },
      {
        icon: "🔍",
        title: "Full transparency",
        desc: "Our algorithms are auditable, our recommendations explainable. You always understand why AI suggests something.",
      },
      {
        icon: "🛡️",
        title: "Privacy first",
        desc: "Law 25, PIPEDA, multi-tenant architecture. Protecting your members' data isn't optional — it's our foundation.",
      },
      {
        icon: "🌱",
        title: "Human-centred AI",
        desc: "Technology amplifies your teams, it doesn't replace them. Every tool we build keeps humans in control.",
      },
    ],
    platforms_label: "Our platforms",
    platforms_title: "Three products, one coherent ecosystem",
    platforms: [
      {
        name: "AgentHub Platform",
        color: "#1857e8",
        href: "/agenthub" as const,
        desc: "AI transformation accelerator for chambers of commerce and support organizations. Diagnostics, cohorts, certificates.",
      },
      {
        name: "NexHire EIP",
        color: "#7c3aed",
        href: "/nexhire" as const,
        desc: "Smart digital asset audit. Redundant licenses, Law 25 compliance, AI ROI measured in 36 days.",
      },
      {
        name: "AttenteZéro",
        color: "#0891b2",
        href: "/attentezero" as const,
        desc: "Smart citizen queue management for municipalities and public institutions. Launching Q3 2026.",
      },
    ],
    stats: [
      { value: "2025", label: "Year founded", sub: "Trois-Rivières, Quebec" },
      { value: "3", label: "Active platforms", sub: "AgentHub, NexHire, AttenteZéro" },
      { value: "×9.9", label: "Average observed ROI", sub: "On pilot deployments" },
      { value: "100%", label: "Data in Canada", sub: "Local hosting and teams" },
    ],
    contact_label: "Work together",
    contact_title: "A question, a project, an idea?",
    contact_body: "Our team is based in Trois-Rivières and responds within 24 hours.",
    contact_cta: "Contact us",
    careers_cta: "View open positions",
    location: "Trois-Rivières, Quebec, Canada",
  },
};

export default async function AProposPage({ params }: Props) {
  const { locale } = await params;
  const c = locale === "en" ? CONTENT.en : CONTENT.fr;

  return (
    <>
      {/* Hero */}
      <section style={{ background: "#0a1730", paddingTop: "144px" }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(124,58,237,0.2)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.3)" }}
          >
            {c.badge}
          </span>
          <h1
            className="text-4xl lg:text-5xl font-black text-white leading-tight max-w-3xl"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            {c.headline}
          </h1>
        </div>
        <div style={{ height: 60, background: "linear-gradient(to bottom, #0a1730, #ffffff)" }} />
      </section>

      {/* Stats */}
      <section className="bg-white pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {c.stats.map((s) => (
              <div key={s.label} className="text-center px-4 py-6 rounded-2xl" style={{ border: "1px solid #e2e8f0" }}>
                <div className="text-3xl font-black mb-1" style={{ fontFamily: "var(--font-poppins)", color: "#7c3aed" }}>
                  {s.value}
                </div>
                <div className="text-sm font-semibold text-slate-900 mb-0.5">{s.label}</div>
                <div className="text-xs text-slate-400">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20" style={{ background: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest block mb-4" style={{ color: "#7c3aed" }}>
                {c.mission_label}
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-snug"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                {c.mission_title}
              </h2>
              <p className="text-slate-500 leading-relaxed text-base">{c.mission_body}</p>
            </div>
            <div
              className="rounded-2xl p-10 flex flex-col gap-5"
              style={{ background: "#0a1730" }}
            >
              {[
                { icon: "🎯", text: locale === "fr" ? "Des résultats mesurables en 30–90 jours" : "Measurable results in 30–90 days" },
                { icon: "🇨🇦", text: locale === "fr" ? "100% québécois — équipes et données au Canada" : "100% Quebec — teams and data in Canada" },
                { icon: "🤖", text: locale === "fr" ? "IA responsable, auditable et explicable" : "Responsible, auditable and explainable AI" },
                { icon: "🤝", text: locale === "fr" ? "Partenaire de transformation, pas vendeur de licences" : "Transformation partner, not a license vendor" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <span className="text-white/80 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-widest block mb-4 text-center" style={{ color: "#7c3aed" }}>
            {c.origin_label}
          </span>
          <h2
            className="text-3xl font-bold text-slate-900 mb-6 text-center"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            {c.origin_title}
          </h2>
          <div
            className="relative pl-6 text-slate-600 leading-relaxed text-base"
            style={{ borderLeft: "3px solid #7c3aed" }}
          >
            <p>{c.origin_body}</p>
          </div>
          <div className="mt-8 flex items-center gap-3 text-sm text-slate-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            {c.location}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest block mb-4" style={{ color: "#7c3aed" }}>
              {c.values_label}
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-slate-900"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              {c.values_title}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.values.map((v) => (
              <div
                key={v.title}
                className="bg-white flex gap-5 p-7 rounded-2xl transition-shadow hover:shadow-md"
                style={{ border: "1px solid #e2e8f0" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: "#f8fafc" }}
                >
                  {v.icon}
                </div>
                <div>
                  <h3
                    className="text-sm font-bold text-slate-900 mb-2"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest block mb-4" style={{ color: "#7c3aed" }}>
              {c.platforms_label}
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-slate-900"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              {c.platforms_title}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.platforms.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group block rounded-2xl p-8 transition-all hover:shadow-lg"
                style={{ border: "1px solid #e2e8f0" }}
              >
                <div
                  className="w-10 h-1.5 rounded-full mb-5"
                  style={{ background: p.color }}
                />
                <h3
                  className="text-lg font-bold text-slate-900 mb-3 group-hover:underline"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {p.name}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{p.desc}</p>
                <span
                  className="text-xs font-bold inline-flex items-center gap-1"
                  style={{ color: p.color }}
                >
                  {locale === "fr" ? "En savoir plus" : "Learn more"}
                  <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA inline */}
      <section className="py-20" style={{ background: "#0a1730" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest block mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
            {c.contact_label}
          </span>
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            {c.contact_title}
          </h2>
          <p className="text-white/50 mb-10 leading-relaxed">{c.contact_body}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all hover:opacity-90"
              style={{ background: "#7c3aed" }}
            >
              {c.contact_cta}
              <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/carrieres"
              className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-xl transition-all hover:bg-white/10"
              style={{ color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              {c.careers_cta}
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
