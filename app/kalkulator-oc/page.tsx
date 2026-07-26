import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowLeft, BadgePercent, CheckCircle2, ShieldCheck } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "../oc-mobile.css";

export const metadata: Metadata = {
  title: "Porównaj oferty OC i AC | OC.Documenty.pl",
  description:
    "Porównaj oferty OC i AC, a po wyborze nowej polisy przygotuj właściwe wypowiedzenie dotychczasowej umowy.",
  alternates: { canonical: "https://oc.documenty.pl/kalkulator-oc" },
};

export default function KalkulatorOcPage() {
  return (
    <>
      <Header />
      <main className="ocHome" id="main-content">
        <section className="ocSection ocSectionWhite">
          <div className="ocShell">
            <Link href="/" className="ocBackLink"><ArrowLeft size={17} /> Wróć do centrum OC</Link>
            <div className="ocHeading">
              <small>Porównywarka partnerska</small>
              <h1>Porównaj oferty OC przed odnowieniem polisy</h1>
              <p>
                Najpierw zapewnij sobie nową ochronę bez przerwy. Następnie wróć do generatora i przygotuj właściwe wypowiedzenie dotychczasowej umowy.
              </p>
            </div>

            <div className="ocCompareLayout">
              <section className="ocPartnerWidget" aria-label="Porównywarka ofert OC i AC">
                <div className="ocPartnerWidgetHead">
                  <span><BadgePercent /></span>
                  <div>
                    <small>Bezpłatna kalkulacja</small>
                    <h2>Sprawdź aktualne oferty OC/AC</h2>
                  </div>
                </div>
                <div id="rankomat-ocac" data-cid="12d0280e430a0dedb1f3ae505bbaa009" />
                <noscript>Włącz JavaScript, aby uruchomić porównywarkę OC/AC.</noscript>
              </section>

              <aside className="ocCompareAside">
                <h2>Bezpieczna kolejność</h2>
                <ol>
                  <li><CheckCircle2 /> Porównaj dostępne oferty.</li>
                  <li><CheckCircle2 /> Kup nową polisę z właściwą datą startu.</li>
                  <li><CheckCircle2 /> Przygotuj wypowiedzenie starej umowy.</li>
                  <li><CheckCircle2 /> Podpisz dokument i zachowaj potwierdzenie.</li>
                </ol>
                <div className="ocContinuityNote">
                  <ShieldCheck />
                  <p>Nie dopuszczaj do przerwy w obowiązkowej ochronie OC.</p>
                </div>
                <Link className="ocButton ocButtonPrimary" href="/generator">
                  Mam już nową polisę
                </Link>
              </aside>
            </div>

            <p className="ocDisclosure ocDisclosureDark">
              Materiał partnerski. OC.Documenty.pl może otrzymać wynagrodzenie za wykonaną kalkulację lub zakup polisy. Porównanie jest bezpłatne dla użytkownika.
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
