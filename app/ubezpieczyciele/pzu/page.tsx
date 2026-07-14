import type { Metadata } from "next";
import { ArrowRight, Check, Clock3, CloudDownload, FileText, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Dokumenty PZU — wzory i formularze",
  description: "Wypowiedzenie OC PZU i pozostałe dokumenty gotowe do wypełnienia online.",
  alternates: { canonical: "/ubezpieczyciele/pzu" },
};

const pzuDocs = [
  { title: "Wypowiedzenie OC PZU", href: "/generator", note: "Najczęściej używany formularz do zakończenia ochrony OC." },
  { title: "Wypowiedzenie AC PZU", href: null, note: "Wzór w przygotowaniu." },
  { title: "Zwrot składki OC PZU", href: null, note: "Dokument do rozliczenia niewykorzystanej ochrony." },
  { title: "Reklamacja do PZU", href: null, note: "Pismo dotyczące decyzji lub likwidacji szkody." },
  { title: "Oświadczenie sprawcy kolizji", href: "/oswiadczenie-sprawcy", note: "Uniwersalny wzór po zdarzeniu drogowym." },
];

export default function PzuPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <div className="container">
          <Breadcrumbs items={[{ label: "Ubezpieczyciele", href: "/ubezpieczyciele" }, { label: "PZU" }]} />
        </div>
        <section className="insurerHero">
          <div className="container insurerHeroGrid">
            <div className="insurerIdentity">
              <div className="pzuLogo">PZU</div>
              <div>
                <span className="eyebrow">
                  <ShieldCheck /> Formularze OC
                </span>
                <h1>Dokumenty PZU</h1>
                <h2>Wzory dokumentów i formularze PZU online</h2>
                <p>Pobierz gotowe wzory pism do PZU. Wypełnij online, pobierz PDF lub wydrukuj bez wychodzenia z domu.</p>
                <div className="miniBenefits">
                  <span>
                    <FileText /> Gotowe wzory
                  </span>
                  <span>
                    <Clock3 /> Oszczędzasz czas
                  </span>
                  <span>
                    <ShieldCheck /> Czytelne formularze
                  </span>
                  <span>
                    <CloudDownload /> PDF do pobrania
                  </span>
                </div>
                <div className="heroButtons">
                  <Link className="button buttonPrimary buttonLarge" href="/generator">
                    Wypowiedzenie OC PZU <ArrowRight />
                  </Link>
                  <Link className="button buttonOutline buttonLarge" href="/dokumenty">
                    Wszystkie dokumenty
                  </Link>
                </div>
              </div>
            </div>
            <aside className="popularPanel">
              <h2>Dokumenty PZU</h2>
              {pzuDocs.map((doc) => (
                <div key={doc.title}>
                  <span>
                    <FileText />
                  </span>
                  <div>
                    <strong>{doc.title}</strong>
                    <small>{doc.note}</small>
                  </div>
                  {doc.href ? (
                    <Link href={doc.href}>
                      Wypełnij online <ArrowRight />
                    </Link>
                  ) : (
                    <span className="comingSoon">W przygotowaniu</span>
                  )}
                </div>
              ))}
            </aside>
          </div>
        </section>
        <section className="stats lightStats">
          <div className="container statsGrid">
            <div>
              <strong>Bez konta</strong>
              <small>natychmiastowy dostęp</small>
            </div>
            <div>
              <strong>Lokalnie</strong>
              <small>bez zapisu formularza</small>
            </div>
            <div>
              <strong>PDF A4</strong>
              <small>gotowy do pobrania</small>
            </div>
            <div>
              <strong>24/7</strong>
              <small>dostęp online</small>
            </div>
          </div>
        </section>
        <section className="section soft">
          <div className="container">
            <div className="center">
              <h2>Jak to działa?</h2>
              <p>Przygotuj dokument PZU w trzech prostych krokach.</p>
            </div>
            <div className="steps">
              <article>
                <b>1</b>
                <FileText />
                <h3>Wybierz dokument</h3>
                <p>Wskaż formularz, którego potrzebujesz.</p>
              </article>
              <article>
                <b>2</b>
                <Check />
                <h3>Wypełnij online</h3>
                <p>Uzupełnij wymagane informacje.</p>
              </article>
              <article>
                <b>3</b>
                <CloudDownload />
                <h3>Pobierz i wyślij</h3>
                <p>Zapisz gotowy dokument PDF.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
