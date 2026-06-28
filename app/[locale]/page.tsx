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
