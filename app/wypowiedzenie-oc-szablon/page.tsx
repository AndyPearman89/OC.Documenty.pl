import type { Metadata } from 'next';
import { ArrowRight, Check, FileDown, Printer } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { OcCancellationTemplate } from '@/features/oc-cancellation';

export const metadata: Metadata = {
  title: 'Wypowiedzenie umowy OC — szablon dokumentu',
  description: 'Wypełnialny szablon wypowiedzenia OC z podglądem na żywo. Pobierz jako PDF, drukuj lub wyślij e-mailem.',
  alternates: { canonical: '/wypowiedzenie-oc-szablon' },
};

export default function OcCancellationTemplatePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dokumenty', href: '/dokumenty' },
              { label: 'Wypowiedzenie OC — szablon' },
            ]}
          />
        </div>

        <section className="collisionHero">
          <div className="container collisionTop">
            <div>
              <span className="premiumPill">
                <FileDown /> Wypowiedzenie OC
              </span>
              <h1>
                Wypowiedzenie umowy
                <br />
                obowiązkowego ubezpieczenia OC
              </h1>
              <p>
                Wypełnialny szablon dokumentu z czytelnymi polami, trzema opcjami wypowiedzenia (art. 28, art. 28a, art. 31) i
                miejscem na podpis. Pobierz jako PDF, drukuj lub wyślij e-mailem.
              </p>
              <div className="miniBenefits">
                <span>
                  <FileDown /> PDF i wydruk
                </span>
                <span>
                  <Check /> Trzy warianty
                </span>
                <span>
                  <Printer /> Gotowy do wysyłki
                </span>
              </div>
              <a className="premiumButton primary" href="#dokument">
                Pokaż szablon <ArrowRight />
              </a>
            </div>
          </div>
        </section>

        <section className="enterpriseTrust">
          <div className="container enterpriseTrustGrid">
            <div>
              <Check />
              <span>
                <b>Profesjonalny układ</b>
                <small>zgodny z praktyką urzędową</small>
              </span>
            </div>
            <div>
              <Check />
              <span>
                <b>Trzy opcje</b>
                <small>art. 28, art. 28a, art. 31</small>
              </span>
            </div>
            <div>
              <Check />
              <span>
                <b>Gotowy do wydruku</b>
                <small>format A4, pełna kolorystyka</small>
              </span>
            </div>
            <div>
              <Check />
              <span>
                <b>Pola do wypełnienia</b>
                <small>dla danych właściciela i ubezpieczyciela</small>
              </span>
            </div>
          </div>
        </section>

        <section className="enterpriseSection surfaceSection">
          <div className="container collisionInfoGrid">
            <article>
              <span className="premiumPill">Zawartość dokumentu</span>
              <h2>Urzędowy wzór z wymaganymi sekcjami</h2>
              <p>
                Szablon zawiera wszystkie niezbędne pola do prawidłowego wypowiedzenia umowy OC: dane ubezpieczającego, dane
                ubezpieczyciela, numer polisy, dane pojazdu oraz trzy opcje wypowiedzenia zgodnie z ustawą o ubezpieczeniach
                obowiązkowych.
              </p>
            </article>
            <article>
              <span className="premiumPill">Dlaczego warto</span>
              <ul className="collisionWhyList">
                <li>
                  <Check /> <span>czytelny układ zgodny z normami</span>
                </li>
                <li>
                  <Check /> <span>wszystkie wymagane pola i sekcje</span>
                </li>
                <li>
                  <Check /> <span>gotowy do wydruku w kolorze A4</span>
                </li>
                <li>
                  <Check /> <span>możliwość edycji i uzupełnienia przed wysyłką</span>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="enterpriseSection enterpriseToolSection" id="dokument">
          <div className="container" style={{ maxWidth: '100%', padding: '0' }}>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <OcCancellationTemplate data={{}} readOnly={false} showSignature={true} />
            </div>
          </div>
        </section>

        <section className="featureStrip">
          <div className="container">
            {[
              ['Wypełnialny', 'Edytowalne pola formularz'],
              ['PDF', 'Pobierz gotowy dokument'],
              ['Wydruk', 'Format A4 optymalizowany do druku'],
              ['Wysyłka', 'Gotowy do przesłania mailem'],
            ].map(([title, text]) => (
              <div key={String(title)}>
                <FileDown />
                <span>
                  <strong>{String(title)}</strong>
                  <small>{String(text)}</small>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="enterpriseSection surfaceSection">
          <div className="container">
            <div className="enterpriseHeading">
              <span className="premiumPill">Podstawa prawna</span>
              <h2>Trzy warianty wypowiedzenia</h2>
              <p>Szablon uwzględnia wszystkie przypadki i podstawy prawne do wypowiedzenia umowy OC.</p>
            </div>
            <div className="steps threeSteps">
              <article>
                <b>Art. 28</b>
                <FileDown />
                <h3>Koniec okresu ubezpieczenia</h3>
                <p>Wypowiedzenie z ostatnim dniem okresu, na jaki została zawarta polisa.</p>
              </article>
              <article>
                <b>Art. 28a</b>
                <FileDown />
                <h3>Podwójne ubezpieczenie</h3>
                <p>Wypowiedzenie w przypadku zawarcia nowego ubezpieczenia OC na ten sam pojazd.</p>
              </article>
              <article>
                <b>Art. 31</b>
                <FileDown />
                <h3>Zakup pojazdu z polisą</h3>
                <p>Wypowiedzenie przez nowego właściciela pojazdu kupionego z istniejącą polisą.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
