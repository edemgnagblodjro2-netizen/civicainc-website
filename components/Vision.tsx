import { getTranslations } from "next-intl/server";

export default async function Vision() {
  const t = await getTranslations("vision");

  return (
    <section className="bg-slate-50 py-24 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-l-4 border-blue-700 pl-8">
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.18em] mb-6">
            {t("label")}
          </p>
          <blockquote className="text-2xl lg:text-[1.75rem] font-medium text-slate-800 leading-relaxed mb-6">
            {t("quote")}
          </blockquote>
          <cite className="text-sm text-slate-400 not-italic font-medium">
            — {t("author")}
          </cite>
        </div>
      </div>
    </section>
  );
}
