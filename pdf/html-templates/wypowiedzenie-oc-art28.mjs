import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildWypowiedzenieOcArt28Html() {
  return buildUniversalDocumentHtml({
    title: "WYPOWIEDZENIE AUTOMATYCZNIE ODNOWIONEJ POLISY OC",
    legal: "Wypowiedzenie polisy, która została automatycznie odnowiona (art. 28 ustawy o ubezpieczeniach obowiązkowych).",
    sections: [
      {
        type: "grid",
        title: "Dane ubezpieczającego",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon", "E-mail"],
      },
      {
        type: "grid",
        title: "Dane ubezpieczyciela",
        labels: ["Nazwa zakładu ubezpieczeń", "Adres siedziby"],
      },
      {
        type: "grid",
        title: "Dane polisy",
        labels: ["Numer polisy", "Data automatycznego odnowienia", "Numer rejestracyjny pojazdu"],
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Oświadczam, że nie wyrażam zgody na automatyczne odnowienie polisy ubezpieczeniowej OC zawarartej powyżej.<br><br>Niniejszym wypowiadam umowę obowiązkowego ubezpieczenia OC na mocy art. 28 ustawy o ubezpieczeniach obowiązkowych z dniem złożenia niniejszego pismo.<br><br>Proszę o potwierdzenie przyjęcia wypowiedzenia.",
      },
    ],
    signatures: ["Czytelny podpis"],
  });
}
