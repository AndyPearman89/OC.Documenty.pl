import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildUmowaZamianyCPojazduHtml() {
  return buildUniversalDocumentHtml({
    title: "UMOWA ZAMIANY POJAZDU",
    legal: "Wzór umowy zamiany pojazdu z możliwością dopłaty.",
    sections: [
      {
        type: "grid",
        title: "Strona I — Przekazująca pojazd",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL"],
      },
      {
        type: "grid",
        title: "Pojazd I (przekazywany)",
        labels: ["Marka i model", "Numer rejestracyjny", "Numer VIN", "Rok produkcji", "Wycena"],
      },
      {
        type: "grid",
        title: "Strona II — Przekazująca pojazd",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL"],
      },
      {
        type: "grid",
        title: "Pojazd II (otrzymywany)",
        labels: ["Marka i model", "Numer rejestracyjny", "Numer VIN", "Rok produkcji", "Wycena"],
      },
      {
        type: "grid",
        title: "Warunki zamiany",
        labels: ["Różnica wartości pojazdu I i II", "Strona zobowiązana do dopłaty", "Kwota dopłaty", "Termin dopłaty"],
      },
      {
        type: "statement",
        title: "Oświadczenia stron",
        html: "Obydwie strony oświadczają, że są właścicielami pojazdów i uprawnione są do ich zamiany. Pojazdy są wolne od wad prawnych i obciążeń oraz zgodne z opisami.<br><br>Strony potwierdzają zapoznanie się ze stanem technicznym pojazdów i nie wnoszą zastrzeżeń.",
      },
    ],
    signatures: ["Podpis Strony I", "Podpis Strony II"],
  });
}
