import type { Metadata } from "next";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";
import "./enterprise.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oc.documenty.pl"),
  title: { default: "OC.Documenty.pl — wzory dokumentów OC/AC online", template: "%s | OC.Documenty.pl" },
  description:
    "Generuj dokumenty ubezpieczeniowe OC/AC online. Wypowiedzenie, wspólne oświadczenie, umowy pojazdowe. Szybko, bezpiecznie, bez logowania.",
  keywords: "dokumenty OC, generator OC, wypowiedzenie ubezpieczenia, oświadczenie kolizja, umowa kupna-sprzedaży",
  applicationName: "OC.Documenty.pl",
  category: "insurance",
  creator: "OC.Documenty.pl",
  publisher: "OC.Documenty.pl",
  authors: [{ name: "OC.Documenty.pl" }],
  icons: { icon: "/images/oc-icon.png", apple: "/images/oc-icon.png" },
  manifest: "/site.webmanifest",
  appleWebApp: { capable: true, statusBarStyle: "black-translucent" },
  formatDetection: { telephone: false, email: true, address: false },
  openGraph: {
    title: "OC.Documenty.pl — profesjonalne dokumenty ubezpieczeniowe",
    description:
      "Generuj gotowe dokumenty ubezpieczeniowe w kilka minut. Bez logowania, bez aplikacji, bez stresu.",
    url: "https://oc.documenty.pl",
    siteName: "OC.Documenty.pl",
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "/images/oc-brand.jpeg",
        width: 1254,
        height: 1254,
        alt: "OC.Documenty.pl — generator dokumentów ubezpieczeniowych",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OC.Documenty.pl",
    description: "Profesjonalne dokumenty OC/AC online — szybko, bezpiecznie, bez konta.",
    images: ["/images/oc-brand.jpeg"],
  },
  alternates: {
    canonical: "https://oc.documenty.pl",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pl"><body>{children}<CookieConsent /></body></html>;
}
