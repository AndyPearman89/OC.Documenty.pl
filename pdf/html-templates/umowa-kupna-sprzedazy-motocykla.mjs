import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildUmowaKupnaSprzedazyMotocyklaHtml() {
  return buildUniversalDocumentHtml({
    title: "UMOWA KUPNA-SPRZEDAŻY MOTOCYKLA",
    legal: "Wzór profesjonalnej umowy zakupu lub sprzedaży motocykla.",
    sections: [
      {
        type: "grid",
        title: "Sprzedający",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL / dokument tożsamości"],
      },
      {
        type: "grid",
        title: "Kupujący",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL / dokument tożsamości"],
      },
      {
        type: "grid",
        title: "Przedmiot umowy — motocykl",
        labels: ["Marka i model", "Numer rejestracyjny", "Numer VIN", "Numer silnika", "Rok produkcji", "Przebieg (km)"],
      },
      {
        type: "grid",
        title: "Cena i warunki",
        labels: ["Cena sprzedaży (słownie i cyfrowo)", "Sposób i termin zapłaty", "Data i miejsce wydania pojazdu"],
      },
      {
        type: "statement",
        title: "Oświadczenia stron",
        html: "Sprzedający oświadcza, że jest właścicielem motocykla i jest uprawniony do jego sprzedaży. Pojazd jest wolny od wad prawnych i obciążeń oraz zgodny z opisem.<br><br>Kupujący oświadcza, że zapoznał się ze stanem technicznym pojazdu i nie wnosi zastrzeżeń. Pojazd przejmuje w stanie istniejącym.",
      },
    ],
    signatures: ["Podpis sprzedającego", "Podpis kupującego"],
  });
}
