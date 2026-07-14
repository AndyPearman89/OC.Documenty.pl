export type BlogCategory =
  | "Kolizje i wypadki"
  | "Ubezpieczenie OC"
  | "Kupno i sprzedaż auta"
  | "Odszkodowania"
  | "UFG i przepisy"
  | "Dokumenty i wzory"
  | "Porównania";

export const blogCategories: BlogCategory[] = [
  "Kolizje i wypadki",
  "Ubezpieczenie OC",
  "Kupno i sprzedaż auta",
  "Odszkodowania",
  "UFG i przepisy",
  "Dokumenty i wzory",
  "Porównania",
];

export type BlogPost = {
  slug: string;
  category: BlogCategory;
  title: string;
  excerpt: string;
  readingTime: string;
  date: string;
  featured?: boolean;
  lead: string;
  sections: string[];
  ctaLabel: string;
  ctaHref: string;
  related?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "co-zrobic-po-kolizji-samochodowej",
    category: "Kolizje i wypadki",
    title: "Co zrobić bezpośrednio po kolizji samochodowej?",
    excerpt: "Prosty plan działania od zabezpieczenia miejsca zdarzenia do przekazania dokumentów ubezpieczycielowi.",
    readingTime: "6 min",
    date: "2026-07-14",
    featured: true,
    lead: "Po kolizji najlepiej działa krótka, uporządkowana procedura. Najpierw bezpieczeństwo, potem dane, a dopiero później formalności.",
    sections: [
      "Sprawdź, czy nikt nie potrzebuje pomocy i czy miejsce zdarzenia jest bezpieczne.",
      "Zbierz dane uczestników, pojazdów, polisy oraz zrób zdjęcia uszkodzeń i otoczenia.",
      "Jeśli sytuacja jest sporna, skorzystaj z gotowego oświadczenia sprawcy lub wspólnego oświadczenia uczestników.",
    ],
    ctaLabel: "Otwórz oświadczenie sprawcy",
    ctaHref: "/oswiadczenie-sprawcy",
    related: ["oswiadczenie-sprawcy-kolizji-co-wpisac", "jak-zglosic-szkode-z-oc-sprawcy"],
  },
  {
    slug: "oswiadczenie-sprawcy-kolizji-co-wpisac",
    category: "Dokumenty i wzory",
    title: "Oświadczenie sprawcy kolizji – jak poprawnie je wypełnić?",
    excerpt: "Co wpisać, czego nie pomijać i jak zachować czytelny układ dokumentu po zdarzeniu drogowym.",
    readingTime: "5 min",
    date: "2026-07-13",
    featured: true,
    lead: "Dobrze wypełnione oświadczenie skraca późniejszą korespondencję z ubezpieczycielem i zmniejsza ryzyko pytań o podstawowe dane.",
    sections: [
      "Zacznij od daty, godziny, miejsca i pełnych danych uczestników zdarzenia.",
      "Opisuj fakty krótko i konkretnie — bez domysłów, bez nadmiarowych komentarzy.",
      "Na końcu podpisz dokument i dołącz go w formie PDF do zgłoszenia szkody.",
    ],
    ctaLabel: "Pobierz wzór PDF",
    ctaHref: "/dokumenty/oswiadczenie-sprawcy",
    related: ["co-zrobic-po-kolizji-samochodowej", "jak-zglosic-szkode-z-oc-sprawcy"],
  },
  {
    slug: "jak-zglosic-szkode-z-oc-sprawcy",
    category: "Odszkodowania",
    title: "Jak zgłosić szkodę z OC sprawcy?",
    excerpt: "Kiedy zgłaszać szkodę, jakie dane przygotować i jak przyspieszyć kontakt z likwidatorem.",
    readingTime: "6 min",
    date: "2026-07-12",
    lead: "Najsprawniej działa zgłoszenie, które od początku zawiera komplet danych o zdarzeniu, pojeździe, polisie i uszkodzeniach.",
    sections: [
      "Przygotuj numer polisy, dane sprawcy, opis zdarzenia i zdjęcia szkód.",
      "W zgłoszeniu wskaż, czy potrzebujesz samochodu zastępczego albo holowania.",
      "Jeśli chcesz zachować formalny ton, skorzystaj z gotowego wzoru zgłoszenia szkody lub reklamacji.",
    ],
    ctaLabel: "Zobacz wzory",
    ctaHref: "/dokumenty",
    related: ["co-zrobic-po-kolizji-samochodowej", "reklamacja-do-ubezpieczyciela-wzor"],
  },
  {
    slug: "jak-wypowiedziec-oc-bez-bledow",
    category: "Ubezpieczenie OC",
    title: "Jak wypowiedzieć OC bez błędów i bez stresu",
    excerpt: "Kiedy można wypowiedzieć polisę, jaką podstawę wybrać i jak nie pomylić terminu wysyłki.",
    readingTime: "5 min",
    date: "2026-07-11",
    featured: true,
    lead: "Największy problem przy wypowiedzeniu OC to nie sam formularz, ale zły moment albo źle dobrana podstawa prawna.",
    sections: [
      "Jeżeli polisa kończy się w standardowym terminie, skorzystaj z wypowiedzenia z zachowaniem okresu ustawowego.",
      "Jeżeli umowa odnowiła się automatycznie, sprawdź, czy masz już ważną polisę w innym towarzystwie.",
      "Przed wysyłką upewnij się, że numer polisy, dane pojazdu i dane właściciela są zgodne z dokumentami.",
    ],
    ctaLabel: "Wygeneruj wypowiedzenie",
    ctaHref: "/generator",
    related: ["wypowiedzenie-oc-po-zakupie-samochodu", "podwojne-oc-jak-uniknac"],
  },
  {
    slug: "kiedy-wzywac-policje-do-kolizji",
    category: "Kolizje i wypadki",
    title: "Kiedy wzywać policję do kolizji?",
    excerpt: "W jakich sytuacjach warto zgłosić zdarzenie służbom i kiedy wystarczy oświadczenie uczestników.",
    readingTime: "4 min",
    date: "2026-07-10",
    lead: "W wielu drobnych kolizjach wystarcza oświadczenie, ale są sytuacje, w których policja pomaga uporządkować fakty i zabezpieczyć dowody.",
    sections: [
      "Wezwij policję, gdy są wątpliwości co do sprawcy, ktoś jest ranny albo uczestnik odmawia podania danych.",
      "Jeżeli szkoda jest niewielka i strony są zgodne, oświadczenie zwykle wystarczy.",
      "Warto zrobić zdjęcia i spisać dane nawet wtedy, gdy policja była na miejscu zdarzenia.",
    ],
    ctaLabel: "Otwórz oświadczenie",
    ctaHref: "/oswiadczenie-sprawcy",
  },
  {
    slug: "podwojne-oc-jak-uniknac",
    category: "Ubezpieczenie OC",
    title: "Podwójne OC – jak uniknąć podwójnej składki?",
    excerpt: "Najczęstsze przyczyny podwójnej polisy i proste kroki, by nie płacić dwa razy.",
    readingTime: "5 min",
    date: "2026-07-09",
    lead: "Podwójne OC często wynika z automatycznego odnowienia albo niepełnego wypowiedzenia po zakupie auta.",
    sections: [
      "Sprawdź daty zawarcia i końca umów oraz to, czy stara polisa nie odnowiła się automatycznie.",
      "Jeżeli pojazd został kupiony z polisą poprzedniego właściciela, przeanalizuj, czy można ją skutecznie wypowiedzieć.",
      "Nie odkładaj wysyłki dokumentu na ostatni dzień — liczy się moment doręczenia, a nie samo przygotowanie pisma.",
    ],
    ctaLabel: "Wygeneruj wypowiedzenie OC",
    ctaHref: "/generator",
  },
  {
    slug: "jak-sprzedac-samochod-krok-po-kroku",
    category: "Kupno i sprzedaż auta",
    title: "Jak sprzedać samochód krok po kroku?",
    excerpt: "Lista formalności po sprzedaży auta: umowa, zgłoszenie zbycia i przekazanie dokumentów.",
    readingTime: "6 min",
    date: "2026-07-08",
    lead: "Dobra sprzedaż auta to nie tylko cena i przekazanie kluczyków, ale też jasna umowa i porządek w dokumentach.",
    sections: [
      "Przygotuj umowę kupna-sprzedaży i wpisz pełne dane stron oraz pojazdu.",
      "Po sprzedaży zgłoś zbycie pojazdu i zachowaj kopię dokumentów.",
      "Jeżeli kupujący jest współwłaścicielem lub pojazd przekazujesz w darowiźnie, wybierz właściwy wzór dokumentu.",
    ],
    ctaLabel: "Zobacz umowę",
    ctaHref: "/umowa-kupna-sprzedazy",
  },
  {
    slug: "jak-napisac-odwolanie-od-decyzji-ubezpieczyciela",
    category: "Odszkodowania",
    title: "Jak napisać odwołanie od decyzji ubezpieczyciela?",
    excerpt: "Kiedy warto się odwołać, co podnieść w treści i jak utrzymać formalny ton pisma.",
    readingTime: "6 min",
    date: "2026-07-07",
    lead: "Odwołanie najlepiej działa wtedy, gdy jest konkretne: wskazuje numer szkody, powód zastrzeżeń i oczekiwany efekt.",
    sections: [
      "Opisz, z czym się nie zgadzasz: wycena, zakres szkody, amortyzacja lub koszty naprawy.",
      "Dodaj dowody: zdjęcia, faktury, kosztorys albo niezależną opinię.",
      "Jeśli potrzebujesz, dołącz reklamację lub wezwanie do zapłaty w formie oddzielnego pisma.",
    ],
    ctaLabel: "Otwórz reklamację",
    ctaHref: "/dokumenty/reklamacja",
  },
  {
    slug: "kara-za-brak-oc-w-2026-roku",
    category: "UFG i przepisy",
    title: "Kara za brak OC w 2026 roku – co warto wiedzieć?",
    excerpt: "Jak działa kontrola, od czego zależy kara i kiedy można uniknąć dodatkowych kosztów.",
    readingTime: "4 min",
    date: "2026-07-06",
    lead: "Brak OC to nie tylko problem z UFG, ale też ryzyko regresu i dodatkowych roszczeń po kolizji.",
    sections: [
      "Kara zależy od rodzaju pojazdu i długości przerwy w ochronie.",
      "UFG może wykryć brak polisy nawet bez kontroli drogowej.",
      "Warto sprawdzić ważność polisy wcześniej i unikać przerw w ciągłości OC.",
    ],
    ctaLabel: "Sprawdź wypowiedzenie",
    ctaHref: "/generator",
  },
  {
    slug: "wypowiedzenie-oc-po-zakupie-samochodu",
    category: "Ubezpieczenie OC",
    title: "Wypowiedzenie OC po zakupie samochodu",
    excerpt: "Co zrobić z polisą poprzedniego właściciela i kiedy można ją wypowiedzieć bez komplikacji.",
    readingTime: "5 min",
    date: "2026-07-05",
    lead: "Polisa z kupionym autem nie zawsze wygasa automatycznie, więc warto od razu ustalić, co zrobić z ubezpieczeniem.",
    sections: [
      "Sprawdź datę końca ochrony i czy polisa nie przechodzi na nowego właściciela.",
      "Jeżeli chcesz z niej zrezygnować, przygotuj wypowiedzenie i wyślij je możliwie szybko.",
      "Jeżeli potrzebujesz umowy zakupu, skorzystaj z odpowiedniego wzoru dokumentu pojazdowego.",
    ],
    ctaLabel: "Wygeneruj wypowiedzenie",
    ctaHref: "/generator",
  },
  {
    slug: "reklamacja-do-ubezpieczyciela-wzor",
    category: "Dokumenty i wzory",
    title: "Reklamacja do ubezpieczyciela – wzór i najważniejsze elementy",
    excerpt: "Jak ułożyć reklamację, aby była jasna i od razu wskazywała, czego oczekujesz.",
    readingTime: "5 min",
    date: "2026-07-04",
    lead: "Reklamacja powinna być krótka, formalna i oparta na faktach: numer szkody, kwota, uzasadnienie i załączniki.",
    sections: [
      "W pierwszym akapicie wskaż sprawę, numer polisy albo szkody i opisz, czego dotyczy reklamacja.",
      "W kolejnych punktach zaznacz swoje zastrzeżenia i dołącz dowody.",
      "Na końcu wyślij pismo w PDF lub skorzystaj z gotowego wzoru do pobrania.",
    ],
    ctaLabel: "Pobierz wzór PDF",
    ctaHref: "/dokumenty/reklamacja",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
