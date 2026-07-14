import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Clock3, FileText, ShieldCheck, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { DocumentCardVisual } from "@/components/ProductVisuals";
import { PurchaseAgreementForm } from "@/features/purchase-agreement/PurchaseAgreementForm";

export const metadata: Metadata = {
  title: "Umowa kupna-sprzedaży pojazdu",
  description:
    "Profesjonalny wzór umowy kupna-sprzedaży samochodu, motocykla, przyczepki lub ciężarówki do wypełnienia online i pobrania PDF.",
  alternates: { canonical: "/umowa-kupna-sprzedazy" },
};

const agreementHighlights = [
  "formalny układ dokumentu z miejscem na wszystkie kluczowe dane",
  "wersja czytelna dla sprzedającego i kupującego",
  "gotowy PDF do druku, podpisu i przekazania dalej",
];

const agreementSteps = [
  "Wybierz typ pojazdu i uzupełnij dane stron transakcji.",
  "Dodaj informacje o pojeździe, cenie oraz miejscu sprzedaży.",
  "Dołącz podpis zdjęciem i pobierz gotowy dokument PDF.",
];

export default function PurchaseAgreementPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="generatorPage purchasePage">
        <div className="container">
          <Breadcrumbs items={[{ label: "Dokumenty", href: "/dokumenty" }, { label: "Umowa kupna-sprzedaży pojazdu" }]} />

          <section className="generatorIntro enterpriseGeneratorIntro purchaseHero">
            <span className="premiumPill">
              <Sparkles /> Oficjalny wzór dokumentu
            </span>
            <h1>Umowa kupna-sprzedaży pojazdu</h1>
            <p>
              Wypełnij dane sprzedającego, kupującego i pojazdu, a następnie pobierz estetyczny dokument PDF gotowy do
              podpisania. Przygotowaliśmy go tak, aby wyglądał formalnie, przejrzyście i dobrze drukował się na A4.
            </p>
            <div className="purchaseHeroBadges">
              <span><CheckCircle2 /> Dla auta, motocykla i ciężarówki</span>
              <span><Clock3 /> Gotowe w kilka minut</span>
              <span><ShieldCheck /> Czytelny układ A4</span>
            </div>
            <div className="purchaseHeroActions">
              <a className="premiumButton primary" href="#formularz">
                Wypełnij umowę <ArrowRight />
              </a>
              <a className="premiumButton secondary" href="/dokumenty">
                <FileText /> Zobacz więcej wzorów
              </a>
            </div>
            <div className="heroReveal purchaseHeroVisual">
              <DocumentCardVisual />
            </div>
          </section>
        </div>

        <section className="enterpriseTrust">
          <div className="container enterpriseTrustGrid">
            <div>
              <CheckCircle2 />
              <span>
                <b>Bez konta</b>
                <small>natychmiastowy dostęp</small>
              </span>
            </div>
            <div>
              <ShieldCheck />
              <span>
                <b>Lokalnie</b>
                <small>dane pozostają w przeglądarce</small>
              </span>
            </div>
            <div>
              <Clock3 />
              <span>
                <b>Szybko</b>
                <small>formularz prowadzi krok po kroku</small>
              </span>
            </div>
            <div>
              <FileText />
              <span>
                <b>PDF A4</b>
                <small>do druku i podpisu</small>
              </span>
            </div>
          </div>
        </section>

        <section className="enterpriseSection surfaceSection">
          <div className="container purchaseInfoGrid">
            <article>
              <span className="premiumPill">Dlaczego ten wzór</span>
              <h2>Formalny dokument, który porządkuje transakcję</h2>
              <p>
                Umowa zawiera miejsca na wszystkie najważniejsze dane: strony umowy, pojazd, cenę, datę sprzedaży i
                podpisy. Dzięki temu łatwiej przekazać auto zgodnie z wymaganiami urzędowymi i później wykonać kolejne
                formalności bez pomyłek.
              </p>
            </article>
            <article>
              <span className="premiumPill">Co zyskujesz</span>
              <ul className="purchaseBenefitList">
                {agreementHighlights.map((item) => (
                  <li key={item}>
                    <CheckCircle2 />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="enterpriseSection">
          <div className="container purchaseStepsGrid">
            {agreementSteps.map((step, index) => (
              <article key={step}>
                <b>{index + 1}</b>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="container" id="formularz">
          <PurchaseAgreementForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
