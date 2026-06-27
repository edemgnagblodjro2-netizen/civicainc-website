import Hero from "@/components/Hero";
import Platforms from "@/components/Platforms";
import Sectors from "@/components/Sectors";
import WhyCivicAI from "@/components/WhyCivicAI";
import Vision from "@/components/Vision";
import Partners from "@/components/Partners";
import Approach from "@/components/Approach";
import FAQSection from "@/components/FAQSection";
import ContactCTA from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Platforms />
      <Sectors />
      <WhyCivicAI />
      <Vision />
      <Partners />
      <Approach />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
