import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="bg-white relative overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(to right, #94a3b8 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-8 border border-blue-100">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              {t("badge")}
            </div>

            <h1 className="text-5xl lg:text-[3.5rem] font-bold text-slate-900 leading-[1.08] tracking-tight mb-6">
              {t("title")}
            </h1>

            <p className="text-xl text-slate-500 leading-relaxed max-w-lg mb-10">
              {t("subtitle")}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/plateformes"
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-colors"
              >
                {t("cta1")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-slate-700 text-sm font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                {t("cta2")}
              </Link>
            </div>
          </div>

          {/* Right — product preview */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main card — dashboard mockup */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                {/* Title bar */}
                <div className="bg-slate-900 px-5 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  </div>
                  <span className="text-xs text-slate-500 font-mono flex-1 text-center">
                    AgentHub — Observatoire IA · CCTR
                  </span>
                </div>

                {/* Dashboard content */}
                <div className="p-6 bg-slate-50">
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="bg-blue-700 rounded-xl p-4 text-white">
                      <div className="text-2xl font-bold mb-0.5">42</div>
                      <div className="text-xs text-blue-200">Organisations</div>
                    </div>
                    <div className="bg-white rounded-xl border border-slate-100 p-4">
                      <div className="text-2xl font-bold text-slate-800 mb-0.5">58.3</div>
                      <div className="text-xs text-slate-400">Indice IA</div>
                    </div>
                    <div className="bg-white rounded-xl border border-slate-100 p-4">
                      <div className="text-2xl font-bold text-slate-800 mb-0.5">×9.9</div>
                      <div className="text-xs text-slate-400">ROI estimé</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-100 p-4">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      Maturité par dimension
                    </div>
                    <div className="space-y-3">
                      {[
                        { label: "Stratégie", value: 62, color: "#1d4ed8" },
                        { label: "Technologies", value: 50, color: "#0ea5e9" },
                        { label: "Processus", value: 56, color: "#06b6d4" },
                        { label: "Gouvernance", value: 39, color: "#94a3b8" },
                      ].map((dim) => (
                        <div key={dim.label} className="flex items-center gap-3">
                          <span className="text-xs text-slate-500 w-24 flex-shrink-0">
                            {dim.label}
                          </span>
                          <div className="flex-1 h-1.5 rounded-full bg-slate-100">
                            <div
                              className="h-full rounded-full transition-all"
                              style={{
                                width: dim.value + "%",
                                backgroundColor: dim.color,
                              }}
                            />
                          </div>
                          <span className="text-xs font-semibold text-slate-600 w-6 text-right">
                            {dim.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ATLAS chat bubble */}
              <div className="absolute -bottom-5 -left-8 bg-white rounded-2xl shadow-lg border border-slate-100 p-4 w-60">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[10px] font-bold">A</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-800 mb-1">ATLAS</div>
                    <div className="text-xs text-slate-500 leading-relaxed">
                      3 recommandations identifiées pour votre organisation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
