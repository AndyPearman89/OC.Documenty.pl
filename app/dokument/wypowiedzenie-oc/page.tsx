import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
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
