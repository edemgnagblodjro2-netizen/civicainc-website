import Image from "next/image";
import ContactCTA from "@/components/ContactCTA";
import { Link } from "@/i18n/navigation";
import ARTICLES from "@/lib/articles";

export default function ActualitesPage() {
  const [featured, ...rest] = ARTICLES;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: "144px", minHeight: "380px" }}>
        <div className="absolute inset-0">
          <Image
            src="/news-equipe-civicai.jpg"
            alt="Équipe CivicAI"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(10,23,48,0.92) 0%, rgba(10,23,48,0.75) 50%, rgba(10,23,48,0.4) 100%)" }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 mb-6"
            style={{ background: "rgba(124,58,237,0.25)", color: "#c4b5fd", border: "1px solid rgba(124,58,237,0.35)" }}
          >
            Actualités & Ressources
          </span>
          <h1
            className="text-5xl lg:text-6xl font-bold text-white tracking-tight mb-5 max-w-2xl"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Centre de ressources
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-xl">
            Lancements, guides pratiques et articles éditoriaux sur l&apos;IA responsable pour les organisations québécoises.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ background: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">

          {/* Article vedette */}
          <Link
            href={`/actualites/${featured.slug}` as `/actualites/${string}`}
            className="group grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl transition-shadow hover:shadow-2xl"
          >
            <div className="relative min-h-[300px] lg:min-h-0" style={{ background: featured.gradient }}>
              <div className="absolute inset-0">
                <Image
                  src="/news-agenthub-launch.jpg"
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0" style={{ background: "rgba(10,23,48,0.2)" }} />
            </div>
            <div className="bg-[#0a1730] p-10 lg:p-14 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 text-white"
                    style={{ border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)" }}
                  >
                    {featured.category}
                  </span>
                  <time className="text-sm text-white/40">{featured.date}</time>
                  <span className="text-sm text-white/25">· {featured.readTime} de lecture</span>
                </div>
                <h2
                  className="text-2xl lg:text-3xl font-bold text-white leading-snug mb-5 group-hover:text-violet-300 transition-colors"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {featured.title}
                </h2>
                <p className="text-white/50 text-sm leading-relaxed">{featured.excerpt}</p>
              </div>
              <div className="mt-10">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a1730] bg-white px-6 py-3 rounded-full transition-all group-hover:bg-slate-100">
                  Lire l&apos;article →
                </span>
              </div>
            </div>
          </Link>

          {/* Grille des autres articles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/actualites/${article.slug}` as `/actualites/${string}`}
                className="group bg-white flex flex-col rounded-2xl overflow-hidden transition-shadow hover:shadow-lg"
                style={{ border: "1px solid #e2e8f0" }}
              >
                {/* Color strip */}
                <div className="h-1.5 w-full" style={{ background: article.gradient }} />

                <div className="flex flex-col flex-1 p-7">
                  {/* Badge + date */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 text-white rounded"
                      style={{ background: article.categoryColor }}
                    >
                      {article.category}
                    </span>
                    <time className="text-xs text-slate-400 font-medium">{article.date}</time>
                  </div>

                  {/* Title */}
                  <h2
                    className="text-base font-bold text-slate-900 leading-snug mb-3 flex-1 group-hover:text-violet-700 transition-colors"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Read time */}
                  <p className="text-xs text-slate-400 font-medium">
                    {article.readTime} de lecture →
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <ContactCTA />
    </>
  );
}
