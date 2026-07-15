import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildZgloszenieSprzedazyHtml() {
  return buildUniversalDocumentHtml({
    title: "ZGŁOSZENIE SPRZEDAŻY POJAZDU",
    legal: "Zawiadomienie ubezpieczyciela o zbyciu pojazdu.",
    sections: [
      {
        type: "grid",
        title: "Dane zbywcy (sprzedającego)",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon / e-mail"],
      },
      {
        type: "grid",
        title: "Dane nabywcy (kupującego)",
        labels: ["Imię i nazwisko / nazwa firmy", "Adres zamieszkania / siedziby", "PESEL / NIP"],
      },
      {
        type: "grid",
        title: "Dane pojazdu i polisy",
        labels: ["Marka i model pojazdu", "Numer rejestracyjny", "Numer VIN", "Numer polisy OC"],
      },
      {
        type: "grid",
        title: "Data i podstawa zbycia",
        labels: ["Data zbycia pojazdu", "Forma zbycia", "Numer dokumentu zbycia (jeśli dotyczy)"],
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Zawiadamiam, że w dniu wskazanym powyżej zbyłem/zbyłam wskazany pojazd na rzecz nabywcy.<br><br>Wnoszę o przeniesienie praw i obowiązków z polisy OC lub jej rozliczenie zgodnie z przepisami.",
      },
    ],
    signatures: ["Czytelny podpis zbywcy"],
  });
}
