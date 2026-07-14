import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, FileText, Mail, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InsurerBrand, InsurerHeroVisual, insurerBrandStyles } from "@/components/InsurerBrand";
import { insurerProfiles } from "@/lib/catalog";

interface InsurerPageProps {
  params: Promise<{ slug: string }>;
}

const insurerCopy: Record<string, { intro: string; action: string; note: string }> = {
  pzu: {
    intro: "Najpopularniejsze wzory do PZU w jednym miejscu — z naciskiem na czytelność, terminowość i prosty proces wysyłki.",
    action: "Przejdź do dokumentów PZU",
    note: "Przygotuj wypowiedzenie, oświadczenie lub pismo w formacie wygodnym do wydruku i wysyłki.",
  },
};

export function generateStaticParams() {
  return insurerProfiles.filter((item) => item.slug !== "pzu").map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: InsurerPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insurer = insurerProfiles.find((item) => item.slug === slug);
  if (!insurer) return {};
  return {
    title: `Dokumenty ${insurer.name} — formularze online`,
    description: `Wypowiedzenie OC, zwrot składki i pozostałe dokumenty ${insurer.name} do wypełnienia online.`,
    alternates: { canonical: `/ubezpieczyciele/${slug}` },
  };
}

export default async function InsurerPage({ params }: InsurerPageProps) {
  const { slug } = await params;
  const insurer = insurerProfiles.find((item) => item.slug === slug);
  if (!insurer || slug === "pzu") notFound();

  const docs = [
    { title: `Wypowiedzenie OC ${insurer.name}`, href: "/generator", note: "Najczęściej wybierany dokument do rozpoczęcia obsługi polisy." },
    { title: `Zwrot składki OC ${insurer.name}`, href: null, note: "Formalny wniosek po zakończeniu ochrony lub zmianie umowy." },
    { title: `Reklamacja do ${insurer.name}`, href: null, note: "Pismo w sprawie decyzji lub sposobu likwidacji szkody." },
    { title: "Oświadczenie sprawcy kolizji", href: "/oswiadczenie-sprawcy", note: "Wzór przydatny po zdarzeniu drogowym." },
  ];
  const brand = insurerBrandStyles[insurer.name] ?? insurerBrandStyles.PZU;
  const heroClass = `companyHero companyHero-${slug}`;

  return (
    <>
      <Header />
      <main id="main-content">
        <div className="container">
          <Breadcrumbs items={[{ label: "Ubezpieczyciele", href: "/ubezpieczyciele" }, { label: insurer.name }]} />
        </div>

        <section className={heroClass}>
          <div className="container companyHeroGrid">
            <div>
              <span className="eyebrow">
                <ShieldCheck /> Formularze OC
              </span>
              <h1>Dokumenty {insurer.name}</h1>
              <p className="companyHeroLead">
                {insurerCopy[slug]?.intro ?? "Wybierz dokument, wypełnij go online i pobierz gotowy PDF do dalszej wysyłki."}
              </p>
              <div className="companyChecks">
                <span>
                  <CheckCircle2 /> Czytelne formularze
                </span>
                <span>
                  <CheckCircle2 /> Gotowe w kilka minut
                </span>
                <span>
                  <CheckCircle2 /> Dane przetwarzane lokalnie
                </span>
              </div>
              <Link className="button buttonPrimary buttonLarge" href="/generator">
                {insurerCopy[slug]?.action ?? "Utwórz wypowiedzenie OC"} <ArrowRight />
              </Link>
            </div>
            <div className="companyMark">
              <InsurerHeroVisual name={insurer.name} />
              <div className="companyBrandRow">
                <InsurerBrand name={insurer.name} />
                <small>{brand.label} • dokumenty i formularze online</small>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container companyLayout">
            <div>
              <h2>Wzory dokumentów</h2>
              <p>{insurerCopy[slug]?.note ?? "Każdy dokument ma prosty układ i prowadzi do kolejnego kroku bez zbędnych decyzji."}</p>
              <div className="companyDocs">
                {docs.map((doc) => (
                  <article key={doc.title}>
                    <span>
                      <FileText />
                    </span>
                    <div>
                      <h3>{doc.title}</h3>
                      <p>{doc.note}</p>
                    </div>
                    {doc.href ? (
                      <Link href={doc.href}>
                        Wypełnij <ArrowRight />
                      </Link>
                    ) : (
                      <span className="comingSoon">W przygotowaniu</span>
                    )}
                  </article>
                ))}
              </div>
            </div>

            <aside className="contactCard">
              <h2>Jak wysłać dokument?</h2>
              <p>Po wygenerowaniu możesz przekazać dokument zgodnie z instrukcją wybranego ubezpieczyciela.</p>
              <div>
                <Mail />
                <span>
                  <strong>Online</strong>
                  <small>Formularz lub wiadomość e-mail</small>
                </span>
              </div>
              <div>
                <MapPin />
                <span>
                  <strong>Pocztą</strong>
                  <small>Na oficjalny adres ubezpieczyciela</small>
                </span>
              </div>
              <Link className="button buttonOutline" href="/dokumenty">
                Zobacz wszystkie wzory
              </Link>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
