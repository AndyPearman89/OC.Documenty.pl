import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock3,
  Download,
  FileCheck2,
  FilePenLine,
  FileText,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Upload,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CollisionForm } from "@/features/collision/CollisionForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Oświadczenie sprawcy kolizji — generator PDF",
  description:
    "Wypełnij oświadczenie sprawcy kolizji online, pobierz PDF i przygotuj dokument do przekazania ubezpieczycielowi.",
  alternates: { canonical: "/oswiadczenie-sprawcy" },
};

const documents = [
  {
    title: "Oświadczenie sprawcy kolizji",
    text: "Zbierz dane uczestników i przebieg zdarzenia.",
    href: "/oswiadczenie-sprawcy",
  },
  {
    title: "Wypowiedzenie OC",
    text: "Przygotuj wypowiedzenie umowy OC.",
    href: "/dokument/wypowiedzenie-oc",
  },
  {
    title: "Wspólne oświadczenie",
    text: "Uzupełnij dane obu uczestników kolizji.",
    href: "/dokument/wspolne-oswiadczenie",
  },
  {
    title: "Umowa kupna-sprzedaży",
    text: "Przygotuj umowę sprzedaży pojazdu.",
    href: "/umowa-kupna-sprzedazy",
  },
  {
    title: "Zmiana ubezpieczyciela OC",
    text: "Uporządkuj przejście do nowego towarzystwa.",
    href: "/dokument/zmiana-ubezpieczyciela",
  },
  {
    title: "Wniosek o zwrot składki",
    text: "Przygotuj wniosek o rozliczenie składki.",
    href: "/dokument/zwrot-skladki-oc",
  },
] as const;

const steps = [
  [FilePenLine, "Wypełnij", "formularz online"],
  [Download, "Pobierz PDF", "gotowy dokument"],
  [FileCheck2, "Podpisz", "ręcznie lub online"],
  [Upload, "Przekaż", "samodzielnie do ubezpieczyciela"],
] as const;

