import { getTranslations } from "next-intl/server";

const COLORS = ["#1857e8", "#6366f1", "#8b5cf6", "#0ea5e9", "#10b981", "#f59e0b"];

export default async function Sectors() {
  const t = await getTranslations("sectors");
  const items = t.raw("items") as { icon: string; label: string }[];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
            style={{ background: "var(--sky, #eaf1ff)", color: "var(--blue, #1857e8)" }}
          >
            {t("title")}
          </span>
          <p className="text-slate-500 text-base max-w-md">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((item, i) => {
            const color = COLORS[i % COLORS.length];
            return (
              <div
                key={item.label}
                className="rounded-2xl p-5 flex flex-col items-center text-center gap-3 transition-all hover:-translate-y-1 hover:shadow-md cursor-default"
                style={{ background: `${color}14`, border: `1.5px solid ${color}30` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                  style={{ background: color }}
                >
                  {item.label[0]}
                </div>
                <span className="text-sm font-semibold text-[#0a1730] leading-snug">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
