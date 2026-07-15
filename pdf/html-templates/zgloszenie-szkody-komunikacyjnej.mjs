import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildZgloszenieSczkodyHtml() {
  return buildUniversalDocumentHtml({
    title: "ZGŁOSZENIE SZKODY KOMUNIKACYJNEJ",
    legal: "Zawiadomienie o szkodzie powstałej w wyniku zdarzenia drogowego do ubezpieczyciela.",
    sections: [
      {
        type: "grid",
        title: "Dane poszkodowanego",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon", "E-mail"],
      },
      {
        type: "grid",
        title: "Dane ubezpieczyciela i polisy",
        labels: ["Ubezpieczyciel", "Numer polisy", "Pojazd", "Numer rejestracyjny"],
      },
      {
        type: "grid",
        title: "Zdarzenie drogowe",
        labels: ["Data zdarzenia", "Godzina", "Miejsce (adres)", "Warunki pogodowe"],
      },
      {
        type: "grid",
        title: "Drugi uczestnik (jeśli dotyczy)",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "Ubezpieczyciel drugiej strony", "Numer polisy drugiej strony"],
      },
      {
        type: "multiline",
        title: "Opis zdarzenia i uszkodzeń",
        note: "Opisz szczegółowo jak doszło do zdarzenia, uszkodzenia pojazdu i poniesione straty.",
      },
      {
        type: "grid",
        title: "Straty i uszkodzenia",
        labels: ["Szacunkowa kwota szkody", "Poszkodowani (liczba)", "Pojazdy uszkodzone"],
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Zawiadamiam o szkodzie powstałej w wyniku zdarzenia drogowego opisanego powyżej. Wnoszę o wszczęcie postępowania likwidacyjnego i ustalenie wysokości odszkodowania.",
      },
    ],
    signatures: ["Czytelny podpis poszkodowanego"],
  });
}
