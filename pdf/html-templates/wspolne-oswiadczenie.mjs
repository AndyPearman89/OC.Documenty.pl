import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildWspolneOswiadczenieHtml() {
  return buildUniversalDocumentHtml({
    title: "WSPÓLNE OŚWIADCZENIE O ZDARZENIU DROGOWYM",
    legal: "Wspólny formularz uczestników kolizji drogowej.",
    sections: [
      {
        type: "grid",
        title: "Sprawca zdarzenia",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "Marka i model pojazdu", "Nr rejestracyjny"],
      },
      {
        type: "grid",
        title: "Drugi uczestnik",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "Marka i model pojazdu", "Nr rejestracyjny"],
      },
      {
        type: "multiline",
        title: "Opis przebiegu zdarzenia",
      },
      {
        type: "multiline",
        title: "Szkic sytuacyjny",
        note: "Zaznacz pojazdy, kierunek jazdy i miejsce zderzenia.",
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Potwierdzamy zgodność powyższych danych, opisu zdarzenia oraz szkicu sytuacyjnego.",
      },
    ],
    signatures: ["Czytelny podpis sprawcy", "Czytelny podpis uczestnika"],
  });
}
