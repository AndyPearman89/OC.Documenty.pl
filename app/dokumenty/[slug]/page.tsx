import type { Metadata } from "next";
import { ArrowRight, Download, FileText, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LandingVisual } from "@/components/ProductVisuals";
import { documentCatalog } from "@/lib/catalog";

type PageProps = { params: Promise<{ slug: string }> };
type LandingKind = "document" | "agreement" | "request" | "transfer" | "statement";

const landingCopy: Record<string, { eyebrow: string; intro: string; cta: string; note: string; kind: LandingKind; summary: string }> = {
  "umowa-cesji-praw-z-polisy": {
    eyebrow: "Cesja praw z polisy",
    intro: "Formalny wzór do przeniesienia praw wynikających z polisy ubezpieczeniowej na nowy podmiot.",
    cta: "Pobierz cesję PDF",
    note: "Przydatne przy uporządkowaniu rozliczeń po transakcji, zmianie stron umowy lub przekazaniu uprawnień z polisy.",
    kind: "transfer",
    summary: "Dokument o charakterze formalnym, z jasnym układem danych i miejscem na precyzyjne oznaczenie stron.",
  },
  "umowa-darowizny-samochodu": {
    eyebrow: "Darowizna pojazdu",
    intro: "Oficjalny wzór umowy darowizny samochodu z miejscem na dane stron, pojazdu i oświadczenie o przekazaniu własności.",
    cta: "Pobierz darowiznę PDF",
    note: "Sprawdza się przy przekazaniu pojazdu bez wynagrodzenia, w układzie zgodnym z praktyką urzędową.",
    kind: "agreement",
    summary: "Umowa utrzymana w stylu formalnym, z czytelnymi polami i układem właściwym dla dokumentów podpisywanych przez strony.",
  },
  "odstapienie-od-umowy-ubezpieczenia-zawartej-na-odleglosc": {
    eyebrow: "Odstąpienie od umowy",
    intro: "Urzędowy wzór odstąpienia od umowy ubezpieczenia zawartej na odległość, przygotowany w formie formalnego pisma.",
    cta: "Pobierz odstąpienie PDF",
    note: "Przydatne przy umowach zawartych online, gdy potrzebny jest jednoznaczny i profesjonalny dokument do wysłania.",
    kind: "request",
    summary: "Pismo utrzymane w tonie administracyjnym, z wyraźnym podziałem treści i miejscem na dane identyfikacyjne.",
  },
};

const categoryCopy: Record<string, { eyebrow: string; intro: string; note: string; kind: LandingKind; summary: string }> = {
  Wypowiedzenia: {
    eyebrow: "Pismo formalne",
    intro: "Starannie przygotowany wzór do oficjalnej korespondencji z ubezpieczycielem.",
    note: "Układ dokumentu ułatwia szybkie uzupełnienie danych i zachowanie urzędowego charakteru.",
    kind: "request",
    summary: "Dokument zachowuje formalny styl, czytelną hierarchię treści i miejsce na dane kontaktowe.",
  },
  Zwroty: {
    eyebrow: "Wniosek formalny",
    intro: "Czytelny wzór wniosku do uporządkowanego przekazania informacji o polisie i rozliczeniu składki.",
    note: "Przydatny, gdy potrzebny jest przejrzysty dokument do wysłania lub wydruku.",
    kind: "request",
    summary: "Pismo utrzymane w oficjalnym tonie, z logicznym układem pól i miejscem na podstawowe dane sprawy.",
  },
  Pojazd: {
    eyebrow: "Dokument pojazdowy",
    intro: "Profesjonalny wzór związany z przeniesieniem własności, przekazaniem pojazdu lub rozliczeniem po transakcji.",
    note: "Układ nastawiony na dane stron, dane auta i jednoznaczne oznaczenie dokumentu.",
    kind: "agreement",
    summary: "Formularz zachowuje charakter umowy cywilnoprawnej, z przejrzystą strukturą i odpowiednią rezerwą miejsca.",
  },
  Oświadczenia: {
    eyebrow: "Oświadczenie",
    intro: "Formalny wzór do opisania przebiegu zdarzenia i wskazania najważniejszych informacji po kolizji.",
    note: "Przygotowany z myślą o szybkim wypełnieniu i zachowaniu czytelności dokumentu.",
    kind: "statement",
    summary: "Dokument ma charakter urzędowy, z wyraźnym podziałem danych i miejscem na podpis stron.",
  },
};

export async function generateStaticParams() {
  return documentCatalog.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = documentCatalog.find((item) => item.slug === slug);
  if (!doc) return {};
  return {
    title: doc.title,
    description: doc.description,
    alternates: { canonical: `/dokumenty/${slug}` },
  };
}

