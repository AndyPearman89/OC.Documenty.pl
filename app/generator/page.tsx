import type { Metadata } from "next";
import { CheckCircle2, LockKeyhole, Sparkles } from "lucide-react";
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
          <div className="generatorIntro enterpriseGeneratorIntro">
            <span className="premiumPill">
              <Sparkles /> Generator online
            </span>
            <h1>Wybierz dokument do wygenerowania</h1>
            <p>
              Rozpocznij od właściwego wzoru, a potem uzupełnij dane i pobierz profesjonalny dokument PDF gotowy do wysłania.
            </p>
            <div>
              <span>
                <CheckCircle2 /> Bez konta
              </span>
              <span>
                <LockKeyhole /> Zapis lokalny
              </span>
              <span>
                <CheckCircle2 /> Podpis zdjęciem
              </span>
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
                        <span>{group}</span>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
          <GeneratorForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
