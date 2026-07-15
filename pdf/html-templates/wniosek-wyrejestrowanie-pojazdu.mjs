import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildWniosekWyrejestrowanieHtml() {
  return buildUniversalDocumentHtml({
    title: "WNIOSEK O WYREJESTROWANIE POJAZDU",
    legal: "Wniosek złożony w wydziale komunikacji o wyrejestrowanie pojazdu.",
    sections: [
      {
        type: "grid",
        title: "Dane właściciela pojazdu",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon"],
      },
      {
        type: "grid",
        title: "Pojazd do wyrejestrowania",
        labels: ["Marka i model", "Numer rejestracyjny", "Numer VIN", "Rok produkcji"],
      },
      {
        type: "grid",
        title: "Powód wyrejestrowania",
        labels: ["Sprzedaż pojazdu", "Wycofanie z ruchu", "Umyślne zniszczenie", "Eksport za granicę", "Inne"],
      },
      {
        type: "multiline",
        title: "Szczegóły",
        note: "Opisz szczegóły dotyczące wyrejestrowania pojazdu.",
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Wnoszę o wyrejestrowanie pojazdu opisanego powyżej z Centralnej Ewidencji Pojazdów i Kierowców. Pojazd nie będzie dalej użytkowany na terenie RP lub zostanie sprzedany.",
      },
    ],
    signatures: ["Czytelny podpis"],
  });
}
