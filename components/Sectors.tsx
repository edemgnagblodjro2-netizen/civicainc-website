import { getTranslations } from "next-intl/server";

export default async function Sectors() {
  const t = await getTranslations("sectors");
  const items = t.raw("items") as { icon: string; label: string }[];

  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/50 transition-all group"
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="text-sm font-medium text-slate-600 group-hover:text-slate-800 text-center leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
