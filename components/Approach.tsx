import { getTranslations } from "next-intl/server";

export default async function Approach() {
  const t = await getTranslations("approach");
  const steps = t.raw("steps") as { num: string; title: string; desc: string }[];

  return (
    <section className="bg-slate-50 py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">{t("subtitle")}</p>
        </div>

        {/* Desktop: horizontal steps */}
        <div className="hidden lg:grid grid-cols-5 gap-0 relative">
          {/* Connector line */}
          <div className="absolute top-7 left-[10%] right-[10%] h-px bg-slate-200 z-0" />

          {steps.map((step, i) => (
            <div key={step.num} className="relative z-10 flex flex-col items-center text-center px-4">
              {/* Number bubble */}
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold mb-5 border-2 transition-all
                  ${i === 0
                    ? "bg-blue-700 border-blue-700 text-white"
                    : "bg-white border-slate-200 text-slate-400"
                  }`}
              >
                {step.num}
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical steps */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => (
            <div key={step.num} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 border-2
                    ${i === 0
                      ? "bg-blue-700 border-blue-700 text-white"
                      : "bg-white border-slate-200 text-slate-400"
                    }`}
                >
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-slate-200 mt-2 mb-2" />
                )}
              </div>
              <div className="pb-8 pt-1.5">
                <h3 className="text-base font-semibold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
