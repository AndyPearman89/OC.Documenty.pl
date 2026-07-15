import type { Metadata } from "next";
import { CheckCircle2, Clock3, ShieldCheck, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PurchaseAgreementForm } from "@/features/purchase-agreement/PurchaseAgreementForm";

export const metadata: Metadata = {
  title: "Umowa kupna-sprzedaży samochodu ze współwłaścicielem",
  description: "Wzór umowy kupna-sprzedaży samochodu z udziałem współwłaściciela do wypełnienia online i pobrania PDF.",
  alternates: { canonical: "/umowa-kupna-sprzedazy-wspolwlasciciel" },
};

export default function PurchaseAgreementCoOwnerPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="generatorPage">
        <div className="container">
          <Breadcrumbs items={[{ label: "Dokumenty", href: "/dokumenty" }, { label: "Umowa kupna-sprzedaży samochodu ze współwłaścicielem" }]} />
          <div className="generatorIntro enterpriseGeneratorIntro">
            <span className="premiumPill"><Sparkles /> Wzór dla współwłaściciela</span>
            <h1>Umowa kupna-sprzedaży samochodu ze współwłaścicielem</h1>
            <p>Wzór dla transakcji, w której w umowie uczestniczy współwłaściciel pojazdu. Wypełnij dane stron i pobierz PDF.</p>
            <div>
              <span><CheckCircle2 /> Dla auta i motocykla</span>
              <span><Clock3 /> Gotowe w kilka minut</span>
              <span><ShieldCheck /> Czytelny wzór</span>
            </div>
          </div>
          <PurchaseAgreementForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
