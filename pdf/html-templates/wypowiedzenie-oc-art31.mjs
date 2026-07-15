import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildWypowiedzenieOcArt31Html() {
  return buildUniversalDocumentHtml({
    title: "WYPOWIEDZENIE UMOWY UBEZPIECZENIA OC — ARTYKUŁ 31",
    legal: "Wypowiedzenie polisy przejętej od sprzedawcy pojazdu (art. 31 ustawy o ubezpieczeniach obowiązkowych).",
    sections: [
      {
        type: "grid",
        title: "Dane kupującego pojazd",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon", "E-mail"],
      },
      {
        type: "grid",
        title: "Dane sprzedawcy pojazdu",
        labels: ["Imię i nazwisko", "Adres zamieszkania"],
      },
      {
        type: "grid",
        title: "Dane pojazdu",
        labels: ["Marka i model", "Numer rejestracyjny", "Numer VIN", "Rok produkcji"],
      },
      {
        type: "grid",
        title: "Dotychczasowa polisa OC",
        labels: ["Ubezpieczyciel", "Numer polisy", "Data zawarcia", "Ważna do"],
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Niniejszym wypowiadam umowę obowiązkowego ubezpieczenia OC objętą art. 31 ustawy o ubezpieczeniach obowiązkowych, która przeszła na mnie na mocy umowy kupna-sprzedaży pojazdu.<br><br>Proszę o potwierdzenie przyjęcia wypowiedzenia i rozliczenie polisy z dniem złożenia niniejszego dokumentu.",
      },
    ],
    signatures: ["Czytelny podpis kupującego"],
  });
}
