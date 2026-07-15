import type { Metadata } from "next";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Building2,
  Check,
  CheckCircle2,
  Clock3,
  CloudDownload,
  FileCheck2,
  FileText,
  Headphones,
  LockKeyhole,
  Mail,
  PenLine,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroProductVisual, WorkflowVisual } from "@/components/ProductVisuals";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Reveal } from "@/components/Reveal";
import { TrustBadges } from "@/components/TrustBadges";
import { insurerProfiles } from "@/lib/catalog";

const documents = [
  { title: "Wypowiedzenie umowy OC", description: "Zakończ polisę na właściwej podstawie prawnej.", href: "/dokument/wypowiedzenie-oc", tag: "Najpopularniejszy" },
  { title: "Oświadczenie sprawcy kolizji", description: "Dane zdarzenia, podpis i gotowy dokument PDF.", href: "/oswiadczenie-sprawcy", tag: "Po kolizji" },
  { title: "Wspólne oświadczenie", description: "Jeden formularz i podpisy obu uczestników.", href: "/wspolne-oswiadczenie", tag: "Dwie strony" },
  { title: "Puste wzory PDF", description: "Profesjonalne formularze do druku i ręcznego uzupełnienia.", href: "/dokumenty", tag: "Do pobrania" },
  { title: "Umowa kupna-sprzedaży", description: "Gotowy wzór umowy dla pojazdu.", href: "/umowa-kupna-sprzedazy", tag: "Nowy wzór" },
];

const homepageHighlights = [
  "Wzory dokumentów ułożone według realnych intencji użytkowników.",
  "Szybkie przejście od wyboru sprawy do gotowego PDF.",
  "Portal pomaga podjąć właściwy następny krok bez szukania po całym serwisie.",
];

const homepageFaq = [
  ["Czy muszę się logować?", "Nie. Dokumenty i generator są dostępne bez konta, a formularze działają lokalnie w przeglądarce."],
  ["Czy mogę pobrać tylko PDF?", "Tak. Przy każdym wzorze masz możliwość pobrania gotowego pliku PDF lub przejścia do generatora."],
  ["Czy znajdę tu też wzory dla firm?", "Tak. Sekcja ubezpieczycieli prowadzi do dokumentów dla konkretnych towarzystw i ich opisów."],
];

const faq = [
  ["Czy muszę zakładać konto?", "Nie. Generator działa bez rejestracji, a dane formularza pozostają w Twojej przeglądarce."],
  ["Czy mogę podpisać dokument zdjęciem?", "Tak. Dodaj czytelne zdjęcie podpisu w formacie JPG, PNG lub WEBP i sprawdź wymagania ubezpieczyciela."],
  ["Czy dokument można wysłać e-mailem?", "Tak. Serwis przygotuje wiadomość do wskazanego ubezpieczyciela; przed wysłaniem dołącz wygenerowany PDF."],
  ["Czy dostępne są puste wzory?", "Tak. Biblioteka dokumentów zawiera gotowe formularze PDF do samodzielnego wypełnienia."],
];

export const metadata: Metadata = {
  title: "Generator dokumentów OC online | OC.Documenty.pl",
  description:
    "Wypowiedzenie OC, oświadczenie po kolizji i umowy pojazdowe — szybkie wzory z podpisem cyfrowym. Bez logowania, bez konta, bez aplikacji.",
  keywords: "dokumenty OC, generator OC, wypowiedzenie ubezpieczenia, oświadczenie kolizja",
  openGraph: {
    title: "Generator dokumentów OC — szybkie wzory online",
    description: "Przygotuj profesjonalny dokument OC w kilka minut",
    url: "https://oc.documenty.pl",
    siteName: "OC.Documenty.pl",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Generator dokumentów OC",
    description: "Wypowiedzenie OC, wspólne oświadczenie, umowy pojazdowe",
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
  },
};

