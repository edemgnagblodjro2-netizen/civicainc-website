import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ContactCTA from "@/components/ContactCTA";

const STATUS_STYLE: Record<string, { bg: string; color: string }> = {
  Actif:           { bg: "#dcfce7", color: "#16a34a" },
  Active:          { bg: "#dcfce7", color: "#16a34a" },
  "En développement": { bg: "#fef9c3", color: "#ca8a04" },
  "In development":   { bg: "#fef9c3", color: "#ca8a04" },
};

const PROJECT_COLORS = [
  "#1857e8", "#6366f1", "#0891b2", "#10b981", "#8b5cf6", "#f59e0b",
];

export default async function InnovationPage() {
  const t = await getTranslations("pages.innovation");
  const projects = t.raw("projects") as { name: string; status: string; desc: string }[];

  const featured = projects.slice(0, 4);

  return (
    <>
      {/* ─── Bento hero grid ─── */}
      <section className="w-full">
        <div className="grid md:grid-cols-2 min-h-[calc(100vh-64px)]">

          {/* Panel 1 — navy, main pitch */}
          <div
            className="relative flex flex-col justify-between p-10 lg:p-14 overflow-hidden"
            style={{ background: "#0a1730", minHeight: "50vh" }}
          >
            {/* Subtle grid */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {/* Glow */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 pointer-events-none"
              style={{ background: "radial-gradient(circle,rgba(24,87,232,0.25) 0%,transparent 70%)" }}
            />
            <div className="relative z-10">
              <span className="text-xs font-bold tracking-widest uppercase mb-6 block" style={{ color: "#ffd23e" }}>
                Innovation
              </span>
              <h1
                className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                {t("title")}
              </h1>
              <p className="text-white/55 text-base leading-relaxed max-w-sm">{t("subtitle")}</p>
            </div>
            <div className="relative z-10 mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold border border-white/25 text-white px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors"
              >
                Planifier une rencontre →
              </Link>
            </div>
          </div>

          {/* Panel 2 — blue gradient decoration */}
          <div
            className="relative flex flex-col justify-end p-10 lg:p-14 overflow-hidden"
            style={{ background: "linear-gradient(145deg,#1857e8 0%,#6366f1 100%)", minHeight: "50vh" }}
          >
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.08) 1px,transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            {/* Floating cards mock */}
            <div className="absolute top-10 right-10 w-40 opacity-40">
              <div className="bg-white/10 rounded-xl p-3 mb-2 border border-white/10">
                <div className="h-2 bg-white/40 rounded mb-1.5 w-3/4" />
                <div className="h-2 bg-white/20 rounded w-1/2" />
              </div>
              <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                <div className="h-2 bg-white/40 rounded mb-1.5 w-2/3" />
                <div className="h-2 bg-white/20 rounded w-1/3" />
              </div>
            </div>
            <div className="relative z-10">
              <span className="text-xs font-bold tracking-widest uppercase mb-4 block text-white/60">
                IA-POWERED
              </span>
              <p
                className="text-2xl lg:text-3xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Des plateformes conçues pour durer, pas pour impressionner.
              </p>
            </div>
          </div>

          {/* Panel 3 — light, roadmap */}
          <div className="flex flex-col justify-between p-10 lg:p-14 bg-slate-50" style={{ minHeight: "50vh" }}>
            <div>
              <span className="text-xs font-bold tracking-widest uppercase mb-6 block" style={{ color: "#1857e8" }}>
                Roadmap
              </span>
              <h2
                className="text-2xl lg:text-3xl font-bold text-[#0a1730] mb-3"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Architecture modulaire
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-xs">
                Une fondation partagée qui permet d&apos;ajouter de nouvelles applications sans remettre en cause les bases.
              </p>
            </div>
            {/* Architecture mini-diagram */}
            <div className="space-y-2">
              <div
                className="text-xs font-semibold text-white text-center py-2 rounded-xl"
                style={{ background: "#1857e8" }}
              >
                CivicAI Core Platform
              </div>
              <div className="grid grid-cols-3 gap-2">
                {["AgentHub", "NexHire", "AttenteZéro"].map((p, i) => (
                  <div
                    key={p}
                    className="text-xs font-medium text-center py-2 rounded-lg border"
                    style={{
                      background: i < 2 ? "#eaf1ff" : "#f8fafc",
                      borderColor: i < 2 ? "#1857e820" : "#e2e8f0",
                      color: i < 2 ? "#1857e8" : "#94a3b8",
                      borderStyle: i === 2 ? "dashed" : "solid",
                    }}
                  >
                    {p}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {["Auth", "RBAC", "AI Gateway", "API"].map((m) => (
                  <div key={m} className="text-[10px] text-center py-1.5 rounded bg-slate-200 text-slate-500 font-medium">
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Panel 4 — dark, impact statement */}
          <div
            className="relative flex flex-col justify-between p-10 lg:p-14 overflow-hidden"
            style={{ background: "#0d1e3a", minHeight: "50vh" }}
          >
            <div>
              <span className="text-xs font-bold tracking-widest uppercase mb-6 block" style={{ color: "#0ea5e9" }}>
                Impact
              </span>
              <h2
                className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-4"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Chaque déploiement inclut des métriques de gouvernance et de performance.
              </h2>
              <p className="text-white/45 text-sm leading-relaxed">
                L&apos;IA chez CivicAI n&apos;est pas expérimentale — c&apos;est une livraison documentée.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold border border-white/20 text-white px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors"
              >
                Voir nos plateformes →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Projects grid ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{ background: "#eaf1ff", color: "#1857e8" }}
            >
              Projets actifs
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#0a1730]"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Ce qu&apos;on construit
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p, i) => {
              const color = PROJECT_COLORS[i % PROJECT_COLORS.length];
              const statusStyle = STATUS_STYLE[p.status] ?? { bg: "#f1f5f9", color: "#64748b" };
              return (
                <div
                  key={p.name}
                  className="rounded-2xl p-6 hover:shadow-md transition-shadow"
                  style={{ background: "#f8fafc", border: "1.5px solid #e2e8f0" }}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                      style={{ background: color }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{ background: statusStyle.bg, color: statusStyle.color }}
                    >
                      {p.status}
                    </span>
                  </div>
                  <h3
                    className="font-bold text-[#0a1730] mb-2"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
