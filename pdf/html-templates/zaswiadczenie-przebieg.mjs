import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildZaswiadczeniePhrzebiegHtml() {
  return buildUniversalDocumentHtml({
    title: "WNIOSEK O ZAŚWIADCZENIE O PRZEBIEGU UBEZPIECZENIA",
    legal: "Wniosek do ubezpieczyciela o wydanie zaświadczenia o historii ubezpieczenia pojazdu.",
    sections: [
      {
        type: "grid",
        title: "Dane wnioskodawcy",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon"],
      },
      {
        type: "grid",
        title: "Dane ubezpieczyciela",
        labels: ["Ubezpieczyciel", "Liczba lat, za które chce zaświadczenie"],
      },
      {
        type: "grid",
        title: "Pojazd",
        labels: ["Marka i model", "Numer rejestracyjny", "Numer VIN", "Rok produkcji"],
      },
      {
        type: "grid",
        title: "Informacje do zaświadczenia",
        labels: ["Historia polisy (lata)", "Liczba roszczeń", "Awaryje i szkody", "Status ubezpieczenia"],
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Wnoszę o wydanie zaświadczenia o przebiegu ubezpieczenia pojazdu. Zaświadczenie jest potrzebne do założenia nowej polisy u innego ubezpieczyciela. Proszę o przesłanie zaświadczenia na adres e-mail lub pocztą.",
      },
    ],
    signatures: ["Czytelny podpis"],
  });
}
