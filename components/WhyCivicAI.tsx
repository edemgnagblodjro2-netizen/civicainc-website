import { getTranslations } from "next-intl/server";

export default async function WhyCivicAI() {
  const t = await getTranslations("why");
  const pillars = t.raw("pillars") as { num: string; title: string; desc: string }[];

  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-b border-slate-800 pb-12 mb-16">
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.2em] mb-4">
            {t("label")}
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight max-w-2xl">
            {t("title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-0">
          {pillars.map((item, i) => (
            <div
              key={item.num}
              className={`py-8 ${i < pillars.length - 1 ? "md:pr-12 md:border-r border-slate-800" : ""} ${i > 0 ? "md:pl-12" : ""}`}
            >
              <div className="text-[11px] font-semibold text-slate-600 uppercase tracking-[0.2em] mb-6">
                {item.num}
              </div>
              <h3 className="text-lg font-black text-white mb-4 uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
