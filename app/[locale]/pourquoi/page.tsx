import { getTranslations } from "next-intl/server";
import ContactCTA from "@/components/ContactCTA";
import WhyCivicAIEditor from "@/components/WhyCivicAIEditor";

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
