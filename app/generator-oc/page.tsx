import type { Metadata } from 'next';
import { OcCancellationDesktopGenerator } from '@/features/oc-cancellation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Generator Wypowiedzenia OC — Krok po Kroku',
  description:
    'Krok po kroku wygeneruj wypowiedzenie umowy OC. Bez wymyślania - wszystko jasne i proste.',
  alternates: { canonical: '/generator-oc' },
};

export default function GeneratorPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <OcCancellationDesktopGenerator />
      </main>
      <Footer />
    </>
  );
}
