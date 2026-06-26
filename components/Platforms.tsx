import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const PLATFORM_ICONS = {
  agenthub: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
    </svg>
  ),
  nexhire: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  attentezero: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

const ACCENT = {
  agenthub: { bg: "bg-blue-700", text: "text-blue-700", light: "bg-blue-50 text-blue-700", border: "border-blue-100" },
  nexhire: { bg: "bg-slate-800", text: "text-slate-800", light: "bg-slate-50 text-slate-700", border: "border-slate-200" },
  attentezero: { bg: "bg-teal-700", text: "text-teal-700", light: "bg-teal-50 text-teal-700", border: "border-teal-100" },
};

export default async function Platforms() {
  const t = await getTranslations("platforms");

  const platforms = [
    { key: "agenthub", href: "/plateformes#agenthub" },
    { key: "nexhire", href: "/plateformes#nexhire" },
    { key: "attentezero", href: "/plateformes#attentezero" },
  ] as const;

  return (
    <section id="plateformes" className="bg-slate-50 py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">
            {t("title")}
          </div>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">{t("subtitle")}</p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {platforms.map(({ key, href }) => {
            const accent = ACCENT[key];
            const features = t.raw(`${key}.features`) as string[];
            return (
              <div
                key={key}
                className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col hover:shadow-md transition-shadow"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${accent.bg} flex items-center justify-center text-white mb-6`}>
                  {PLATFORM_ICONS[key]}
                </div>

                {/* Title */}
                <div className="mb-1">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${accent.text}`}>
                    {t(`${key}.tagline`)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {t(`${key}.name`)}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">
                  {t(`${key}.desc`)}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <div className={`w-4 h-4 rounded-full ${accent.bg} flex items-center justify-center flex-shrink-0`}>
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={href}
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${accent.text} hover:underline`}
                >
                  {t(`${key}.cta`)}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
