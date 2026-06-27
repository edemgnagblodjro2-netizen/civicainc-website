import { getTranslations } from "next-intl/server";

export default async function Vision() {
  const t = await getTranslations("vision");

  return (
    <section
      className="relative overflow-hidden py-20 px-6"
      style={{ background: "#ffffff" }}
    >
      <div className="relative max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-2.5 mb-7">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#f97316">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
          </svg>
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "rgba(10,23,48,0.45)" }}
          >
            {t("label")} :
          </span>
        </div>

        {/* Headline */}
        <h2
          className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight mb-8"
          style={{ fontFamily: "var(--font-poppins), sans-serif", letterSpacing: "-0.02em", color: "#0a1730" }}
        >
          {t("headline")}
        </h2>

        {/* Divider */}
        <div className="border-t mb-8" style={{ borderColor: "rgba(10,23,48,0.12)" }} />

        {/* Body */}
        <p
          className="text-base lg:text-lg leading-relaxed max-w-3xl"
          style={{ color: "rgba(10,23,48,0.6)" }}
        >
          {t("quote")}
        </p>

        {/* Author */}
        <p
          className="mt-8 text-sm font-medium"
          style={{ color: "rgba(10,23,48,0.35)" }}
        >
          — {t("author")}
        </p>
      </div>
    </section>
  );
}
