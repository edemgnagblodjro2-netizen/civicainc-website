import { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://civicainc.ca";
const locales = ["fr", "en"] as const;

const pages = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/plateformes", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/agenthub", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/nexhire", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/attentezero", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/pourquoi", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/actualites", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/innovation", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/carrieres", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/politique-confidentialite", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/conditions-utilisation", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    }
  }

  return entries;
}
