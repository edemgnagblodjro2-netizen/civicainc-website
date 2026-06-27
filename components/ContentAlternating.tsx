import { Link } from "@/i18n/navigation";
import Image from "next/image";

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
    imageSrc: "/content-agenthub.jpg",
    gradient: "linear-gradient(145deg, #0d1e3a 0%, #1857e8 70%, #6366f1 100%)",
    overlay: "linear-gradient(to right, rgba(13,30,58,0.6) 0%, rgba(24,87,232,0.35) 100%)",
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
    imageSrc: "/content-pme.jpg",
    gradient: "linear-gradient(145deg, #08253a 0%, #0891b2 70%, #22d3ee 100%)",
    overlay: "linear-gradient(to right, rgba(8,37,58,0.55) 0%, rgba(8,145,178,0.35) 100%)",
  },
];

export default function ContentAlternating() {
  return (
    <section className="w-full overflow-hidden">
      {SECTIONS.map((sec) => (
        <div key={sec.tag} className="grid md:grid-cols-2 items-stretch" style={{ minHeight: "460px" }}>

          {/* Visual panel */}
          <div
            className={`relative overflow-hidden ${sec.imageRight ? "md:order-2" : "md:order-1"}`}
            style={{ minHeight: "320px" }}
          >
            {/* Absolute fill layer */}
            <div className="absolute inset-0">
              {/* Fallback gradient */}
              <div className="absolute inset-0" style={{ background: sec.gradient }} />

              {/* Real image */}
              <Image
                src={sec.imageSrc}
                alt={sec.tag}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Brand overlay */}
              <div className="absolute inset-0" style={{ background: sec.overlay }} />
            </div>

            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.06) 1px,transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* Tag badge */}
            <div className="absolute top-6 left-6 z-10">
              <span
                className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(0,0,0,0.45)",
                  color: "#ffd23e",
                  border: "1px solid rgba(255,211,62,0.4)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {sec.tag}
              </span>
            </div>

            {/* Bottom decorative bar */}
            <div
              className="absolute bottom-0 inset-x-0 h-1"
              style={{ background: "linear-gradient(to right, #1857e8, #6366f1)" }}
            />
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
