import { getTranslations } from "next-intl/server";

export default async function Vision() {
  const t = await getTranslations("vision");

  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-10">
          <div className="w-8 h-px bg-slate-200" />
          {t("label")}
          <div className="w-8 h-px bg-slate-200" />
        </div>

        {/* Large typographic quote mark */}
        <div
          className="text-[120px] leading-none text-blue-100 font-serif select-none mb-0 -mb-8"
          aria-hidden="true"
        >
          "
        </div>

        <blockquote className="text-2xl lg:text-3xl font-medium text-slate-800 leading-relaxed mb-10">
          {t("quote")}
        </blockquote>

        <cite className="text-sm text-slate-400 not-italic font-medium">
          — {t("author")}
        </cite>
      </div>
    </section>
  );
}
