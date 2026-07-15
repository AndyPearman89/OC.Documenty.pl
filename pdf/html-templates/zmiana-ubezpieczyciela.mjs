import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildZmianaUbezpieczycielaHtml() {
  return buildUniversalDocumentHtml({
    title: "ZAWIADOMIENIE O ZMIANIE UBEZPIECZYCIELA OC",
    legal: "Pismo do uporządkowanego przejścia do nowego towarzystwa ubezpieczeń.",
    sections: [
      {
        type: "grid",
        title: "Dane ubezpieczającego",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon / e-mail"],
      },
      {
        type: "grid",
        title: "Dotychczasowy ubezpieczyciel",
        labels: ["Nazwa zakładu ubezpieczeń", "Numer dotychczasowej polisy", "Polisa ważna do"],
      },
      {
        type: "grid",
        title: "Nowy ubezpieczyciel i polisa",
        labels: ["Nazwa nowego zakładu ubezpieczeń", "Numer nowej polisy OC", "Nowa polisa obowiązuje od"],
      },
      {
        type: "grid",
        title: "Dane pojazdu",
        labels: ["Marka i model pojazdu", "Numer rejestracyjny", "Numer VIN"],
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Zawiadamiam, że z dniem wskazanym powyżej zmieniam ubezpieczyciela OC wskazanego pojazdu.<br><br>Proszę o potwierdzenie przyjęcia zawiadomienia oraz rozliczenie dotychczasowej polisy.",
      },
    ],
    signatures: ["Czytelny podpis ubezpieczającego"],
  });
}
