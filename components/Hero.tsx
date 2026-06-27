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

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
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

          {/* Right — platform dashboard card */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="w-full max-w-md rounded-2xl p-6 shadow-2xl"
              style={{
                background: "rgba(255,255,255,0.055)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-white/40 text-xs mb-0.5">AgentHub Platform</p>
                  <p className="text-white font-semibold text-sm">Tableau de bord IA</p>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: "Maturité IA", value: "78%" },
                  { label: "Licences", value: "92%" },
                  { label: "ROI mesuré", value: "65%" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl p-3 text-center"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <div className="text-xl font-bold text-white mb-0.5">{s.value}</div>
                    <div className="text-white/35 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Progress bars */}
              <div className="space-y-3.5 mb-5">
                {[
                  { label: "Gouvernance SaaS", percent: 88 },
                  { label: "Diagnostic IA", percent: 72 },
                  { label: "Économies documentées", percent: 95, accent: true },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-white/50">{item.label}</span>
                      <span className="text-white/70 font-medium">{item.percent}%</span>
                    </div>
                    <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }}>
                      <div
                        className="h-1.5 rounded-full"
                        style={{
                          width: `${item.percent}%`,
                          background: item.accent ? "#ffd23e" : "#1857e8",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Activity list */}
              <div
                className="pt-4 border-t space-y-2.5"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                {[
                  "3 rapports d'impact générés",
                  "12 licences Microsoft optimisées",
                  "Agent ATLAS actif",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(24,87,232,0.3)" }}
                    >
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4L3 5.5L6.5 2.5" stroke="#1857e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-white/50 text-xs">{item}</span>
                  </div>
                ))}
              </div>
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
