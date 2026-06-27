import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function SplitPromo() {
  return (
    <section className="w-full overflow-hidden">
      <div className="grid md:grid-cols-2" style={{ minHeight: "500px" }}>

        {/* Left — person photo panel */}
        {/* Save your photo as: public/promo-person.jpg */}
        <div className="relative overflow-hidden" style={{ minHeight: "420px" }}>

          {/* Fallback gradient (visible while image loads or if missing) */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(145deg, #060e1f 0%, #0d2152 50%, #1857e8 100%)" }}
          />

          {/* Person photo — fill the panel */}
          <Image
            src="/promo-person.jpg"
            alt="Professionnelle CivicAI"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Dark overlay — brand tone + readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(6,14,31,0.25) 0%, rgba(6,14,31,0.05) 40%, rgba(6,14,31,0.55) 80%, rgba(6,14,31,0.88) 100%)",
            }}
          />

          {/* Left edge: subtle blue glow */}
          <div
            className="absolute inset-y-0 left-0 w-32 pointer-events-none"
            style={{ background: "linear-gradient(to right, rgba(24,87,232,0.15) 0%, transparent 100%)" }}
          />

          {/* Badge — top left */}
          <div className="absolute top-7 left-7 z-10">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(0,0,0,0.45)",
                color: "#ffd23e",
                border: "1px solid rgba(255,211,62,0.35)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              Québec — Canada
            </div>
          </div>

          {/* Stats — bottom overlay */}
          <div className="absolute bottom-7 left-7 right-7 z-10 grid grid-cols-3 gap-3">
            {[
              { value: "90j", label: "Déploiement" },
              { value: "3", label: "Plateformes" },
              { value: "100%", label: "Québécois" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-3 text-center"
                style={{
                  background: "rgba(10,23,48,0.65)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="text-white font-bold text-xl leading-none mb-1">{s.value}</div>
                <div className="text-white/50 text-xs">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Right edge blend into text panel */}
          <div
            className="absolute inset-y-0 right-0 w-20 hidden md:block"
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
            Êtes-vous prêt pour une IA gouvernée, sécurisée et mesurable?
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
