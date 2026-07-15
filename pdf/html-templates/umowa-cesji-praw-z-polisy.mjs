import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildUmowaCesjiPrawZPolisyHtml() {
  return buildUniversalDocumentHtml({
    title: "UMOWA CESJI PRAW Z POLISY UBEZPIECZENIOWEJ",
    legal: "Wzór przeniesienia praw z polisy na nowy podmiot.",
    sections: [
      {
        type: "grid",
        title: "Cedent (dotychczasowy uprawniony)",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL"],
      },
      {
        type: "grid",
        title: "Cesjonariusz (nowy uprawniony)",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL"],
      },
      {
        type: "grid",
        title: "Dane polisy i pojazdu",
        labels: ["Ubezpieczyciel", "Numer polisy", "Marka, model i nr rejestracyjny"],
      },
      {
        type: "grid",
        title: "Warunki cesji",
        labels: ["Zakres przenoszonych praw", "Data przejścia praw", "Zgoda ubezpieczyciela (jeśli wymagana)"],
      },
      {
        type: "statement",
        title: "Oświadczenia stron",
        html: "Cedent przenosi na Cesjonariusza wskazane powyżej prawa wynikające z polisy ubezpieczeniowej.<br><br>Cesjonariusz oświadcza, że przyjmuje przenoszone prawa i związane z nimi obowiązki.",
      },
    ],
    signatures: ["Podpis Cedenta", "Podpis Cesjonariusza"],
  });
}
