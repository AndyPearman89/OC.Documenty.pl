import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowLeft, BadgePercent, CheckCircle2, ShieldCheck } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "../oc-mobile.css";

export const metadata: Metadata = {
  title: "Porównaj oferty OC, AC i NNW | OC.Documenty.pl",
  description:
    "Porównaj pakiety OC, AC i NNW. Po wyborze nowej polisy przygotuj właściwe wypowiedzenie dotychczasowej umowy OC.",
  alternates: { canonical: "https://oc.documenty.pl/kalkulator-oc" },
};

export default function KalkulatorOcPage() {
  return (
    <>
      <Header />
      <main className="ocHome" id="main-content">
        <section className="ocSection ocSectionWhite">
          <div className="ocShell">
            <Link href="/" className="ocBackLink"><ArrowLeft size={17} /> Wróć do centrum ubezpieczeń</Link>
            <div className="ocHeading">
              <small>Porównywarka partnerska</small>
              <h1>Porównaj pakiety OC, AC i NNW przed odnowieniem polisy</h1>
              <p>
                Zestaw obowiązkowe OC z dobrowolnym AC i NNW, sprawdź zakres ochrony oraz cenę całego pakietu. Po zakupie nowej polisy możesz wrócić do generatora wypowiedzenia dotychczasowego OC.
              </p>
            </div>

            <div className="ocCompareLayout">
              <section className="ocPartnerWidget" aria-label="Porównywarka ofert OC, AC i NNW">
                <div className="ocPartnerWidgetHead">
                  <span><BadgePercent /></span>
                  <div>
                    <small>Bezpłatna kalkulacja</small>
                    <h2>Sprawdź aktualne oferty OC / AC / NNW</h2>
                  </div>
                </div>
                <div id="rankomat-ocac" data-cid="12d0280e430a0dedb1f3ae505bbaa009" />
                <noscript>Włącz JavaScript, aby uruchomić porównywarkę ubezpieczeń komunikacyjnych.</noscript>
              </section>

              <aside className="ocCompareAside">
                <h2>Porównuj cały pakiet</h2>
                <ol>
                  <li><CheckCircle2 /> OC — obowiązkowa ochrona odpowiedzialności cywilnej.</li>
                  <li><CheckCircle2 /> AC — dobrowolna ochrona własnego pojazdu.</li>
                  <li><CheckCircle2 /> NNW — ochrona kierowcy i pasażerów.</li>
                  <li><CheckCircle2 /> Sprawdź cenę, zakres, udział własny i wyłączenia.</li>
                </ol>
                <div className="ocContinuityNote">
                  <ShieldCheck />
                  <p>Nie dopuszczaj do przerwy w obowiązkowej ochronie OC. AC i NNW są dodatkami dobrowolnymi.</p>
                </div>
                <Link className="ocButton ocButtonPrimary" href="/generator">
                  Mam już nową polisę
                </Link>
              </aside>
            </div>

            <p className="ocDisclosure ocDisclosureDark">
              Materiał partnerski. OC.Documenty.pl może otrzymać wynagrodzenie za wykonaną kalkulację lub zakup polisy. Dostępność AC i NNW zależy od ofert prezentowanych przez partnera.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <Script
        src="https://partner.rankomat.pl/widget/ocac/cdn/ranko-oc-ac-widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
