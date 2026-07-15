import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildUmowaKupnaSprzedazyWspolwlascicielHtml() {
  return buildUniversalDocumentHtml({
    title: "UMOWA KUPNA-SPRZEDAŻY POJAZDU ZE WSPÓŁWŁAŚCICIELEM",
    legal: "Wzór umowy z udziałem współwłaściciela pojazdu.",
    sections: [
      {
        type: "grid",
        title: "Sprzedający",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL / dokument tożsamości"],
      },
      {
        type: "grid",
        title: "Kupujący (współwłaściciel 1)",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL / dokument tożsamości"],
      },
      {
        type: "grid",
        title: "Współwłaściciel 2",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "Udział we współwłasności"],
      },
      {
        type: "grid",
        title: "Pojazd, cena i warunki",
        labels: ["Marka, model, nr rej. i VIN", "Cena sprzedaży (słownie i cyfrowo)", "Sposób i termin zapłaty"],
      },
      {
        type: "statement",
        title: "Oświadczenia stron",
        html: "Sprzedający oświadcza, że pojazd jest wolny od wad prawnych i obciążeń oraz zgodny z opisem.<br><br>Kupujący nabywają pojazd na współwłasność w częściach wskazanych powyżej.",
      },
    ],
    signatures: ["Sprzedający", "Kupujący 1", "Kupujący 2"],
  });
}
