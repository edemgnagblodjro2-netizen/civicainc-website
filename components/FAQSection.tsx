import { getTranslations } from "next-intl/server";
import FAQ from "./FAQ";

export default async function FAQSection() {
  const t = await getTranslations("faq");
  const items = t.raw("items") as { q: string; a: string }[];

  return <FAQ title={t("title")} subtitle={t("subtitle")} items={items} />;
}
