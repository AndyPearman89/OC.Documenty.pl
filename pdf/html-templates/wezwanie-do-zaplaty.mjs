import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildWezwanieDoZplatyHtml() {
  return buildUniversalDocumentHtml({
    title: "WEZWANIE DO ZAPŁATY ODSZKODOWANIA",
    legal: "Wezwanie do zapłaty odszkodowania przed potencjalnym postępowaniem sądowym.",
    sections: [
      {
        type: "grid",
        title: "Dane wierzyciela (poszkodowanego)",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon"],
      },
      {
        type: "grid",
        title: "Dane dłużnika (odpowiedzialnego)",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL"],
      },
      {
        type: "grid",
        title: "Zdarzenie",
        labels: ["Data i miejsce zdarzenia", "Typ zdarzenia (kolizja, wypadek)", "Opisz zdarzenie krótko"],
      },
      {
        type: "grid",
        title: "Roszczenie",
        labels: ["Całkowita kwota żądanego odszkodowania", "Wyszczególnienie poniesionych strat", "Termin zapłaty"],
      },
      {
        type: "multiline",
        title: "Uzasadnienie roszczenia",
        note: "Opisz poniesione straty i podstawę prawną roszczenia.",
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Wezywam do zapłaty odszkodowania w kwocie wskazanej powyżej w terminie 14 dni od daty otrzymania niniejszego wezwania. Brak zapłaty w określonym terminie będzie podstawą do wszczęcia postępowania sądowego o zapłatę odszkodowania wraz z odsetkami ustawowymi i kosztami procesu.",
      },
    ],
    signatures: ["Czytelny podpis wierzyciela"],
  });
}
