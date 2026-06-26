import { getTranslations } from "next-intl/server";
import ContactCTA from "@/components/ContactCTA";

const STATUS_COLORS: Record<string, string> = {
  "Actif": "bg-green-100 text-green-700",
  "Active": "bg-green-100 text-green-700",
  "En développement": "bg-amber-100 text-amber-700",
  "In development": "bg-amber-100 text-amber-700",
};

export default async function InnovationPage() {
  const t = await getTranslations("pages.innovation");
  const projects = t.raw("projects") as { name: string; status: string; desc: string }[];

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 border-b border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">
              Innovation
            </div>
            <h1 className="text-5xl font-bold text-slate-900 tracking-tight mb-4">
              {t("title")}
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">{t("subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div
                key={p.name}
                className="bg-slate-50 rounded-2xl border border-slate-100 p-6 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_COLORS[p.status] ?? "bg-slate-100 text-slate-600"}`}
                  >
                    {p.status}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{p.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture vision */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Architecture CivicAI</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-12">
            Une architecture modulaire qui permet d'ajouter de nouvelles applications
            sans remettre en cause les fondations.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="bg-blue-700 rounded-2xl p-5 text-white font-semibold mb-3">
              CivicAI Core Platform
            </div>
            <div className="grid grid-cols-3 gap-3 mb-3">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-sm text-slate-300">AgentHub Platform</div>
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-sm text-slate-300">NexHire EIP</div>
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-sm text-slate-400 border-dashed">AttenteZéro</div>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {["Auth", "RBAC", "AI Gateway", "Connecteurs", "Billing"].map((m) => (
                <div key={m} className="bg-slate-800/50 border border-slate-800 rounded-lg p-2 text-xs text-slate-500 text-center">
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
