import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildZgloszenieZbyciaHtml() {
  return buildUniversalDocumentHtml({
    title: "ZGŁOSZENIE ZBYCIA POJAZDU",
    legal: "Pismo do CEPiK o zbyciu pojazdu przez poprzedniego właściciela.",
    sections: [
      {
        type: "grid",
        title: "Dane zbywcy (sprzedającego)",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon"],
      },
      {
        type: "grid",
        title: "Dane nabywcy (kupującego)",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL"],
      },
      {
        type: "grid",
        title: "Pojazd",
        labels: ["Marka i model", "Numer rejestracyjny", "Numer VIN", "Rok produkcji"],
      },
      {
        type: "grid",
        title: "Data i dokument zbycia",
        labels: ["Data zbycia pojazdu", "Dokument zbycia (np. umowa)", "Numer dokumentu (jeśli dotyczy)"],
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Zawiadamiam, że zbyłem pojazd opisany powyżej na rzecz osoby fizycznej/prawnej wymienionej powyżej w dniu wskazanym powyżej.<br><br>Wnoszę o zanotowanie zbycia pojazdu w Centralnej Ewidencji Pojazdów i Kierowców oraz przeniesienie odpowiedzialności za pojazd na nowego właściciela.",
      },
    ],
    signatures: ["Czytelny podpis zbywcy"],
  });
}
