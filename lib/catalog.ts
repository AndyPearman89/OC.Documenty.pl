export const documentCatalog = [
  { slug: "wypowiedzenie-oc", title: "Wypowiedzenie umowy OC", description: "Formalny wzór zakończenia obowiązkowej umowy OC.", category: "Wypowiedzenia" },
  { slug: "zmiana-ubezpieczyciela", title: "Zmiana ubezpieczyciela OC", description: "Pismo do uporządkowanego przejścia do nowego towarzystwa.", category: "Wypowiedzenia" },
  { slug: "zwrot-skladki-oc", title: "Wniosek o zwrot składki OC", description: "Wniosek o rozliczenie niewykorzystanej części składki.", category: "Zwroty" },
  { slug: "oswiadczenie-sprawcy", title: "Oświadczenie sprawcy kolizji", description: "Urzędowy wzór oświadczenia po zdarzeniu drogowym.", category: "Oświadczenia" },
  { slug: "wspolne-oswiadczenie", title: "Wspólne oświadczenie o zdarzeniu", description: "Wspólny formularz uczestników kolizji drogowej.", category: "Oświadczenia" },
  { slug: "zgloszenie-sprzedazy", title: "Zgłoszenie sprzedaży pojazdu", description: "Zawiadomienie ubezpieczyciela o zbyciu pojazdu.", category: "Pojazd" },
  { slug: "umowa-kupna-sprzedazy", title: "Umowa kupna-sprzedaży pojazdu", description: "Profesjonalny wzór umowy zakupu auta lub motocykla.", category: "Pojazd" },
  { slug: "umowa-kupna-sprzedazy-wspolwlasciciel", title: "Umowa kupna-sprzedaży samochodu ze współwłaścicielem", description: "Wzór umowy z udziałem współwłaściciela pojazdu.", category: "Pojazd" },
  { slug: "umowa-cesji-praw-z-polisy", title: "Umowa cesji praw z polisy ubezpieczeniowej", description: "Wzór przeniesienia praw z polisy na nowy podmiot.", category: "Umowy" },
  { slug: "umowa-darowizny-samochodu", title: "Umowa darowizny samochodu", description: "Wzór przekazania pojazdu w formie darowizny.", category: "Umowy" },
  { slug: "odstapienie-od-umowy-ubezpieczenia-zawartej-na-odleglosc", title: "Odstąpienie od umowy ubezpieczenia zawartej na odległość", description: "Formalny wzór odstąpienia od umowy zawartej online.", category: "Odstąpienia" },
  { slug: "reklamacja", title: "Reklamacja do ubezpieczyciela", description: "Wniosek o ponowne rozpatrzenie decyzji lub szkody.", category: "Reklamacje" },
] as const;

export const generatorDocuments = [
  { slug: "wypowiedzenie-oc", title: "Wypowiedzenie OC", description: "Główny generator wypowiedzenia umowy.", group: "Odstąpienia" },
  { slug: "odstapienie-od-umowy-ubezpieczenia-zawartej-na-odleglosc", title: "Odstąpienie od umowy", description: "Wzór odstąpienia od umowy zawartej na odległość.", group: "Odstąpienia" },
  { slug: "umowa-kupna-sprzedazy", title: "Umowa kupna-sprzedaży", description: "Wypełnij dane stron i pojazdu.", group: "Umowy" },
  { slug: "umowa-kupna-sprzedazy-wspolwlasciciel", title: "Umowa ze współwłaścicielem", description: "Wypełnij umowę z dodatkowym współwłaścicielem.", group: "Umowy" },
  { slug: "umowa-cesji-praw-z-polisy", title: "Cesja praw z polisy", description: "Wzór do przeniesienia praw z polisy.", group: "Umowy" },
  { slug: "umowa-darowizny-samochodu", title: "Darowizna samochodu", description: "Wzór umowy darowizny pojazdu.", group: "Umowy" },
  { slug: "oswiadczenie-sprawcy", title: "Oświadczenie sprawcy", description: "Dodaj dane zdarzenia i podpis.", group: "Oświadczenia" },
  { slug: "wspolne-oswiadczenie", title: "Wspólne oświadczenie", description: "Zbierz dane obu uczestników.", group: "Oświadczenia" },
] as const;

export const insurers = ["PZU", "Warta", "Allianz", "LINK4", "UNIQA", "Generali", "Compensa", "ERGO Hestia", "InterRisk", "Proama", "TUW", "Benefia"] as const;

export const insurerProfiles = [
  { slug: "pzu", name: "PZU" },
  { slug: "warta", name: "Warta" },
  { slug: "allianz", name: "Allianz" },
  { slug: "link4", name: "LINK4" },
  { slug: "uniqa", name: "UNIQA" },
  { slug: "generali", name: "Generali" },
  { slug: "compensa", name: "Compensa" },
  { slug: "ergo-hestia", name: "ERGO Hestia" },
  { slug: "interrisk", name: "InterRisk" },
  { slug: "proama", name: "Proama" },
  { slug: "tuw", name: "TUW" },
  { slug: "benefia", name: "Benefia" },
] as const;
