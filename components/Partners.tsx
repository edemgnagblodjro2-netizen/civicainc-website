import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Partners() {
  const t = await getTranslations("markets");
  const items = t.raw("items") as { title: string; desc: string }[];

  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-[0.18em] mb-3">
              {t("label")}
            </p>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">
              {t("title")}
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              {t("subtitle")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline"
            >
              {t("cta")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right — market segments */}
          <div className="divide-y divide-slate-100">
            {items.map((m) => (
              <div key={m.title} className="py-6 first:pt-0">
                <h3 className="text-base font-semibold text-slate-900 mb-1.5">{m.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
