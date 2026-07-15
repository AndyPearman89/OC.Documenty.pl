import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildOswiadczenieSprawcyHtml() {
  return buildUniversalDocumentHtml({
    title: "OŚWIADCZENIE SPRAWCY KOLIZJI DROGOWEJ",
    legal: "Oficjalny wzór oświadczenia po zdarzeniu drogowym.",
    sections: [
      {
        type: "grid",
        title: "Dane sprawcy zdarzenia",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "Telefon", "E-mail"],
      },
      {
        type: "grid",
        title: "Dane pojazdu i ubezpieczenia sprawcy",
        labels: ["Marka i model", "Numer rejestracyjny", "Ubezpieczyciel", "Numer polisy OC"],
      },
      {
        type: "grid",
        title: "Dane drugiego uczestnika",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "Telefon"],
      },
      {
        type: "grid",
        title: "Dane pojazdu uczestnika",
        labels: ["Marka i model", "Numer rejestracyjny", "Widoczne uszkodzenia"],
      },
      {
        type: "multiline",
        title: "Opis zdarzenia",
        note: "Wymień kolejno: manewr, kierunek jazdy, miejsce zderzenia i zauważalne uszkodzenia.",
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Oświadczam, że jestem sprawcą opisanego zdarzenia. Podane dane są zgodne z prawdą i zostały podane dobrowolnie.",
      },
    ],
    signatures: ["Czytelny podpis sprawcy"],
  });
}
