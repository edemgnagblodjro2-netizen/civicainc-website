import { getTranslations } from "next-intl/server";
import ContactCTA from "@/components/ContactCTA";

export default async function PourquoiPage() {
  const t = await getTranslations("pages.why");

  const values = t.raw("values") as { title: string; desc: string }[];

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 border-b border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6 max-w-2xl">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Pourquoi CivicAI
          </div>
          <h1 className="text-5xl font-bold text-slate-900 tracking-tight mb-4">{t("title")}</h1>
          <p className="text-xl text-slate-500 leading-relaxed">{t("subtitle")}</p>
        </div>
      </section>

      {/* Editor, not agency */}
      <section className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">
                {t("editor_title")}
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">{t("editor_body")}</p>
              <div className="grid gap-4">
                {values.map((v) => (
                  <div key={v.title} className="flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 mb-1">{v.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison */}
            <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">
                CivicAI vs Agence traditionnelle
              </div>
              <div className="space-y-4">
                {[
                  { label: "Produit", civicai: "Plateforme logicielle", agence: "Projet sur mesure" },
                  { label: "Maintenance", civicai: "Continue et incluse", agence: "Contrat séparé" },
                  { label: "Mise à jour", civicai: "Automatique", agence: "Facturation additionnelle" },
                  { label: "IA", civicai: "Intégrée nativement", agence: "Add-on optionnel" },
                  { label: "Déploiement", civicai: "Jours ou semaines", agence: "Mois ou années" },
                  { label: "ROI", civicai: "Mesurable et garanti", agence: "Variable" },
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-3 gap-2 text-sm">
                    <span className="text-slate-400 text-xs font-medium self-center">{row.label}</span>
                    <div className="bg-blue-700 text-white text-xs font-medium px-3 py-2 rounded-lg text-center">
                      {row.civicai}
                    </div>
                    <div className="bg-white border border-slate-200 text-slate-400 text-xs px-3 py-2 rounded-lg text-center">
                      {row.agence}
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2 mt-3 text-xs font-semibold">
                <div />
                <div className="text-center text-blue-700">CivicAI Inc.</div>
                <div className="text-center text-slate-400">Agence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
