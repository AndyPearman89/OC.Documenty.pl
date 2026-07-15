import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildWypowiedzenieOcHtml() {
  return buildUniversalDocumentHtml({
    title: "WYPOWIEDZENIE UMOWY UBEZPIECZENIA OC",
    legal: "Podstawa prawna: art. 28 ustawy o ubezpieczeniach obowiązkowych.",
    sections: [
      {
        type: "grid",
        title: "Dane wypowiadającego",
        labels: ["Imię i nazwisko", "Adres", "PESEL", "Telefon", "E-mail"],
      },
      {
        type: "grid",
        title: "Dane ubezpieczyciela",
        labels: ["Nazwa", "Adres"],
      },
      {
        type: "grid",
        title: "Dane polisy",
        labels: ["Numer polisy", "Numer rejestracyjny", "Marka i model", "Okres ubezpieczenia"],
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Niniejszym wypowiadam umowę obowiązkowego ubezpieczenia OC zgodnie z obowiązującymi przepisami prawa.<br><br>Proszę o potwierdzenie przyjęcia niniejszego wypowiedzenia.",
      },
      {
        type: "checklist",
        title: "Załączniki",
        items: [
          "Dowód rejestracyjny (jeżeli wymagany)",
          "Potwierdzenie zawarcia nowej polisy (jeżeli dotyczy)",
          "Inne dokumenty",
        ],
      },
    ],
    signatures: ["Czytelny podpis"],
  });
}
