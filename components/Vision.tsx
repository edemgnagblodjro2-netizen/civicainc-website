import { getTranslations } from "next-intl/server";

export default async function Vision() {
  const t = await getTranslations("vision");

  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-2">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.2em] mt-1">
              {t("label")}
            </p>
          </div>
          <div className="lg:col-span-8">
            <blockquote className="text-xl lg:text-2xl font-medium text-slate-800 leading-relaxed mb-8">
              {t("quote")}
            </blockquote>
            <cite className="text-xs text-slate-400 not-italic font-semibold uppercase tracking-widest">
              — {t("author")}
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
