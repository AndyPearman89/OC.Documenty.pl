import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildPotwierdzeniOdbioruPojazduHtml() {
  return buildUniversalDocumentHtml({
    title: "POTWIERDZENIE ODBIORU POJAZDU",
    legal: "Dokument potwierdzający fakt odbioru pojazdu przez kupującego lub wynajmującego.",
    sections: [
      {
        type: "grid",
        title: "Dane przekazującego pojazd",
        labels: ["Imię i nazwisko", "Adres"],
      },
      {
        type: "grid",
        title: "Dane odbierającego pojazd",
        labels: ["Imię i nazwisko", "Adres"],
      },
      {
        type: "grid",
        title: "Pojazd",
        labels: ["Marka i model", "Numer rejestracyjny", "Numer VIN", "Rok produkcji"],
      },
      {
        type: "grid",
        title: "Stan pojazdu w dniu odbioru",
        labels: ["Liczba kilometrów", "Stan opony/zawieszenia", "Stan lakieru", "Uszkodzenia widoczne", "Stan wnętrza"],
      },
      {
        type: "grid",
        title: "Wyposażenie i dokumenty",
        labels: ["Kluczyki", "Dowód rejestracyjny", "Książeczka serwisowa", "Polisa OC", "Inne"],
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Potwierdzam, że odebrałem pojazd opisany powyżej w stanie wskazanym powyżej wraz z wyposażeniem i dokumentami. Pojazd przejmę na własną odpowiedzialność.",
      },
    ],
    signatures: ["Podpis przekazującego", "Podpis odbierającego"],
  });
}
