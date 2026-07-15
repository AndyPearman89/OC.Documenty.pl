import type { Metadata } from 'next';
import {
  ArrowRight,
  FileText,
  Clock,
  HelpCircle,
  CheckCircle,
  Shield,
  BookOpen,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DocumentShowcase } from '@/components/DocumentShowcase';
import { TrustBadges } from '@/components/TrustBadges';

export const metadata: Metadata = {
  title: 'Wypowiedzenie umowy OC — Generator',
  description:
    'Szybko, bezpiecznie i wygodnie wygeneruj wypowiedzenie umowy OC w PDF lub DOCX. Zgodne z prawem, gotowe w 2 minuty.',
  alternates: { canonical: '/dokument/wypowiedzenie-oc' },
};

const whyChoose = [
  {
    icon: '⚡',
    title: 'Szybko i wygodnie',
    description: 'Gotowy dokument w zaledwie 2 minuty',
  },
  {
    icon: '🛡️',
    title: 'Bezpieczne dane',
    description: 'Wszystko szyfrowane i chronione lokalnie',
  },
  {
    icon: '✓',
    title: 'Zgodne z prawem',
    description: 'Aktualne wzory zgodnie z obowiązującymi przepisami',
  },
  {
    icon: '24/7',
    title: 'Dostępne 24/7',
    description: 'Dostęp do generatora kiedy chcesz',
  },
];

const faqItems = [
  {
    icon: FileText,
    question: 'Na czym polega wypowiedzenie OC?',
    answer:
      'Wypowiedzenie OC to formalne pismo do ubezpieczyciela, którym komunikujesz chęć rozwiązania umowy ubezpieczenia odpowiedzialności cywilnej pojazdu. Dokument musi zawierać dane właściciela, pojazdu i ubezpieczyciela oraz wybraną podstawę prawną.',
  },
  {
    icon: Clock,
    question: 'Kiedy mogę wypowiedzieć umowę OC?',
    answer:
      'Wypowiedzenie możliwe jest: w ostatnim dniu okresu ubezpieczenia (art. 28), gdy masz dodatkową polisę OC (art. 28a) lub gdy kupiłeś pojazd z ubezpieczeniem (art. 31). Każdy przypadek ma inne warunki i terminy.',
  },
  {
    icon: Shield,
    question: 'Czy moje dane są bezpieczne?',
    answer:
      'Tak. Wszystkie dane wprowadzane w generatorze są przetwarzane wyłącznie na Twoim urządzeniu. Nic nie wysyłamy na serwery — całe bezpieczeństwo jest szyfrowane lokalnie. Możesz śmiało wpisywać dane osobowe.',
  },
  {
    icon: CheckCircle,
    question: 'Czy dokument z generatora będzie ważny?',
    answer:
      'Tak. Nasze wzory są aktualne i zgodne z obowiązującym prawem. Generator zawiera wszystkie elementy wymagane przez ubezpieczycieli. Po wygenerowaniu wystarczy podpisać dokument i wysłać na adres ubezpieczyciela.',
  },
];

const blogArticles = [
  {
    id: 1,
    title: 'Artykuł 28, 28a czy 31? Jak wybrać właściwą podstawę prawną',
    excerpt:
      'Poznaj różnice między trzema podstawami prawnymi wypowiedzenia OC i dowiedz się, która dotyczy Twojej sytuacji.',
    icon: BookOpen,
    date: 'Styczeń 2026',
    readTime: '5 min',
    link: '#blog/art-28-vs-28a-vs-31',
  },
  {
    id: 2,
    title: 'Ile czasu ma ubezpieczyciel na potwierdzenie wypowiedzenia?',
    excerpt:
      'Standardowe terminy i procedury, które powinien znać każdy właściciel pojazdu przy wypowiadaniu umowy OC.',
    icon: Clock,
    date: 'Grudzień 2025',
    readTime: '4 min',
    link: '#blog/terminy-wypowiedzenia-oc',
  },
  {
    id: 3,
    title: 'Bezpieczeństwo danych osobowych w dokumentach online',
    excerpt:
      'Jak chronić swoje dane, korzystając z generatorów dokumentów. Porady dla osób ostrożnych wobec technologii.',
    icon: Shield,
    date: 'Grudzień 2025',
    readTime: '6 min',
    link: '#blog/bezpieczenstwo-danych-dokumenty',
  },
];

