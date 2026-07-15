import { buildUniversalDocumentHtml } from "./universal-document-template.mjs";

export function buildPelnomocnictwoOgolneHtml() {
  return buildUniversalDocumentHtml({
    title: "PEŁNOMOCNICTWO OGÓLNE",
    legal: "Pełnomocnictwo udzielające pełnomocnikowi szerokich uprawnień do reprezentacji w sprawach pojazdów i ubezpieczeń.",
    sections: [
      {
        type: "grid",
        title: "Dane mocodawcy",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL", "Telefon"],
      },
      {
        type: "grid",
        title: "Dane pełnomocnika",
        labels: ["Imię i nazwisko", "Adres zamieszkania", "PESEL"],
      },
      {
        type: "grid",
        title: "Zakres umocowania",
        labels: [
          "Reprezentacja w sprawach rejestracji pojazdu",
          "Reprezentacja wobec ubezpieczycieli",
          "Podpisywanie dokumentów",
          "Odbieranie odszkodowań",
          "Inne czynności",
        ],
      },
      {
        type: "multiline",
        title: "Szczegółowe uprawnienia",
        note: "Opisz dokładnie, jakie czynności pełnomocnik może podejmować w moim imieniu.",
      },
      {
        type: "statement",
        title: "Oświadczenie",
        html: "Upoważniam osobę wymienioną powyżej do reprezentowania mnie we wszystkich sprawach dotyczących pojazdów mechanicznych, ubezpieczeń OC/AC, rejestracji pojazdów oraz likwidacji szkód ubezpieczeniowych. Pełnomocnik jest upoważniony do podpisywania dokumentów i odbierania wszelkich decyzji administracyjnych.",
      },
    ],
    signatures: ["Podpis mocodawcy", "Podpis pełnomocnika"],
  });
}
