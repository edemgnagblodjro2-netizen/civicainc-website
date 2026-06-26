import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function ContactCTA() {
  const t = await getTranslations("cta");

  return (
    <section className="bg-blue-700 py-24 border-t border-blue-800">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
          {t("title")}
        </h2>
        <p className="text-xl text-blue-200 leading-relaxed mb-10">
          {t("subtitle")}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
          >
            {t("btn1")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-blue-300/50 text-white hover:bg-white/10 font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors"
          >
            {t("btn2")}
          </Link>
        </div>
      </div>
    </section>
  );
}
