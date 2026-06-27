import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ContactCTA from "@/components/ContactCTA";

export default async function PlatesformesPage() {
  const t = await getTranslations("pages.platforms");
  const pt = await getTranslations("platforms");

  const agentHubFeatures = pt.raw("agenthub.features") as string[];
  const nexhireFeatures = pt.raw("nexhire.features") as string[];
  const attentezeroFeatures = pt.raw("attentezero.features") as string[];
  const journeySteps = t.raw("agenthub_journey_steps") as string[];
  const nexhireStats = t.raw("nexhire_stats") as { label: string; value: string; sub: string }[];

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 border-b border-slate-100 pb-20" style={{ paddingTop: "164px" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">
              {t("badge")}
            </div>
            <h1 className="text-5xl font-bold text-slate-900 tracking-tight mb-4">
              {t("title")}
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">{t("subtitle")}</p>
          </div>
        </div>
      </section>

      {/* AgentHub */}
      <section id="agenthub" className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                {pt("agenthub.tagline")}
              </span>
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight mt-2 mb-4">
                {pt("agenthub.name")}
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                {pt("agenthub.desc")}
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {agentHubFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <div className="w-4 h-4 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {f}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
              >
                {t("agenthub_cta")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            {/* Illustration */}
            <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                {t("agenthub_journey_title")}
              </div>
              <div className="space-y-3">
                {journeySteps.map((item, i) => (
                  <div key={item} className="flex items-center gap-3 bg-white rounded-xl border border-slate-100 px-4 py-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white ${i < 2 ? "bg-blue-700" : "bg-slate-200"}`}>
                      {i < 2 ? "✓" : `${i + 1}`}
                    </div>
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NexHire */}
      <section id="nexhire" className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 bg-white rounded-2xl border border-slate-100 p-8">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                {t("nexhire_analysis_title")}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {nexhireStats.map((s) => (
                  <div key={s.label} className="bg-slate-50 rounded-xl p-4">
                    <div className="text-xl font-bold text-slate-900">{s.value}</div>
                    <div className="text-xs text-slate-500">{s.label}</div>
                    <div className="text-xs font-medium text-slate-400 mt-1">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                {pt("nexhire.tagline")}
              </span>
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight mt-2 mb-4">
                {pt("nexhire.name")}
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                {pt("nexhire.desc")}
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {nexhireFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {f}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
              >
                {t("nexhire_cta")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AttenteZéro */}
      <section id="attentezero" className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">
                {pt("attentezero.tagline")}
              </span>
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight mt-2 mb-4">
                {pt("attentezero.name")}
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                {pt("attentezero.desc")}
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {attentezeroFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <div className="w-4 h-4 rounded-full bg-teal-700 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {f}
                  </div>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-sm font-medium px-4 py-2 rounded-lg border border-teal-100">
                {t("attentezero_coming_soon")}
              </div>
            </div>
            <div className="bg-teal-50 rounded-2xl border border-teal-100 p-8 flex items-center justify-center min-h-48">
              <div className="text-center text-slate-400">
                <div className="text-5xl mb-3">🏙️</div>
                <div className="text-sm font-medium text-teal-700">{t("attentezero_caption")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
