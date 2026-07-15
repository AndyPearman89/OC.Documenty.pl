import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildZawiadomienieNabycieHtml() {
  return buildUniversalDocumentHtml({
    title: "ZAWIADOMIENIE O NABYCIU POJAZDU",
    legal: "Pismo do ubezpieczyciela o nabyciu nowego pojazdu lub zmianie właściciela.",
    sections: [
      {
        type: "grid",
        title: "Dane nabywcy pojazdu",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon", "E-mail"],
      },
      {
        type: "grid",
        title: "Dane nabytego pojazdu",
        labels: ["Marka i model", "Numer rejestracyjny", "Numer VIN", "Rok produkcji", "Przebieg (km)"],
      },
      {
        type: "grid",
        title: "Dotychczasowa polisa (jeśli dotyczy)",
        labels: ["Ubezpieczyciel", "Numer polisy", "Pojazd", "Ważna do"],
      },
      {
        type: "grid",
        title: "Nowe ubezpieczenie",
        labels: ["Preferowany ubezpieczyciel", "Zakres ochrony", "Data wejścia w życie"],
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Zawiadamiam, że nabyłem pojazd opisany powyżej i wnoszę o przeniesienie ochrony ubezpieczeniowej na nowy pojazd lub zawarcie nowej polisy OC.<br><br>Wnoszę o potwierdzenie otrzymania zawiadomienia oraz informacje o warunkach ubezpieczenia nowego pojazdu.",
      },
    ],
    signatures: ["Czytelny podpis"],
  });
}
