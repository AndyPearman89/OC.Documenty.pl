import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildUmowaKupnaSprzedazyHtml() {
  return buildUniversalDocumentHtml({
    title: "UMOWA KUPNA-SPRZEDAŻY POJAZDU",
    legal: "Profesjonalny wzór umowy zakupu samochodu lub motocykla.",
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
        title: "Przedmiot umowy — pojazd",
        labels: ["Marka i model", "Numer rejestracyjny", "Numer VIN", "Rok produkcji", "Przebieg (km)"],
      },
      {
        type: "grid",
        title: "Cena i warunki",
        labels: ["Cena sprzedaży (słownie i cyfrowo)", "Sposób i termin zapłaty", "Data i miejsce wydania pojazdu"],
      },
      {
        type: "statement",
        title: "Oświadczenia stron",
        html: "Sprzedający oświadcza, że pojazd jest wolny od wad prawnych i obciążeń oraz zgodny z opisem.<br><br>Kupujący oświadcza, że zapoznał się ze stanem technicznym pojazdu i nie wnosi zastrzeżeń.",
      },
    ],
    signatures: ["Podpis sprzedającego", "Podpis kupującego"],
  });
}
