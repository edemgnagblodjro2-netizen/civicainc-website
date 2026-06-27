import { Link } from "@/i18n/navigation";

const NEWS = [
  {
    badge: "Lancement",
    badgeColor: "#0a1730",
    title: "CivicAI dévoile AgentHub Platform — une solution de gouvernance IA conçue pour les chambres de commerce et les PME québécoises",
    date: "24 juin 2026",
    href: "/plateformes" as const,
  },
  {
    badge: "Mise à jour produit",
    badgeColor: "#1857e8",
    title: "AgentHub Platform 2.0 — Nouveau tableau de bord de gouvernance IA avec gestion multi-tenant et rapports d'impact automatisés",
    date: "15 juin 2026",
    href: "/plateformes" as const,
  },
  {
    badge: "Entreprise",
    badgeColor: "#0891b2",
    title: "CivicAI Inc. officiellement constituée et enregistrée au Registre des entreprises du Québec — Une firme 100% québécoise dédiée à l'IA responsable",
    date: "3 juin 2026",
    href: "/pourquoi" as const,
  },
];

export default function LatestNews() {
  return (
    <section className="py-20" style={{ background: "#f1f5f9" }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-3xl lg:text-4xl font-bold text-[#0a1730] mb-10"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          Dernières nouvelles
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS.map((item) => (
            <div key={item.title} className="flex flex-col gap-4">
              {/* Badge */}
              <span
                className="self-start text-xs font-bold uppercase tracking-widest px-3 py-1.5 text-white"
                style={{ background: item.badgeColor }}
              >
                {item.badge}
              </span>

              {/* Title */}
              <Link
                href={item.href}
                className="text-lg font-semibold leading-snug transition-colors hover:opacity-75"
                style={{ color: "#1857e8", fontFamily: "var(--font-poppins), sans-serif" }}
              >
                {item.title}
              </Link>

              {/* Date */}
              <p className="text-slate-500 text-sm">{item.date}</p>

              {/* CTA */}
              <div className="mt-auto pt-2">
                <Link
                  href={item.href}
                  className="inline-block text-sm font-semibold text-white px-5 py-2.5 transition-all hover:opacity-90"
                  style={{ background: "#0a1730" }}
                >
                  Lire la suite
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
