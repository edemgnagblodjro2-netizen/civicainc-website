import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function ContactCTA() {
  const t = await getTranslations("cta");

  return (
    <section className="py-24" style={{ background: "#0a1730" }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-4xl lg:text-5xl font-bold text-white mb-6"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          {t("title")}
        </h2>
        <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a1730] bg-white px-7 py-3.5 rounded-full transition-all hover:bg-slate-100 active:scale-95"
          >
            {t("btn1")} →
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 px-7 py-3.5 rounded-full border transition-all hover:bg-white/10 hover:text-white"
            style={{ borderColor: "rgba(255,255,255,0.2)" }}
          >
            {t("btn2")}
          </Link>
        </div>
      </div>
    </section>
  );
}
