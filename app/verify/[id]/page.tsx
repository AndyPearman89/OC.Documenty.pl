import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, FileSearch, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type PageProps = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Weryfikacja dokumentu ${id}`,
    description: `Sprawdzenie dokumentu OC.Documenty.pl dla identyfikatora ${id}.`,
    alternates: { canonical: `/verify/${id}` },
  };
}

export default async function VerifyPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <>
      <Header />
      <main id="main-content" className="legalPage">
        <div className="container legalContent">
          <Breadcrumbs items={[{ label: "Weryfikacja dokumentu" }]} />
          <span className="eyebrow">Weryfikacja</span>
          <h1>Dokument został wygenerowany poprawnie</h1>
          <p className="legalLead">Identyfikator dokumentu: {id}</p>
          <section>
            <h2>Co to oznacza?</h2>
            <p>
              Ten adres służy do szybkiego sprawdzenia dokumentu wygenerowanego przez OC.Documenty.pl. Jeśli korzystasz z PDF,
              możesz wrócić do generatora, pobrać dokument albo przejść do biblioteki wzorów.
            </p>
          </section>
          <section>
            <h2>Następne kroki</h2>
            <p>Sprawdź dokument, pobierz go i w razie potrzeby przekaż do ubezpieczyciela lub drugiej strony zdarzenia.</p>
            <div className="verifyActions">
              <Link className="premiumButton primary" href="/generator">
                <CheckCircle2 /> Otwórz generator
              </Link>
              <Link className="premiumButton secondary" href="/dokumenty">
                <FileSearch /> Zobacz dokumenty
              </Link>
              <Link className="premiumButton secondary" href="/blog">
                Poradniki <ArrowRight />
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
