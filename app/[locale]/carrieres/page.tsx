import { getTranslations } from "next-intl/server";
import ContactCTA from "@/components/ContactCTA";

const ROLE_COLORS = ["#1857e8", "#6366f1", "#0891b2"];

export default async function CarrieresPage() {
  const t = await getTranslations("pages.careers");
  const roles = t.raw("roles") as { title: string; type: string; location: string }[];

  return (
    <>
      {/* Hero — bento 2-panel */}
      <section className="w-full">
        <div className="grid md:grid-cols-2">
          {/* Left: navy */}
          <div
            className="relative flex flex-col justify-between p-10 lg:p-16 overflow-hidden"
            style={{ background: "#0a1730", minHeight: "55vh" }}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div
              className="absolute -top-16 -right-16 w-56 h-56 pointer-events-none"
              style={{ background: "radial-gradient(circle,rgba(24,87,232,0.2) 0%,transparent 70%)" }}
            />
            <div className="relative z-10">
              <span className="text-xs font-bold tracking-widest uppercase mb-6 block" style={{ color: "#ffd23e" }}>
                Carrières
              </span>
              <h1
                className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                {t("title")}
              </h1>
              <p className="text-white/55 text-base leading-relaxed max-w-sm">{t("subtitle")}</p>
            </div>
            <div className="relative z-10 mt-8">
              <a
                href={`mailto:${t("email")}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-full transition-all hover:opacity-90"
                style={{ background: "#1857e8" }}
              >
                {t("email")} →
              </a>
            </div>
          </div>

          {/* Right: blue gradient panel with value props */}
          <div
            className="flex flex-col justify-center p-10 lg:p-16 gap-6"
            style={{ background: "linear-gradient(145deg,#1857e8 0%,#6366f1 100%)", minHeight: "55vh" }}
          >
            {[
              { num: "01", title: "Travailler sur des vrais produits", desc: "Des plateformes utilisées par de vraies organisations — pas des projets fictifs." },
              { num: "02", title: "Équipe soudée à Trois-Rivières", desc: "Un environnement où chaque contribution est visible et valorisée." },
              { num: "03", title: "IA au cœur du travail", desc: "Vous touchez aux dernières avancées en intelligence artificielle appliquée." },
            ].map((item) => (
              <div key={item.num} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {item.num}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{ background: "#eaf1ff", color: "#1857e8" }}
            >
              Postes ouverts
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#0a1730]"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Rejoins notre équipe
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {roles.map((r, i) => {
              const color = ROLE_COLORS[i % ROLE_COLORS.length];
              return (
                <div
                  key={r.title}
                  className="rounded-2xl p-6 flex flex-col gap-4"
                  style={{ background: "#f8fafc", border: "1.5px solid #e2e8f0" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                    style={{ background: color }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-bold text-[#0a1730] mb-2 text-base"
                      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                    >
                      {r.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      <span
                        className="px-2 py-0.5 rounded-full font-medium"
                        style={{ background: `${color}15`, color }}
                      >
                        {r.type}
                      </span>
                      <span>{r.location}</span>
                    </div>
                  </div>
                  <a
                    href={`mailto:${t("email")}?subject=${encodeURIComponent(r.title)}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white px-4 py-2 rounded-full self-start transition-all hover:opacity-90"
                    style={{ background: color }}
                  >
                    Postuler →
                  </a>
                </div>
              );
            })}
          </div>

          {/* Spontaneous application */}
          <div
            className="rounded-2xl p-8 max-w-lg"
            style={{ background: "#eaf1ff", border: "1.5px solid #1857e820" }}
          >
            <h3
              className="font-bold text-[#0a1730] mb-2"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Candidature spontanée
            </h3>
            <p className="text-slate-500 text-sm mb-4 leading-relaxed">
              {t("opening")}{" "}
              <a href={`mailto:${t("email")}`} className="font-semibold hover:underline" style={{ color: "#1857e8" }}>
                {t("email")}
              </a>
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
