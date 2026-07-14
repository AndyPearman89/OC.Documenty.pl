import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, FileCheck2, ShieldCheck, Sparkles, FileText, Search } from "lucide-react";
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

const documentHighlights = [
  "Dokumenty uporządkowane według celu: umowy, odstąpienia, oświadczenia i wypowiedzenia.",
  "Wzory przygotowane do wydruku, PDF i szybkiego wypełnienia online.",
  "Każda karta prowadzi prosto do wzoru, generatora lub pliku PDF.",
];

export default function DocumentsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <div className="container">
          <Breadcrumbs items={[{ label: "Dokumenty" }]} />
        </div>

        <section className="catalogHero">
          <div className="container catalogHeroGrid">
            <div>
              <span className="eyebrow">
                <ShieldCheck /> Biblioteka wzorów
              </span>
              <h1>Profesjonalne wzory dokumentów OC w jednym miejscu</h1>
              <p>
                Zebraliśmy aktualne formularze OC i dokumenty pojazdowe w jednym katalogu. Wybierasz właściwy wzór, pobierasz PDF
                albo przechodzisz bezpośrednio do generatora.
              </p>
              <div className="catalogHeroChecks">
                {documentHighlights.map((item) => (
                  <span key={item}>
                    <CheckCircle2 /> {item}
                  </span>
                ))}
              </div>
              <div className="landingActions">
                <Link className="premiumButton primary" href="/generator">
                  <FileCheck2 /> Otwórz generator
                </Link>
                <Link className="premiumButton secondary" href="/blog">
                  <ArrowRight /> Zobacz poradniki
                </Link>
              </div>
            </div>
            <aside className="catalogHeroAside">
              <strong>Jak korzystać z katalogu</strong>
              <p>Najpierw wybierz intencję, potem przejdź do karty dokumentu. Każdy wzór ma krótki opis i jasną ścieżkę działania.</p>
              <ul>
                <li>czytelny podział na sekcje</li>
                <li>gotowe PDF i formularze online</li>
                <li>szybka ścieżka do najczęstszych spraw</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="container catalogIntentGrid">
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
        </section>

        <DocumentsBrowser />
      </main>
      <Footer />
    </>
  );
}
