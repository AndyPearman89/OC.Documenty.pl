import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildOdstapienieOdUmowyHtml() {
  return buildUniversalDocumentHtml({
    title: "ODSTĄPIENIE OD UMOWY UBEZPIECZENIA ZAWARTEJ NA ODLEGŁOŚĆ",
    legal: "Formalny wzór odstąpienia od umowy zawartej online lub telefonicznie.",
    sections: [
      {
        type: "grid",
        title: "Dane konsumenta",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon / e-mail"],
      },
      {
        type: "grid",
        title: "Dane ubezpieczyciela i umowy",
        labels: ["Nazwa zakładu ubezpieczeń", "Numer polisy / umowy", "Data zawarcia umowy"],
      },
      {
        type: "checklist",
        title: "Sposób zawarcia umowy",
        items: [
          "Umowa zawarta przez internet",
          "Umowa zawarta telefonicznie",
          "Umowa zawarta poza lokalem przedsiębiorstwa",
        ],
        boxes: true,
      },
      {
        type: "grid",
        title: "Dane do zwrotu składki",
        labels: ["Numer rachunku bankowego"],
      },
      {
        type: "statement",
        title: "Podstawa prawna i oświadczenie",
        html: "Art. 40 ustawy o prawach konsumenta oraz art. 35 ustawy o dystrybucji ubezpieczeń dają prawo odstąpienia od umowy ubezpieczenia zawartej na odległość w terminie 30 dni od dnia poinformowania o zawarciu umowy, bez podawania przyczyny.<br><br>Niniejszym odstępuję od wskazanej powyżej umowy ubezpieczenia zawartej na odległość. Proszę o potwierdzenie odstąpienia oraz zwrot wpłaconej składki na wskazany rachunek.",
      },
    ],
    signatures: ["Czytelny podpis konsumenta"],
  });
}
