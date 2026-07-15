import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildUmowaDarowiznySamochoduHtml() {
  return buildUniversalDocumentHtml({
    title: "UMOWA DAROWIZNY SAMOCHODU",
    legal: "Wzór przekazania pojazdu w formie darowizny.",
    sections: [
      {
        type: "grid",
        title: "Darczyńca",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL / dokument tożsamości"],
      },
      {
        type: "grid",
        title: "Obdarowany",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL / dokument tożsamości"],
      },
      {
        type: "grid",
        title: "Przedmiot darowizny — pojazd",
        labels: ["Marka i model", "Numer rejestracyjny", "Numer VIN", "Rok produkcji"],
      },
      {
        type: "grid",
        title: "Wartość i stan pojazdu",
        labels: [
          "Wartość rynkowa pojazdu (dla celów podatkowych)",
          "Stan techniczny w dniu darowizny",
          "Data i miejsce wydania pojazdu",
        ],
      },
      {
        type: "statement",
        title: "Oświadczenia stron",
        html: "Darczyńca oświadcza, że jest właścicielem pojazdu i przekazuje go nieodpłatnie Obdarowanemu.<br><br>Obdarowany oświadcza, że darowiznę przyjmuje i zapoznał się ze stanem technicznym pojazdu.",
      },
    ],
    signatures: ["Podpis Darczyńcy", "Podpis Obdarowanego"],
  });
}
