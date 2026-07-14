import type { Metadata } from "next";
import { CheckCircle2, Clock3, ShieldCheck, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { DocumentCardVisual } from "@/components/ProductVisuals";
import { PurchaseAgreementForm } from "@/features/purchase-agreement/PurchaseAgreementForm";

export const metadata: Metadata = {
  title: "Umowa kupna-sprzedaży pojazdu",
  description: "Profesjonalny wzór umowy kupna-sprzedaży samochodu lub motocykla do wypełnienia online i pobrania PDF.",
  alternates: { canonical: "/umowa-kupna-sprzedazy" },
};

export default function PurchaseAgreementPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="generatorPage">
        <div className="container">
          <Breadcrumbs items={[{ label: "Dokumenty", href: "/dokumenty" }, { label: "Umowa kupna-sprzedaży pojazdu" }]} />
          <div className="generatorIntro enterpriseGeneratorIntro">
            <span className="premiumPill"><Sparkles /> Nowy wzór dokumentu</span>
            <h1>Umowa kupna-sprzedaży pojazdu</h1>
            <p>Wypełnij dane sprzedającego, kupującego i pojazdu, a następnie pobierz czytelny dokument PDF gotowy do podpisania.</p>
            <div>
              <span><CheckCircle2 /> Dla auta i motocykla</span>
              <span><Clock3 /> Gotowe w kilka minut</span>
              <span><ShieldCheck /> Czytelny wzór</span>
            </div>
            <div className="heroReveal purchaseHeroVisual">
              <DocumentCardVisual />
            </div>
          </div>
          <PurchaseAgreementForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
