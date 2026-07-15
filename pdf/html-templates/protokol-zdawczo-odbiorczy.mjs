import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildProtakolZdawczoOdbioczyHtml() {
  return buildUniversalDocumentHtml({
    title: "PROTOKÓŁ ZDAWCZO-ODBIORCZY SAMOCHODU",
    legal: "Szczegółowy protokół przekazania samochodu między stronami z opisem stanu technicznego.",
    sections: [
      {
        type: "grid",
        title: "Strona zdająca",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "Telefon"],
      },
      {
        type: "grid",
        title: "Strona odbierająca",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "Telefon"],
      },
      {
        type: "grid",
        title: "Samochód",
        labels: ["Marka i model", "Numer rejestracyjny", "Numer VIN", "Rok produkcji", "Liczba miejsc"],
      },
      {
        type: "grid",
        title: "Stan techniczny",
        labels: ["Przebieg licznika (km)", "Paliwo (pełny/połowa/pusty)", "Stan opon", "Stan lakieru", "Stan szyb"],
      },
      {
        type: "grid",
        title: "Uszkodzenia",
        labels: ["Uderzenia, zarysowania", "Wgniecenia", "Uszkodzenia szyb", "Problemy z silnikiem", "Problemy z elektroniką"],
      },
      {
        type: "grid",
        title: "Wyposażenie",
        labels: ["Liczba kluczyki", "Alufelgi", "Czasopismo serwisowa", "Zapasowe koło", "Trójkąt ostrzegawczy", "Kamizelka odblaskowa"],
      },
      {
        type: "multiline",
        title: "Uwagi szczegółowe",
        note: "Opisz wszelkie zastrzeżenia, drobne uszkodzenia lub specjalne warunki.",
      },
      {
        type: "statement",
        title: "Potwierdzenie",
        html: "Poniższe strony potwierdzają, że samochód został przekazany/odebrany w stanie opisanym powyżej i nie wnoszą zastrzeżeń.",
      },
    ],
    signatures: ["Podpis zdającego", "Podpis odbierającego"],
  });
}
