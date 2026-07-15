import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildPotwierdzenieSprsprzedazyPojazduHtml() {
  return buildUniversalDocumentHtml({
    title: "POTWIERDZENIE SPRZEDAŻY POJAZDU",
    legal: "Dokument potwierdzający fakt sprzedaży pojazdu.",
    sections: [
      {
        type: "grid",
        title: "Dane sprzedającego",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon"],
      },
      {
        type: "grid",
        title: "Dane kupującego",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL"],
      },
      {
        type: "grid",
        title: "Pojazd",
        labels: ["Marka i model", "Numer rejestracyjny", "Numer VIN", "Rok produkcji"],
      },
      {
        type: "grid",
        title: "Transakcja",
        labels: ["Cena sprzedaży", "Data sprzedaży", "Sposób zapłaty", "Liczba rat (jeśli ratalnie)"],
      },
      {
        type: "statement",
        title: "Potwierdzenie",
        html: "Potwierdzam, że sprzedałem pojazd opisany powyżej kupującemu wymienionemu powyżej w dniu i za cenę wskazaną powyżej. Pojazd przechodzi na własność kupującego z momentem podpisania niniejszego dokumentu. Pojazd był wolny od hipoteki i zastawów.",
      },
    ],
    signatures: ["Podpis sprzedającego", "Podpis kupującego"],
  });
}
