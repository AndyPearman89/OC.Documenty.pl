import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildReklamacjaHtml() {
  return buildUniversalDocumentHtml({
    title: "REKLAMACJA DO UBEZPIECZYCIELA",
    legal: "Wniosek o ponowne rozpatrzenie decyzji lub szkody.",
    sections: [
      {
        type: "grid",
        title: "Dane składającego reklamację",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon / e-mail"],
      },
      {
        type: "grid",
        title: "Dane ubezpieczyciela i sprawy",
        labels: ["Nazwa zakładu ubezpieczeń", "Numer polisy / szkody", "Data decyzji, której dotyczy reklamacja"],
      },
      {
        type: "checklist",
        title: "Przedmiot reklamacji",
        items: [
          "Odmowa wypłaty odszkodowania",
          "Zaniżona kwota odszkodowania",
          "Opóźnienie w rozpatrzeniu szkody",
          "Inny powód (opisany poniżej)",
        ],
        boxes: true,
      },
      {
        type: "multiline",
        title: "Uzasadnienie reklamacji",
      },
      {
        type: "statement",
        title: "Żądanie",
        html: "Wnoszę o ponowne rozpatrzenie sprawy i wskazane powyżej rozstrzygnięcie w terminie ustawowym. Oświadczam, że podane dane oraz okoliczności są zgodne z prawdą.",
      },
    ],
    signatures: ["Czytelny podpis składającego"],
  });
}
