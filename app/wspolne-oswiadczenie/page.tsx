import type { Metadata } from "next";
import { CheckCircle2, PenLine, ShieldCheck, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JointStatementForm } from "@/features/collision/JointStatementForm";

export const metadata: Metadata = {
  title: "Wspólne oświadczenie o zdarzeniu drogowym",
  description: "Wypełnij dane obu uczestników, dodaj podpisy i pobierz wspólne oświadczenie PDF.",
  alternates: { canonical: "/wspolne-oswiadczenie" },
};

export default function JointStatementPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="generatorPage">
        <div className="container">
          <Breadcrumbs items={[{ label: "Dokumenty", href: "/dokumenty" }, { label: "Wspólne oświadczenie" }]} />
          <div className="generatorIntro enterpriseGeneratorIntro">
            <span className="premiumPill"><Sparkles /> Dokument po kolizji</span>
            <h1>Wspólne oświadczenie<br />o zdarzeniu drogowym</h1>
            <p>Jeden formularz dla obu uczestników, czytelne podpisy i gotowy dokument PDF.</p>
            <div>
              <span><CheckCircle2 /> Dwie strony</span>
              <span><PenLine /> Dwa podpisy</span>
              <span><ShieldCheck /> Dane lokalne</span>
            </div>
          </div>
          <JointStatementForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
