import type { Metadata } from "next";
import { ArrowRight, CircleHelp, FileText, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "FAQ — najczęściej zadawane pytania",
  description: "Odpowiedzi na pytania dotyczące generatorów, podpisów, plików PDF i wysyłania dokumentów ubezpieczeniowych.",
};

const groups = [
  {
    title: "Generator i dokumenty",
    icon: FileText,
    items: [
      ["Czy dokumenty są zgodne z prawem?", "Wzory zawierają standardowe dane wymagane przez ubezpieczycieli. Przed wysłaniem zawsze sprawdź poprawność informacji i aktualne wymagania swojej firmy."],
      ["Czy muszę zakładać konto?", "Nie. Dostępne generatory i puste wzory PDF można pobierać bez rejestracji."],
      ["Czy dokument zapisuje się automatycznie?", "Dane są przetwarzane lokalnie w przeglądarce. Pobierz PDF przed zamknięciem strony."],
    ],
  },
  {
    title: "Podpis i bezpieczeństwo",
    icon: ShieldCheck,
    items: [
      ["Jak dodać podpis?", "Zrób zdjęcie czytelnego podpisu na białej kartce albo wybierz plik JPG, PNG lub WEBP do 5 MB."],
      ["Gdzie trafiają moje dane?", "Formularze działają po stronie urządzenia. Strona nie wysyła danych automatycznie do zewnętrznych podmiotów."],
      ["Czy mogę usunąć zdjęcie podpisu?", "Tak. W podglądzie podpisu wybierz „Usuń”, a następnie dodaj poprawny plik."],
    ],
  },
  {
    title: "PDF i wysyłka",
    icon: CircleHelp,
    items: [
      ["Jak pobrać dokument PDF?", "Po ukończeniu formularza wybierz „Pobierz PDF”. Plik zostanie zapisany w folderze pobranych plików."],
      ["Jak wysłać dokument?", "Pobierz PDF, wybierz przygotowanie e-maila i dołącz zapisany plik przed zatwierdzeniem wiadomości."],
      ["Czy mogę pobrać pusty wzór?", "Tak. W katalogu dokumentów przy wybranych formularzach dostępny jest osobny przycisk PDF."],
    ],
  },
];

export default function FaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: groups.flatMap((group) =>
      group.items.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    ),
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <div className="container">
          <Breadcrumbs items={[{ label: "FAQ" }]} />
        </div>
        <section className="catalogHero faqHero">
          <div className="container">
            <span className="eyebrow"><CircleHelp /> Centrum pomocy</span>
            <h1>Jak możemy pomóc?</h1>
            <p>Najważniejsze informacje o formularzach, podpisach i dokumentach PDF.</p>
          </div>
        </section>
        <section className="section">
          <div className="container faqPageGrid">
            {groups.map(({ title, icon: Icon, items }) => (
              <section className="faqGroup" key={title}>
                <header>
                  <Icon />
                  <h2>{title}</h2>
                </header>
                {items.map(([question, answer]) => (
                  <details key={question}>
                    <summary>{question}<span>+</span></summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </section>
            ))}
          </div>
        </section>
        <section className="featureBand">
          <div className="container">
            <CircleHelp />
            <div>
              <h2>Nie znalazłeś odpowiedzi?</h2>
              <p>Napisz do nas — odpowiemy na pytania dotyczące dokumentów.</p>
            </div>
            <Link className="button buttonLight" href="/kontakt">Skontaktuj się <ArrowRight /></Link>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
