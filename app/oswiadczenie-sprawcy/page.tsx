import type { Metadata } from "next";
import { ArrowRight, Check, CheckCircle2, Clock3, CloudDownload, FileText, PenLine, ShieldCheck, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CollisionForm } from "@/features/collision/CollisionForm";

export const metadata: Metadata = {
  title: "Oświadczenie sprawcy kolizji",
  description: "Wypełnij oświadczenie sprawcy kolizji, dodaj podpis i pobierz gotowy dokument PDF.",
  alternates: { canonical: "/oswiadczenie-sprawcy" },
};

const whyItMatters = [
  "czytelny opis zdarzenia dla ubezpieczyciela",
  "miejsce na dane uczestników i pojazdów",
  "podpis zdjęciem i gotowy PDF A4",
];

const processSteps = [
  {
    title: "Wypełnij formularz",
    text: "Podaj dane sprawcy, pojazdu oraz przebieg zdarzenia w logicznej kolejności.",
  },
  {
    title: "Sprawdź podgląd",
    text: "Zobacz, jak dokument wygląda przed pobraniem i upewnij się, że wszystko jest czytelne.",
  },
  {
    title: "Dodaj podpis",
    text: "Wstaw zdjęcie podpisu, aby dokument był gotowy do przekazania ubezpieczycielowi.",
  },
  {
    title: "Pobierz lub wyślij",
    text: "Zapisz PDF, wydrukuj go albo przekaż dalej bez zbędnych kroków.",
  },
];

export default function CollisionPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <div className="container">
          <Breadcrumbs items={[{ label: "Dokumenty", href: "/dokumenty" }, { label: "Oświadczenie sprawcy kolizji" }]} />
        </div>

        <section className="collisionHero">
          <div className="container collisionTop">
            <div>
              <span className="premiumPill">
                <Sparkles /> Formularz po kolizji
              </span>
              <h1>Oświadczenie<br />sprawcy kolizji</h1>
              <p>
                Wypełnij dane uczestników, pojazdów i zdarzenia. Dodaj podpis zdjęciem i pobierz czytelny dokument PDF gotowy do
                przekazania ubezpieczycielowi.
              </p>
              <div className="miniBenefits">
                <span><FileText /> Czytelny formularz</span>
                <span><Clock3 /> Kilka minut</span>
                <span><ShieldCheck /> Dane lokalne</span>
                <span><CloudDownload /> PDF A4</span>
              </div>
              <a className="premiumButton primary" href="#formularz">
                Wypełnij oświadczenie <ArrowRight />
              </a>
            </div>
            <DocumentPreview compact />
          </div>
        </section>

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
                <small>bez zapisu na serwerze</small>
              </span>
            </div>
            <div>
              <PenLine />
              <span>
                <b>Podpis zdjęciem</b>
                <small>JPG, PNG lub WEBP</small>
              </span>
            </div>
            <div>
              <CloudDownload />
              <span>
                <b>PDF A4</b>
                <small>do pobrania i druku</small>
              </span>
            </div>
          </div>
        </section>

        <section className="enterpriseSection surfaceSection">
          <div className="container collisionInfoGrid">
            <article>
              <span className="premiumPill">Co zawiera dokument</span>
              <h2>Urzędowy układ i jasne pola do wypełnienia</h2>
              <p>
                Dokument został przygotowany tak, aby prowadził użytkownika po kolei przez wszystkie kluczowe elementy: dane strony,
                dane pojazdu, opis zdarzenia i podpis. Dzięki temu łatwiej przekazać komplet informacji do likwidacji szkody.
              </p>
            </article>
            <article>
              <span className="premiumPill">Dlaczego warto</span>
              <ul className="collisionWhyList">
                {whyItMatters.map((item) => (
                  <li key={item}>
                    <Check /> <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="enterpriseSection enterpriseToolSection" id="formularz">
          <div className="container collisionWorkspace">
            <div>
              <span className="premiumPill">Podgląd</span>
              <h2>Dokument na żywo</h2>
              <DocumentPreview />
            </div>
            <div>
              <span className="premiumPill">Generator</span>
              <h2>Wypełnij online</h2>
              <CollisionForm />
            </div>
          </div>
        </section>

        <section className="featureStrip">
          <div className="container">
            {[
              [Clock3, "Szybkie wypełnianie", "Prowadzenie krok po kroku"],
              [FileText, "Dostępny online", "Komputer i telefon"],
              [CloudDownload, "Pobierz PDF", "Gotowy do sprawdzenia"],
              [ShieldCheck, "Lokalne dane", "Bez automatycznej wysyłki"],
            ].map(([Icon, title, text]) => (
              <div key={String(title)}>
                <Icon />
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
              <span className="premiumPill">Proces</span>
              <h2>Jak to działa?</h2>
              <p>Wypełnij oświadczenie w czterech prostych krokach.</p>
            </div>
            <div className="steps fourSteps">
              {processSteps.map((step, index) => (
                <article key={step.title}>
                  <b>{index + 1}</b>
                  {index === 3 ? <Check /> : <FileText />}
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function DocumentPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`paperPreview ${compact ? "compact" : ""}`}>
      <header>
        OC.<strong>Documenty.pl</strong>
      </header>
      <h3>OŚWIADCZENIE SPRAWCY KOLIZJI DROGOWEJ</h3>
      <div className="previewMeta">
        <span>Aktualny wzór 2026</span>
        <span>PDF i DOCX</span>
        <span>Bezpieczne dane</span>
      </div>
      {["1. DANE SPRAWCY KOLIZJI", "2. DANE POJAZDU SPRAWCY", "3. DANE ZDARZENIA"].map((section) => (
        <div className="paperSection" key={section}>
          <b>{section}</b>
          <i />
          <i />
          <i />
        </div>
      ))}
    </div>
  );
}
