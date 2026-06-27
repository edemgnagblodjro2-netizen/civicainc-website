import { getTranslations } from "next-intl/server";

const STEP_COLORS = [
  { bg: "#1857e8", light: "#eaf1ff" },
  { bg: "#6366f1", light: "#eef2ff" },
  { bg: "#8b5cf6", light: "#f5f3ff" },
  { bg: "#10b981", light: "#ecfdf5" },
  { bg: "#0a1730", light: "#f1f5f9" },
];

export default async function Approach() {
  const t = await getTranslations("approach");
  const steps = t.raw("steps") as { num: string; title: string; desc: string }[];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <span
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
            style={{ background: "var(--sky, #eaf1ff)", color: "var(--blue, #1857e8)" }}
          >
            {t("title")}
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#0a1730]"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            {t("subtitle")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, i) => {
            const c = STEP_COLORS[i] ?? STEP_COLORS[0];
            return (
              <div
                key={step.num}
                className="rounded-2xl p-6 flex flex-col gap-4 transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ background: c.light, border: `1.5px solid ${c.bg}20` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: c.bg }}
                >
                  {step.num}
                </div>
                <div>
                  <h3
                    className="font-bold text-[#0a1730] text-base mb-2"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
