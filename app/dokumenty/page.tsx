import type { Metadata } from "next";
import { FileText, Search, Sparkles, Download, CheckCircle2, Clock, Shield } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { DocumentsBrowser } from "@/features/documents/DocumentsBrowser";

export const metadata: Metadata = {
  title: "Wzory dokumentów ubezpieczeniowych — PDF i wzory OC",
  description: "Wybierz aktualny wzór dokumentu OC, pobierz PDF i wypełnij go online bez zbędnych kroków.",
  alternates: { canonical: "/dokumenty" },
};

export default function DocumentsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="catalogHero">
          <div className="container">
            <div className="catalogHeroGrid">
              <div className="catalogHeroContent">
                <span className="catalogHeroEyebrow">Profesjonalne wzory do pobrania</span>
                <h1>Wszystkie dokumenty ubezpieczeniowe w jednym miejscu</h1>
                <p className="lead">Przygotowane przez ekspertów, aktualne i gotowe do użycia. Pobierz PDF, wypełnij online lub wydrukuj — bez rejestracji, bez zbędnych kroków.</p>
                <ul className="catalogHeroChecks">
                  <li><span>✓</span> Zawsze aktualne i zweryfikowane</li>
                  <li><span>✓</span> Gotowe do druku w A4</li>
                  <li><span>✓</span> Bez logowania i rejestracji</li>
                  <li><span>✓</span> Całkowicie bezpłatne</li>
                </ul>
              </div>
              <div className="catalogHeroVisual">
                <svg viewBox="0 0 400 350" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <linearGradient id="docBg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#EF4444" opacity="0.12" />
                      <stop offset="100%" stopColor="#EF4444" opacity="0.04" />
                    </linearGradient>
                    <filter id="docShadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.12" floodColor="#000000" />
                    </filter>
                  </defs>
                  <rect width="400" height="350" fill="url(#docBg)" rx="24" />

                  {/* Main document */}
                  <rect x="50" y="30" width="140" height="190" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="2" filter="url(#docShadow)" />
                  <rect x="75" y="55" width="90" height="10" rx="3" fill="#EF4444" />
                  <rect x="75" y="75" width="90" height="5" rx="2" fill="#E5E7EB" />
                  <rect x="75" y="85" width="90" height="5" rx="2" fill="#E5E7EB" />
                  <rect x="75" y="95" width="70" height="5" rx="2" fill="#E5E7EB" />
                  <rect x="75" y="115" width="90" height="4" rx="2" fill="#F3F4F6" />
                  <rect x="75" y="125" width="90" height="4" rx="2" fill="#F3F4F6" />
                  <rect x="75" y="135" width="60" height="4" rx="2" fill="#F3F4F6" />

                  {/* Check mark badge */}
                  <circle cx="280" cy="120" r="70" fill="#EF4444" opacity="0.15" />
                  <circle cx="280" cy="120" r="65" fill="none" stroke="#EF4444" strokeWidth="2" opacity="0.25" />
                  <g transform="translate(280, 120)">
                    <circle r="50" fill="#EF4444" />
                    <path d="M -15 0 L -5 12 L 20 -10" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <Breadcrumbs items={[{ label: "Dokumenty" }]} />
        </div>

        <section className="section">
          <div className="container">
            <div className="catalogIntentGrid">
              <article className="intentCard">
                <span><FileText /></span>
                <strong>Umowy</strong>
                <p>Umowa kupna-sprzedaży, darowizny i cesji praw z polisy.</p>
              </article>
              <article className="intentCard">
                <span><Sparkles /></span>
                <strong>Odstąpienia</strong>
                <p>Dokumenty do rezygnacji z umowy zawartej na odległość lub poza lokalem.</p>
              </article>
              <article className="intentCard">
                <span><Search /></span>
                <strong>Oświadczenia</strong>
                <p>Oświadczenie sprawcy, wspólne oświadczenie i dokumenty po kolizji.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section benefitsCatalog">
          <div className="container">
            <div className="benefitsCatalogHeader">
              <span className="catalogHeroEyebrow">Zalety naszej biblioteki</span>
              <h2>Czemu kierowcy wybierają nasze wzory</h2>
              <p>Szybciej, bezpieczniej i zawsze zgodnie z prawem. Wszystko czego potrzebujesz w jednym miejscu.</p>
            </div>
            <div className="benefitsGrid">
              <div className="benefitItem">
                <span className="icon">✓</span>
                <h3>Prawnie pewne</h3>
                <p>Każdy wzór przygotowany przez ekspertów i zgodny z aktualnymi przepisami. Ubezpieczyciele je akceptują.</p>
              </div>
              <div className="benefitItem">
                <span className="icon">⚡</span>
                <h3>Oszczędzasz czas</h3>
                <p>Gotowy szablon — wystarczy uzupełnić dane. Zamiast czasu na tworzeniu, skupiasz się na istotnych sprawach.</p>
              </div>
              <div className="benefitItem">
                <span className="icon">🔒</span>
                <h3>Twoje dane bezpieczne</h3>
                <p>Przetwarzanie w przeglądarce — Twoje informacje nigdy nie trafiają na nasze serwery. Pełna kontrola u Ciebie.</p>
              </div>
              <div className="benefitItem">
                <span className="icon">📱</span>
                <h3>Dostęp wszędzie</h3>
                <p>Telefon, tablet, komputer. Wypełnij dokument, podpisz i wyślij — bez ograniczeń urządzenia czy systemu.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section catalogTrust">
          <div className="container">
            <div className="trustGrid">
              <div className="trustItem">
                <strong>12+</strong>
                <p>Typów dokumentów</p>
                <small>OC, darowizny, cesje i więcej</small>
              </div>
              <div className="trustItem">
                <strong>100%</strong>
                <p>Bezpłatne</p>
                <small>Bez ukrytych opłat</small>
              </div>
              <div className="trustItem">
                <strong>2024</strong>
                <p>Aktualizowane</p>
                <small>Zawsze zgodne z prawem</small>
              </div>
              <div className="trustItem">
                <strong>5★</strong>
                <p>Rekomendacje</p>
                <small>Od ekspertów OC</small>
              </div>
            </div>
          </div>
        </section>

        <section className="section howToSection">
          <div className="container">
            <div className="howToHeader">
              <span className="catalogHeroEyebrow">Prosty proces</span>
              <h2>Jak używać nasze dokumenty</h2>
              <p>Trzema krokami od wyboru wzoru do gotowego dokumentu PDF</p>
            </div>
            <div className="howToGrid">
              <div className="howToStep">
                <div className="stepNumber">1</div>
                <h3>Wybierz dokument</h3>
                <p>Przejrzyj naszą bibliotekę wzorów i wybierz dokument, który Ci potrzebuje. Każdy wzór jest szczegółowo opisany.</p>
                <ul className="stepChecks">
                  <li><CheckCircle2 size={16} /> Filtruj po kategorii</li>
                  <li><CheckCircle2 size={16} /> Czytaj opisy</li>
                  <li><CheckCircle2 size={16} /> Przejrzyj PDF</li>
                </ul>
              </div>
              <div className="howToStep">
                <div className="stepNumber">2</div>
                <h3>Wypełnij dane</h3>
                <p>Wpisz niezbędne informacje bezpośrednio w naszym generatorze lub pobierz PDF i wypełnij ręcznie albo wydrukuj.</p>
                <ul className="stepChecks">
                  <li><CheckCircle2 size={16} /> Dane pozostają lokalnie</li>
                  <li><CheckCircle2 size={16} /> Bez rejestracji</li>
                  <li><CheckCircle2 size={16} /> Szybko i prosto</li>
                </ul>
              </div>
              <div className="howToStep">
                <div className="stepNumber">3</div>
                <h3>Podpisz i wyślij</h3>
                <p>Dodaj podpis (zdjęcie) i pobierz gotowy dokument PDF. Gotów do wydruku, podpisu i wysłania na adres ubezpieczyciela.</p>
                <ul className="stepChecks">
                  <li><CheckCircle2 size={16} /> Podpis cyfrowy</li>
                  <li><CheckCircle2 size={16} /> Format A4</li>
                  <li><CheckCircle2 size={16} /> Gotów do wysłania</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section faqSection">
          <div className="container">
            <div className="faqHeader">
              <span className="catalogHeroEyebrow">Najczęstsze pytania</span>
              <h2>Pytania i odpowiedzi</h2>
              <p>Rozwiąż wszelkie wątpliwości dotyczące naszych wzorów i usług</p>
            </div>
            <div className="faqGrid">
              <details className="faqItem">
                <summary>
                  <strong>Czy wzory są legalne i aktualne?</strong>
                  <span>+</span>
                </summary>
                <p>Tak. Każdy wzór jest przygotowany przez ekspertów z zakresu ubezpieczeń i regularnie aktualizowany zgodnie z aktualnymi przepisami. Ubezpieczyciele akceptują dokumenty wygenerowane z naszych wzorów.</p>
              </details>
              <details className="faqItem">
                <summary>
                  <strong>Czy moje dane są bezpieczne?</strong>
                  <span>+</span>
                </summary>
                <p>Tak. Wszystkie dane są przetwarzane wyłącznie w Twojej przeglądarce. Nic nie trafia na nasze serwery, więc masz pełną kontrolę nad swoimi informacjami. Nie przechowujemy żadnych danych po zamknięciu strony.</p>
              </details>
              <details className="faqItem">
                <summary>
                  <strong>Czy mogę wypełnić dokument na telefonie?</strong>
                  <span>+</span>
                </summary>
                <p>Tak. Nasze generatory i wzory PDF są w pełni responsywne i działają na wszystkich urządzeniach. Wypełnij dokument na telefonie, tablecie lub komputerze — bez żadnych ograniczeń.</p>
              </details>
              <details className="faqItem">
                <summary>
                  <strong>Czy mogę wydrukować dokument?</strong>
                  <span>+</span>
                </summary>
                <p>Oczywiście. Każdy z naszych wzorów jest przygotowany do wydruku w formacie A4. Możesz wydrukować, podpisać ręcznie i wysłać na tradycyjny adres ubezpieczyciela.</p>
              </details>
              <details className="faqItem">
                <summary>
                  <strong>Czy korzystanie z wzorów jest bezpłatne?</strong>
                  <span>+</span>
                </summary>
                <p>Tak, całkowicie. Wszystkie nasze wzory i generatory są bezpłatne. Nie ma ukrytych opłat ani dodatkowych kosztów za korzystanie z naszych usług.</p>
              </details>
              <details className="faqItem">
                <summary>
                  <strong>Czy mogę zapisać dokument w przyszłości?</strong>
                  <span>+</span>
                </summary>
                <p>Tak. Twoje dane są automatycznie zapisywane w przeglądarce podczas wypełniania formularza. Możesz wróć do niego później i kontynuować edycję bez utraty danych.</p>
              </details>
            </div>
          </div>
        </section>

        <DocumentsBrowser />
      </main>
      <Footer />
    </>
  );
}
