import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import ContactCTA from "@/components/ContactCTA";
import ARTICLES from "@/lib/articles";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);

  const backLabel = locale === "en" ? "← Back to news" : "← Retour aux actualités";
  const relatedLabel = locale === "en" ? "Continue reading" : "Lire aussi";
  const readLabel = locale === "en" ? "read" : "de lecture";

  return (
    <>
      {/* Hero */}
      <section style={{ background: article.gradient, paddingTop: "144px" }}>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <Link
            href="/actualites"
            className="inline-flex items-center text-xs font-medium mb-8 transition-colors"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {backLabel}
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 text-white"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              {article.category}
            </span>
            <time className="text-sm text-white/50">{article.date}</time>
            <span className="text-sm text-white/30">·</span>
            <span className="text-sm text-white/50">{article.readTime} {readLabel}</span>
          </div>
          <h1
            className="text-3xl lg:text-5xl font-black text-white leading-tight"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            {article.title}
          </h1>
        </div>
        <div style={{ height: 50, background: "linear-gradient(to bottom, transparent, #ffffff)" }} />
      </section>

      {/* Article body */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="prose prose-slate max-w-none">
            {article.body.map((block, i) => {
              if (block.type === "paragraph") {
                return (
                  <p key={i} className="text-base text-slate-600 leading-relaxed mb-6">
                    {block.content}
                  </p>
                );
              }
              if (block.type === "heading") {
                return (
                  <h2
                    key={i}
                    className="text-xl lg:text-2xl font-bold text-slate-900 mt-10 mb-4"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    {block.content}
                  </h2>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={i} className="space-y-2 mb-6 ml-0">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                          style={{ background: "#7c3aed" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote
                    key={i}
                    className="my-8 pl-6 py-1"
                    style={{ borderLeft: "3px solid #7c3aed" }}
                  >
                    <p className="text-base text-slate-700 leading-relaxed italic mb-3">
                      &ldquo;{block.content}&rdquo;
                    </p>
                    {block.author && (
                      <cite className="text-xs text-slate-400 not-italic font-medium">
                        — {block.author}
                      </cite>
                    )}
                  </blockquote>
                );
              }
              return null;
            })}
          </div>

          {/* Article CTA */}
          <div
            className="mt-12 p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
            style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
          >
            <div>
              <p className="text-sm font-bold text-slate-900 mb-1">{article.cta.label}</p>
              <p className="text-xs text-slate-400">
                {locale === "fr" ? "En savoir plus sur nos solutions" : "Learn more about our solutions"}
              </p>
            </div>
            <Link
              href={article.cta.href as "/agenthub" | "/nexhire" | "/attentezero" | "/a-propos"}
              className="inline-flex items-center gap-2 text-sm font-bold text-white px-6 py-3 rounded-xl flex-shrink-0 transition-all hover:opacity-90"
              style={{ background: "#7c3aed" }}
            >
              {article.cta.label}
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-16" style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="text-xl font-bold text-slate-900 mb-8"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              {relatedLabel}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/actualites/${rel.slug}` as `/actualites/${string}`}
                  className="group bg-white rounded-2xl overflow-hidden flex flex-col transition-shadow hover:shadow-md"
                  style={{ border: "1px solid #e2e8f0" }}
                >
                  <div className="h-2 w-full" style={{ background: rel.gradient }} />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 text-white rounded"
                        style={{ background: rel.categoryColor }}
                      >
                        {rel.category}
                      </span>
                      <time className="text-xs text-slate-400">{rel.date}</time>
                    </div>
                    <h3
                      className="text-sm font-bold text-slate-900 leading-snug mb-2 flex-1 group-hover:text-violet-700 transition-colors"
                      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                    >
                      {rel.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-3">{rel.readTime} {readLabel} →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA />
    </>
  );
}
