export const documentCatalog = [
  { slug: "wypowiedzenie-oc", title: "Wypowiedzenie umowy OC", description: "Zakończ umowę obowiązkowego ubezpieczenia OC.", category: "Wypowiedzenia" },
  { slug: "zmiana-ubezpieczyciela", title: "Zmiana ubezpieczyciela OC", description: "Przygotuj pismo potrzebne do zmiany firmy.", category: "Wypowiedzenia" },
  { slug: "zwrot-skladki-oc", title: "Wniosek o zwrot składki OC", description: "Odzyskaj niewykorzystaną część opłaconej składki.", category: "Zwroty" },
  { slug: "oswiadczenie-sprawcy", title: "Oświadczenie sprawcy kolizji", description: "Zapisz wszystkie dane potrzebne po zdarzeniu drogowym.", category: "Oświadczenia" },
  { slug: "wspolne-oswiadczenie", title: "Wspólne oświadczenie o zdarzeniu", description: "Wspólny formularz sprawcy i drugiego uczestnika zdarzenia.", category: "Oświadczenia" },
  { slug: "zgloszenie-sprzedazy", title: "Zgłoszenie sprzedaży pojazdu", description: "Poinformuj ubezpieczyciela o sprzedaży samochodu.", category: "Pojazd" },
  { slug: "reklamacja", title: "Reklamacja do ubezpieczyciela", description: "Odwołaj się od decyzji lub sposobu obsługi szkody.", category: "Reklamacje" },
] as const;

export const insurers = ["PZU", "Warta", "Allianz", "LINK4", "UNIQA", "Generali", "Compensa", "ERGO Hestia", "InterRisk", "Proama", "TUW", "Benefia"] as const;

export const insurerProfiles = [
  { slug:"pzu", name:"PZU" }, { slug:"warta", name:"Warta" }, { slug:"allianz", name:"Allianz" },
  { slug:"link4", name:"LINK4" }, { slug:"uniqa", name:"UNIQA" }, { slug:"generali", name:"Generali" },
  { slug:"compensa", name:"Compensa" }, { slug:"ergo-hestia", name:"ERGO Hestia" }, { slug:"interrisk", name:"InterRisk" },
  { slug:"proama", name:"Proama" }, { slug:"tuw", name:"TUW" }, { slug:"benefia", name:"Benefia" },
] as const;
