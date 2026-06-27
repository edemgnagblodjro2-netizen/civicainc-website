import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="bg-white border-b border-slate-100">
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

          {/* Right — real product overview */}
          <div className="hidden lg:block">
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="border-b border-slate-100 px-6 py-4">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
                  {t("panel_title")}
                </span>
              </div>

              <div className="divide-y divide-slate-100">
                {[
                  {
                    name: "AgentHub Platform",
                    tag: t("panel_agenthub_tag"),
                    desc: t("panel_agenthub_desc"),
                    dot: "bg-blue-700",
                  },
                  {
                    name: "NexHire EIP",
                    tag: t("panel_nexhire_tag"),
                    desc: t("panel_nexhire_desc"),
                    dot: "bg-slate-600",
                  },
                  {
                    name: "AttenteZéro",
                    tag: t("panel_attentezero_tag"),
                    desc: t("panel_attentezero_desc"),
                    dot: "bg-teal-600",
                  },
                ].map((p) => (
                  <div key={p.name} className="px-6 py-5 flex items-start gap-4 hover:bg-slate-50 transition-colors">
                    <div className={`w-2 h-2 rounded-full ${p.dot} mt-1.5 flex-shrink-0`} />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{p.name}</div>
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5 mb-1.5">
                        {p.tag}
                      </div>
                      <div className="text-xs text-slate-500 leading-relaxed">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 px-6 py-3.5 bg-slate-50">
                <span className="text-[11px] text-slate-400">CivicAI Inc. — Trois-Rivières, Québec, Canada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
