import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildOswiadczenieUtrataDowodu() {
  return buildUniversalDocumentHtml({
    title: "OŚWIADCZENIE O UTRACIE DOWODU REJESTRACYJNEGO",
    legal: "Oświadczenie o utracie lub zniszczeniu dowodu rejestracyjnego pojazdu.",
    sections: [
      {
        type: "grid",
        title: "Dane właściciela pojazdu",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon"],
      },
      {
        type: "grid",
        title: "Pojazd",
        labels: ["Marka i model", "Numer rejestracyjny", "Numer VIN", "Rok produkcji"],
      },
      {
        type: "grid",
        title: "Utracony dowód rejestracyjny",
        labels: ["Seria i numer dowodu", "Data wydania dowodu", "Data utraty", "Miejsce utraty"],
      },
      {
        type: "multiline",
        title: "Opis zdarzenia",
        note: "Opisz jak doszło do utraty dowodu (kradzież, zniszczenie, utrata w transporcie itp.).",
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Oświadczam, że utraciłem/zniszczył/em dowód rejestracyjny pojazdu opisanego powyżej. Wnoszę o wydanie duplikatu dowodu rejestracyjnego. W przypadku podejrzenia kradzieży złożyłem zawiadomienie na policji.",
      },
    ],
    signatures: ["Czytelny podpis"],
  });
}
