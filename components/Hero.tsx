import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-[0.18em] mb-8">
              {t("badge")}
            </p>

            <h1 className="text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
              {t("title")}
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed max-w-lg mb-10">
              {t("subtitle")}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/plateformes"
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-6 py-3.5 rounded-lg transition-colors"
              >
                {t("cta1")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-700 text-sm font-semibold px-6 py-3.5 rounded-lg transition-colors"
              >
                {t("cta2")}
              </Link>
            </div>
          </div>

          {/* Right — report-style metrics panel */}
          <div className="hidden lg:block">
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              {/* Header */}
              <div className="border-b border-slate-100 px-6 py-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  AgentHub — Observatoire IA
                </span>
                <span className="text-[11px] text-slate-300 font-mono">CCTR · Q2 2026</span>
              </div>

              <div className="p-6">
                {/* Key metrics */}
                <div className="grid grid-cols-3 divide-x divide-slate-100 mb-8">
                  {[
                    { value: "42", label: "Organisations" },
                    { value: "58.3", label: "Indice IA moyen", highlight: true },
                    { value: "×9.9", label: "ROI estimé" },
                  ].map((m) => (
                    <div key={m.label} className="text-center px-4 py-2">
                      <div className={`text-2xl font-bold mb-1 ${m.highlight ? "text-blue-700" : "text-slate-900"}`}>
                        {m.value}
                      </div>
                      <div className="text-[11px] text-slate-400 uppercase tracking-wider">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Dimension bars */}
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-4">
                    Maturité par dimension
                  </div>
                  <div className="space-y-3.5">
                    {[
                      { label: "Stratégie", value: 62 },
                      { label: "Technologies", value: 50 },
                      { label: "Processus", value: 56 },
                      { label: "Gouvernance", value: 39 },
                    ].map((dim) => (
                      <div key={dim.label} className="flex items-center gap-4">
                        <span className="text-xs text-slate-500 w-24 flex-shrink-0">{dim.label}</span>
                        <div className="flex-1 h-1 bg-slate-100 rounded-full">
                          <div
                            className="h-full bg-blue-700 rounded-full"
                            style={{ width: dim.value + "%" }}
                          />
                        </div>
                        <span className="text-xs font-semibold text-slate-500 w-5 text-right tabular-nums">
                          {dim.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 mt-4 px-1">
              Données représentatives — Chambre de commerce de Trois-Rivières, 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
