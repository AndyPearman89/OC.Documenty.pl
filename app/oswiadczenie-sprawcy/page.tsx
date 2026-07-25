import type { Metadata } from "next";
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
  Star,
  Upload,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CollisionForm } from "@/features/collision/CollisionForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Oświadczenie sprawcy kolizji — generator PDF",
  description: "Wypełnij oświadczenie sprawcy kolizji online, pobierz PDF, podpisz i wyślij do ubezpieczyciela.",
  alternates: { canonical: "/oswiadczenie-sprawcy" },
};

const documents = [
  ["Oświadczenie sprawcy kolizji", "Zgłoś szkodę bez błędów.", "/oswiadczenie-sprawcy"],
  ["Wypowiedzenie OC", "Wypowiedz polisę OC online.", "/wypowiedzenie-oc"],
  ["Zgłoszenie szkody OC", "Przekaż komplet danych ubezpieczycielowi.", "/zgloszenie-szkody"],
  ["Kalkulator OC/AC", "Porównaj warianty ubezpieczenia.", "/kalkulator-oc"],
  ["Pełnomocnictwo OC", "Upoważnij inną osobę do działania.", "/pelnomocnictwo"],
  ["Wniosek o zwrot składki", "Odzyskaj niewykorzystaną składkę.", "/wniosek-o-zwrot-skladki"],
];

const steps = [
  [FilePenLine, "Wypełnij", "formularz online"],
  [Download, "Pobierz PDF", "gotowy dokument"],
  [FileCheck2, "Podpisz", "ręcznie lub online"],
  [Upload, "Wgraj lub wyślij", "do ubezpieczyciela"],
  [ShieldCheck, "Otrzymaj", "potwierdzenie"],
  [Clock3, "Załatwione", "bez wychodzenia z domu"],
] as const;

export default function CollisionPage() {
  return (
    <>
      <Header />
      <main id="main-content" className={styles.page}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <div className={styles.hotPill}>Najpopularniejszy dokument w kategorii OC</div>
              <h1>Oświadczenie<br /><span>sprawcy kolizji</span></h1>
              <p>Wypełnij online, pobierz PDF, podpisz i wyślij do ubezpieczyciela w kilka minut.</p>
              <div className={styles.trustRow}>
                <span><ShieldCheck /> Zgodne z wymaganiami</span>
                <span><LockKeyhole /> Bezpieczne i bez rejestracji</span>
                <span><FileCheck2 /> Aktualny wzór</span>
              </div>
              <div className={styles.heroActions}>
                <a href="#formularz" className={styles.primaryCta}><FilePenLine /> Wypełnij oświadczenie <ArrowRight /></a>
                <a href="#podglad" className={styles.secondaryCta}><Download /> Zobacz przykładowy PDF</a>
              </div>
              <div className={styles.rating}>
                <div className={styles.avatars}><i /><i /><i /><i /></div>
                <div><div>{[1,2,3,4,5].map((n)=><Star key={n} fill="currentColor" />)}</div><small>4,9/5 na podstawie opinii użytkowników</small></div>
              </div>
            </div>
            <div id="podglad" className={styles.visual}>
              <div className={styles.crashGlow} />
              <DocumentMock />
            </div>
          </div>
        </section>

        <section className={`container ${styles.processCard}`}>
          <div className={styles.processIntro}><strong>Prosty proces —<br />od wypełnienia do wysyłki</strong><i /></div>
          <div className={styles.processSteps}>
            {steps.map(([Icon,title,text], index) => (
              <div className={styles.processStep} key={title}>
                <span><Icon /></span><b>{title}</b><small>{text}</small>{index < steps.length - 1 && <ArrowRight className={styles.stepArrow} />}
              </div>
            ))}
          </div>
        </section>

        <section className={`container ${styles.popular}`}>
          <div className={styles.sectionHeader}><h2>Najpopularniejsze dokumenty OC</h2><a href="/dokumenty">Zobacz wszystkie dokumenty OC <ArrowRight /></a></div>
          <div className={styles.documentGrid}>
            {documents.map(([title,text,href], index) => (
              <a href={href} className={`${styles.documentCard} ${index === 0 ? styles.featured : ""}`} key={title}>
                {index === 0 && <em>Najpopularniejszy</em>}
                <span><FileText /></span><h3>{title}</h3><p>{text}</p><b>{index === 3 ? "Porównaj" : "Wypełnij"} <ArrowRight /></b>
              </a>
            ))}
          </div>
        </section>

        <section className={`container ${styles.business}`}>
          <div>
            <small>Dla firm</small><h2>OC.Documenty.pl <span>Business</span></h2>
            <p>Twórz dokumenty z własnym brandingiem i zarządzaj nimi w zespole.</p>
            <ul>
              {["Własne logo, kolory i pieczęć","Szablony dla pracowników","Historia i numeracja dokumentów","Eksport PDF i DOCX bez oznaczeń","Wspólna książka kontrahentów","Integracja z e-podpisem"].map(item=><li key={item}><Check />{item}</li>)}
            </ul>
            <a href="/dla-firm" className={styles.primaryCta}>Poznaj wersję Business <ArrowRight /></a>
          </div>
          <div className={styles.dashboardMock}><div className={styles.dashSidebar} /><div className={styles.dashContent}><b>Moje dokumenty</b><i /><i /><i /><i /></div><DocumentMock compact /></div>
        </section>

        <section className={`container ${styles.metrics}`}>
          <div><FileText /><b>500 000+</b><small>wygenerowanych dokumentów</small></div>
          <div><Star /><b>98%</b><small>zadowolonych użytkowników</small></div>
          <div><Clock3 /><b>5 min</b><small>średni czas wypełnienia</small></div>
          <div><ShieldCheck /><b>100%</b><small>zgodności ze wzorem</small></div>
          <div><LockKeyhole /><b>Bezpiecznie</b><small>Twoje dane są prywatne</small></div>
        </section>

        <section id="formularz" className={styles.generatorSection}>
          <div className="container">
            <div className={styles.generatorHeading}><small>Generator dokumentu</small><h2>Wypełnij oświadczenie online</h2><p>Dane są przetwarzane lokalnie w przeglądarce.</p></div>
            <CollisionForm />
          </div>
        </section>

        <section className={`container ${styles.contactStrip}`}>
          <div><ShieldCheck /><span><b>Masz pytania?</b><small>Jesteśmy tu, aby pomóc.</small></span></div>
          <div><Mail /><span><small>Napisz do nas</small><b>kontakt@oc.documenty.pl</b></span></div>
          <div><Clock3 /><span><small>Dostępne 7 dni w tygodniu</small><b>8:00–20:00</b></span></div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function DocumentMock({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`${styles.documentMock} ${compact ? styles.compactMock : ""}`}>
      <header><ShieldCheck /><b>OC.Documenty.pl</b><em>Zgodne z wymaganiami</em></header>
      <h3>OŚWIADCZENIE SPRAWCY KOLIZJI</h3><p>dla potrzeb ubezpieczyciela</p>
      {["1. DANE ZDARZENIA","2. DANE POSZKODOWANEGO","3. DANE SPRAWCY","4. OŚWIADCZENIE O ZDARZENIU"].map((title,idx)=><section key={title}><b>{title}</b>{Array.from({length: idx === 3 ? 4 : 3}).map((_,i)=><i key={i} />)} </section>)}
      <footer><span>Data: 24.06.2026</span><span>Podpis sprawcy</span></footer>
    </div>
  );
}
