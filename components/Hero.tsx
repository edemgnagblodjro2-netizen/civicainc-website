import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Hero() {
  const t = await getTranslations("hero");

  const platforms = [
    {
      name: "AgentHub Platform",
      tag: t("panel_agenthub_tag"),
      href: "/plateformes#agenthub",
    },
    {
      name: "NexHire EIP",
      tag: t("panel_nexhire_tag"),
      href: "/plateformes#nexhire",
    },
    {
      name: "AttenteZéro",
      tag: t("panel_attentezero_tag"),
      href: "/plateformes#attentezero",
    },
  ];

  return (
    <section className="bg-slate-950 min-h-[85vh] flex flex-col justify-between pt-16">
      <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-0 py-20 lg:py-28 items-end">
          {/* Left — massive typographic statement */}
          <div className="pr-0 lg:pr-16 border-r-0 lg:border-r border-slate-800">
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.2em] mb-10">
              {t("badge")}
            </p>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.0] tracking-tight mb-8">
              {t("title")}
            </h1>

            <p className="text-base text-slate-400 leading-relaxed max-w-sm mb-12">
              {t("subtitle")}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-slate-950 text-xs font-bold px-6 py-3.5 uppercase tracking-widest hover:bg-slate-100 transition-colors"
              >
                {t("cta2")}
                <span>→</span>
              </Link>
              <Link
                href="/plateformes"
                className="inline-flex items-center gap-3 border border-slate-700 text-slate-300 text-xs font-bold px-6 py-3.5 uppercase tracking-widest hover:border-slate-500 hover:text-white transition-colors"
              >
                {t("cta1")}
              </Link>
            </div>
          </div>

          {/* Right — Marmen-style bordered platform cards */}
          <div className="pl-0 lg:pl-16 mt-16 lg:mt-0">
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.2em] mb-6">
              {t("panel_title")}
            </p>
            <div>
              {platforms.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  className="flex items-start justify-between gap-4 border border-slate-800 p-6 mb-0 hover:bg-slate-900 hover:border-slate-600 transition-colors group block"
                >
                  <div>
                    <div className="text-[11px] text-slate-500 uppercase tracking-widest mb-1">
                      {p.tag}
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-slate-400 group-hover:text-white transition-colors">→</span>
                      <span className="text-white font-bold text-base group-hover:underline">
                        {p.name}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-[11px] text-slate-600 uppercase tracking-widest">
            CivicAI Inc. — Trois-Rivières, Québec, Canada
          </span>
          <span className="text-[11px] text-slate-600 uppercase tracking-widest hidden sm:inline">
            Fondé 2024
          </span>
        </div>
      </div>
    </section>
  );
}
