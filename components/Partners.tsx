import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const MARKET_COLORS = ["#1857e8", "#6366f1", "#0891b2"];

export default async function Partners() {
  const t = await getTranslations("markets");
  const items = t.raw("items") as { title: string; desc: string }[];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 bg-slate-100 text-slate-500">
            {t("label")}
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#0a1730] mb-4"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            {t("title")}
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {items.map((item, i) => {
            const color = MARKET_COLORS[i % MARKET_COLORS.length];
            return (
              <div key={item.title} className="bg-slate-50 rounded-2xl p-7 hover:shadow-md transition-shadow">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 font-bold text-xl text-white flex-shrink-0"
                  style={{ background: color }}
                >
                  {["🏛", "🏙", "🏢"][i]}
                </div>
                <h3
                  className="text-lg font-bold text-[#0a1730] mb-3"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-full transition-all hover:opacity-90"
            style={{ background: "#1857e8" }}
          >
            {t("cta")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
