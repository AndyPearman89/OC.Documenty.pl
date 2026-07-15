import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildUmowaKupnaSprzedazyPrzyczepyHtml() {
  return buildUniversalDocumentHtml({
    title: "UMOWA KUPNA-SPRZEDAŻY PRZYCZEPY",
    legal: "Wzór profesjonalnej umowy zakupu lub sprzedaży przyczepy.",
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
        title: "Przedmiot umowy — przyczepa",
        labels: ["Marka i model", "Numer rejestracyjny", "Numer fabryczny", "Rok produkcji", "Ładowność (kg)"],
      },
      {
        type: "grid",
        title: "Cena i warunki",
        labels: ["Cena sprzedaży (słownie i cyfrowo)", "Sposób i termin zapłaty", "Data i miejsce wydania"],
      },
      {
        type: "statement",
        title: "Oświadczenia stron",
        html: "Sprzedający oświadcza, że jest właścicielem przyczepy i jest uprawniony do jej sprzedaży. Przyczepa jest wolna od wad prawnych i obciążeń oraz zgodna z opisem.<br><br>Kupujący oświadcza, że zapoznał się ze stanem technicznym przyczepy i nie wnosi zastrzeżeń. Przyczepa przejmuje w stanie istniejącym.",
      },
    ],
    signatures: ["Podpis sprzedającego", "Podpis kupującego"],
  });
}
