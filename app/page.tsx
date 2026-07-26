import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  Bell,
  Calculator,
  CalendarDays,
  Car,
  CheckCircle2,
  FileCheck2,
  FileText,
  KeyRound,
  RefreshCcw,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  WalletCards,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./oc-mobile.css";

export const metadata: Metadata = {
  title: "Porównaj OC, AC i NNW | OC.Documenty.pl",
  description:
    "Mobilne centrum ubezpieczeń komunikacyjnych: porównanie pakietów OC, AC i NNW, dobór dokumentów, generator PDF, podpis i wysyłka.",
  alternates: { canonical: "https://oc.documenty.pl" },
  openGraph: {
    title: "OC.Documenty.pl — OC, AC i NNW w jednym miejscu",
    description: "Porównaj zakres ochrony, przygotuj dokument i przejdź przez zmianę ubezpieczyciela krok po kroku.",
    url: "https://oc.documenty.pl",
    siteName: "OC.Documenty.pl",
    locale: "pl_PL",
    type: "website",
  },
};

const scenarios = [
  { icon: CalendarDays, title: "Kończy się OC", text: "Porównaj nowe oferty przed automatycznym odnowieniem.", href: "/generator" },
  { icon: TrendingUp, title: "Pakiet podrożał", text: "Sprawdź cenę OC, AC i NNW oraz porównaj zakres ochrony.", href: "/kalkulator-oc" },
  { icon: KeyRound, title: "Kupiłem samochód", text: "Sprawdź polisę zbywcy i dobierz ochronę dla nowego auta.", href: "/generator" },
  { icon: RefreshCcw, title: "Mam dwie polisy", text: "Przygotuj wypowiedzenie automatycznie odnowionej polisy OC.", href: "/generator" },
  { icon: Car, title: "Sprzedałem samochód", text: "Zgłoś zbycie pojazdu i uporządkuj formalności.", href: "/dokumenty" },
  { icon: FileCheck2, title: "Miałem kolizję", text: "Wypełnij oświadczenie i pobierz gotowy PDF.", href: "/oswiadczenie-sprawcy" },
];

const products = [
  {
    icon: Car,
    code: "OC",
    title: "Odpowiedzialność cywilna",
    text: "Obowiązkowa ochrona szkód wyrządzonych innym uczestnikom ruchu.",
    points: ["ciągłość obowiązkowej ochrony", "suma gwarancyjna zgodna z przepisami", "dobór właściwego wypowiedzenia"],
  },
  {
    icon: ShieldCheck,
    code: "AC",
    title: "Autocasco",
    text: "Dobrowolna ochrona własnego pojazdu m.in. po kradzieży, zniszczeniu lub zdarzeniu losowym.",
    points: ["zakres ryzyk i wyłączenia", "udział własny oraz sposób naprawy", "wartość pojazdu i amortyzacja części"],
  },
  {
    icon: FileCheck2,
    code: "NNW",
    title: "Następstwa nieszczęśliwych wypadków",
    text: "Dobrowolna ochrona kierowcy i pasażerów zależna od sumy ubezpieczenia i tabeli świadczeń.",
    points: ["suma ubezpieczenia", "zakres osób objętych ochroną", "tabela świadczeń i wyłączenia"],
  },
];

const documents = [
  { icon: FileText, title: "Wypowiedzenie OC", text: "Dobór podstawy: koniec okresu, podwójne OC lub polisa nabywcy.", href: "/generator" },
  { icon: Send, title: "Zgłoszenie sprzedaży", text: "Przygotuj dokument dla ubezpieczyciela po sprzedaży auta.", href: "/dokumenty" },
  { icon: ShieldCheck, title: "Oświadczenie sprawcy", text: "Mobilny formularz, podpis i czytelny dokument A4.", href: "/oswiadczenie-sprawcy" },
];

