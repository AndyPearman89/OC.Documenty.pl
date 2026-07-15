import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildOswiadczenieUtrataTablicHtml() {
  return buildUniversalDocumentHtml({
    title: "OŚWIADCZENIE O UTRACIE TABLIC REJESTRACYJNYCH",
    legal: "Oświadczenie o utracie lub zniszczeniu tablic rejestracyjnych pojazdu.",
    sections: [
      {
        type: "grid",
        title: "Dane właściciela pojazdu",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon"],
      },
      {
        type: "grid",
        title: "Pojazd",
        labels: ["Marka i model", "Numer rejestracyjny", "Numer VIN"],
      },
      {
        type: "grid",
        title: "Utracone tablice",
        labels: ["Liczba tablic", "Kolor tablic (białe/żółte)", "Data utraty", "Miejsce utraty"],
      },
      {
        type: "multiline",
        title: "Opis zdarzenia",
        note: "Opisz jak doszło do utraty tablic (kradzież, uszkodzenie, złe warunki pogodowe itp.).",
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Oświadczam, że utraciłem/zniszczył/em tablice rejestracyjne pojazdu opisanego powyżej. Wnoszę o wydanie nowych tablic rejestracyjnych. W przypadku podejrzenia kradzieży złożyłem zawiadomienie na policji.",
      },
    ],
    signatures: ["Czytelny podpis"],
  });
}
