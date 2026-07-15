import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildOswiadczenieWlascicielaHtml() {
  return buildUniversalDocumentHtml({
    title: "OŚWIADCZENIE WŁAŚCICIELA POJAZDU",
    legal: "Oświadczenie potwierdzające prawa i obowiązki właściciela pojazdu.",
    sections: [
      {
        type: "grid",
        title: "Dane właściciela",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon"],
      },
      {
        type: "grid",
        title: "Pojazd",
        labels: ["Marka i model", "Numer rejestracyjny", "Numer VIN", "Rok produkcji"],
      },
      {
        type: "grid",
        title: "Sposób własności",
        labels: ["Pełna własność", "Współwłasność", "Użytkowanie wieczyste", "Inne"],
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Oświadczam, że jestem właścicielem pojazdu opisanego powyżej. Pojazd nie jest obciążony hipoteką, zastawem ani żadnymi innymi obciążeniami prawnymi. Jestem zaznajomiony z obowiązkami wynikającymi z posiadania pojazdu, w tym obowiązkiem ubezpieczenia OC oraz zgłoszenia pojazdu do rejestracji.",
      },
    ],
    signatures: ["Czytelny podpis"],
  });
}
