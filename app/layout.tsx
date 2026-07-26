import type { Metadata } from "next";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";
import "./enterprise.css";
import "./oc-products.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oc.documenty.pl"),
  title: { default: "OC.Documenty.pl — OC, AC i NNW online", template: "%s | OC.Documenty.pl" },
  description:
    "Porównuj pakiety OC, AC i NNW oraz generuj dokumenty ubezpieczeniowe online. Szybko, bezpiecznie i bez logowania.",
  keywords: "ubezpieczenie OC, autocasco AC, NNW, porównywarka ubezpieczeń, dokumenty OC, generator OC, wypowiedzenie ubezpieczenia",
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
    title: "OC.Documenty.pl — OC, AC i NNW w jednym miejscu",
    description:
      "Porównuj zakres ochrony i generuj gotowe dokumenty ubezpieczeniowe w kilka minut.",
    url: "https://oc.documenty.pl",
    siteName: "OC.Documenty.pl",
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "/images/oc-brand.jpeg",
        width: 1254,
        height: 1254,
        alt: "OC.Documenty.pl — mobilne centrum OC, AC i NNW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OC.Documenty.pl — OC, AC i NNW",
    description: "Porównanie pakietów i profesjonalne dokumenty ubezpieczeniowe online.",
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
