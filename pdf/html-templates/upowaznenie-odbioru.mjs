import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildUpowaznieniaOdbioruHtml() {
  return buildUniversalDocumentHtml({
    title: "UPOWAŻNIENIE DO ODBIORU DOKUMENTÓW",
    legal: "Upoważnienie udzielające osobie trzeciej prawa do odbioru dokumentów pojazdu lub ubezpieczenia.",
    sections: [
      {
        type: "grid",
        title: "Dane upoważniającego",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon"],
      },
      {
        type: "grid",
        title: "Dane osoby upoważnionej",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL"],
      },
      {
        type: "grid",
        title: "Pojazd",
        labels: ["Marka i model", "Numer rejestracyjny", "Numer VIN"],
      },
      {
        type: "grid",
        title: "Dokumenty do odbioru",
        labels: [
          "Dowód rejestracyjny",
          "Polisa OC/AC",
          "Książeczka serwisowa",
          "Zaświadczenie z ubezpieczyciela",
          "Inne dokumenty",
        ],
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Upoważniam osobę wymienioną powyżej do odbioru dokumentów pojazdu wymienionego powyżej z moim imieniem, w tym dowodu rejestracyjnego, polisy OC/AC, książeczki serwisowej i wszelkich zaświadczeń wystawionych przez ubezpieczyciela lub organy administracyjne.",
      },
    ],
    signatures: ["Podpis upoważniającego", "Podpis osoby upoważnionej"],
  });
}
