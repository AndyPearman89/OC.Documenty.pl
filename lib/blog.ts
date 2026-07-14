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
  summary: string;
  readingTime: string;
  date: string;
  featured?: boolean;
  lead: string;
  sections: Array<{ heading: string; body: string }>;
  highlights: string[];
  faq: Array<{ question: string; answer: string }>;
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
    summary: "Szybka checklista dla kierowcy, który chce ogarnąć formalności po kolizji bez chaosu i zbędnych pytań.",
    readingTime: "9 min",
    date: "2026-07-14",
    featured: true,
    lead: "Po kolizji najlepiej działa krótka, uporządkowana procedura. Najpierw bezpieczeństwo, potem dane, a dopiero później formalności.",
    sections: [
      {
        heading: "1. Zabezpiecz miejsce zdarzenia i sprawdź, czy ktoś nie potrzebuje pomocy",
        body: "Zanim zajmiesz się formalnościami, upewnij się, że nikt nie jest ranny i że miejsce zdarzenia nie stwarza dodatkowego zagrożenia. Włącz światła awaryjne, ustaw trójkąt ostrzegawczy w bezpiecznej odległości i, jeśli to możliwe, zjedź pojazdami na pobocze lub poza jezdnię, żeby nie blokować ruchu i nie narazić się na kolejną kolizję.\n\nJeśli ktoś jest ranny albo istnieje podejrzenie poważniejszych obrażeń, w pierwszej kolejności wezwij pogotowie i policję — formalności ubezpieczeniowe poczekają, bezpieczeństwo ludzi zawsze jest priorytetem.",
      },
      {
        heading: "2. Zbierz dane uczestników, pojazdów i polis",
        body: "Od drugiego uczestnika zdarzenia potrzebujesz kompletu danych: imienia, nazwiska, adresu, numeru dokumentu tożsamości, numeru rejestracyjnego pojazdu oraz nazwy ubezpieczyciela i numeru polisy OC. Warto też zapisać numer prawa jazdy i dane właściciela pojazdu, jeśli różnią się od danych kierowcy.\n\nJeśli w zdarzeniu uczestniczyli świadkowie, poproś ich o kontakt — w razie sporu co do przebiegu kolizji ich relacja może mieć duże znaczenie przy ustalaniu odpowiedzialności.",
      },
      {
        heading: "3. Udokumentuj zdarzenie zdjęciami",
        body: "Zrób zdjęcia ogólne, pokazujące ułożenie pojazdów względem siebie i drogi, a następnie zdjęcia zbliżeniowe uszkodzeń, tablic rejestracyjnych oraz elementów otoczenia, które mogą mieć znaczenie — znaków drogowych, sygnalizacji świetlnej, śladów hamowania czy warunków pogodowych. Im więcej materiału, tym łatwiej później odtworzyć przebieg zdarzenia, jeśli pojawią się wątpliwości.",
      },
      {
        heading: "4. Zdecyduj, czy wystarczy oświadczenie, czy potrzebna jest policja",
        body: "Przy drobnej, bezspornej kolizji, w której obie strony zgadzają się co do przebiegu zdarzenia i nikt nie jest ranny, zwykle wystarczy spisanie oświadczenia sprawcy albo wspólnego oświadczenia uczestników. Jeśli jednak są wątpliwości co do winy, ktoś odmawia podania danych albo doszło do obrażeń, lepiej wezwać policję — jej notatka ułatwi później likwidację szkody i ograniczy ryzyko sporu z ubezpieczycielem.",
      },
      {
        heading: "5. Zgłoś szkodę i przekaż komplet dokumentów",
        body: "Mając dane, zdjęcia i podpisane oświadczenie, możesz zgłosić szkodę do ubezpieczyciela sprawcy z polisy OC. Im szybciej to zrobisz, tym mniejsze ryzyko, że zapomnisz istotny szczegół albo zgubisz któryś z dokumentów. Warto zachować kopie wszystkiego, co wysyłasz — na wypadek, gdyby likwidator poprosił o uzupełnienie zgłoszenia.",
      },
    ],
    highlights: ["Bezpieczeństwo na pierwszym miejscu", "Zbierz dane i zdjęcia", "Przekaż dokumenty do likwidacji szkody"],
    faq: [
      { question: "Czy trzeba od razu dzwonić na policję?", answer: "Nie zawsze. Przy drobnej, zgodnej kolizji zwykle wystarczy oświadczenie uczestników. Policję warto wezwać, gdy są wątpliwości co do winy, ktoś jest ranny albo druga strona odmawia współpracy." },
      { question: "Jakie zdjęcia są najważniejsze?", answer: "Warto sfotografować położenie pojazdów względem siebie i drogi, zbliżenia uszkodzeń, tablice rejestracyjne oraz otoczenie zdarzenia, np. znaki drogowe czy ślady hamowania." },
      { question: "Co jeśli druga strona nie chce podpisać oświadczenia?", answer: "W takiej sytuacji najbezpieczniej wezwać policję, która sporządzi notatkę ze zdarzenia — to ułatwi późniejsze zgłoszenie szkody, nawet bez zgody drugiej strony." },
      { question: "Czy mogę zgłosić szkodę dopiero następnego dnia?", answer: "Tak, ale nie warto zwlekać zbyt długo — im szybciej zgłosisz szkodę, tym łatwiej odtworzyć szczegóły zdarzenia i uniknąć pytań o brakujące dane." },
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
    summary: "Wzór i praktyczne wskazówki, dzięki którym oświadczenie będzie czytelne dla ubezpieczyciela i drugiej strony zdarzenia.",
    readingTime: "8 min",
    date: "2026-07-13",
    featured: true,
    lead: "Dobrze wypełnione oświadczenie skraca późniejszą korespondencję z ubezpieczycielem i zmniejsza ryzyko pytań o podstawowe dane.",
    sections: [
      {
        heading: "1. Data, godzina i miejsce zdarzenia",
        body: "Na początku dokumentu zawsze podaj dokładną datę i godzinę kolizji oraz możliwie precyzyjne miejsce — nazwę ulicy, numer drogi, kilometraż albo charakterystyczny punkt orientacyjny, jeśli zdarzenie miało miejsce poza miastem. Te dane pozwalają ubezpieczycielowi jednoznacznie zidentyfikować zdarzenie i powiązać je z ewentualną dokumentacją policyjną czy monitoringiem.",
      },
      {
        heading: "2. Pełne dane uczestników i pojazdów",
        body: "Wpisz imię, nazwisko, adres zamieszkania i numer dokumentu tożsamości sprawcy oraz poszkodowanego, a także markę, model i numer rejestracyjny obu pojazdów. Nie pomijaj danych właściciela pojazdu, jeśli nie jest on kierowcą — to on figuruje na polisie i to jego dane będą potrzebne do identyfikacji ubezpieczenia.\n\nKoniecznie uzupełnij też nazwę towarzystwa ubezpieczeniowego i numer polisy OC sprawcy — bez tego zgłoszenie szkody może się opóźnić.",
      },
      {
        heading: "3. Opis przebiegu zdarzenia",
        body: "Opisuj fakty krótko i konkretnie: kto, skąd i dokąd jechał, w jaki sposób doszło do zderzenia i jakie było natężenie ruchu w danym momencie. Unikaj domysłów, ocen i nadmiarowych komentarzy — im bardziej rzeczowy opis, tym mniej pytań ze strony likwidatora szkody. Jeśli to możliwe, dodaj prosty szkic sytuacyjny pokazujący ułożenie pojazdów przed i po zdarzeniu.",
      },
      {
        heading: "4. Zakres uszkodzeń i okoliczności dodatkowe",
        body: "Wypisz widoczne uszkodzenia obu pojazdów — nawet drobne, które na pierwszy rzut oka wydają się nieistotne. Jeśli w zdarzeniu byli świadkowie, dopisz ich dane kontaktowe. Warto też zaznaczyć, czy na miejscu była policja i czy sporządzono notatkę — to ułatwi ubezpieczycielowi weryfikację zgłoszenia.",
      },
      {
        heading: "5. Podpisy i najczęstsze błędy",
        body: "Dokument musi zostać podpisany czytelnie przez obie strony — bez podpisu oświadczenie traci sens jako dowód uznania sprawstwa. Najczęstsze błędy to niekompletne dane polisy, brak dokładnej godziny zdarzenia oraz zbyt ogólnikowy opis, z którego trudno odtworzyć przebieg kolizji. Zanim przekażesz dokument dalej, sprawdź, czy wszystkie pola są wypełnione i czy dane liczbowe (numer rejestracyjny, numer polisy) się zgadzają.",
      },
    ],
    highlights: ["Dane, pojazd, opis zdarzenia", "Czytelny podpis sprawcy", "Wzór do pobrania jako PDF"],
    faq: [
      { question: "Czy oświadczenie można spisać odręcznie?", answer: "Tak, ważne jednak, aby było czytelne i zawierało wszystkie kluczowe dane. Wersja z gotowego wzoru PDF ułatwia jednak uniknięcie brakujących pól." },
      { question: "Czy warto dodać zdjęcia?", answer: "Tak — zdjęcia pomagają przy późniejszej likwidacji szkody i zmniejszają ryzyko sporów co do zakresu uszkodzeń." },
      { question: "Co jeśli sprawca się rozmyśli i nie chce podpisać oświadczenia?", answer: "Jeśli druga strona wycofuje się z podpisania dokumentu na miejscu zdarzenia, najbezpieczniej wezwać policję, która ustali okoliczności niezależnie od oświadczenia." },
      { question: "Czy jedno oświadczenie wystarczy przy większej liczbie uczestników?", answer: "Przy zdarzeniach z udziałem więcej niż dwóch pojazdów lepiej sprawdzi się wspólne oświadczenie uczestników, które pozwala opisać rolę każdej ze stron." },
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
    summary: "Krótki przewodnik po zgłoszeniu szkody z OC sprawcy — od danych pojętych po przydatne załączniki.",
    readingTime: "8 min",
    date: "2026-07-12",
    lead: "Najsprawniej działa zgłoszenie, które od początku zawiera komplet danych o zdarzeniu, pojeździe, polisie i uszkodzeniach.",
    sections: [
      {
        heading: "1. Kiedy i do kogo zgłosić szkodę",
        body: "Szkodę z OC zgłaszasz do ubezpieczyciela sprawcy zdarzenia, a nie do własnego towarzystwa — to podstawowa różnica względem ubezpieczenia AC. Najlepiej zrobić to możliwie szybko po zdarzeniu, gdy wszystkie szczegóły są jeszcze świeże, a dokumentacja fotograficzna kompletna. Większość ubezpieczycieli przyjmuje zgłoszenia online, telefonicznie oraz przez infolinię czynną całą dobę.",
      },
      {
        heading: "2. Jakie dane i dokumenty przygotować",
        body: "Do zgłoszenia potrzebujesz numeru polisy sprawcy, danych obu uczestników i pojazdów, opisu przebiegu zdarzenia oraz zdjęć uszkodzeń. Jeśli spisano oświadczenie sprawcy lub notatkę policyjną, dołącz je jako załącznik — to znacząco przyspiesza weryfikację zgłoszenia i ogranicza liczbę pytań ze strony likwidatora.",
      },
      {
        heading: "3. Wybór trybu likwidacji szkody",
        body: "Po zgłoszeniu ubezpieczyciel zwykle proponuje oględziny pojazdu — stacjonarne w warsztacie partnerskim albo mobilne, z rzeczoznawcą przyjeżdżającym na wskazany adres. Możesz też wybrać tryb bezgotówkowy, w którym naprawę rozlicza bezpośrednio warsztat z ubezpieczycielem, albo kosztorysowy, gdzie otrzymujesz odszkodowanie na konto i sam organizujesz naprawę.",
      },
      {
        heading: "4. Samochód zastępczy i holowanie",
        body: "Jeśli pojazd nie nadaje się do jazdy, w zgłoszeniu warto od razu zaznaczyć potrzebę holowania oraz samochodu zastępczego na czas naprawy — to standardowe świadczenia w ramach OC sprawcy, ale trzeba o nie wystąpić, bo nie są przyznawane automatycznie. Zachowaj rachunki za ewentualny transport pojazdu, jeśli organizujesz go samodzielnie przed kontaktem z ubezpieczycielem.",
      },
      {
        heading: "5. Co dzieje się po zgłoszeniu",
        body: "Po przyjęciu zgłoszenia ubezpieczyciel ma ustawowy termin na wydanie decyzji, w praktyce zwykle trwa to od kilku dni do kilku tygodni, w zależności od złożoności sprawy. Warto na bieżąco odpowiadać na prośby o dodatkowe dokumenty i pilnować numeru szkody — ułatwia on każdy kolejny kontakt z infolinią czy likwidatorem.",
      },
    ],
    highlights: ["Numer polisy i szkody", "Zakres uszkodzeń", "Samochód zastępczy i holowanie"],
    faq: [
      { question: "Ile czasu mam na zgłoszenie szkody?", answer: "Najlepiej zrobić to jak najszybciej po zdarzeniu, żeby nie gubić danych i zdjęć. Formalnie termin przedawnienia roszczeń jest znacznie dłuższy, ale zwłoka utrudnia dokumentowanie okoliczności." },
      { question: "Czy mogę zgłosić szkodę online?", answer: "Tak, większość ubezpieczycieli udostępnia formularz internetowy lub kontakt e-mail, a status sprawy można śledzić przez konto klienta." },
      { question: "Czym różni się tryb bezgotówkowy od kosztorysowego?", answer: "W trybie bezgotówkowym warsztat rozlicza się bezpośrednio z ubezpieczycielem, a Ty nie ponosisz kosztów naprawy z góry. W trybie kosztorysowym otrzymujesz odszkodowanie na konto i sam organizujesz naprawę." },
      { question: "Czy należy mi się samochód zastępczy?", answer: "Tak, jeśli pojazd jest niesprawny w wyniku zdarzenia — trzeba jednak wyraźnie zgłosić taką potrzebę przy kontakcie z ubezpieczycielem sprawcy." },
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
    summary: "Praktyczny poradnik o wypowiedzeniu OC, który pomaga wybrać właściwą podstawę i uniknąć podwójnej składki.",
    readingTime: "9 min",
    date: "2026-07-11",
    featured: true,
    lead: "Największy problem przy wypowiedzeniu OC to nie sam formularz, ale zły moment albo źle dobrana podstawa prawna.",
    sections: [
      {
        heading: "1. Trzy najczęstsze sytuacje, w których wypowiadasz OC",
        body: "Polisę OC można wypowiedzieć z końcem okresu ubezpieczenia, jeśli nie chcesz kontynuować umowy u dotychczasowego ubezpieczyciela, po zakupie pojazdu, gdy nie chcesz przejmować polisy poprzedniego właściciela, albo w sytuacji podwójnego ubezpieczenia, gdy dana polisa odnowiła się automatycznie mimo zawarcia nowej umowy gdzie indziej. Każda z tych sytuacji wymaga nieco innej podstawy i innego terminu wysyłki dokumentu.",
      },
      {
        heading: "2. Wypowiedzenie z końcem okresu ubezpieczenia",
        body: "Jeśli chcesz zmienić ubezpieczyciela po zakończeniu rocznej umowy, wypowiedzenie musi dotrzeć do towarzystwa najpóźniej na jeden dzień przed końcem okresu ochrony. Spóźnienie się nawet o jeden dzień oznacza, że umowa odnowi się automatycznie na kolejny rok — dlatego warto wysłać dokument z odpowiednim wyprzedzeniem, najlepiej listem poleconym lub e-mailem z potwierdzeniem odbioru.",
      },
      {
        heading: "3. Wypowiedzenie po zakupie pojazdu",
        body: "Nowy właściciel pojazdu automatycznie wstępuje w prawa i obowiązki z polisy OC poprzedniego właściciela, ale ma prawo ją wypowiedzieć w dowolnym momencie, bez zachowania terminu — polisa przestaje obowiązywać z dniem doręczenia wypowiedzenia albo z datą wskazaną w dokumencie. To najczęstsza sytuacja, w której nie trzeba pilnować konkretnego dnia w kalendarzu.",
      },
      {
        heading: "4. Jak uniknąć podwójnej składki",
        body: "Podwójne OC pojawia się najczęściej wtedy, gdy stara polisa odnowiła się automatycznie, mimo że zawarto już nową umowę w innym towarzystwie. Przed wysyłką wypowiedzenia sprawdź dokładnie datę końca poprzedniej ochrony i upewnij się, że dokument dotrze do ubezpieczyciela przed tym terminem albo — w przypadku zakupu auta — możliwie szybko po nabyciu pojazdu.",
      },
      {
        heading: "5. Najczęstsze błędy formalne",
        body: "Najczęstsze problemy to niezgodność numeru polisy, danych pojazdu albo właściciela z dokumentami ubezpieczyciela, brak podpisu oraz wysyłka na nieaktualny adres korespondencyjny. Zanim wyślesz wypowiedzenie, porównaj dane z polisą lub dowodem rejestracyjnym linijka po linijce — to najprostszy sposób, by uniknąć odrzucenia dokumentu i konieczności składania go ponownie.",
      },
    ],
    highlights: ["Właściwa podstawa prawna", "Termin doręczenia", "Brak podwójnej składki"],
    faq: [
      { question: "Czy wypowiedzenie można złożyć e-mailem?", answer: "W wielu przypadkach tak, ale warto sprawdzić, czy ubezpieczyciel akceptuje taki kanał i czy wymaga potwierdzenia odbioru." },
      { question: "Co jeśli polisa odnowiła się automatycznie?", answer: "Trzeba sprawdzić podstawę wypowiedzenia i nie zwlekać z wysyłką dokumentu, żeby nie płacić za dwie równoległe polisy." },
      { question: "Czy muszę podawać powód wypowiedzenia?", answer: "Zwykle wystarczy wskazać podstawę wypowiedzenia (np. koniec okresu ochrony albo zakup pojazdu) — nie trzeba uzasadniać decyzji szerzej." },
      { question: "Od kiedy przestaje obowiązywać wypowiedziana polisa?", answer: "Zależy od podstawy: przy wypowiedzeniu z końcem okresu — z dniem zakończenia umowy, przy wypowiedzeniu po zakupie auta — zwykle z dniem doręczenia dokumentu ubezpieczycielowi." },
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
    summary: "Wyjaśnienie, kiedy policja jest potrzebna, a kiedy można spokojnie zostać przy oświadczeniu uczestników.",
    readingTime: "7 min",
    date: "2026-07-10",
    lead: "W wielu drobnych kolizjach wystarcza oświadczenie, ale są sytuacje, w których policja pomaga uporządkować fakty i zabezpieczyć dowody.",
    sections: [
      {
        heading: "1. Kiedy wezwanie policji jest konieczne",
        body: "Policję trzeba wezwać zawsze, gdy w zdarzeniu ktoś został ranny, gdy istnieje podejrzenie, że kierowca był pod wpływem alkoholu lub innych substancji, oraz gdy jedna ze stron ucieka z miejsca zdarzenia lub odmawia podania danych. Warto ją wezwać także wtedy, gdy strony nie zgadzają się co do przebiegu zdarzenia lub winy — profesjonalna notatka znacząco ułatwia późniejszą likwidację szkody.",
      },
      {
        heading: "2. Kiedy wystarczy oświadczenie uczestników",
        body: "Jeśli kolizja jest drobna, nikt nie odniósł obrażeń, a obie strony zgadzają się co do przebiegu zdarzenia i winy, można spokojnie ograniczyć się do spisania oświadczenia. Taki dokument, uzupełniony zdjęciami i podpisany przez obie strony, w zupełności wystarczy do zgłoszenia szkody z OC sprawcy.",
      },
      {
        heading: "3. Co robić w oczekiwaniu na przyjazd policji",
        body: "Do czasu przyjazdu patrolu zabezpiecz miejsce zdarzenia, nie przestawiaj pojazdów bez wyraźnej potrzeby (chyba że blokują ruch i stwarzają zagrożenie) oraz zbieraj dane świadków. Warto też zrobić własną dokumentację fotograficzną — nawet jeśli na miejscu pojawi się policja, prywatne zdjęcia mogą się przydać przy ewentualnym sporze z ubezpieczycielem.",
      },
      {
        heading: "4. Dokumentacja zdarzenia niezależnie od obecności policji",
        body: "Niezależnie od tego, czy na miejscu byli funkcjonariusze, warto samodzielnie spisać podstawowe dane uczestników i zrobić zdjęcia. Notatka policyjna bywa dostępna dopiero po kilku dniach, a szybkie zgłoszenie szkody do ubezpieczyciela często wymaga wcześniejszego kompletu informacji.",
      },
    ],
    highlights: ["Spór o winę", "Uczestnik bez dokumentów", "Poszkodowany lub ranny"],
    faq: [
      { question: "Czy policja zawsze przyjeżdża do stłuczki?", answer: "Nie, jeśli nie ma zagrożenia i strony są zgodne, zwykle wystarczy własne oświadczenie uczestników." },
      { question: "Czy warto spisać dane nawet bez policji?", answer: "Tak, to znacznie ułatwia późniejsze zgłoszenie szkody i pozwala uniknąć problemów, gdyby druga strona zmieniła wersję wydarzeń." },
      { question: "Co jeśli druga strona twierdzi, że to nie jej wina?", answer: "W przypadku sporu co do winy najbezpieczniej wezwać policję — jej notatka będzie ważnym dowodem przy ustalaniu odpowiedzialności przez ubezpieczyciela." },
      { question: "Czy mandat od razu określa winnego kolizji?", answer: "Nie zawsze — mandat dotyczy naruszenia przepisów, a ostateczną ocenę odpowiedzialności cywilnej za szkodę i tak przeprowadza ubezpieczyciel na podstawie zebranej dokumentacji." },
    ],
    ctaLabel: "Otwórz oświadczenie",
    ctaHref: "/oswiadczenie-sprawcy",
    related: ["co-zrobic-po-kolizji-samochodowej", "oswiadczenie-sprawcy-kolizji-co-wpisac"],
  },
  {
    slug: "podwojne-oc-jak-uniknac",
    category: "Ubezpieczenie OC",
    title: "Podwójne OC – jak uniknąć podwójnej składki?",
    excerpt: "Najczęstsze przyczyny podwójnej polisy i proste kroki, by nie płacić dwa razy.",
    summary: "Krótki przewodnik, jak rozpoznać podwójne OC i co zrobić, żeby nie przepłacać za ochronę.",
    readingTime: "8 min",
    date: "2026-07-09",
    lead: "Podwójne OC często wynika z automatycznego odnowienia albo niepełnego wypowiedzenia po zakupie auta.",
    sections: [
      {
        heading: "1. Skąd bierze się podwójne OC",
        body: "Najczęstszą przyczyną jest automatyczne wznowienie polisy — jeśli nie wypowiesz jej w terminie, umowa przedłuża się na kolejny rok, nawet gdy w międzyczasie zawarłeś nowe ubezpieczenie u innego ubezpieczyciela. Drugi typowy scenariusz to zakup pojazdu z aktywną polisą poprzedniego właściciela, którą trzeba świadomie wypowiedzieć, jeśli chcesz korzystać z własnego ubezpieczenia.",
      },
      {
        heading: "2. Automatyczne wznowienie a zakup auta",
        body: "Te dwie sytuacje wymagają innego podejścia. Przy automatycznym wznowieniu decyduje termin — wypowiedzenie musi dotrzeć do ubezpieczyciela przed końcem bieżącego okresu ochrony. Przy zakupie auta polisa poprzedniego właściciela przechodzi na Ciebie z mocy prawa, ale możesz ją wypowiedzieć w dowolnym momencie, bez zachowania terminu, jeśli wolisz korzystać z innej oferty.",
      },
      {
        heading: "3. Jak sprawdzić, czy masz podwójną polisę",
        body: "Najprościej sprawdzić to przez konto klienta u obu ubezpieczycieli albo dzwoniąc na infolinię i pytając o status polisy oraz datę jej zakończenia. Warto też przejrzeć historię płatności składek — druga, nieoczekiwana płatność zwykle sygnalizuje, że poprzednia umowa nie została skutecznie zakończona.",
      },
      {
        heading: "4. Jak skutecznie wypowiedzieć zbędną polisę",
        body: "Przygotuj wypowiedzenie z poprawnymi danymi polisy, pojazdu i właściciela, wybierz właściwą podstawę (koniec okresu, zakup pojazdu albo podwójne ubezpieczenie) i wyślij dokument z odpowiednim wyprzedzeniem, najlepiej w formie umożliwiającej potwierdzenie doręczenia. Zachowaj kopię wysłanego pisma i potwierdzenie nadania — to Twój dowód w razie sporu o datę złożenia wypowiedzenia.",
      },
      {
        heading: "5. Co zrobić, jeśli już zapłaciłeś podwójnie",
        body: "Jeśli mimo starań doszło do podwójnej płatności, skontaktuj się z ubezpieczycielem i zgłoś reklamację z prośbą o zwrot nienależnie pobranej składki za okres, w którym obowiązywała już inna polisa. W wielu przypadkach ubezpieczyciele zwracają nadpłatę proporcjonalnie do niewykorzystanego okresu ochrony, jeśli skutecznie wykażesz zawarcie nowej umowy.",
      },
    ],
    highlights: ["Jedna polisa na jeden pojazd", "Uważaj na automatyczne odnowienie", "Sprawdź datę doręczenia"],
    faq: [
      { question: "Czy podwójne OC zawsze oznacza karę?", answer: "Nie, ale oznacza najczęściej niepotrzebny koszt i konieczność uporządkowania dokumentów, a nie sankcję ze strony UFG." },
      { question: "Jak sprawdzić, czy polisa się odnowiła?", answer: "Najpewniej przez dokumenty, konto ubezpieczyciela lub kontakt z obsługą klienta — warto zapytać wprost o datę końca ochrony." },
      { question: "Czy mogę odzyskać pieniądze za podwójną polisę?", answer: "Tak, w wielu przypadkach można ubiegać się o zwrot nadpłaconej składki za okres, w którym obowiązywała już inna, ważna polisa." },
      { question: "Czy sprzedawca auta musi mnie poinformować o aktywnej polisie?", answer: "Dobra praktyka nakazuje przekazanie takiej informacji przy sprzedaży, ale niezależnie od tego warto samodzielnie zweryfikować status ubezpieczenia po zakupie pojazdu." },
    ],
    ctaLabel: "Wygeneruj wypowiedzenie OC",
    ctaHref: "/generator",
    related: ["jak-wypowiedziec-oc-bez-bledow", "wypowiedzenie-oc-po-zakupie-samochodu"],
  },
  {
    slug: "jak-sprzedac-samochod-krok-po-kroku",
    category: "Kupno i sprzedaż auta",
    title: "Jak sprzedać samochód krok po kroku?",
    excerpt: "Lista formalności po sprzedaży auta: umowa, zgłoszenie zbycia i przekazanie dokumentów.",
    summary: "Poukładany zestaw kroków dla sprzedającego, który chce zamknąć temat auta bez błędów formalnych.",
    readingTime: "9 min",
    date: "2026-07-08",
    lead: "Dobra sprzedaż auta to nie tylko cena i przekazanie kluczyków, ale też jasna umowa i porządek w dokumentach.",
    sections: [
      {
        heading: "1. Przygotowanie do sprzedaży",
        body: "Przed spotkaniem z kupującym skompletuj dowód rejestracyjny, kartę pojazdu (jeśli była wydana), potwierdzenie ostatniego przeglądu technicznego oraz dane polisy OC. Warto też przygotować historię serwisową, jeśli ją posiadasz — zwiększa to zaufanie kupującego i ułatwia negocjacje ceny.",
      },
      {
        heading: "2. Umowa kupna-sprzedaży",
        body: "W umowie muszą znaleźć się pełne dane obu stron, dokładny opis pojazdu (marka, model, numer VIN, numer rejestracyjny, rok produkcji), cena oraz data i miejsce zawarcia umowy. Warto sporządzić dwa jednobrzmiące egzemplarze — po jednym dla każdej strony — i upewnić się, że oba są podpisane czytelnie.",
      },
      {
        heading: "3. Zgłoszenie zbycia pojazdu",
        body: "Po sprzedaży masz obowiązek zgłosić zbycie pojazdu do odpowiedniego wydziału komunikacji — zwykle w krótkim terminie liczonym od dnia sprzedaży. Zgłoszenie zabezpiecza Cię przed konsekwencjami związanymi z pojazdem, którego formalnie nie jesteś już właścicielem, np. mandatami czy opłatami rejestrowanymi na Twoje dane.",
      },
      {
        heading: "4. Co dzieje się z polisą OC po sprzedaży",
        body: "Polisa OC przechodzi na kupującego z mocy prawa wraz z pojazdem — to on decyduje, czy chce ją kontynuować, czy wypowiedzieć i zawrzeć nową umowę. Ty jako sprzedający możesz ubiegać się o zwrot składki za niewykorzystany okres ochrony, jeśli opłaciłeś polisę z góry na dłuższy czas, a kupujący ją wypowiedział.",
      },
      {
        heading: "5. Dokumenty, które warto zachować",
        body: "Po sprzedaży zachowaj kopię umowy kupna-sprzedaży, potwierdzenie zgłoszenia zbycia pojazdu oraz — jeśli to możliwe — potwierdzenie odbioru dokumentów przez kupującego. To zabezpieczenie na wypadek, gdyby po transakcji pojawiły się jakiekolwiek wątpliwości co do daty czy warunków sprzedaży.",
      },
    ],
    highlights: ["Umowa i dane stron", "Zgłoszenie zbycia", "Przekazanie dokumentów"],
    faq: [
      { question: "Czy sprzedaż trzeba zgłaszać od razu?", answer: "Warto zrobić to możliwie szybko, żeby uniknąć problemów z polisą i korespondencją kierowaną wciąż na Twoje dane." },
      { question: "Czy umowa wystarczy przy sprzedaży?", answer: "To podstawowy dokument, ale po transakcji trzeba też dopilnować zgłoszenia zbycia pojazdu i sprawdzenia statusu polisy OC." },
      { question: "Czy należy mi się zwrot za niewykorzystane OC?", answer: "Tak, jeśli kupujący wypowie przejętą polisę, możesz ubiegać się o zwrot składki proporcjonalnie do niewykorzystanego okresu ochrony." },
      { question: "Co jeśli kupujący nie zgłosi zakupu pojazdu?", answer: "Zgłoszenie zbycia leży po Twojej stronie jako sprzedającego i zabezpiecza Cię niezależnie od tego, czy kupujący dopełni swoich formalności rejestracyjnych." },
    ],
    ctaLabel: "Zobacz umowę",
    ctaHref: "/umowa-kupna-sprzedazy",
    related: ["wypowiedzenie-oc-po-zakupie-samochodu", "podwojne-oc-jak-uniknac"],
  },
  {
    slug: "jak-napisac-odwolanie-od-decyzji-ubezpieczyciela",
    category: "Odszkodowania",
    title: "Jak napisać odwołanie od decyzji ubezpieczyciela?",
    excerpt: "Kiedy warto się odwołać, co podnieść w treści i jak utrzymać formalny ton pisma.",
    summary: "Praktyczne wskazówki do odwołania i reklamacji, gdy chcesz zakwestionować decyzję ubezpieczyciela.",
    readingTime: "8 min",
    date: "2026-07-07",
    lead: "Odwołanie najlepiej działa wtedy, gdy jest konkretne: wskazuje numer szkody, powód zastrzeżeń i oczekiwany efekt.",
    sections: [
      {
        heading: "1. Kiedy warto się odwołać",
        body: "Odwołanie ma sens wtedy, gdy nie zgadzasz się z wyceną szkody, zastosowaną amortyzacją części, zakresem uznanych uszkodzeń albo całkowitą odmową wypłaty odszkodowania. Zanim je napiszesz, sprawdź uzasadnienie decyzji ubezpieczyciela — pomoże Ci to precyzyjnie wskazać, z którym elementem się nie zgadzasz.",
      },
      {
        heading: "2. Co powinno zawierać dobre odwołanie",
        body: "Na początku podaj numer szkody i polisy, dane swoje oraz datę decyzji, od której się odwołujesz. W kolejnej części jasno opisz, z czym się nie zgadzasz — czy to zaniżona wycena, pominięte uszkodzenia, czy błędnie ustalona odpowiedzialność — i czego oczekujesz: ponownej wyceny, dopłaty konkretnej kwoty albo zmiany decyzji.",
      },
      {
        heading: "3. Dowody i załączniki wzmacniające odwołanie",
        body: "Najlepiej działają konkretne dowody: niezależny kosztorys naprawy, faktury za wykonane naprawy, dokumentacja fotograficzna uszkodzeń albo opinia rzeczoznawcy. Jeśli dysponujesz kilkoma wycenami warsztatów, dołącz je wszystkie — pokazują one realny koszt naprawy na rynku, a nie tylko jedną, potencjalnie zaniżoną ofertę.",
      },
      {
        heading: "4. Forma i termin złożenia odwołania",
        body: "Odwołanie warto złożyć pisemnie — listownie lub e-mailem, w formie umożliwiającej potwierdzenie wysłania — i zachować kopię dla siebie. Większość ubezpieczycieli ma określony, ustawowy termin na rozpatrzenie reklamacji, zwykle liczony w tygodniach od dnia jej wpływu, po którym powinieneś otrzymać pisemną odpowiedź.",
      },
      {
        heading: "5. Co zrobić, jeśli odwołanie zostanie odrzucone",
        body: "Jeśli ubezpieczyciel podtrzyma swoje stanowisko, masz prawo zwrócić się o pomoc do Rzecznika Finansowego, złożyć skargę do Komisji Nadzoru Finansowego albo rozważyć drogę sądową, szczególnie przy sporach o wyższe kwoty. Warto zachować całą korespondencję z ubezpieczycielem — będzie potrzebna jako dokumentacja sprawy na kolejnych etapach.",
      },
    ],
    highlights: ["Numer szkody i polisy", "Dowody i załączniki", "Jasne żądanie zmiany decyzji"],
    faq: [
      { question: "Czy odwołanie musi być długie?", answer: "Nie, ważniejsze jest precyzyjne wskazanie, z czym się nie zgadzasz i dlaczego, poparte konkretnymi dowodami." },
      { question: "Czy mogę dołączyć własny kosztorys?", answer: "Tak, to często pomaga przy ponownej ocenie szkody i pokazuje realny koszt naprawy na rynku." },
      { question: "Ile czasu ma ubezpieczyciel na odpowiedź?", answer: "Standardowo obowiązuje ustawowy termin liczony w tygodniach od dnia złożenia reklamacji — dokładny czas warto zweryfikować w regulaminie danego ubezpieczyciela." },
      { question: "Co jeśli ubezpieczyciel nie odpowie w terminie?", answer: "Brak odpowiedzi w ustawowym terminie może być traktowany jako uznanie reklamacji za zasadną, ale warto to dodatkowo zweryfikować i w razie potrzeby zwrócić się o pomoc do Rzecznika Finansowego." },
    ],
    ctaLabel: "Otwórz reklamację",
    ctaHref: "/dokumenty/reklamacja",
    related: ["reklamacja-do-ubezpieczyciela-wzor", "jak-zglosic-szkode-z-oc-sprawcy"],
  },
  {
    slug: "kara-za-brak-oc-w-2026-roku",
    category: "UFG i przepisy",
    title: "Kara za brak OC w 2026 roku – co warto wiedzieć?",
    excerpt: "Jak działa kontrola, od czego zależy kara i kiedy można uniknąć dodatkowych kosztów.",
    summary: "Wyjaśnienie zasad UFG i kar za brak OC, z naciskiem na praktyczne konsekwencje dla kierowcy.",
    readingTime: "7 min",
    date: "2026-07-06",
    lead: "Brak OC to nie tylko problem z UFG, ale też ryzyko regresu i dodatkowych roszczeń po kolizji.",
    sections: [
      {
        heading: "1. Jak działa system kontroli UFG",
        body: "Ubezpieczeniowy Fundusz Gwarancyjny na bieżąco porównuje bazy danych ubezpieczycieli z rejestrem pojazdów, dzięki czemu może wykryć przerwę w ochronie OC bez udziału policji czy kontroli drogowej. Jeśli system stwierdzi brak ważnej polisy, właściciel pojazdu otrzymuje wezwanie do wyjaśnienia sytuacji lub bezpośrednio decyzję o nałożeniu opłaty.",
      },
      {
        heading: "2. Od czego zależy wysokość kary",
        body: "Wysokość opłaty zależy przede wszystkim od rodzaju pojazdu (osobowy, ciężarowy, inny) oraz długości przerwy w ochronie — im dłuższy okres bez ważnej polisy, tym wyższa opłata, aż do określonego ustawowo maksimum. Warto pamiętać, że opłata jest naliczana niezależnie od tego, czy w czasie przerwy doszło do jakiejkolwiek szkody.",
      },
      {
        heading: "3. Konsekwencje poza samą opłatą",
        body: "Brak ważnej polisy OC w momencie spowodowania szkody oznacza, że UFG pokrywa odszkodowanie poszkodowanemu, a następnie może dochodzić zwrotu tej kwoty od sprawcy w ramach tzw. regresu. W praktyce oznacza to, że koszt szkody — czasem znacznie wyższy niż sama opłata karna — może obciążyć kierowcę osobiście.",
      },
      {
        heading: "4. Jak uniknąć przerwy w ochronie",
        body: "Najprostszym sposobem jest pilnowanie dat zakończenia polisy i wcześniejsze ustalenie, czy chcesz ją kontynuować, wypowiedzieć, czy zmienić ubezpieczyciela. Przy zakupie pojazdu warto od razu sprawdzić status przejętej polisy, a przy sprzedaży — upewnić się, że nowy właściciel jest świadomy swoich obowiązków ubezpieczeniowych.",
      },
    ],
    highlights: ["Rodzaj pojazdu ma znaczenie", "Przerwa w ochronie podnosi koszt", "UFG wykrywa braki automatycznie"],
    faq: [
      { question: "Czy kara za brak OC jest taka sama dla wszystkich?", answer: "Nie, zależy od rodzaju pojazdu i długości przerwy w ubezpieczeniu — im dłuższa przerwa, tym wyższa opłata." },
      { question: "Czy brak OC widać tylko przy kontroli?", answer: "Nie, UFG może wykryć brak polisy również bez zatrzymania drogowego, porównując bazy danych ubezpieczycieli z rejestrem pojazdów." },
      { question: "Czy krótka przerwa też jest karana?", answer: "Tak, nawet krótka przerwa w ochronie może skutkować opłatą — jej wysokość jest jednak proporcjonalnie niższa niż przy dłuższych okresach bez polisy." },
      { question: "Co się dzieje, jeśli spowoduję szkodę bez ważnego OC?", answer: "Odszkodowanie poszkodowanemu wypłaca wtedy UFG, a następnie może dochodzić zwrotu tej kwoty od sprawcy w ramach regresu — koszt bywa znacznie wyższy niż sama opłata karna." },
    ],
    ctaLabel: "Sprawdź wypowiedzenie",
    ctaHref: "/generator",
    related: ["jak-wypowiedziec-oc-bez-bledow", "podwojne-oc-jak-uniknac"],
  },
  {
    slug: "wypowiedzenie-oc-po-zakupie-samochodu",
    category: "Ubezpieczenie OC",
    title: "Wypowiedzenie OC po zakupie samochodu",
    excerpt: "Co zrobić z polisą poprzedniego właściciela i kiedy można ją wypowiedzieć bez komplikacji.",
    summary: "Poradnik dla osób po zakupie auta, które chcą uporządkować polisę po przejęciu pojazdu.",
    readingTime: "8 min",
    date: "2026-07-05",
    lead: "Polisa z kupionym autem nie zawsze wygasa automatycznie, więc warto od razu ustalić, co zrobić z ubezpieczeniem.",
    sections: [
      {
        heading: "1. Co dzieje się z polisą po zakupie auta",
        body: "Zgodnie z przepisami polisa OC przechodzi na nowego właściciela wraz z pojazdem — nie musisz zawierać nowej umowy od razu, żeby legalnie poruszać się samochodem. To rozwiązanie chroni przed przerwą w ochronie tuż po transakcji, ale nie zawsze jest korzystne finansowo, jeśli przejęta polisa jest droższa niż oferty dostępne na rynku.",
      },
      {
        heading: "2. Kiedy warto wypowiedzieć przejętą polisę",
        body: "Wypowiedzenie ma sens, gdy znajdziesz korzystniejszą ofertę u innego ubezpieczyciela, gdy przejęta polisa ma niższą sumę gwarancyjną lub gorszy zakres ochrony, albo gdy po prostu wolisz kontynuować współpracę z ubezpieczycielem, u którego masz już inne polisy. Jako nowy właściciel możesz to zrobić w dowolnym momencie, bez konieczności czekania na koniec okresu ochrony.",
      },
      {
        heading: "3. Jak przygotować i wysłać wypowiedzenie",
        body: "W dokumencie podaj swoje dane jako nowego właściciela, dane pojazdu (numer rejestracyjny, VIN) oraz numer przejętej polisy, a także datę nabycia pojazdu — najlepiej załączyć kopię umowy kupna-sprzedaży jako potwierdzenie. Wypowiedzenie warto wysłać możliwie szybko po zakupie, żeby uniknąć nieporozumień co do daty zakończenia ochrony z przejętej polisy.",
      },
      {
        heading: "4. Co jeśli chcesz zachować polisę poprzedniego właściciela",
        body: "Jeśli warunki przejętej polisy Ci odpowiadają, możesz jej nie wypowiadać — będzie obowiązywać do końca opłaconego okresu, a Ty jako nowy właściciel przejmujesz też obowiązek terminowej płatności kolejnej składki, jeśli umowa się przedłuży. Warto tylko zaktualizować dane właściciela u ubezpieczyciela, żeby korespondencja i ewentualne zgłoszenia szkód trafiały do właściwej osoby.",
      },
    ],
    highlights: ["Przejęcie polisy", "Wypowiedzenie po zakupie", "Sprawdzenie daty końca ochrony"],
    faq: [
      { question: "Czy OC przechodzi na nowego właściciela?", answer: "Tak, ale trzeba sprawdzić warunki i zdecydować, czy warto je zachować, czy wypowiedzieć na rzecz korzystniejszej oferty." },
      { question: "Czy muszę wypowiedzieć polisę od razu po zakupie?", answer: "Jeśli chcesz z niej zrezygnować, warto zrobić to szybko, zgodnie z właściwą podstawą — nie musisz jednak czekać na koniec okresu ochrony." },
      { question: "Czy poprzedni właściciel dostanie zwrot składki?", answer: "Tak, jeśli wypowiesz przejętą polisę, poprzedni właściciel może ubiegać się o zwrot składki za niewykorzystany okres ochrony." },
      { question: "Czy muszę zgłaszać zmianę właściciela ubezpieczycielowi?", answer: "Tak, warto zaktualizować dane właściciela, nawet jeśli nie zamierzasz wypowiadać polisy — ułatwia to kontakt i ewentualne zgłoszenie szkody." },
    ],
    ctaLabel: "Wygeneruj wypowiedzenie",
    ctaHref: "/generator",
    related: ["jak-wypowiedziec-oc-bez-bledow", "jak-sprzedac-samochod-krok-po-kroku"],
  },
  {
    slug: "reklamacja-do-ubezpieczyciela-wzor",
    category: "Dokumenty i wzory",
    title: "Reklamacja do ubezpieczyciela – wzór i najważniejsze elementy",
    excerpt: "Jak ułożyć reklamację, aby była jasna i od razu wskazywała, czego oczekujesz.",
    summary: "Wzór i zasady pisania reklamacji, która ma duże szanse zostać od razu zrozumiana przez ubezpieczyciela.",
    readingTime: "8 min",
    date: "2026-07-04",
    lead: "Reklamacja powinna być krótka, formalna i oparta na faktach: numer szkody, kwota, uzasadnienie i załączniki.",
    sections: [
      {
        heading: "1. Kiedy warto złożyć reklamację",
        body: "Reklamację składasz wtedy, gdy nie zgadzasz się z decyzją ubezpieczyciela — czy to dotyczącą wysokości odszkodowania, zakresu uznanej szkody, terminu wypłaty, czy jakości obsługi. To formalna droga wyrażenia sprzeciwu, która poprzedza ewentualne dalsze kroki, np. odwołanie się do Rzecznika Finansowego.",
      },
      {
        heading: "2. Struktura dobrej reklamacji",
        body: "Na początku wskaż numer polisy albo szkody i krótko opisz, czego dotyczy sprawa. W kolejnej części precyzyjnie wymień swoje zastrzeżenia — punkt po punkcie, jeśli jest ich kilka — a na końcu jasno sformułuj oczekiwany efekt: ponowną wycenę, dopłatę konkretnej kwoty albo zmianę wcześniejszej decyzji.",
      },
      {
        heading: "3. Dowody i uzasadnienie",
        body: "Reklamację warto poprzeć konkretnymi dowodami: fakturami, kosztorysem naprawy, dokumentacją fotograficzną albo niezależną opinią rzeczoznawcy. Im więcej twardych argumentów, tym mniejsze ryzyko, że ubezpieczyciel odrzuci reklamację z braku podstaw do zmiany decyzji.",
      },
      {
        heading: "4. Terminy rozpatrzenia reklamacji",
        body: "Ubezpieczyciele mają ustawowy termin na udzielenie odpowiedzi na reklamację, liczony od dnia jej otrzymania. Warto wysłać dokument w formie umożliwiającej potwierdzenie doręczenia — e-mailem z potwierdzeniem odczytu albo listem poleconym — żeby mieć pewność co do daty rozpoczęcia biegu terminu.",
      },
      {
        heading: "5. Co dalej, jeśli reklamacja zostanie odrzucona",
        body: "Jeśli odpowiedź ubezpieczyciela Cię nie satysfakcjonuje, możesz zwrócić się o pomoc do Rzecznika Finansowego, złożyć skargę do Komisji Nadzoru Finansowego albo rozważyć drogę sądową. Zachowaj całą korespondencję — będzie potrzebna jako dokumentacja sprawy na każdym kolejnym etapie postępowania.",
      },
    ],
    highlights: ["Nazwa sprawy i numer szkody", "Wniosek o ponowne rozpatrzenie", "Załączniki i dowody"],
    faq: [
      { question: "Czy reklamacja może być krótka?", answer: "Tak, jeśli jest konkretna i zawiera wszystkie najważniejsze dane oraz jasno sformułowane żądanie." },
      { question: "Czy warto wskazać oczekiwaną kwotę?", answer: "Tak, jeśli masz podstawę do wyliczenia i chcesz jasno określić żądanie — ułatwia to ubezpieczycielowi szybką ocenę sprawy." },
      { question: "Ile czasu ma ubezpieczyciel na odpowiedź na reklamację?", answer: "Obowiązuje ustawowy termin liczony od dnia otrzymania reklamacji — dokładny czas warto zweryfikować w regulaminie reklamacyjnym danego ubezpieczyciela." },
      { question: "Czy reklamację i odwołanie można złożyć jednocześnie?", answer: "Zwykle są to elementy tej samej ścieżki formalnej — reklamacja jest pierwszym krokiem, a jeśli nie przyniesie efektu, można rozważyć kolejne, dalsze środki." },
    ],
    ctaLabel: "Pobierz wzór PDF",
    ctaHref: "/dokumenty/reklamacja",
    related: ["jak-napisac-odwolanie-od-decyzji-ubezpieczyciela", "jak-zglosic-szkode-z-oc-sprawcy"],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
