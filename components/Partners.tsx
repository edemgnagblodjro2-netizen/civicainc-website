import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Partners() {
  const t = await getTranslations("partners");

  return (
    <section className="bg-slate-50 py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
            {t("title")}
          </h2>
          <p className="text-slate-500">{t("subtitle")}</p>
        </div>

        {/* Partner logos */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {/* CCI3R */}
          <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-8 py-5 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-blue-700 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">CC</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">
                Chambre de Commerce
              </div>
              <div className="text-xs text-slate-400">de Trois-Rivières</div>
            </div>
          </div>

          {/* Placeholder — À venir */}
          {["Chambre de Québec", "Ville de Gatineau"].map((name) => (
            <div
              key={name}
              className="flex items-center gap-3 bg-white border border-dashed border-slate-200 rounded-2xl px-8 py-5 opacity-40"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex-shrink-0" />
              <div>
                <div className="text-sm font-semibold text-slate-400">{name}</div>
                <div className="text-xs text-slate-300">Bientôt</div>
              </div>
            </div>
          ))}
        </div>

        {/* Become a partner */}
        <div className="max-w-xl mx-auto text-center bg-white border border-slate-200 rounded-2xl p-8">
          <h3 className="text-base font-semibold text-slate-900 mb-2">
            {t("upcoming_label")}
          </h3>
          <p className="text-sm text-slate-500 mb-5">{t("upcoming_desc")}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline"
          >
            Devenir partenaire
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
