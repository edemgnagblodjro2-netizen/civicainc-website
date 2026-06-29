import type { Metadata } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-dm-sans" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], variable: "--font-poppins" });
const bodyClass = `${dmSans.variable} ${poppins.variable} font-sans antialiased flex flex-col min-h-screen`;

export const metadata: Metadata = {
  title: "CivicAI Inc. — Plateformes d'intelligence artificielle",
  description:
    "CivicAI développe des plateformes d'IA pour les entreprises, institutions et organismes publics.",
  metadataBase: new URL("https://civicainc.ca"),
  verification: {
    google: "d9U4aIdgTVEIKb7XxN0aj3QTCCsviaEWu1HicT2-oIc",
  },
  icons: {
    icon: [
      { url: "/logo-civicai.png", type: "image/png" },
    ],
    apple: { url: "/logo-civicai.png", type: "image/png" },
    shortcut: "/logo-civicai.png",
  },
  openGraph: {
    title: "CivicAI Inc. — Plateformes d'intelligence artificielle",
    description: "CivicAI développe des plateformes d'IA pour les entreprises, institutions et organismes publics.",
    url: "https://civicainc.ca",
    siteName: "CivicAI Inc.",
    images: [{ url: "/logo-civicai.png" }],
    locale: "fr_CA",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://civicainc.ca/#organization",
      name: "CivicAI Inc.",
      url: "https://civicainc.ca",
      logo: "https://civicainc.ca/logo-civicai.png",
      description: "Éditeur de logiciels d'intelligence artificielle pour les entreprises, institutions publiques et organismes québécois.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Trois-Rivières",
        addressRegion: "QC",
        addressCountry: "CA",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-905-809-7798",
        contactType: "customer service",
        email: "contact@civicainc.ca",
        availableLanguage: ["French", "English"],
      },
      sameAs: [
        "https://www.linkedin.com/in/civicai-inc-aa2282314/",
        "https://x.com/startup_aya",
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://civicainc.ca/plateformes#agenthub",
      name: "AgentHub Platform",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
      provider: { "@id": "https://civicainc.ca/#organization" },
      description: "Plateforme de gouvernance IA pour les chambres de commerce et organisations québécoises.",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://civicainc.ca/plateformes#nexhire",
      name: "NexHire EIP",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
      provider: { "@id": "https://civicainc.ca/#organization" },
      description: "Plateforme d'intelligence d'entreprise et gouvernance SaaS Microsoft 365.",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://civicainc.ca/plateformes#attentezero",
      name: "AttenteZéro",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
      provider: { "@id": "https://civicainc.ca/#organization" },
      description: "Services communautaires géolocalisés et intelligents pour les municipalités et organismes publics québécois.",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={bodyClass}>
        {children}
      </body>
    </html>
  );
}