export default function CollisionPage() {
  return (
    <>
      <Header />
      <main id="main-content" className={styles.page}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <div className={styles.hotPill}>Generator dokumentu OC</div>
              <h1>
                Oświadczenie
                <br />
                <span>sprawcy kolizji</span>
              </h1>
              <p>
                Wypełnij formularz online, pobierz dokument PDF, podpisz go i przekaż samodzielnie do ubezpieczyciela.
              </p>
              <div className={styles.trustRow}>
                <span>
                  <ShieldCheck /> Walidacja wymaganych pól
                </span>
                <span>
                  <LockKeyhole /> Bez obowiązkowej rejestracji
                </span>
                <span>
                  <FileCheck2 /> Dokument PDF A4
                </span>
              </div>
              <div className={styles.heroActions}>
                <a href="#formularz" className={styles.primaryCta}>
                  <FilePenLine /> Wypełnij oświadczenie <ArrowRight />
                </a>
                <a href="#podglad" className={styles.secondaryCta}>
                  <Download /> Zobacz podgląd dokumentu
                </a>
              </div>
            </div>
            <div id="podglad" className={styles.visual}>
              <div className={styles.crashGlow} />
              <DocumentMock />
            </div>
          </div>
        </section>

        <section className={`container ${styles.processCard}`}>
          <div className={styles.processIntro}>
            <strong>
              Prosty proces —
              <br />od wypełnienia do przekazania
            </strong>
            <i />
          </div>
          <div className={styles.processSteps}>
            {steps.map(([Icon, title, text], index) => (
              <div className={styles.processStep} key={title}>
                <span>
                  <Icon />
                </span>
                <b>{title}</b>
                <small>{text}</small>
                {index < steps.length - 1 && <ArrowRight className={styles.stepArrow} />}
              </div>
            ))}
          </div>
        </section>

        <section className={`container ${styles.popular}`}>
          <div className={styles.sectionHeader}>
            <h2>Najpopularniejsze dokumenty OC</h2>
            <Link href="/dokumenty">
              Zobacz wszystkie dokumenty OC <ArrowRight />
            </Link>
          </div>
          <div className={styles.documentGrid}>
            {documents.map(({ title, text, href }, index) => (
              <Link
                href={href}
                className={`${styles.documentCard} ${index === 0 ? styles.featured : ""}`}
                key={title}
              >
                {index === 0 && <em>Polecany</em>}
                <span>
                  <FileText />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
                <b>
                  Otwórz <ArrowRight />
                </b>
              </Link>
            ))}
          </div>
        </section>

        <section className={`container ${styles.business}`}>
          <div>
            <small>Dla firm</small>
            <h2>
              OC.Documenty.pl <span>Business</span>
            </h2>
            <p>Twórz dokumenty z własnym brandingiem i zarządzaj nimi w zespole.</p>
            <ul>
              {[
                "Własne logo, kolory i pieczęć",
                "Szablony dla pracowników",
                "Historia i numeracja dokumentów",
                "Eksport PDF i DOCX bez oznaczeń",
                "Wspólna książka kontrahentów",
                "Integracja z e-podpisem",
              ].map((item) => (
                <li key={item}>
                  <Check /> {item}
                </li>
              ))}
            </ul>
            <Link href="/dla-firm" className={styles.primaryCta}>
              Poznaj wersję Business <ArrowRight />
            </Link>
          </div>
          <div className={styles.dashboardMock}>
            <div className={styles.dashSidebar} />
            <div className={styles.dashContent}>
              <b>Moje dokumenty</b>
              <i />
              <i />
              <i />
              <i />
            </div>
            <DocumentMock compact />
          </div>
        </section>

        <section className={`container ${styles.metrics}`} aria-label="Najważniejsze cechy generatora">
          <div>
            <FileText />
            <b>PDF A4</b>
            <small>czytelny format dokumentu</small>
          </div>
          <div>
            <FileCheck2 />
            <b>Walidacja</b>
            <small>kontrola wymaganych pól</small>
          </div>
          <div>
            <Clock3 />
            <b>Krok po kroku</b>
            <small>logiczna kolejność formularza</small>
          </div>
          <div>
            <ShieldCheck />
            <b>Podgląd</b>
            <small>sprawdzenie przed pobraniem</small>
          </div>
          <div>
            <LockKeyhole />
            <b>Prywatność</b>
            <small>bez obowiązkowego konta</small>
          </div>
        </section>

        <section id="formularz" className={styles.generatorSection}>
          <div className="container">
            <div className={styles.generatorHeading}>
              <small>Generator dokumentu</small>
              <h2>Wypełnij oświadczenie online</h2>
              <p>Przed pobraniem sprawdź wszystkie dane w podglądzie dokumentu.</p>
            </div>
            <CollisionForm />
          </div>
        </section>

        <section className={`container ${styles.contactStrip}`}>
          <div>
            <ShieldCheck />
            <span>
              <b>Masz pytania?</b>
              <small>Sprawdź instrukcję lub skontaktuj się z nami.</small>
            </span>
          </div>
          <div>
            <Mail />
            <span>
              <small>Napisz do nas</small>
              <b>oc@documenty.pl</b>
            </span>
          </div>
          <div>
            <Clock3 />
            <span>
              <small>Generator online</small>
              <b>Dostępny przez całą dobę</b>
            </span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function DocumentMock({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`${styles.documentMock} ${compact ? styles.compactMock : ""}`}>
      <header>
        <ShieldCheck />
        <b>OC.Documenty.pl</b>
        <em>Podgląd dokumentu</em>
      </header>
      <h3>OŚWIADCZENIE SPRAWCY KOLIZJI</h3>
      <p>dla potrzeb ubezpieczyciela</p>
      {["1. DANE ZDARZENIA", "2. DANE POSZKODOWANEGO", "3. DANE SPRAWCY", "4. OŚWIADCZENIE O ZDARZENIU"].map(
        (title, index) => (
          <section key={title}>
            <b>{title}</b>
            {Array.from({ length: index === 3 ? 4 : 3 }).map((_, lineIndex) => (
              <i key={lineIndex} />
            ))}
          </section>
        ),
      )}
      <footer>
        <span>Data: DD.MM.RRRR</span>
        <span>Podpis sprawcy</span>
      </footer>
    </div>
  );
}
