import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildZwrotSkladkiOcHtml() {
  return buildUniversalDocumentHtml({
    title: "WNIOSEK O ZWROT SKŁADKI OC",
    legal: "Wniosek o rozliczenie niewykorzystanej części składki ubezpieczeniowej.",
    sections: [
      {
        type: "grid",
        title: "Dane wnioskodawcy",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon / e-mail"],
      },
      {
        type: "grid",
        title: "Dane ubezpieczyciela i polisy",
        labels: ["Nazwa zakładu ubezpieczeń", "Numer polisy OC", "Polisa ważna do"],
      },
      {
        type: "checklist",
        title: "Podstawa zwrotu składki",
        items: [
          "Sprzedaż lub zbycie pojazdu",
          "Wypowiedzenie umowy przed końcem okresu ochrony",
          "Podwójne ubezpieczenie po automatycznym wznowieniu",
          "Inna podstawa (opisana poniżej)",
        ],
        boxes: true,
      },
      {
        type: "grid",
        title: "Dane do zwrotu środków",
        labels: ["Numer rachunku bankowego", "Imię i nazwisko posiadacza rachunku", "Nazwa banku"],
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Wnoszę o zwrot niewykorzystanej części składki wskazanej powyżej polisy OC. Oświadczam, że podane dane oraz numer rachunku bankowego są zgodne z prawdą.",
      },
    ],
    signatures: ["Czytelny podpis wnioskodawcy"],
  });
}
