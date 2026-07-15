import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildOdwolanieOdDecyzjiHtml() {
  return buildUniversalDocumentHtml({
    title: "ODWOŁANIE OD DECYZJI UBEZPIECZYCIELA",
    legal: "Odwołanie od decyzji ubezpieczyciela dotyczącej odmowy wypłaty lub zaniżenia odszkodowania.",
    sections: [
      {
        type: "grid",
        title: "Dane wnioskodawcy",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon", "E-mail"],
      },
      {
        type: "grid",
        title: "Dane ubezpieczyciela i sprawy",
        labels: ["Ubezpieczyciel", "Numer polisy", "Numer sprawy/szkody", "Data decyzji"],
      },
      {
        type: "grid",
        title: "Zasady decyzji",
        labels: ["Wysokość proponowanego odszkodowania", "Przyczyna odmowy/zaniżenia (wg ubezpieczyciela)"],
      },
      {
        type: "multiline",
        title: "Uzasadnienie odwołania",
        note: "Opisz, dlaczego uważasz, że decyzja ubezpieczyciela jest błędna. Podaj argumenty i dowody.",
      },
      {
        type: "grid",
        title: "Roszczenie",
        labels: ["Żądana kwota odszkodowania", "Podstawa prawna roszczenia"],
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Nie zgadzam się z decyzją ubezpieczyciela. Odwołuję się od tej decyzji i wnoszę o ponowne rozpatrzenie sprawy oraz wypłatę pełnego odszkodowania lub kwoty wynikającej z moich obliczeń.",
      },
    ],
    signatures: ["Czytelny podpis"],
  });
}
