import { Link } from "@/i18n/navigation";

const SECTIONS = [
  {
    tag: "AgentHub Platform",
    title: "Comment AgentHub transforme la gouvernance IA de votre organisation?",
    body: "Si vous cherchez à reprendre le contrôle de vos outils SaaS, à optimiser vos licences et à instaurer une politique IA claire — AgentHub Platform est la réponse conçue pour les chambres de commerce et les institutions québécoises.",
    bullets: [
      "Inventaire automatique de tous vos outils SaaS et IA",
      "Politiques IA définies, appliquées et documentées en équipe",
      "Réduction des coûts de licence mesurable dès le 1er mois",
      "Tableau de bord de maturité IA mis à jour en temps réel",
    ],
    cta: "Découvrir AgentHub →",
    href: "/plateformes" as const,
    imageRight: false,
    gradient: "linear-gradient(145deg, #0d1e3a 0%, #1857e8 70%, #6366f1 100%)",
    svgIcon: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="opacity-40">
        <rect x="15" y="30" width="90" height="65" rx="6" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)" />
        <line x1="15" y1="50" x2="105" y2="50" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
        <rect x="25" y="60" width="25" height="25" rx="3" fill="rgba(255,255,255,0.15)" />
        <rect x="58" y="60" width="35" height="10" rx="2" fill="rgba(255,255,255,0.2)" />
        <rect x="58" y="75" width="25" height="10" rx="2" fill="rgba(255,255,255,0.12)" />
        <circle cx="85" cy="25" r="14" fill="#1857e8" stroke="white" strokeWidth="1.5" />
        <path d="M79 25 L83 29 L91 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    tag: "PME & Chambres de commerce",
    title: "Accélérez la transformation numérique des PME de votre région",
    body: "CivicAI travaille avec les chambres de commerce pour accompagner les PME membres dans l'adoption de l'IA responsable. Un programme structuré, mesurable, adapté aux réalités des petites et moyennes entreprises québécoises.",
    bullets: [
      "Diagnostic IA personnalisé pour chaque entreprise membre",
      "Programme de formation en intelligence artificielle responsable",
      "Accès à AgentHub Platform pour les membres de la chambre",
      "Rapport d'impact documenté pour la chambre et ses partenaires",
    ],
    cta: "Voir notre programme →",
    href: "/pourquoi" as const,
    imageRight: true,
    gradient: "linear-gradient(145deg, #08253a 0%, #0891b2 70%, #22d3ee 100%)",
    svgIcon: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="opacity-40">
        <rect x="10" y="55" width="30" height="50" rx="3" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)" />
        <rect x="45" y="35" width="30" height="70" rx="3" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.08)" />
        <rect x="80" y="45" width="30" height="60" rx="3" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)" />
        <path d="M20 45 C35 30 50 22 65 15 C80 8 95 25 105 35" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeOpacity="0.6" />
        <circle cx="65" cy="15" r="5" fill="white" fillOpacity="0.6" />
      </svg>
    ),
  },
];

export default function ContentAlternating() {
  return (
    <section className="w-full">
      {SECTIONS.map((sec) => (
        <div key={sec.tag} className="grid md:grid-cols-2" style={{ minHeight: "420px" }}>

          {/* Visual panel */}
          <div
            className={`relative overflow-hidden flex items-center justify-center ${sec.imageRight ? "md:order-2" : "md:order-1"}`}
            style={{ background: sec.gradient, minHeight: "320px" }}
          >
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.07) 1px,transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            {/* Glow */}
            <div
              className="absolute -bottom-12 -right-12 w-64 h-64 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 65%)" }}
            />
            {/* Icon art */}
            <div className="relative z-10">
              {sec.svgIcon}
            </div>
            {/* Tag badge */}
            <div className="absolute top-6 left-6">
              <span
                className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                style={{ background: "rgba(255,211,62,0.2)", color: "#ffd23e", border: "1px solid rgba(255,211,62,0.4)" }}
              >
                {sec.tag}
              </span>
            </div>
          </div>

          {/* Text panel */}
          <div
            className={`flex flex-col justify-center px-10 lg:px-16 py-14 bg-white ${sec.imageRight ? "md:order-1" : "md:order-2"}`}
          >
            <h2
              className="text-2xl lg:text-3xl font-bold text-[#0a1730] leading-snug mb-5"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              {sec.title}
            </h2>

            <p className="text-slate-500 text-base leading-relaxed mb-6">
              {sec.body}
            </p>

            <ul className="space-y-3 mb-8">
              {sec.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-slate-600">
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#eaf1ff" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="#1857e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <Link
              href={sec.href}
              className="self-start inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-full transition-all hover:opacity-90"
              style={{ background: "#1857e8" }}
            >
              {sec.cta}
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
