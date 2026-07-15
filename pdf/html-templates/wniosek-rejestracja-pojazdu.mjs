import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildWniosekRejestracyjHtml() {
  return buildUniversalDocumentHtml({
    title: "WNIOSEK O REJESTRACJĘ POJAZDU",
    legal: "Wniosek złożony w wydziale komunikacji o rejestrację pojazdu.",
    sections: [
      {
        type: "grid",
        title: "Dane właściciela pojazdu",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon"],
      },
      {
        type: "grid",
        title: "Pojazd",
        labels: ["Marka i model", "Numer VIN", "Rok produkcji", "Pojemność silnika (cm³)", "Moc (KM)"],
      },
      {
        type: "grid",
        title: "Dokumenty załączone",
        labels: ["Dowód tożsamości", "Dowód własności pojazdu", "Certyfikat pochodzenia lub zagraniczna rejestracja", "Ubezpieczenie OC"],
      },
      {
        type: "grid",
        title: "Dane ubezpieczenia OC",
        labels: ["Ubezpieczyciel", "Numer polisy OC", "Ważna od", "Ważna do"],
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Wnoszę o rejestrację pojazdu opisanego powyżej w Centralnej Ewidencji Pojazdów i Kierowców i wydanie dowodu rejestracyjnego. Oświadczam, że pojazd jest ubezpieczony OC zgodnie z wymogami ustawy.",
      },
    ],
    signatures: ["Czytelny podpis"],
  });
}
