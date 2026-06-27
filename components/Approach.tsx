import { getTranslations } from "next-intl/server";

export default async function Approach() {
  const t = await getTranslations("approach");
  const steps = t.raw("steps") as { num: string; title: string; desc: string }[];

  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16 pb-6 border-b border-slate-200">
          <div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.2em] mb-3">
              {t("title")}
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              {t("subtitle")}
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`py-6 ${i < steps.length - 1 ? "md:pr-8 md:border-r border-slate-100" : ""} ${i > 0 ? "md:pl-8" : ""}`}
            >
              <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-[0.2em] mb-4">
                {step.num}
              </div>
              <h3 className="text-base font-black text-slate-950 uppercase tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
