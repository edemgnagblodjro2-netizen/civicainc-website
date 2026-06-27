import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-poppins" });
const bodyClass = `${geist.variable} ${poppins.variable} font-sans antialiased flex flex-col min-h-screen`;

export const metadata: Metadata = {
  title: "CivicAI Inc. — Plateformes d'intelligence artificielle",
  description:
    "CivicAI développe des plateformes d'IA pour les entreprises, institutions et organismes publics.",
  metadataBase: new URL("https://civicainc.ca"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={bodyClass}>
        {children}
      </body>
    </html>
  );
}
