import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, Building2, FileCheck2, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InsurerBrand } from "@/components/InsurerBrand";
import { insurerProfiles } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Ubezpieczyciele — dokumenty i formularze OC",
  description: "Wybierz towarzystwo ubezpieczeniowe i przejdź do odpowiednich wzorów dokumentów OC, instrukcji i generatorów.",
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
          <div className="container catalogHeroGrid insurerHeroGrid">
            <div>
              <span className="eyebrow">
                <ShieldCheck /> Formularze i adresy
              </span>
              <h1>Strony ubezpieczycieli z dokumentami, wzorami i skrótami do generatorów</h1>
              <p>
                Wybierz firmę, aby przejść do jej mini-strony, zobaczyć najważniejsze dokumenty i od razu ruszyć do właściwego wzoru
                lub generatora.
              </p>
              <div className="catalogHeroChecks">
                <span>
                  <BadgeCheck /> Wzory dopasowane do konkretnej marki
                </span>
                <span>
                  <BadgeCheck /> Krótkie opisy i praktyczne podpowiedzi
                </span>
                <span>
                  <BadgeCheck /> Szybki dostęp do PDF i generatora
                </span>
              </div>
            </div>
            <aside className="catalogHeroAside insurerHeroAside">
              <strong>Jak korzystać z tej sekcji</strong>
              <p>
                Każda karta prowadzi do mini-strony firmy z dokumentami, instrukcją wysyłki i powiązanymi wzorami.
              </p>
              <ul>
                <li>wybierz ubezpieczyciela</li>
                <li>otwórz właściwy dokument</li>
                <li>przejdź do generatora lub PDF</li>
              </ul>
            </aside>
          </div>
        </section>
        <section className="enterpriseSection insurerIntroSection">
          <div className="container insurerIntroGrid">
            <article>
              <h2>Dlaczego to ułatwia sprawę</h2>
              <p>
                W jednym miejscu zebraliśmy najbardziej potrzebne pisma, formularze i skróty do generatorów, żeby nie tracić czasu na
                szukanie właściwego wzoru.
              </p>
            </article>
            <article>
              <h2>Co możesz zrobić dalej</h2>
              <p>
                Przejść do listy dokumentów, otworzyć konkretny generator albo wejść na stronę wybranego ubezpieczyciela i pobrać
                gotowy PDF.
              </p>
            </article>
          </div>
        </section>
        <section className="section">
          <div className="container insurerGrid">
            {insurerProfiles.map((insurer) => (
              <Link className="insurerCard" href={`/ubezpieczyciele/${insurer.slug}`} key={insurer.slug}>
                <InsurerBrand name={insurer.name} />
                <div>
                  <h2>{insurer.name}</h2>
                  <p>Mini-hero, dokumenty, podpowiedzi i skrót do generatora dopasowane do tej firmy.</p>
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
        <section className="section">
          <div className="container catalogIntentGrid">
            <article className="intentCard">
              <span><Building2 /></span>
              <strong>Każda firma osobno</strong>
              <p>Strona ma własne wejście, aby ułatwić szybkie dotarcie do dokumentów konkretnego ubezpieczyciela.</p>
            </article>
            <article className="intentCard">
              <span><Sparkles /></span>
              <strong>Lepsze prowadzenie</strong>
              <p>Krótki opis, wyraźne CTA i logiczny układ pomagają użytkownikowi podjąć właściwy następny krok.</p>
            </article>
            <article className="intentCard">
              <span><ShieldCheck /></span>
              <strong>Więcej zaufania</strong>
              <p>Firmy prezentujemy w formie spójnych kart z czytelnym brandingiem i prostymi wskazówkami.</p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
