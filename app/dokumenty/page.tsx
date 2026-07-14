import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, FileCheck2, ShieldCheck } from "lucide-react";
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
  "Dokumenty z jasnym podziałem na sekcje i pola do wypełnienia.",
  "Wzory przygotowane z myślą o wydruku, PDF i wysyłce online.",
  "Kategorie uporządkowane według celu: umowy, odstąpienia, oświadczenia i wypowiedzenia.",
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
              <h1>Wzory dokumentów gotowe do użycia</h1>
              <p>
                Zebraliśmy aktualne formularze OC w jednym miejscu — tak, aby szybko znaleźć właściwy dokument, pobrać PDF i przejść
                do wypełniania bez zbędnych kroków.
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
              <strong>Co znajdziesz w katalogu</strong>
              <p>Formalne wzory wypowiedzeń, oświadczeń, umów, zwrotów, odstąpień i reklamacji.</p>
              <ul>
                <li>czytelne opisy dokumentów</li>
                <li>przejście do PDF lub generatora</li>
                <li>kategorie dopasowane do intencji użytkownika</li>
              </ul>
            </aside>
          </div>
        </section>

        <DocumentsBrowser />
      </main>
      <Footer />
    </>
  );
}
