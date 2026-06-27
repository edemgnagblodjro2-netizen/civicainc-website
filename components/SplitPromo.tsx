import { Link } from "@/i18n/navigation";

export default function SplitPromo() {
  return (
    <section className="w-full overflow-hidden">
      <div className="grid md:grid-cols-2" style={{ minHeight: "480px" }}>

        {/* Left — photo / visual panel */}
        {/* To use a real photo: replace the inner divs with <Image src="/promo-team.jpg" fill className="object-cover object-top" alt="" /> */}
        <div className="relative overflow-hidden" style={{ minHeight: "380px" }}>
          {/* Gradient background */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(145deg, #060e1f 0%, #0d2152 40%, #1857e8 85%, #6366f1 100%)" }}
          />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.08) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Radial glow */}
          <div
            className="absolute -bottom-20 -left-20 w-80 h-80 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 65%)" }}
          />
          <div
            className="absolute top-10 right-10 w-64 h-64 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(24,87,232,0.3) 0%, transparent 65%)" }}
          />

          {/* Abstract person silhouette art */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="220" height="280" viewBox="0 0 220 280" fill="none" className="opacity-20">
              <circle cx="110" cy="72" r="50" fill="white" />
              <path d="M10 280 C10 200 45 168 110 168 C175 168 210 200 210 280" fill="white" />
            </svg>
          </div>

          {/* Badge overlay */}
          <div className="absolute top-8 left-8">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: "rgba(255,211,62,0.15)", color: "#ffd23e", border: "1px solid rgba(255,211,62,0.3)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              Québec — Canada
            </div>
          </div>

          {/* Stats overlay bottom */}
          <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-3">
            {[
              { value: "90j", label: "Déploiement" },
              { value: "3", label: "Plateformes" },
              { value: "100%", label: "Québécois" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-3 text-center"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}
              >
                <div className="text-white font-bold text-lg leading-none mb-1">{s.value}</div>
                <div className="text-white/45 text-xs">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Blend edge into right panel */}
          <div
            className="absolute inset-y-0 right-0 w-16 hidden md:block"
            style={{ background: "linear-gradient(to right, transparent, #0a1730)" }}
          />
        </div>

        {/* Right — text panel */}
        <div
          className="flex flex-col justify-center px-10 lg:px-16 py-16"
          style={{ background: "#0a1730" }}
        >
          <span
            className="text-xs font-bold uppercase tracking-widest mb-6 block"
            style={{ color: "#ffd23e" }}
          >
            Votre organisation
          </span>

          <h2
            className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Êtes-vous prêt pour une IA&nbsp;gouvernée, sécurisée et mesurable?
          </h2>

          <p className="text-white/55 text-base leading-relaxed mb-6">
            Chambres de commerce, municipalités, entreprises — CivicAI vous accompagne dans la maîtrise de l'intelligence artificielle responsable. Gouvernance des outils SaaS, sécurité des données, optimisation des processus : chaque déploiement est documenté et mesurable.
          </p>

          <p className="text-white font-semibold text-base mb-8">
            Faites partie des organisations qui transforment leur avenir numérique avec CivicAI.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-full transition-all hover:opacity-90"
              style={{ background: "#1857e8" }}
            >
              Demander une démo →
            </Link>
            <Link
              href="/pourquoi"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/65 px-6 py-3 rounded-full border transition-all hover:bg-white/10 hover:text-white"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              Pourquoi CivicAI
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
