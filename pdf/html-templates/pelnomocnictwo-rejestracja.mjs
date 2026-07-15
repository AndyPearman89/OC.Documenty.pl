import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildPelnomocnictwoRejestracyjHtml() {
  return buildUniversalDocumentHtml({
    title: "PEŁNOMOCNICTWO DO REJESTRACJI POJAZDU",
    legal: "Pełnomocnictwo upoważniające do złożenia wniosku o rejestrację pojazdu.",
    sections: [
      {
        type: "grid",
        title: "Dane mocodawcy (właściciela pojazdu)",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon"],
      },
      {
        type: "grid",
        title: "Dane pełnomocnika",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL"],
      },
      {
        type: "grid",
        title: "Pojazd",
        labels: ["Marka i model", "Numer VIN", "Rok produkcji"],
      },
      {
        type: "grid",
        title: "Zakres umocowania",
        labels: ["Złożenie wniosku o rejestrację", "Odbieranie dokumentów", "Reprezentacja w urzędzie", "Inne czynności"],
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Ja, niżej podpisany/a, upoważniam osobę wymienioną powyżej do reprezentowania mnie przed organami rejestracyjnymi w sprawach rejestracji pojazdu, w tym do złożenia wniosków, podpisywania dokumentów i odbierania decyzji administracyjnych.",
      },
    ],
    signatures: ["Podpis mocodawcy", "Podpis pełnomocnika"],
  });
}
