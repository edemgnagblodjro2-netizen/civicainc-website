import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import Platforms from "@/components/Platforms";
import SplitPromo from "@/components/SplitPromo";
import Sectors from "@/components/Sectors";
import ContentAlternating from "@/components/ContentAlternating";
import WhyCivicAI from "@/components/WhyCivicAI";
import Vision from "@/components/Vision";
import Credibility from "@/components/Credibility";
import UseCases from "@/components/UseCases";
import Partners from "@/components/Partners";
import Approach from "@/components/Approach";
import LatestNews from "@/components/LatestNews";
import FAQSection from "@/components/FAQSection";
import ContactCTA from "@/components/ContactCTA";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale !== "en";
  return {
    title: isFr
      ? "CivicAI Inc. — Plateformes IA pour les Organisations Québécoises"
      : "CivicAI Inc. — AI Platforms for Quebec Organizations",
    description: isFr
      ? "Éditeur de logiciels d'intelligence artificielle pour chambres de commerce, entreprises et organismes publics du Québec. Diagnostic IA, gouvernance et optimisation SaaS."
      : "AI software publisher for chambers of commerce, businesses and public organizations. AI diagnostic, governance and SaaS optimization.",
    alternates: {
      canonical: `https://civicainc.ca/${locale}`,
      languages: { fr: "https://civicainc.ca/fr", en: "https://civicainc.ca/en" },
    },
  };
}

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <Platforms />
      <SplitPromo />
      <Sectors />
      <ContentAlternating />
      <WhyCivicAI />
      <Vision />
      <Credibility />
      <UseCases />
      <Partners />
      <Approach />
      <LatestNews />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
