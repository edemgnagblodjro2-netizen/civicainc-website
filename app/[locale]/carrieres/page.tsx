import { getTranslations } from "next-intl/server";
import ContactCTA from "@/components/ContactCTA";

export default async function CarrieresPage() {
  const t = await getTranslations("pages.careers");
  const roles = t.raw("roles") as { title: string; type: string; location: string }[];

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 border-b border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">
              Carrières
            </div>
            <h1 className="text-5xl font-bold text-slate-900 tracking-tight mb-4">
              {t("title")}
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">{t("subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-10">
            Postes ouverts
          </h2>
          <div className="space-y-4 mb-12">
            {roles.map((r) => (
              <div
                key={r.title}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:border-blue-100 hover:bg-blue-50/30 transition-all"
              >
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">{r.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span>{r.type}</span>
                    <span>·</span>
                    <span>{r.location}</span>
                  </div>
                </div>
                <a
                  href={`mailto:${t("email")}?subject=${encodeURIComponent(r.title)}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline flex-shrink-0"
                >
                  Postuler
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 max-w-xl">
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              Candidature spontanée
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              {t("opening")}{" "}
              <a
                href={`mailto:${t("email")}`}
                className="text-blue-700 font-medium hover:underline"
              >
                {t("email")}
              </a>
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