export default function Home() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OC.Documenty.pl",
    url: "https://oc.documenty.pl",
    email: "oc@documenty.pl",
  };

  return (
    <>
      <Header />
      <main className="ocHome" id="main-content">
        <section className="ocHero">
          <div className="ocShell ocHeroGrid">
            <div>
              <span className="ocEyebrow"><Sparkles size={16} /> Nowość ubezpieczeniowa</span>
              <h1><span>OC, AC i NNW</span><br />bez stresu.</h1>
              <p className="ocLead">
                Porównaj cenę i zakres całego pakietu, wybierz właściwą ochronę oraz przygotuj potrzebne dokumenty w jednym mobilnym centrum.
              </p>
              <div className="ocActions">
                <a className="ocButton ocButtonPrimary" href="#porownaj">Porównaj pakiety <ArrowRight size={19} /></a>
                <Link className="ocButton ocButtonSecondary" href="/generator"><FileText size={19} /> Przygotuj dokument</Link>
              </div>
              <div className="ocProof">
                <span><CheckCircle2 size={17} /> OC obowiązkowe</span>
                <span><CheckCircle2 size={17} /> AC i NNW dobrowolne</span>
                <span><CheckCircle2 size={17} /> Gotowe na telefonie</span>
              </div>
            </div>

            <div className="ocPhone" aria-label="Podgląd mobilnego centrum OC, AC i NNW">
              <div className="ocPhoneTop">
                <div className="ocMiniLogo"><span className="ocOctagon">OC</span> Documenty.pl</div>
                <Bell size={21} />
              </div>
              <h2>Twój pakiet</h2>
              <p>Sprawdź ochronę przed odnowieniem.</p>
              <div className="ocProductMiniGrid">
                {products.map(({ icon: Icon, code }) => (
                  <a className="ocProductMini" href="#zakres" key={code}>
                    <Icon size={22} />
                    <strong>{code}</strong>
                  </a>
                ))}
              </div>
              <div className="ocScenarioGrid">
                {scenarios.slice(0, 4).map(({ icon: Icon, title, href }) => (
                  <Link className="ocScenario" href={href} key={title}>
                    <Icon size={25} />
                    <strong>{title}</strong>
                  </Link>
                ))}
              </div>
              <a className="ocPromo" href="#porownaj">
                <b>Porównaj cały pakiet</b>
                <small>Cena, zakres, udział własny i suma NNW.</small>
              </a>
              <div className="ocNav" aria-label="Nawigacja aplikacyjna">
                <span>Start</span><span>Polisy</span><span>Dokumenty</span><span>Konto</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ocSection ocSectionWhite" id="zakres">
          <div className="ocShell">
            <div className="ocHeading">
              <small>Trzy warstwy ochrony</small>
              <h2>Nie porównuj wyłącznie ceny OC</h2>
              <p>OC, AC i NNW odpowiadają za inne ryzyka. Portal pokazuje je oddzielnie, a następnie pozwala ocenić cały pakiet.</p>
            </div>
            <div className="ocProductGrid">
              {products.map(({ icon: Icon, code, title, text, points }) => (
                <article className="ocProductCard" key={code}>
                  <div className="ocProductHeader">
                    <span><Icon /></span>
                    <div><b>{code}</b><h3>{title}</h3></div>
                  </div>
                  <p>{text}</p>
                  <ul>{points.map((point) => <li key={point}><CheckCircle2 size={16} /> {point}</li>)}</ul>
                  <Link href="/kalkulator-oc">Porównaj {code} <ArrowRight size={17} /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ocSection">
          <div className="ocShell">
            <div className="ocHeading">
              <small>Zacznij od problemu</small>
              <h2>Portal dopasuje właściwą ścieżkę</h2>
              <p>Najpierw ustalamy sytuację, następnie kierujemy do porównania zakresu, zakupu polisy lub odpowiedniego dokumentu.</p>
            </div>
            <div className="ocCards">
              {scenarios.map(({ icon: Icon, title, text, href }) => (
                <article className="ocCard" key={title}>
                  <span className="ocCardIcon"><Icon /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <Link href={href}>Rozpocznij <ArrowRight size={17} /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ocSection ocSectionWhite" id="porownaj">
          <div className="ocShell ocAffiliate">
            <div className="ocAffiliateMain">
              <span className="ocEyebrow"><BadgePercent size={16} /> Porównanie partnerskie</span>
              <h2>Porównaj OC, AC i NNW jako jeden pakiet.</h2>
              <p>
                Cena to dopiero początek. Sprawdź zakres AC, udział własny, sposób likwidacji szkody, sumę NNW oraz wyłączenia odpowiedzialności.
              </p>
              <div className="ocActions">
                <Link className="ocButton ocButtonPrimary" href="/kalkulator-oc">Przejdź do porównania <ArrowRight size={19} /></Link>
                <Link className="ocButton ocButtonSecondary" href="/generator">Mam już nową polisę</Link>
              </div>
              <small className="ocDisclosure">Sekcja partnerska. Serwis może otrzymać wynagrodzenie za wykonaną kalkulację lub zakup polisy.</small>
            </div>
            <div className="ocSavings">
              <span className="ocSavingBadge">Ocena pakietu</span>
              <h3>Sprawdź więcej niż składkę</h3>
              <div className="ocPackageChecklist">
                <span><CheckCircle2 /> cena OC</span>
                <span><CheckCircle2 /> zakres AC</span>
                <span><CheckCircle2 /> udział własny</span>
                <span><CheckCircle2 /> suma NNW</span>
                <span><CheckCircle2 /> wyłączenia ochrony</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ocSection">
          <div className="ocShell">
            <div className="ocHeading">
              <small>Dokumenty mobilne</small>
              <h2>Wypełnij, podpisz i wyślij</h2>
              <p>Duże pola dotykowe, krótki wizard, podgląd dokumentu A4 oraz sticky CTA zapewniają doświadczenie zbliżone do aplikacji ze sklepu.</p>
            </div>
            <div className="ocCards">
              {documents.map(({ icon: Icon, title, text, href }) => (
                <article className="ocCard" key={title}>
                  <span className="ocCardIcon"><Icon /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <Link href={href}>Otwórz generator <ArrowRight size={17} /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ocSection ocSectionWhite">
          <div className="ocShell">
            <div className="ocHeading">
              <small>Pełny lejek</small>
              <h2>Od analizy pakietu do zakończonej zmiany</h2>
            </div>
            <div className="ocSteps">
              {[
                ["01", "Wykryj potrzebę", "Koniec polisy, podwyżka, nowe auto lub szkoda."],
                ["02", "Porównaj pakiet", "Oceń OC, zakres AC i sumę NNW."],
                ["03", "Kup ochronę", "Zachowaj ciągłość obowiązkowego OC."],
                ["04", "Wygeneruj dokument", "Dobierz właściwy rodzaj wypowiedzenia lub zgłoszenia."],
                ["05", "Podpisz i wyślij", "Zachowaj potwierdzenie przekazania."],
              ].map(([number, title, text]) => (
                <article className="ocStep" key={number}><b>{number}</b><strong>{title}</strong><p>{text}</p></article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <nav className="ocBottomBar" aria-label="Mobilne działania główne">
        <a href="#porownaj"><WalletCards size={18} />&nbsp; Porównaj pakiet</a>
        <Link href="/generator"><Calculator size={18} />&nbsp; Dokument</Link>
      </nav>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
    </>
  );
}
