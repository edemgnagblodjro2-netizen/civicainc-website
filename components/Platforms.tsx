import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Platforms() {
  const t = await getTranslations("platforms");

  const platforms = [
    { key: "agenthub", href: "/plateformes#agenthub" },
    { key: "nexhire", href: "/plateformes#nexhire" },
    { key: "attentezero", href: "/plateformes#attentezero" },
  ] as const;

  return (
    <section id="plateformes" className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16 pb-6 border-b border-slate-200">
          <div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.2em] mb-3">
              {t("title")}
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              {t("subtitle_heading")}
            </h2>
          </div>
          <Link
            href="/plateformes"
            className="hidden md:inline-flex items-center gap-2 text-xs font-semibold text-slate-950 uppercase tracking-widest hover:underline flex-shrink-0"
          >
            {t("all_cta") || "Toutes les plateformes"} →
          </Link>
        </div>

        {/* Table-style layout — no cards */}
        <div>
          {platforms.map(({ key, href }) => {
            const features = t.raw(`${key}.features`) as string[];
            return (
              <div
                key={key}
                className="grid lg:grid-cols-12 gap-6 py-10 border-b border-slate-100 group"
              >
                {/* Name */}
                <div className="lg:col-span-3">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-2">
                    {t(`${key}.tagline`)}
                  </div>
                  <h3 className="text-xl font-black text-slate-950">
                    {t(`${key}.name`)}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {t(`${key}.desc`)}
                  </p>
                </div>

                {/* Features */}
                <div className="lg:col-span-3">
                  <ul className="space-y-1">
                    {features.map((f) => (
                      <li key={f} className="text-xs text-slate-400 flex items-center gap-2">
                        <span className="text-slate-300">—</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="lg:col-span-1 flex lg:justify-end items-start">
                  <Link
                    href={href}
                    className="text-sm font-bold text-slate-950 hover:underline whitespace-nowrap"
                    aria-label={t(`${key}.cta`)}
                  >
                    →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