export default function DocumentPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Dokumenty', href: '/dokumenty' },
              { label: 'Wypowiedzenie OC' },
            ]}
          />
        </div>

        <DocumentShowcase documentType="wypowiedzenie-oc" showPreview={true} />

        <section className="whyChoose">
          <div className="container">
            <div className="whyChooseHeader">
              <span className="eyebrow">Dlaczego OC.Documenty.pl?</span>
              <h2>Wszystko co potrzebujesz w jednym miejscu</h2>
            </div>
            <div className="whyChooseGrid">
              {whyChoose.map((item) => (
                <div key={item.title} className="whyCard">
                  <div className="whyIcon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="trustSection">
          <div className="container">
            <div className="trustHeader">
              <span className="eyebrow">Zaufaj nam</span>
              <h2>Bezpieczeństwo i profesjonalizm</h2>
            </div>
            <TrustBadges variant="desktop" />
          </div>
        </section>

        <section className="faqSection">
          <div className="container">
            <div className="faqHeader">
              <span className="eyebrow">Pytania i odpowiedzi</span>
              <h2>Wszystko co chcesz wiedzieć o wypowiedzeniu OC</h2>
            </div>
            <div className="faqGrid">
              {faqItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.question} className="faqCard">
                    <div className="faqIcon">
                      <Icon size={24} />
                    </div>
                    <div className="faqContent">
                      <h3>{item.question}</h3>
                      <p>{item.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="blogSection">
          <div className="container">
            <div className="blogHeader">
              <span className="eyebrow">Artykuły z bloga</span>
              <h2>Porada i praktyczne porady</h2>
              <p>
                Poznaj najczęściej popełniane błędy przy wypowiadaniu OC i naucz
                się jak ich unikać
              </p>
            </div>
            <div className="blogGrid">
              {blogArticles.map((article) => {
                const Icon = article.icon;
                return (
                  <article key={article.id} className="blogCard">
                    <div className="blogCardIcon">
                      <Icon size={28} />
                    </div>
                    <h3>{article.title}</h3>
                    <p className="blogExcerpt">{article.excerpt}</p>
                    <div className="blogMeta">
                      <span className="blogDate">{article.date}</span>
                      <span className="blogTime">{article.readTime}</span>
                    </div>
                    <a href={article.link} className="blogLink">
                      Przeczytaj artykuł
                      <ArrowRight size={16} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="infoSection">
          <div className="container">
            <div className="infoBanner">
              <h3>Jak działa generator?</h3>
              <p>
                Wypełnij formularz w czterech prostych krokach: dane właściciela
                → dane pojazdu → dane ubezpieczenia → potwierdzenie. System
                automatycznie wygeneruje profesjonalny dokument w formacie PDF i
                DOCX, gotowy do podpisu.
              </p>
              <ul className="infoList">
                <li>
                  <CheckCircle size={18} />
                  Bez ukrytych kosztów
                </li>
                <li>
                  <CheckCircle size={18} />
                  100% przetwarzane lokalnie
                </li>
                <li>
                  <CheckCircle size={18} />
                  Aktualne wzory dokumentów
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="ctaSection">
          <div className="container">
            <h2>Gotowy na wypowiedzenie OC?</h2>
            <p>Wygeneruj profesjonalny dokument w zaledwie kilka minut</p>
            <a href="/generator-oc" className="ctaButton">
              Przejdź do generatora
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
