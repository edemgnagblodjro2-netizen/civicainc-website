import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ContactForm from "@/components/ContactForm";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale !== "en";
  return {
    title: isFr
      ? "Demander une Démo — Contactez CivicAI Inc."
      : "Request a Demo — Contact CivicAI Inc.",
    description: isFr
      ? "Planifiez une démonstration de nos plateformes IA. Notre équipe à Trois-Rivières, Québec, vous répond dans les 24 à 48 heures."
      : "Schedule a demo of our AI platforms. Our team in Trois-Rivières, Quebec, responds within 24 to 48 hours.",
    alternates: {
      canonical: `https://civicainc.ca/${locale}/contact`,
      languages: { fr: "https://civicainc.ca/fr/contact", en: "https://civicainc.ca/en/contact" },
    },
  };
}

export default async function ContactPage() {
  const t = await getTranslations("pages.contact");

  return (
    <section className="min-h-screen" style={{ paddingTop: "144px", background: "#f0f8ff" }}>
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
                  Téléphone
                </div>
                <a
                  href="tel:+19058097798"
                  className="text-blue-700 font-medium hover:underline text-sm"
                >
                  905 809-7798
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              {t("title")}
            </h2>
            <ContactForm
              labels={{
                name: t("name"),
                org: t("org"),
                email: t("email"),
                message: t("message"),
                submit: t("submit"),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
