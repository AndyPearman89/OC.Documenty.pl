import type { Metadata } from "next";
import { ArrowRight, Building2, FileCheck2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InsurerBrand } from "@/components/InsurerBrand";
import { insurerProfiles } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Ubezpieczyciele",
  description: "Wybierz towarzystwo ubezpieczeniowe i przejdź do odpowiednich wzorów dokumentów OC.",
};

export default function InsurersPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <div className="container">
          <Breadcrumbs items={[{ label: "Ubezpieczyciele" }]} />
        </div>
        <section className="catalogHero">
          <div className="container">
            <span className="eyebrow">
              <ShieldCheck /> Formularze i adresy
            </span>
            <h1>Dokumenty dla ubezpieczycieli</h1>
            <p>
              Wybierz firmę, aby zobaczyć wzory pism, najważniejsze dokumenty i przejście do właściwego generatora.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container insurerGrid">
            {insurerProfiles.map((insurer) => (
              <Link className="insurerCard" href={`/ubezpieczyciele/${insurer.slug}`} key={insurer.slug}>
                <InsurerBrand name={insurer.name} />
                <div>
                  <h2>{insurer.name}</h2>
                  <p>Wzory dokumentów, instrukcje i skróty do generatorów.</p>
                </div>
                <ArrowRight />
              </Link>
            ))}
          </div>
        </section>
        <section className="featureBand">
          <div className="container">
            <FileCheck2 />
            <div>
              <h2>Szukasz właściwego formularza?</h2>
              <p>Generator przeprowadzi Cię przez dokument krok po kroku i przygotuje PDF do pobrania.</p>
            </div>
            <Link className="button buttonLight" href="/generator">
              Uruchom generator <ArrowRight />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
