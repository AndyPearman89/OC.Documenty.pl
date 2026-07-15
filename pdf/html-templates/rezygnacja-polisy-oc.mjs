import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildRezygnacjaPolisyOcHtml() {
  return buildUniversalDocumentHtml({
    title: "REZYGNACJA Z POLISY UBEZPIECZENIA OC",
    legal: "Pismo rezygnacji z polisy OC przed końcem okresu ubezpieczenia.",
    sections: [
      {
        type: "grid",
        title: "Dane ubezpieczającego",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon", "E-mail"],
      },
      {
        type: "grid",
        title: "Dane polisy",
        labels: ["Ubezpieczyciel", "Numer polisy", "Pojazd", "Numer rejestracyjny", "Polisa ważna do"],
      },
      {
        type: "multiline",
        title: "Powód rezygnacji",
        note: "Opisz powód rezygnacji z polisy (np. sprzedaż pojazdu, wymiana, zmiana ubezpieczyciela).",
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Niniejszym rezygnjuę z polisy ubezpieczenia OC na powyższych warunkach. Wnoszę o rozliczenie polisy z dniem złożenia niniejszego dokumentu.<br><br>Proszę o potwierdzenie przyjęcia rezygnacji oraz informację o terminie rozliczenia i zwrotu niewykorzystanej części składki.",
      },
    ],
    signatures: ["Czytelny podpis"],
  });
}
