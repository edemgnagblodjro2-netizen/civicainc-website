import { getTranslations } from "next-intl/server";

export default async function Vision() {
  const t = await getTranslations("vision");

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-8 text-slate-500 bg-white border border-slate-200">
          {t("label")}
        </span>
        <blockquote
          className="text-2xl lg:text-3xl font-semibold text-[#0a1730] leading-relaxed mb-8"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          &ldquo;{t("quote")}&rdquo;
        </blockquote>
        <cite className="not-italic text-sm font-medium text-slate-400">
          — {t("author")}
        </cite>
      </div>
    </section>
  );
}