export default function Home() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OC.Documenty.pl",
    url: "https://oc.documenty.pl",
    email: "oc@documenty.pl",
  };
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Jak przygotować dokument OC online",
    step: [
      "Wybierz dokument i ubezpieczyciela",
      "Uzupełnij dane oraz dodaj podpis",
      "Pobierz PDF i przekaż go ubezpieczycielowi",
    ].map((name, index) => ({ "@type": "HowToStep", position: index + 1, name })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="enterpriseHero">
          <div className="heroMesh" />
          <div className="container enterpriseHeroGrid">
            <div className="enterpriseHeroCopy">
              <span className="premiumPill">
                <Sparkles /> Generator dokumentów OC
              </span>
              <h1>Dokumenty OC i AC <em>gotowe w kilka minut.</em></h1>
              <p>
                Profesjonalne formularze, czytelny podgląd i bezpieczne generowanie PDF bez konta, bez logowania i bez instalowania aplikacji.
              </p>
              <div className="enterpriseHeroActions">
                <Link className="premiumButton primary" href="/generator">
                  Generuj wypowiedzenie <ArrowRight />
                </Link>
                <Link className="premiumButton secondary" href="/ubezpieczyciele">
                  <Building2 /> Lista ubezpieczycieli
                </Link>
              </div>
              <div className="heroProof">
                <span><CheckCircle2 /> Dane przetwarzane lokalnie</span>
                <span><CheckCircle2 /> PDF gotowy do druku</span>
                <span><CheckCircle2 /> Bez logowania</span>
              </div>
            </div>
            <Reveal className="heroReveal">
              <HeroProductVisual />
            </Reveal>
          </div>
          <a className="scrollCue" href="#jak-to-dziala" aria-label="Przejdź do sekcji Jak to działa">
            <span />
          </a>
        </section>

        <section style={{ padding: "60px 20px", background: "#f8fafc" }}>
          <div className="container" style={{ maxWidth: "1200px" }}>
            <TrustBadges variant="desktop" />
          </div>
        </section>

        <section className="enterpriseTrust">
          <div className="container enterpriseTrustGrid">
            <div><ShieldCheck /><span><b>Prywatność</b><small>Dane pozostają na urządzeniu</small></span></div>
            <div><FileCheck2 /><span><b>Czytelne wzory</b><small>Profesjonalny układ A4</small></span></div>
            <div><Clock3 /><span><b>Oszczędność czasu</b><small>Przejrzysty proces krok po kroku</small></span></div>
            <div><CloudDownload /><span><b>Gotowy PDF</b><small>Pobierz, wydrukuj lub udostępnij</small></span></div>
          </div>
        </section>

        <section className="enterpriseSection homepageIntroSection">
          <div className="container homepageIntroGrid">
            <article>
              <span className="premiumPill">Dla kierowców</span>
              <h2>Szybciej znajdziesz właściwy dokument</h2>
              <p>
                Zamiast szukać osobno wzorów, adresów i instrukcji, możesz zacząć od sprawy, którą chcesz załatwić, a potem przejść prosto
                do formularza, PDF lub generatora.
              </p>
            </article>
            <article>
              <span className="premiumPill">Dlaczego to działa</span>
              <p>
                Serwis porządkuje najczęstsze zadania kierowców: wypowiedzenie OC, oświadczenie po kolizji, umowy pojazdowe i reklamacje.
                Dzięki temu użytkownik nie musi zgadywać, od czego zacząć.
              </p>
            </article>
          </div>
          <div className="container homepageHighlights">
            {homepageHighlights.map((item) => (
              <div key={item}>
                <CheckCircle2 />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="enterpriseSection processSection" id="jak-to-dziala">
          <div className="container">
            <Reveal className="enterpriseHeading">
              <span className="premiumPill">Prosty proces</span>
              <h2>Od formularza do gotowego dokumentu</h2>
              <p>Każdy etap pokazuje tylko informacje potrzebne w danym momencie.</p>
            </Reveal>
            <WorkflowVisual />
            <div className="enterpriseSteps">
              {[
                [Building2, "Wybierz firmę", "Znajdź ubezpieczyciela i rozpocznij właściwy formularz."],
                [PenLine, "Uzupełnij i podpisz", "Walidacja prowadzi przez dane właściciela, pojazdu i polisy."],
                [CloudDownload, "Pobierz lub wyślij", "Sprawdź podgląd, pobierz PDF i przekaż dokument."],
              ].map(([Icon, title, text], index) => (
                <Reveal key={String(title)} delay={index * 90}>
                  <article>
                    <b>0{index + 1}</b>
                    <span><Icon /></span>
                    <h3>{String(title)}</h3>
                    <p>{String(text)}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="enterpriseSection surfaceSection">
          <div className="container">
            <Reveal className="enterpriseHeading splitHeading">
              <div>
                <span className="premiumPill">Dokumenty</span>
                <h2>Wybierz sprawę, którą chcesz załatwić</h2>
              </div>
              <Link className="inlineArrow" href="/dokumenty">
                Pełna biblioteka <ArrowRight />
              </Link>
            </Reveal>
            <div className="enterpriseDocGrid">
              {documents.map((document, index) => (
                <Reveal key={document.title} delay={index * 70}>
                  <Link className="enterpriseDocCard" href={document.href}>
                    <span className="docCardIcon"><FileText /></span>
                    <small>{document.tag}</small>
                    <h3>{document.title}</h3>
                    <p>{document.description}</p>
                    <b>Otwórz dokument <ArrowRight /></b>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="enterpriseSection insurersSection">
          <div className="container insurersLayout">
            <Reveal>
              <span className="premiumPill"><Building2 /> Ubezpieczyciele</span>
              <h2>Dokumenty dla największych firm</h2>
              <p>Wybierz ubezpieczyciela, aby przejść do dostępnych formularzy i instrukcji wysyłki.</p>
              <Link className="premiumButton secondary" href="/ubezpieczyciele">
                Zobacz wszystkie firmy <ArrowRight />
              </Link>
            </Reveal>
            <Reveal className="insurerCloud" delay={100}>
              {insurerProfiles.slice(0, 8).map((insurer, index) => (
                <Link href={`/ubezpieczyciele/${insurer.slug}`} key={insurer.slug} style={{ "--logo-index": index } as CSSProperties}>
                  <span>{insurer.name.slice(0, 3)}</span>
                  <b>{insurer.name}</b>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="enterpriseSection benefitsSection">
          <div className="container benefitsLayout">
            <Reveal className="benefitVisual">
              <svg viewBox="0 0 800 600" className="securityVisual" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="orbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B6B" />
                    <stop offset="50%" stopColor="#EF4444" />
                    <stop offset="100%" stopColor="#DC2626" />
                  </linearGradient>
                  <radialGradient id="orbDepth" cx="40%" cy="40%" r="70%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0.15" />
                  </radialGradient>
                  <filter id="orbShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="12" stdDeviation="20" floodOpacity="0.15" floodColor="#000000" />
                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.08" floodColor="#000000" />
                  </filter>
                </defs>
                <rect width="800" height="600" fill="#FFFFFF" />
                <g id="orbGroup" filter="url(#orbShadow)">
                  <circle cx="400" cy="260" r="180" fill="url(#orbGradient)" opacity="1" />
                  <circle cx="400" cy="260" r="180" fill="url(#orbDepth)" />
                  <circle cx="400" cy="260" r="175" fill="none" stroke="#991B1B" strokeWidth="2" opacity="0.08" />
                  <circle cx="340" cy="220" r="60" fill="#FFFFFF" opacity="0.15" />
                  <circle cx="400" cy="260" r="188" fill="none" stroke="#F0F0F0" strokeWidth="3" opacity="0.8" />
                </g>
                <g id="lockIcon">
                  <path d="M 370 260 Q 370 210 400 200 Q 430 210 430 260" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="360" y="270" width="80" height="70" rx="6" ry="6" fill="white" stroke="none" />
                  <circle cx="400" cy="310" r="8" fill="#EF4444" />
                  <circle cx="400" cy="310" r="6" fill="none" stroke="#EF4444" strokeWidth="1" opacity="0.4" />
                </g>
                <g id="chipLeft">
                  <rect x="60" y="55" width="140" height="50" rx="25" ry="25" fill="white" stroke="#1F2937" strokeWidth="2.5" />
                  <g id="checkIcon" transform="translate(85, 80)">
                    <line x1="-8" y1="0" x2="-2" y2="6" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
                    <line x1="-2" y1="6" x2="8" y2="-6" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
                  </g>
                  <text x="120" y="87" fontFamily="Segoe UI, system-ui, sans-serif" fontSize="16" fontWeight="500" fill="#1F2937" textAnchor="middle" dominantBaseline="middle">Bez konta</text>
                </g>
                <g id="chipRight">
                  <rect x="600" y="55" width="140" height="50" rx="25" ry="25" fill="white" stroke="#1F2937" strokeWidth="2.5" />
                  <g id="boltIcon" transform="translate(625, 80)">
                    <path d="M 0 -8 L 4 0 L -2 2 L 6 10 L -8 0 L 0 -2 Z" fill="#EF4444" stroke="none" />
                  </g>
                  <text x="680" y="87" fontFamily="Segoe UI, system-ui, sans-serif" fontSize="16" fontWeight="500" fill="#1F2937" textAnchor="middle" dominantBaseline="middle">Szybki PDF</text>
                </g>
                <g id="textSection">
                  <text x="400" y="480" fontFamily="Segoe UI, system-ui, -apple-system, sans-serif" fontSize="28" fontWeight="600" fill="#1F2937" textAnchor="middle" letterSpacing="-0.3">Dane formularza</text>
                  <text x="400" y="525" fontFamily="Segoe UI, system-ui, -apple-system, sans-serif" fontSize="16" fontWeight="400" fill="#9CA3AF" textAnchor="middle" letterSpacing="0.1">przetwarzane lokalnie</text>
                </g>
                <g id="spacingAccent" opacity="0.35">
                  <line x1="50" y1="520" x2="750" y2="520" stroke="#E5E7EB" strokeWidth="1" />
                  <line x1="50" y1="550" x2="750" y2="550" stroke="#E5E7EB" strokeWidth="1" />
                </g>
              </svg>
            </Reveal>
            <div>
              <Reveal>
                <span className="premiumPill">Dlaczego warto</span>
                <h2>Profesjonalne narzędzie bez zbędnej złożoności</h2>
              </Reveal>
              <div className="benefitList">
                {[
                  [ShieldCheck, "Prywatność od początku", "Formularze nie są automatycznie przesyłane na serwer."],
                  [Check, "Walidacja krok po kroku", "Czytelne komunikaty pomagają uniknąć pustych pól."],
                  [Mail, "Gotowe do przekazania", "Pobierz PDF, wydrukuj lub udostępnij go z telefonu."],
                  [Headphones, "Pomoc po drodze", "FAQ i kontakt są dostępne z każdego miejsca serwisu."],
                ].map(([Icon, title, text]) => (
                  <div key={String(title)}>
                    <span><Icon /></span>
                    <div>
                      <h3>{String(title)}</h3>
                      <p>{String(text)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="enterpriseSection guidesSection">
          <div className="container">
            <Reveal className="enterpriseHeading splitHeading">
              <div>
                <span className="premiumPill"><BookOpen /> Wiedza</span>
                <h2>Przydatne przed wysłaniem dokumentu</h2>
              </div>
              <Link className="inlineArrow" href="/faq">
                Centrum pomocy <ArrowRight />
              </Link>
            </Reveal>
            <div className="guideGrid">
              <article>
                <small>Wypowiedzenie OC</small>
                <h3>Kiedy zastosować art. 28, 28a lub 31?</h3>
                <p>W generatorze znajdziesz krótkie objaśnienia każdej podstawy wypowiedzenia.</p>
                <Link href="/generator">Przejdź do generatora <ArrowRight /></Link>
              </article>
              <article>
                <small>Po kolizji</small>
                <h3>Jak przygotować wspólne oświadczenie?</h3>
                <p>Zbierz dane obu stron, pojazdów, polis oraz czytelne podpisy.</p>
                <Link href="/wspolne-oswiadczenie">Otwórz formularz <ArrowRight /></Link>
              </article>
              <article>
                <small>Bezpieczeństwo</small>
                <h3>Co dzieje się z danymi formularza?</h3>
                <p>Dane są przetwarzane lokalnie i znikają po zamknięciu sesji.</p>
                <Link href="/polityka-prywatnosci">Polityka prywatności <ArrowRight /></Link>
              </article>
            </div>
          </div>
        </section>

        <section className="enterpriseSection homepageDocsSection">
          <div className="container">
            <Reveal className="enterpriseHeading splitHeading">
              <div>
                <span className="premiumPill">Co znajdziesz</span>
                <h2>Dokumenty, które rozwiązują najczęstsze sprawy</h2>
              </div>
              <Link className="inlineArrow" href="/dokumenty">
                Zobacz katalog <ArrowRight />
              </Link>
            </Reveal>
            <div className="homepageDocStrip">
              {documents.map((document) => (
                <article key={document.title}>
                  <small>{document.tag}</small>
                  <h3>{document.title}</h3>
                  <p>{document.description}</p>
                  <Link href={document.href}>
                    Otwórz <ArrowRight />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="enterpriseSection faqEnterprise">
          <div className="container faqEnterpriseGrid">
            <Reveal>
              <span className="premiumPill">FAQ</span>
              <h2>Najczęściej zadawane pytania</h2>
              <p>Konkretnie i bez prawniczego żargonu.</p>
              <Link className="premiumButton secondary" href="/faq">
                Wszystkie odpowiedzi
              </Link>
            </Reveal>
            <div>{faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
          </div>
        </section>

        <section className="enterpriseSection insuranceKnowledgeSection">
          <div className="container">
            <Reveal className="enterpriseHeading splitHeading">
              <div>
                <span className="premiumPill">Ubezpieczenie OC</span>
                <h2>Co warto wiedzieć przed wysłaniem dokumentu</h2>
              </div>
              <Link className="inlineArrow" href="/ubezpieczenie-oc">
                Pełny przewodnik <ArrowRight />
              </Link>
            </Reveal>
            <div className="insuranceGrid">
              <article>
                <h3>Limity ubezpieczenia OC</h3>
                <p>
                  <strong>Minimalna granica 1 000 000 EUR</strong> od szkód na rzeczach osobistych i 6 000 000 EUR od obrażeń ciała.
                  Polisa chroni poszkodowanych w wypadku, gdzie ty jesteś sprawcą.
                </p>
              </article>
              <article>
                <h3>Ochrona MTPL w UE</h3>
                <p>
                  Polska polisa OC jest ważna w całej Unii Europejskiej. Przy wyjezdzie zagranicę zabiór za sobą dowód polisy lub Zielony Kartę.
                </p>
              </article>
              <article>
                <h3>Kiedy zawiadomić ubezpieczyciela</h3>
                <p>
                  O wypadku lub kolizji zawiadom ubezpieczyciela <strong>w ciągu 5 dni roboczych</strong>. Pospiesz się z oświadczeniem,
                  aby nie stracić prawa do odszkodowania.
                </p>
              </article>
              <article>
                <h3>Okres czekania na odpowiedź</h3>
                <p>
                  Ubezpieczyciel ma <strong>30 dni na odpowiedź</strong> od momentu otrzymania pełnej dokumentacji.
                  W złożonych sprawach termin może być przedłużony.
                </p>
              </article>
              <article>
                <h3>Wspólne oświadczenie vs. osobne</h3>
                <p>
                  <strong>Wspólne oświadczenie</strong> to szybsza droga, która jednak wymaga zgody obu stron na ustalony przebieg wypadku.
                  Osobne oświadczenia dają więcej czasu na refleksję.
                </p>
              </article>
              <article>
                <h3>Ekspertyza pojazdu</h3>
                <p>
                  Ubezpieczyciel może zamówić własną ekspertyzę obrażeń pojazdu. Zawsze masz prawo do drugiej opinii od rzeczoznawcy.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="enterpriseSection accidentGuideSection">
          <div className="container">
            <Reveal className="enterpriseHeading splitHeading">
              <div>
                <span className="premiumPill">Po zdarzeniu</span>
                <h2>Co robić bezpośrednio po kolizji lub wypadku</h2>
              </div>
              <Link className="inlineArrow" href="/poradnik-po-kolizji">
                Pełna instrukcja <ArrowRight />
              </Link>
            </Reveal>
            <div className="accidentSteps">
              <article>
                <span className="stepNumber">1</span>
                <h3>Zabezpiecz pojazd i bezpieczeństwo</h3>
                <p>
                  Włącz światła awaryjne, postaw trójkąt ostrzegawczy w odległości 30-100 metrów.
                  Jeśli jest niebezpiecznie, opuść pojazd i stań w bezpiecznym miejscu.
                </p>
              </article>
              <article>
                <span className="stepNumber">2</span>
                <h3>Wezwij policję (jeśli wymagane)</h3>
                <p>
                  Obrażenia ciała, duże zniszczenia, porzucony pojazd lub osoba nieubezpieczona to powód do wezwania policji.
                  Zachowaj numer zawiadomienia.
                </p>
              </article>
              <article>
                <span className="stepNumber">3</span>
                <h3>Zbierz dane drugiej strony</h3>
                <p>
                  Imiona, nazwiska, adresy, numery dowodów, numery rejestracyjne pojazdów, dane ubezpieczyciela i polisy.
                  Zrób zdjęcia dowodów tożsamości i dokumentów ubezpieczenia.
                </p>
              </article>
              <article>
                <span className="stepNumber">4</span>
                <h3>Dokumentuj scenę</h3>
                <p>
                  Zrób zdjęcia ogólnych widoków miejsca zdarzenia, pojazdów z różnych kątów, obrażeń pojazdu i elementów drogi.
                  Notatka o warunkach pogodowych i stanie drogi może być ważna.
                </p>
              </article>
              <article>
                <span className="stepNumber">5</span>
                <h3>Zaproponuj wspólne oświadczenie</h3>
                <p>
                  Jeśli druga strona się zgadza, wspólne oświadczenie przyspiesza sprawę.
                  Możesz wypełnić je tutaj i wydrukować na miejscu lub podpisać cyfrowo.
                </p>
              </article>
              <article>
                <span className="stepNumber">6</span>
                <h3>Zawiadom ubezpieczyciela</h3>
                <p>
                  Zrób to w ciągu <strong>5 dni roboczych</strong>. Wyślij dokumenty pocztą lub elektronicznie.
                  Zachowaj potwierdzenie dostarczenia.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="enterpriseSection homepageFaqSection">
          <div className="container">
            <Reveal className="enterpriseHeading">
              <span className="premiumPill">Dodatkowe pytania</span>
              <h2>Najczęstsze pytania o korzystanie z portalu</h2>
              <p>Krótka odpowiedź, która pomaga szybciej przejść do działania.</p>
            </Reveal>
            <div className="homepageFaqGrid">
              {homepageFaq.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    {question}
                    <span>+</span>
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <NewsletterSignup
          variant="sales"
          title="Newsletter dla kierowców"
          description="Krótko, konkretnie i bez spamu — raz w tygodniu dostaniesz gotowe wzory, zmiany przepisów i rzeczy, które realnie pomagają."
        />

        <section className="enterpriseFinalCta">
          <div className="container">
            <div>
              <span className="premiumPill light">
                <Sparkles /> Zacznij teraz
              </span>
              <h2>Przygotuj dokument OC <br /> bez stresu i bez konta.</h2>
              <p>Wybierz ubezpieczyciela, uzupełnij dane i pobierz gotowy dokument PDF.</p>
            </div>
            <Link className="premiumButton white" href="/generator">
              Generuj dokument <ArrowRight />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([organization, howTo, faqSchema]) }} />
    </>
  );
}
