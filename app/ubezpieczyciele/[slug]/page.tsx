import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, FileText, Mail, MapPin, ShieldCheck, Sparkles } from "lucide-react";
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

const insurerCopy: Record<
  string,
  { intro: string; action: string; note: string; bullets: string[]; support: string }
> = {
  pzu: {
    intro: "Najważniejsze wzory do PZU zebrane w jednym miejscu — z naciskiem na jasny układ, prostą nawigację i szybkie przejście do właściwego pisma.",
    action: "Przejdź do dokumentów PZU",
    note: "Przygotuj wypowiedzenie, oświadczenie lub pismo w formacie wygodnym do wydruku i wysyłki.",
    bullets: ["Najczęściej używane formularze", "Szybkie przejście do generatora", "Układ dopasowany do pilnych spraw"],
    support: "PZU to jedna z najczęściej wybieranych firm, dlatego strona zawiera skróty do najważniejszych wzorów i podpowiedź, co zrobić po kolei.",
  },
  warta: {
    intro: "Porządek w dokumentach Warty zaczyna się od właściwego wzoru i krótkiego opisu, który prowadzi użytkownika krok po kroku.",
    action: "Sprawdź wzory dla Warty",
    note: "Na stronie znajdziesz praktyczne skróty do wypowiedzenia, reklamacji i pozostałych pism związanych z polisą.",
    bullets: ["Formalny układ pism", "Czytelne wskazówki krok po kroku", "Szybki dostęp do PDF"],
    support: "Strona pomaga od razu przejść od wyboru firmy do konkretnego dokumentu, bez szukania po całym serwisie.",
  },
  allianz: {
    intro: "Dokumenty Allianz zebrane w jednym miejscu, tak aby szybciej znaleźć właściwe pismo i przejść do generatora.",
    action: "Otwórz dokumenty Allianz",
    note: "Przydatne, gdy potrzebujesz uporządkować korespondencję i wybrać właściwy wzór bez dodatkowych decyzji.",
    bullets: ["Pismo, umowa, oświadczenie", "Przejrzyste sekcje", "Szybki start bez konta"],
    support: "Krótki opis i podział dokumentów ułatwiają wybór odpowiedniego formularza już na pierwszym ekranie.",
  },
  "ergo-hestia": {
    intro: "Wzory dla ERGO Hestii w formalnym, spokojnym układzie, nastawionym na szybkie odnalezienie potrzebnego pisma.",
    action: "Sprawdź dokumenty ERGO Hestia",
    note: "Sekcja pomaga od razu przejść do właściwego wzoru bez zbędnego klikania po całym katalogu.",
    bullets: ["Formalny i czytelny układ", "Dane i załączniki w jednym miejscu", "Gotowe do wysyłki"],
    support: "Każdy wzór jest opisany prostym językiem, żeby użytkownik wiedział, do czego służy i kiedy go użyć.",
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
  const moreActions = [
    { label: "Zobacz wszystkie dokumenty", href: "/dokumenty" },
    { label: "Uruchom generator", href: "/generator" },
  ];
  const faq = [
    {
      question: `Jakie dokumenty dla ${insurer.name} są najczęściej używane?`,
      answer: "Najczęściej wybierane są wypowiedzenie OC, reklamacja, zwrot składki oraz oświadczenie po kolizji.",
    },
    {
      question: "Czy mogę przejść stąd od razu do generatora?",
      answer: "Tak — strona prowadzi bezpośrednio do generatora i do katalogu dokumentów, żeby skrócić całą ścieżkę.",
    },
    {
      question: "Czy wzory nadają się do wysyłki online?",
      answer: "Tak, dokumenty są przygotowane tak, aby można było je pobrać, wypełnić i wysłać zgodnie z wymaganiami firmy.",
    },
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
              <div className="companyIntroBox">
                <strong>Dlaczego ta strona pomaga</strong>
                <p>{insurerCopy[slug]?.support ?? "W jednym miejscu masz opis firmy, najważniejsze dokumenty i przejście do generatora."}</p>
              </div>
              <div className="companyChecks">
                {(insurerCopy[slug]?.bullets ?? ["Czytelne formularze", "Gotowe w kilka minut", "Dane przetwarzane lokalnie"]).map((bullet) => (
                  <span key={bullet}>
                    <CheckCircle2 /> {bullet}
                  </span>
                ))}
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
              <div className="companyIntroBox">
                <strong>Jak korzystać</strong>
                <p>Wybierz pismo, sprawdź opis i przejdź bezpośrednio do właściwego wzoru lub generatora.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container companyLayout">
            <div>
              <h2>Wzory dokumentów</h2>
              <p>{insurerCopy[slug]?.note ?? "Każdy dokument ma prosty układ i prowadzi do kolejnego kroku bez zbędnych decyzji."}</p>
              <div className="companyIntroBox">
                <strong>Jak to działa</strong>
                <p>
                  {insurerCopy[slug]?.support ?? "Najpierw wybierz dokument, potem uzupełnij dane i pobierz gotowy plik PDF lub DOCX."}
                </p>
              </div>
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
              <div className="companyChecklist">
                <span>Każdy dokument jest opisany prostym językiem, aby łatwo wybrać właściwy wzór.</span>
                <span>Jeśli nie potrzebujesz całego katalogu, przejdź od razu do generatora.</span>
                <span>Treści przygotowaliśmy tak, aby prowadziły do konkretnej akcji, a nie tylko do ogólnego opisu.</span>
              </div>
            </div>

            <aside className="contactCard">
              <h2>Jak wysłać dokument?</h2>
              <p>Po wygenerowaniu możesz przekazać dokument zgodnie z instrukcją wybranego ubezpieczyciela.</p>
              <div className="companyChecklist">
                <span>Wysyłka online, pocztą lub przez ePUAP — zależnie od wymagań firmy.</span>
                <span>Warto zachować potwierdzenie nadania lub wysyłki e-mail.</span>
              </div>
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
              {moreActions.map((action) => (
                <Link className="button buttonOutline" href={action.href} key={action.label}>
                  {action.label}
                </Link>
              ))}
            </aside>
          </div>

          <div className="container">
            <div className="documentSeoBox">
              <h2>Jak korzystać ze strony {insurer.name}</h2>
              <p>
                Ta podstrona porządkuje dokumenty dla wybranego ubezpieczyciela, skraca czas wyboru właściwego formularza i prowadzi
                do PDF albo generatora bez zbędnych kroków.
              </p>
            </div>
          </div>

          <div className="container">
            <div className="blogFaq">
              <h2>Najczęstsze pytania</h2>
              <div className="faqGrid">
                {faq.map((item) => (
                  <details key={item.question}>
                    <summary>
                      {item.question}
                      <span>+</span>
                    </summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <div className="container catalogIntentGrid">
            <article className="intentCard">
              <span><Sparkles /></span>
              <strong>Mini-hero dla każdej firmy</strong>
              <p>Każda podstrona ma własny układ i kolorystykę, żeby marka była od razu rozpoznawalna.</p>
            </article>
            <article className="intentCard">
              <span><ShieldCheck /></span>
              <strong>Formalny charakter</strong>
              <p>Treść jest bardziej urzędowa, spokojna i nastawiona na konkretne działanie użytkownika.</p>
            </article>
            <article className="intentCard">
              <span><FileText /></span>
              <strong>Lepsze prowadzenie</strong>
              <p>Od firmy, przez dokument, aż po generator — bez zbędnych przeskoków i rozproszenia.</p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
