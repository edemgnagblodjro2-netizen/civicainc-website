import { getTranslations } from "next-intl/server";

export default async function ContactPage() {
  const t = await getTranslations("pages.contact");

  return (
    <section className="bg-white min-h-screen" style={{ paddingTop: "144px" }}>
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">
              Contact
            </div>
            <h1 className="text-5xl font-bold text-slate-900 tracking-tight mb-4">
              {t("title")}
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10">
              {t("subtitle")}
            </p>

            <div className="space-y-6">
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Courriel
                </div>
                <a
                  href="mailto:contact@nexhire.ca"
                  className="text-blue-700 font-medium hover:underline text-sm"
                >
                  contact@nexhire.ca
                </a>
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Adresse
                </div>
                <p className="text-sm text-slate-600">{t("address")}</p>
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  LinkedIn
                </div>
                <a
                  href="https://linkedin.com/company/civicainc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-medium hover:underline text-sm"
                >
                  linkedin.com/company/civicainc
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              {t("title")}
            </h2>
            <form
              action="https://formspree.io/f/contact-civicainc"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                  {t("name")} *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 bg-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                  placeholder="Marie Tremblay"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                  {t("org")} *
                </label>
                <input
                  type="text"
                  name="organization"
                  required
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 bg-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                  placeholder="Chambre de Commerce de Trois-Rivières"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                  {t("email")} *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 bg-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                  placeholder="marie@organisation.ca"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                  {t("message")}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 bg-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all resize-none"
                  placeholder="Décrivez votre organisation et ce que vous cherchez à accomplir…"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm py-3.5 rounded-xl transition-colors"
              >
                {t("submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
