import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Hero() {
  const t = await getTranslations("hero");
  const ts = await getTranslations("sectors");
  const sectorItems = ts.raw("items") as { icon: string; label: string }[];

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #060e1f 0%, #0a1730 55%, #0d1e3a 100%)" }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Blue radial glow top-right */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(24,87,232,0.18) 0%, transparent 65%)" }}
      />
      {/* Accent glow bottom-left */}
      <div
        className="absolute -bottom-24 -left-24 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(24,87,232,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-44 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(85vh-7rem)]">
          {/* Left — headline + CTAs */}
          <div>
            <div
              className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full border text-xs font-medium text-white/70"
              style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#ffd23e", boxShadow: "0 0 6px #ffd23e80" }}
              />
              {t("badge")}
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              {t("title")}
            </h1>

            <p className="text-lg text-white/55 leading-relaxed mb-10 max-w-md">
              {t("subtitle")}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-full transition-all hover:opacity-90 active:scale-95"
                style={{ background: "#1857e8" }}
              >
                {t("cta_demo")} <span>→</span>
              </Link>
              <Link
                href="/plateformes"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 px-6 py-3 rounded-full border transition-all hover:bg-white/10 hover:text-white"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              >
                {t("cta_platforms")}
              </Link>
            </div>
          </div>

          {/* Right — human trust card */}
          <div className="flex flex-col items-center lg:items-end gap-5">

            {/* Testimonial card */}
            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl">
              {/* Person photo area */}
              <div
                className="h-52 relative flex flex-col items-center justify-end pb-5"
                style={{ background: "linear-gradient(150deg, #1e3a5f 0%, #1857e8 60%, #6366f1 100%)" }}
              >
                {/* Subtle grid */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.07) 1px,transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                {/* SVG person silhouette */}
                <div className="relative z-10">
                  <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
                    <circle cx="48" cy="34" r="20" fill="rgba(255,255,255,0.25)" />
                    <path d="M8 96 C8 68 24 60 48 60 C72 60 88 68 88 96" fill="rgba(255,255,255,0.18)" />
                  </svg>
                </div>
                {/* Badge */}
                <div
                  className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(255,211,62,0.15)", color: "#ffd23e", border: "1px solid rgba(255,211,62,0.3)" }}
                >
                  CCI Régionale
                </div>
              </div>

              {/* Quote */}
              <div className="p-6" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderTop: "none" }}>
                <p className="text-white/85 text-sm leading-relaxed mb-5 italic">
                  &ldquo;La gouvernance IA de CivicAI nous a permis de reprendre le contrôle de nos outils SaaS et de réduire nos coûts de licence en moins de 90 jours.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ background: "#1857e8" }}
                  >
                    MC
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">Marie-Claude T.</p>
                    <p className="text-white/45 text-xs">Directrice numérique — Chambre de commerce</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badges grid */}
            <div className="w-full max-w-sm grid grid-cols-2 gap-3">
              {[
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                  label: "Gouvernance IA",
                },
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  ),
                  label: "Sécurité certifiée",
                },
                {
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  ),
                  label: "Optimisation mesurable",
                },
                {
                  icon: <span className="text-sm leading-none">🍁</span>,
                  label: "Entreprise québécoise",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-white/65"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span className="text-white/50 flex-shrink-0">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sector chips strip */}
        <div className="mt-16 pt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <p className="text-white/30 text-xs uppercase tracking-widest mb-4">{t("sectors_label")}</p>
          <div className="flex flex-wrap gap-2.5">
            {sectorItems.map((s) => (
              <span
                key={s.label}
                className="text-white/50 text-xs px-4 py-1.5 rounded-full border"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
