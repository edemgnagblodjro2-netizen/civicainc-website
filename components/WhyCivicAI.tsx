import { getTranslations } from "next-intl/server";

const PILLAR_COLORS = [
  { bg: "#1857e8", light: "#eaf1ff" },
  { bg: "#6366f1", light: "#eef2ff" },
  { bg: "#0891b2", light: "#ecfeff" },
];

export default async function WhyCivicAI() {
  const t = await getTranslations("why");
  const pillars = t.raw("pillars") as { num: string; title: string; desc: string }[];

  return (
    <section className="py-24" style={{ background: "#0a1730" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 text-white/50 border"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            >
              {t("label")}
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              {t("title")}
            </h2>
          </div>
          <p className="text-white/45 text-base max-w-sm leading-relaxed">{t("subtitle")}</p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((item, i) => {
            const c = PILLAR_COLORS[i] ?? PILLAR_COLORS[0];
            return (
              <div
                key={item.num}
                className="rounded-2xl p-7 transition-all hover:bg-white/[0.07]"
                style={{ background: "rgba(255,255,255,0.04)", border: "1.5px solid rgba(255,255,255,0.08)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xs mb-5 flex-shrink-0"
                  style={{ background: c.bg }}
                >
                  {item.num}
                </div>
                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
