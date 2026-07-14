import type { Metadata } from "next";
import { FileText, Search, Sparkles } from "lucide-react";
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
        <div className="container">
          <Breadcrumbs items={[{ label: "Dokumenty" }]} />
        </div>

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
