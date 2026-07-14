import type { Metadata } from "next";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";
import "./enterprise.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oc.documenty.pl"),
  title: { default: "OC.Documenty.pl — wzory dokumentów OC/AC", template: "%s | OC.Documenty.pl" },
  description: "Wypełnij dokument ubezpieczeniowy online i pobierz gotowy PDF. Szybko, bezpiecznie i zgodnie z prawem.",
  applicationName: "OC.Documenty.pl",
  category: "insurance documents",
  icons: { icon: "/images/oc-icon.png", apple: "/images/oc-icon.png" },
  openGraph: { title: "OC.Documenty.pl", description: "Profesjonalne wzory dokumentów ubezpieczeniowych.", type: "website", locale: "pl_PL", images: [{ url: "/images/oc-brand.jpeg", width: 1254, height: 1254, alt: "OC.Documenty.pl — dokumenty ubezpieczeniowe" }] },
  twitter: { card: "summary_large_image", title: "OC.Documenty.pl", description: "Profesjonalne wzory dokumentów OC/AC online.", images: ["/images/oc-brand.jpeg"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pl"><body>{children}<CookieConsent /></body></html>;
}
