import Image from "next/image";
import ContactCTA from "@/components/ContactCTA";
import { Link } from "@/i18n/navigation";

const ARTICLES = [
  {
    id: "lancement",
    badge: "Lancement",
    badgeColor: "#0a1730",
    date: "24 juin 2026",
    image: "/news-agenthub-launch.jpg",
    imageFallback: "linear-gradient(135deg, #0a1730 0%, #1857e8 100%)",
    title: "CivicAI dévoile AgentHub Platform — une solution de gouvernance IA conçue pour les chambres de commerce et les PME québécoises",
    body: "CivicAI Inc. annonce le lancement officiel d'AgentHub Platform, sa solution phare de gouvernance de l'intelligence artificielle. Conçue spécifiquement pour les chambres de commerce, les associations d'affaires et les PME québécoises, la plateforme offre un diagnostic de maturité IA structuré, un observatoire analytique multi-sources et un tableau de bord de gouvernance en temps réel.\n\nAgentHub Platform est propulsée par ATLAS, l'agent IA conversationnel de CivicAI, qui accompagne les organisations à chaque étape de leur parcours de transformation numérique. Disponible dès maintenant en accès pilote.",
    href: "/plateformes" as const,
    ctaLabel: "Découvrir AgentHub Platform",
  },
  {
    id: "mise-a-jour-produit",
    badge: "Mise à jour produit",
    badgeColor: "#1857e8",
    date: "15 juin 2026",
    image: "/news-agenthub-2.jpg",
    imageFallback: "linear-gradient(135deg, #1857e8 0%, #6366f1 100%)",
    title: "AgentHub Platform 2.0 — Nouveau tableau de bord de gouvernance IA avec gestion multi-tenant et rapports d'impact automatisés",
    body: "CivicAI déploie la version 2.0 d'AgentHub Platform avec des améliorations majeures : un nouveau tableau de bord de gouvernance IA entièrement repensé, une architecture multi-tenant renforcée pour les réseaux d'organisations, et des rapports d'impact automatisés générés à partir des données de performance.\n\nCette mise à jour intègre également des connecteurs natifs avec les environnements Microsoft 365 et des outils d'analyse comparative inter-organisations pour les chambres de commerce membres.",
    href: "/plateformes" as const,
    ctaLabel: "Voir les plateformes",
  },
  {
    id: "entreprise",
    badge: "Entreprise",
    badgeColor: "#0891b2",
    date: "3 juin 2026",
    image: "/news-civicai-enregistrement.jpg",
    imageFallback: "linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)",
    title: "CivicAI Inc. officiellement constituée et enregistrée au Registre des entreprises du Québec — Une firme 100% québécoise dédiée à l'IA responsable",
    body: "CivicAI Inc. est officiellement constituée et enregistrée au Registre des entreprises du Québec (REQ). Basée à Trois-Rivières, la firme se positionne comme un éditeur de logiciels IA 100% québécois, dédié au développement de plateformes d'intelligence artificielle responsables pour les entreprises, les organismes publics et les institutions.\n\nCivicAI Inc. s'engage à respecter le cadre réglementaire québécois en matière de protection des données et de gouvernance de l'IA, tout en contribuant à l'écosystème technologique régional.",
    href: "/pourquoi" as const,
    ctaLabel: "En savoir plus sur CivicAI",
  },
];

export default function ActualitesPage() {
  const [featured, ...rest] = ARTICLES;

  return (
    <>
      {/* Hero — image équipe en fond */}
      <section className="relative overflow-hidden" style={{ paddingTop: "144px", minHeight: "420px" }}>
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/news-equipe-civicai.jpg"
            alt="Équipe CivicAI"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(10,23,48,0.92) 0%, rgba(10,23,48,0.75) 50%, rgba(10,23,48,0.4) 100%)" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 mb-6"
            style={{ background: "rgba(24,87,232,0.25)", color: "#93b4ff", border: "1px solid rgba(24,87,232,0.35)" }}
          >
            Actualités
          </span>
          <h1
            className="text-5xl lg:text-6xl font-bold text-white tracking-tight mb-5 max-w-2xl"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Dernières nouvelles
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-xl">
            Suivez l&apos;actualité de CivicAI Inc. — lancements, mises à jour produit et jalons d&apos;entreprise.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">

          {/* Featured article */}
          <article id={featured.id} className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl">
            {/* Image panel */}
            <div className="relative min-h-[320px] lg:min-h-0" style={{ background: featured.imageFallback }}>
              <div className="absolute inset-0">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to right, rgba(10,23,48,0.25) 0%, transparent 60%)" }}
              />
            </div>

            {/* Content panel */}
            <div className="bg-[#0a1730] p-10 lg:p-14 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 text-white"
                    style={{ border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)" }}
                  >
                    {featured.badge}
                  </span>
                  <time className="text-sm text-white/40">{featured.date}</time>
                </div>

                <h2
                  className="text-2xl lg:text-3xl font-bold text-white leading-snug mb-6"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {featured.title}
                </h2>

                <div className="space-y-4">
                  {featured.body.split("\n\n").map((para, i) => (
                    <p key={i} className="text-white/55 text-sm leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href={featured.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a1730] bg-white px-6 py-3 rounded-full transition-all hover:bg-slate-100"
                >
                  {featured.ctaLabel} →
                </Link>
              </div>
            </div>
          </article>

          {/* Secondary articles — sans image, fond blanc cassé */}
          <div className="grid md:grid-cols-2 gap-8">
            {rest.map((article) => (
              <article
                key={article.id}
                id={article.id}
                className="flex flex-col rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow"
                style={{ background: "#f8fafc" }}
              >
                {/* Header: badge + date */}
                <div className="flex items-center gap-3 px-8 pt-8 pb-4">
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 text-white rounded-sm"
                    style={{ background: article.badgeColor }}
                  >
                    {article.badge}
                  </span>
                  <time className="text-xs text-slate-400 font-medium">{article.date}</time>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 px-8 pb-8">
                  <h2
                    className="text-xl font-bold text-[#0a1730] leading-snug mb-4"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    {article.title}
                  </h2>

                  <div className="space-y-3 mb-6 flex-1">
                    {article.body.split("\n\n").map((para, i) => (
                      <p key={i} className="text-slate-500 text-sm leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>

                  <Link
                    href={article.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 self-start rounded-full transition-all hover:opacity-90"
                    style={{ background: article.badgeColor }}
                  >
                    {article.ctaLabel} →
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <ContactCTA />
    </>
  );
}
