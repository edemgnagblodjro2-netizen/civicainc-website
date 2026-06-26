import { getTranslations } from "next-intl/server";

export default async function WhyCivicAI() {
  const t = await getTranslations("why");
  const stats = t.raw("stats") as { value: string; label: string }[];
  const features = t.raw("features") as string[];

  return (
    <section className="bg-slate-900 py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">{t("subtitle")}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map((s) => (
            <div key={s.label} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
              <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
          {features.map((f) => (
            <div key={f} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-slate-300 leading-relaxed">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
