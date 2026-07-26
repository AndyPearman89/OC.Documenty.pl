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
  title: "Porównaj OC i przygotuj wypowiedzenie | OC.Documenty.pl",
  description:
    "Mobilne centrum zmiany ubezpieczenia OC: porównanie ofert, dobór właściwego wypowiedzenia, generator PDF, podpis i wysyłka.",
  alternates: { canonical: "https://oc.documenty.pl" },
  openGraph: {
    title: "OC.Documenty.pl — zmień OC bez stresu",
    description: "Porównaj oferty, przygotuj dokument i przejdź przez zmianę ubezpieczyciela krok po kroku.",
    url: "https://oc.documenty.pl",
    siteName: "OC.Documenty.pl",
    locale: "pl_PL",
    type: "website",
  },
};

const scenarios = [
  { icon: CalendarDays, title: "Kończy się OC", text: "Porównaj nowe oferty przed automatycznym odnowieniem.", href: "/generator" },
  { icon: TrendingUp, title: "OC podrożało", text: "Sprawdź wzrost składki i przejdź do porównania.", href: "/kalkulator-oc" },
  { icon: KeyRound, title: "Kupiłem samochód", text: "Sprawdź polisę zbywcy i wybierz właściwy dokument.", href: "/generator" },
  { icon: RefreshCcw, title: "Mam dwie polisy", text: "Przygotuj wypowiedzenie automatycznie odnowionej polisy.", href: "/generator" },
  { icon: Car, title: "Sprzedałem samochód", text: "Zgłoś zbycie pojazdu i uporządkuj formalności.", href: "/dokumenty" },
  { icon: FileCheck2, title: "Miałem kolizję", text: "Wypełnij oświadczenie i pobierz gotowy PDF.", href: "/oswiadczenie-sprawcy" },
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
              <h1>Zmień <span>OC</span><br />bez stresu.</h1>
              <p className="ocLead">
                Porównaj oferty, wybierz właściwy dokument i przejdź przez cały proces zmiany ubezpieczyciela w jednym, mobilnym centrum.
              </p>
              <div className="ocActions">
                <a className="ocButton ocButtonPrimary" href="#porownaj">Porównaj oferty OC <ArrowRight size={19} /></a>
                <Link className="ocButton ocButtonSecondary" href="/generator"><FileText size={19} /> Przygotuj dokument</Link>
              </div>
              <div className="ocProof">
                <span><CheckCircle2 size={17} /> Bez logowania</span>
                <span><CheckCircle2 size={17} /> Dane lokalnie</span>
                <span><CheckCircle2 size={17} /> Gotowe na telefonie</span>
              </div>
            </div>

            <div className="ocPhone" aria-label="Podgląd mobilnego centrum OC">
              <div className="ocPhoneTop">
                <div className="ocMiniLogo"><span className="ocOctagon">OC</span> Documenty.pl</div>
                <Bell size={21} />
              </div>
              <h2>Twoja sytuacja</h2>
              <p>Wybierz, co chcesz zrobić.</p>
              <div className="ocScenarioGrid">
                {scenarios.slice(0, 4).map(({ icon: Icon, title, href }) => (
                  <Link className="ocScenario" href={href} key={title}>
                    <Icon size={25} />
                    <strong>{title}</strong>
                  </Link>
                ))}
              </div>
              <a className="ocPromo" href="#porownaj">
                <b>Nie przepłacaj za OC</b>
                <small>Sprawdź dostępne oferty przed odnowieniem.</small>
              </a>
              <div className="ocNav" aria-label="Nawigacja aplikacyjna">
                <span>Start</span><span>Dokumenty</span><span>Kalkulatory</span><span>Konto</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ocSection ocSectionWhite">
          <div className="ocShell">
            <div className="ocHeading">
              <small>Zacznij od problemu</small>
              <h2>Portal dopasuje właściwą ścieżkę</h2>
              <p>Nie pokazujemy jednego formularza wszystkim. Najpierw ustalamy sytuację, następnie kierujemy do porównania lub odpowiedniego dokumentu.</p>
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

        <section className="ocSection" id="porownaj">
          <div className="ocShell ocAffiliate">
            <div className="ocAffiliateMain">
              <span className="ocEyebrow"><BadgePercent size={16} /> Porównanie partnerskie</span>
              <h2>Najpierw nowa polisa. Potem wypowiedzenie starej.</h2>
              <p>
                Porównywarka jest częścią procesu, a nie przypadkowym banerem. Użytkownik powinien zapewnić ciągłość ochrony, a dopiero później zakończyć dotychczasową umowę.
              </p>
              <div className="ocActions">
                <Link className="ocButton ocButtonPrimary" href="/kalkulator-oc">Przejdź do porównania <ArrowRight size={19} /></Link>
                <Link className="ocButton ocButtonSecondary" href="/generator">Mam już nową polisę</Link>
              </div>
              <small className="ocDisclosure">Sekcja partnerska. Serwis może otrzymać wynagrodzenie za wykonaną kalkulację lub zakup polisy.</small>
            </div>
            <div className="ocSavings">
              <span className="ocSavingBadge">Przykład analizy składki</span>
              <h3>Porównaj przed odnowieniem</h3>
              <p>Wynik i oszczędność pokażemy dopiero po podaniu rzeczywistych kwot lub otrzymaniu ofert.</p>
              <div className="ocSavingsRow" aria-label="Przykładowe porównanie składek">
                <div className="ocBar ocBarCurrent"><strong>1 248 zł</strong><div /><small>obecna propozycja</small></div>
                <div className="ocBar ocBarNew"><strong>820 zł</strong><div /><small>przykładowa oferta</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="ocSection ocSectionWhite">
          <div className="ocShell">
            <div className="ocHeading">
              <small>Dokumenty mobilne</small>
              <h2>Wypełnij, podpisz i wyślij</h2>
              <p>Duże pola dotykowe, krótki wizard, podgląd dokumentu A4 oraz sticky CTA powinny dawać doświadczenie zbliżone do aplikacji ze sklepu.</p>
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

        <section className="ocSection">
          <div className="ocShell">
            <div className="ocHeading">
              <small>Pełny lejek</small>
              <h2>Od drogiego przedłużenia do zakończonej zmiany</h2>
            </div>
            <div className="ocSteps">
              {[
                ["01", "Wykryj problem", "Podwyżka, koniec polisy lub podwójne OC."],
                ["02", "Porównaj", "Sprawdź aktualne propozycje partnerów."],
                ["03", "Kup nowe OC", "Zachowaj ciągłość obowiązkowej ochrony."],
                ["04", "Wygeneruj dokument", "Dobierz właściwy rodzaj wypowiedzenia."],
                ["05", "Podpisz i wyślij", "Zachowaj potwierdzenie przekazania."],
              ].map(([number, title, text]) => (
                <article className="ocStep" key={number}><b>{number}</b><strong>{title}</strong><p>{text}</p></article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <nav className="ocBottomBar" aria-label="Mobilne działania główne">
        <a href="#porownaj"><WalletCards size={18} />&nbsp; Porównaj OC</a>
        <Link href="/generator"><Calculator size={18} />&nbsp; Dokument</Link>
      </nav>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
    </>
  );
}
