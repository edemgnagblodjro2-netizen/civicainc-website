import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function ContactCTA() {
  const t = await getTranslations("cta");

  return (
    <section className="bg-slate-950 border-t border-slate-800 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {t("title")}
            </h2>
          </div>
          <div>
            <p className="text-slate-400 leading-relaxed mb-8">
              {t("subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-slate-950 text-xs font-bold px-6 py-3.5 uppercase tracking-widest hover:bg-slate-100 transition-colors"
              >
                {t("btn1")} →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-slate-700 text-slate-300 text-xs font-bold px-6 py-3.5 uppercase tracking-widest hover:border-slate-500 hover:text-white transition-colors"
              >
                {t("btn2")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
