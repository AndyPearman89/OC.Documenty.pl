import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildWypowiedzienieOcPodwojneHtml() {
  return buildUniversalDocumentHtml({
    title: "WYPOWIEDZENIE PODWÓJNEGO UBEZPIECZENIA OC",
    legal: "Pismo do jednego z ubezpieczycieli w przypadku podwójnego ubezpieczenia tego samego pojazdu.",
    sections: [
      {
        type: "grid",
        title: "Dane ubezpieczającego",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon"],
      },
      {
        type: "grid",
        title: "Polisa do wypowiedzenia",
        labels: ["Ubezpieczyciel", "Numer polisy", "Ważna do", "Numer rejestracyjny pojazdu"],
      },
      {
        type: "grid",
        title: "Druga (aktualna) polisa OC",
        labels: ["Ubezpieczyciel", "Numer polisy", "Data zawarcia", "Numer rejestracyjny pojazdu"],
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Oświadczam, że pojazd wskazany powyżej jest podwójnie ubezpieczony u dwóch różnych ubezpieczycieli w tym samym okresie ubezpieczenia. Poniewaz na pojazd przypadającą aktualnie polisę u innego ubezpieczyciela, niniejszym wypowiadam polisę nr __________ u Pana/Pani firmy.<br><br>Proszę o rozliczenie polisy i zwrot ewentualnej nadpłacony składki na wskazany rachunek bankowy.",
      },
    ],
    signatures: ["Czytelny podpis"],
  });
}
