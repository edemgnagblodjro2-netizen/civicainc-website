const PILLARS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Plateformes, pas projets",
    desc: "Nos produits sont testés, documentés et maintenus en continu.",
    color: "#1857e8",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "IA embarquée",
    desc: "L'intelligence artificielle est au cœur de chaque plateforme, pas un ajout.",
    color: "#6366f1",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Résultats mesurables",
    desc: "Chaque déploiement inclut des indicateurs de performance et un suivi rigoureux.",
    color: "#0891b2",
  },
  {
    icon: <span className="text-xl">🍁</span>,
    title: "Développé au Québec",
    desc: "Une entreprise locale, des équipes accessibles, un accompagnement humain.",
    color: "#10b981",
  },
];

const COMPARE_ROWS = [
  { label: "Produit",       civicai: "Plateforme logicielle",   agence: "Projet sur mesure" },
  { label: "Maintenance",   civicai: "Continue et incluse",      agence: "Contrat séparé" },
  { label: "Mise à jour",   civicai: "Automatique",              agence: "Facturation additionnelle" },
  { label: "IA",            civicai: "Intégrée nativement",      agence: "Add-on optionnel" },
  { label: "Déploiement",   civicai: "Jours ou semaines",        agence: "Mois ou années" },
  { label: "ROI",           civicai: "Mesurable et garanti",     agence: "Variable" },
];

export default function WhyCivicAI() {
  return (
    <section className="py-32" style={{ background: "#0a1730" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
            style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            Pourquoi CivicAI
          </span>
          <h2
            className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Un éditeur,<br />
            <span style={{ color: "#1857e8" }}>pas une agence.</span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed">
            CivicAI conçoit, développe et maintient ses propres plateformes logicielles. Nos clients obtiennent un produit éprouvé, pas un projet sur mesure fragile.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl p-6 transition-all hover:scale-[1.02]"
              style={{ background: "rgba(255,255,255,0.04)", border: "1.5px solid rgba(255,255,255,0.08)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                style={{ background: `${p.color}22`, color: p.color, border: `1px solid ${p.color}44` }}
              >
                {p.icon}
              </div>
              <h3
                className="text-white font-bold text-base mb-2"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                {p.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
          {/* Table header */}
          <div className="grid grid-cols-3" style={{ background: "rgba(255,255,255,0.05)" }}>
            <div className="px-6 py-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
              Comparaison
            </div>
            <div className="px-6 py-4 flex items-center gap-2" style={{ background: "rgba(24,87,232,0.2)", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#1857e8" }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-white font-bold text-sm">CivicAI Inc.</span>
            </div>
            <div className="px-6 py-4 flex items-center" style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
              <span className="text-white/35 font-medium text-sm">Agence traditionnelle</span>
            </div>
          </div>

          {/* Rows */}
          {COMPARE_ROWS.map((row, i) => (
            <div
              key={row.label}
              className="grid grid-cols-3"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)" }}
            >
              <div className="px-6 py-4 text-sm font-semibold text-white/50">
                {row.label}
              </div>
              <div
                className="px-6 py-4 flex items-center gap-2"
                style={{ borderLeft: "1px solid rgba(24,87,232,0.2)", background: "rgba(24,87,232,0.06)" }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                  <circle cx="7" cy="7" r="6" fill="#1857e8" fillOpacity="0.25" />
                  <path d="M4 7L6 9L10 5" stroke="#1857e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-white text-sm font-medium">{row.civicai}</span>
              </div>
              <div className="px-6 py-4 flex items-center gap-2" style={{ borderLeft: "1px solid rgba(255,255,255,0.07)" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                  <circle cx="7" cy="7" r="6" fill="rgba(255,255,255,0.06)" />
                  <path d="M5 5L9 9M9 5L5 9" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-white/40 text-sm">{row.agence}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