export default async function DocumentLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = documentCatalog.find((item) => item.slug === slug);
  if (!doc) notFound();

  const specific = landingCopy[slug];
  const shared = categoryCopy[doc.category] ?? categoryCopy.Pojazd;
  const copy = specific ?? {
    eyebrow: shared.eyebrow,
    intro: shared.intro || doc.description,
    cta: "Pobierz PDF",
    note: shared.note,
    kind: shared.kind,
    summary: shared.summary,
  };

  const pdfPath = `/wzory/${slug}-wzor.pdf`;
  const returnHref = slug === "wypowiedzenie-oc" ? "/generator" : "/dokumenty";
  const practicalSteps = [
    "Sprawdź dane stron, pojazdu i numer dokumentu, zanim pobierzesz PDF.",
    "Jeśli dokument wymaga podpisu, wydrukuj go lub uzupełnij online i zapisz kopię.",
    "W razie potrzeby przejdź do generatora lub katalogu, aby dobrać powiązany wzór.",
  ];
  const usageNotes = [
    "Wzór jest przygotowany do szybkiego wypełnienia i zachowuje formalny układ.",
    "Możesz go pobrać jako PDF i przekazać dalej w postaci elektronicznej lub papierowej.",
    "Dokument dobrze sprawdza się jako baza do druku i archiwizacji.",
  ];
  const faq = [
    {
      question: "Czy dokument mogę wykorzystać od razu po pobraniu?",
      answer: "Tak, wzór jest przygotowany tak, aby po pobraniu można go było od razu uzupełnić, wydrukować albo przekazać dalej.",
    },
    {
      question: "Czy to jest format odpowiedni do druku?",
      answer: "Tak — dokument został ułożony w układzie A4, z myślą o czytelnym wydruku i archiwizacji.",
    },
    {
      question: "Co zrobić, jeśli potrzebuję innego wzoru?",
      answer: "Wróć do katalogu dokumentów albo otwórz generator, aby przejść do powiązanego formularza.",
    },
  ];

  return (
    <>
      <Header />
      <main id="main-content" className="documentLandingPage">
        <Breadcrumbs items={[{ label: "Dokumenty", href: "/dokumenty" }, { label: doc.title }]} />
        <section className="catalogHero">
          <div className="container catalogHeroGrid documentHeroGrid">
            <div>
              <span className="eyebrow">
                <ShieldCheck /> {copy.eyebrow}
              </span>
              <h1>{doc.title}</h1>
              <p>{copy.intro}</p>
              <div className="documentLeadBox">
                <strong>Dlaczego warto z tego skorzystać</strong>
                <p>{copy.summary}</p>
              </div>
              <div className="landingActions">
                <a className="premiumButton primary" href={pdfPath} download>
                  <Download /> Pobierz PDF
                </a>
                <Link className="premiumButton secondary" href={returnHref}>
                  <ArrowRight /> Wróć do wyboru
                </Link>
              </div>
            </div>
            <aside className="catalogHeroAside documentHeroAside">
              <strong>Jak użyć dokumentu</strong>
              <ul>
                {practicalSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
              <div className="documentUsageNote">
                <strong>Wskazówka</strong>
                <p>{copy.note}</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="enterpriseSection surfaceSection">
          <div className="container documentLandingGrid">
            <article className="blogCard">
              <small>Co otrzymujesz</small>
              <LandingVisual kind={copy.kind} />
              <h2>Profesjonalny wzór dokumentu do druku</h2>
              <p>{copy.note}</p>
              <div className="blogInfoBar">
                <span>
                  <FileText /> Format A4
                </span>
                <span>
                  <ShieldCheck /> Układ formalny
                </span>
                <span>
                  <Download /> Do pobrania
                </span>
              </div>
            </article>

            <article className="blogCard">
              <small>Charakter dokumentu</small>
              <h2>Urzędowy styl i czytelny układ</h2>
              <p>{copy.summary}</p>
              <div className="documentUsageNote">
                <strong>W praktyce</strong>
                {usageNotes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>
              <Link className="premiumButton primary" href={returnHref}>
                {copy.cta} <ArrowRight />
              </Link>
            </article>
          </div>

          <div className="container">
            <div className="documentSeoBox">
              <h2>Praktyczne informacje o dokumencie</h2>
              <p>
                Ta strona pomaga szybko znaleźć formalny wzór dokumentu, zrozumieć jego zastosowanie i przejść do dalszych kroków bez
                szukania po całym serwisie.
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

          <div className="container">
            <div style={{ marginTop: "48px", paddingTop: "48px", borderTop: "1px solid #e7edf4" }}>
              <h2 style={{ marginBottom: "24px" }}>Co dalej?</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                <div style={{ padding: "20px", background: "#f8fafc", borderRadius: "12px", border: "1px solid #e7edf4" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "8px" }}>Generator online</h3>
                  <p style={{ fontSize: "14px", color: "#536174", marginBottom: "16px" }}>
                    Wypełnij formularz krok po kroku i pobierz spersonalizowany dokument PDF.
                  </p>
                  <Link href={returnHref} style={{ color: "#ef4444", fontWeight: 600, textDecoration: "none" }}>
                    Otwórz generator →
                  </Link>
                </div>
                <div style={{ padding: "20px", background: "#f8fafc", borderRadius: "12px", border: "1px solid #e7edf4" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "8px" }}>Więcej dokumentów</h3>
                  <p style={{ fontSize: "14px", color: "#536174", marginBottom: "16px" }}>
                    Przeglądaj katalog dokumentów i znajdź inne wzory przydatne w Twojej sytuacji.
                  </p>
                  <Link href="/dokumenty" style={{ color: "#ef4444", fontWeight: 600, textDecoration: "none" }}>
                    Przejdź do katalogu →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
