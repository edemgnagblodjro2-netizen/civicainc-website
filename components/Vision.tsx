import { getTranslations } from "next-intl/server";

export default async function Vision() {
  const t = await getTranslations("vision");

  return (
    <section
      className="relative overflow-hidden py-20 px-6"
      style={{ background: "linear-gradient(135deg, #0f0600 0%, #1c0a00 45%, #100800 100%)" }}
    >
      {/* Subtle ambient glow */}
      <div
        className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-2.5 mb-7">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#f97316">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
          </svg>
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {t("label")} :
          </span>
        </div>

        {/* Headline */}
        <h2
          className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight mb-8 text-white"
          style={{ fontFamily: "var(--font-poppins), sans-serif", letterSpacing: "-0.02em" }}
        >
          {t("headline")}
        </h2>

        {/* Divider */}
        <div className="border-t mb-8" style={{ borderColor: "rgba(255,255,255,0.12)" }} />

        {/* Body */}
        <p
          className="text-base lg:text-lg leading-relaxed max-w-3xl"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          {t("quote")}
        </p>

        {/* Author */}
        <p
          className="mt-8 text-sm font-medium"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          — {t("author")}
        </p>
      </div>
    </section>
  );
}
