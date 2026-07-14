import type { Metadata } from "next";
import { ArrowRight, Building2, FileCheck2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { insurerProfiles } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Ubezpieczyciele",
  description: "Dokumenty i formularze dla największych ubezpieczycieli w Polsce.",
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
            <span className="eyebrow"><ShieldCheck /> Wzory dokumentów</span>
            <h1>Dokumenty dla ubezpieczycieli</h1>
            <p>Wybierz firmę, aby zobaczyć dostępne formularze i instrukcje wysyłki.</p>
          </div>
        </section>
        <section className="section">
          <div className="container insurerGrid">
            {insurerProfiles.map((insurer, index) => (
              <Link className="insurerCard" href={`/ubezpieczyciele/${insurer.slug}`} key={insurer.slug}>
                <span className={index === 0 ? "pzuBadge" : "insurerBadge"}>{index === 0 ? "PZU" : <Building2 />}</span>
                <div>
                  <h2>{insurer.name}</h2>
                  <p>Dokumenty, adresy i formularze</p>
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
              <h2>Nie wiesz, który dokument wybrać?</h2>
              <p>Generator przeprowadzi Cię przez cały proces krok po kroku.</p>
            </div>
            <Link className="button buttonLight" href="/generator">Uruchom generator <ArrowRight /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
