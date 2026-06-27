import { getTranslations } from "next-intl/server";

export default async function WhyCivicAI() {
  const t = await getTranslations("why");
  const pillars = t.raw("pillars") as { num: string; title: string; desc: string }[];

  return (
    <section className="bg-slate-900 py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em] mb-3">
            {t("label")}
          </p>
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-t border-slate-800">
          {pillars.map((item) => (
            <div key={item.num} className="border-b md:border-b-0 md:border-r border-slate-800 pt-10 pb-8 md:pr-10 md:pl-0 last:border-r-0">
              <div className="text-xs font-semibold text-slate-600 uppercase tracking-widest mb-6">
                {item.num}
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
