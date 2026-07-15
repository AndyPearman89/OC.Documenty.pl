import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildProtakolPrzekzananiaPojazduHtml() {
  return buildUniversalDocumentHtml({
    title: "PROTOKÓŁ ZDAWCZO-ODBIORCZY POJAZDU",
    legal: "Szczegółowy protokół przekazania pojazdu z dokumentacją stanu technicznego.",
    sections: [
      {
        type: "grid",
        title: "Strona zdająca (sprzedający/poprzedni właściciel)",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "Telefon"],
      },
      {
        type: "grid",
        title: "Strona odbierająca (kupujący/nowy właściciel)",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "Telefon"],
      },
      {
        type: "grid",
        title: "Pojazd",
        labels: ["Marka i model", "Numer rejestracyjny", "Numer VIN", "Rok produkcji", "Liczba miejsc"],
      },
      {
        type: "grid",
        title: "Stan techniczny w dniu protokołu",
        labels: ["Przebieg licznika (km)", "Liczba kluczyki", "Stan opon", "Stan lakieru", "Stan tapicerki"],
      },
      {
        type: "grid",
        title: "Uszkodzenia i wady",
        labels: ["Uderzenia, zarysowania, wgniecenia", "Uszkodzenia szyb", "Problemy z oświetleniem", "Problemy z silnikiem", "Inne wady"],
      },
      {
        type: "grid",
        title: "Wyposażenie pojazdu",
        labels: ["Kluczyki (liczba)", "Pilotek zamka centralnego", "Dowód rejestracyjny", "Książeczka serwisowa", "Polisa OC", "Inne"],
      },
      {
        type: "multiline",
        title: "Uwagi i zastrzeżenia",
        note: "Opisz wszelkie zastrzeżenia, uszkodzenia lub problemy zauważone podczas odbioru.",
      },
      {
        type: "statement",
        title: "Potwierdzenie",
        html: "Poniższe strony potwierdzają, że pojazd został przekazany/odebrany w stanie opisanym powyżej. Strona odbierająca nie wnosi zastrzeżeń dotyczących stanu pojazdu ani wyposażenia.",
      },
    ],
    signatures: ["Podpis zdającego", "Podpis odbierającego"],
  });
}
