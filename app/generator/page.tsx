import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, FileText, LockKeyhole, Sparkles, ShieldCheck, TimerReset } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionVisual } from "@/components/ProductVisuals";
import { GeneratorForm } from "@/features/generator/GeneratorForm";
import { generatorDocuments } from "@/lib/catalog";

type GeneratorDoc = (typeof generatorDocuments)[number];
type GeneratorGroup = "Umowy" | "Odstąpienia" | "Oświadczenia";

export const metadata: Metadata = {
  title: "Generator wypowiedzenia OC",
  description: "Wybierz dokument i przygotuj wypowiedzenie umowy OC online krok po kroku.",
  alternates: { canonical: "/generator" },
};

export default function GeneratorPage() {
  const order = ["Umowy", "Odstąpienia", "Oświadczenia"] as const;
  const grouped = generatorDocuments.reduce<Record<GeneratorGroup, GeneratorDoc[]>>(
    (acc, doc) => {
      (acc[doc.group] ||= []).push(doc);
      return acc;
    },
    { Umowy: [], Odstąpienia: [], Oświadczenia: [] },
  );

  return (
    <>
      <Header />
      <main id="main-content" className="generatorPage">
        <div className="container">
          <div className="generatorHeroPanel">
            <div className="generatorIntro enterpriseGeneratorIntro">
              <span className="premiumPill">
                <Sparkles /> Generator online
              </span>
              <h1>Wypowiedzenie OC i dokumenty pojazdowe gotowe w kilka minut</h1>
              <p>
                Zacznij od właściwego wzoru, uzupełnij dane krok po kroku i pobierz profesjonalny PDF bez logowania, bez chaosu i bez
                szukania po całym serwisie.
              </p>
              <div className="generatorHighlights">
                <span>
                  <ShieldCheck /> Bezpieczne dane lokalnie
                </span>
                <span>
                  <TimerReset /> Około 2–5 minut pracy
                </span>
                <span>
                  <CheckCircle2 /> Gotowe do druku i wysyłki
                </span>
              </div>
              <div className="generatorHeroActions">
                <Link className="premiumButton primary" href="#generator-shell">
                  Zacznij teraz <ArrowRight />
                </Link>
                <Link className="premiumButton secondary" href="/dokumenty">
                  <FileText /> Wszystkie wzory
                </Link>
              </div>
            </div>
            <aside className="generatorHeroSide">
              <div className="generatorHeroStat">
                <strong>1</strong>
                <span>wybór dokumentu</span>
              </div>
              <div className="generatorHeroStat">
                <strong>5</strong>
                <span>kroków do PDF</span>
              </div>
              <div className="generatorHeroStat">
                <strong>100%</strong>
                <span>bez konta</span>
              </div>
            </aside>
          </div>
          <div className="generatorPicker">
            <h2>Dostępne generatory</h2>
            {order.map((group) => (
              <section key={group} className="generatorGroup">
                <div className="generatorGroupHeader">
                  <SectionVisual section={group} />
                  <strong>{group}</strong>
                </div>
                <div>
                  {grouped[group].map((doc: GeneratorDoc) => (
                    <Link
                      key={doc.slug}
                      className="generatorDocChoice"
                      href={doc.slug === "wypowiedzenie-oc" ? "/generator" : `/${doc.slug}`}
                    >
                      <strong>{doc.title}</strong>
                      <small>{doc.description}</small>
                      <span>Otwórz <ArrowRight /></span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <div id="generator-shell">
            <GeneratorForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
