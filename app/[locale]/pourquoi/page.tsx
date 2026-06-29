import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ContactCTA from "@/components/ContactCTA";
import WhyCivicAIEditor from "@/components/WhyCivicAIEditor";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale !== "en";
  return {
    title: isFr
      ? "Pourquoi CivicAI — IA Mesurable et Gouvernée pour les Organisations"
      : "Why CivicAI — Measurable and Governed AI for Organizations",
    description: isFr
      ? "Infrastructure IA québécoise, architecture multi-tenant sécurisée et résultats documentés. Pas une agence — un éditeur de logiciels sérieux basé à Trois-Rivières."
      : "Quebec AI infrastructure, secure multi-tenant architecture and documented results. Not an agency — a serious software publisher based in Trois-Rivières.",
    alternates: {
      canonical: `https://civicainc.ca/${locale}/pourquoi`,
      languages: { fr: "https://civicainc.ca/fr/pourquoi", en: "https://civicainc.ca/en/pourquoi" },
    },
  };
}

export default async function PourquoiPage() {
  const t = await getTranslations("pages.why");

  return (
    <>
      {/* Hero */}
      <section
        className="bg-slate-50 border-b border-slate-100 pb-20"
        style={{ paddingTop: "144px" }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Pourquoi CivicAI
          </div>
          <h1 className="text-5xl font-bold text-slate-900 tracking-tight mb-4">{t("title")}</h1>
          <p className="text-xl text-slate-500 leading-relaxed">{t("subtitle")}</p>
        </div>
      </section>

      <WhyCivicAIEditor />

      <ContactCTA />
    </>
  );
}
