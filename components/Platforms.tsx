import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const PLATFORM_COLORS = [
  { bg: "#1857e8", gradient: "linear-gradient(135deg, #1857e8 0%, #3b82f6 100%)" },
  { bg: "#6366f1", gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" },
  { bg: "#0891b2", gradient: "linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)" },
];

export default async function Platforms() {
  const t = await getTranslations("platforms");

  const keys = ["agenthub", "nexhire", "attentezero"] as const;
  const hrefs: Record<string, string> = {
    agenthub: "/plateformes#agenthub",
    nexhire: "/plateformes#nexhire",
    attentezero: "/plateformes#attentezero",
  };

  const platforms = keys.map((key, i) => ({
    id: key,
    name: t(`${key}.name`),
    tagline: t(`${key}.tagline`),
    desc: t(`${key}.desc`),
    features: t.raw(`${key}.features`) as string[],
    cta: t(`${key}.cta`),
    href: hrefs[key],
    color: PLATFORM_COLORS[i],
  }));

  return (
    <section
      id="plateformes"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Subtle top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-slate-100" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
            style={{ background: "var(--sky, #eaf1ff)", color: "var(--blue, #1857e8)" }}
          >
            {t("title")}
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#0a1730] mb-4"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            {t("subtitle_heading")}
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">{t("subtitle")}</p>
        </div>

        {/* Platform cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {platforms.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col"
            >
              {/* Colored header strip */}
              <div className="h-2 w-full" style={{ background: p.color.gradient }} />

              <div className="p-7 flex flex-col flex-1">
                {/* Tag + name */}
                <span
                  className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4 self-start"
                  style={{ background: `${p.color.bg}15`, color: p.color.bg }}
                >
                  {p.tagline}
                </span>
                <h3
                  className="text-xl font-bold text-[#0a1730] mb-3"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {p.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{p.desc}</p>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `${p.color.bg}15` }}
                      >
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path
                            d="M1.5 4L3 5.5L6.5 2.5"
                            stroke={p.color.bg}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-600 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={p.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-full self-start transition-all hover:opacity-90"
                  style={{ background: p.color.bg }}
                >
                  {p.cta} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
