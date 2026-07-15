import type { Metadata } from 'next';
import { OcCancellationMobileGenerator } from '@/features/oc-cancellation/OcCancellationMobileGenerator';

export const metadata: Metadata = {
  title: 'Generator Wypowiedzenia OC - Mobile',
  description: 'Szybki mobile-first generator wypowiedzenia umowy OC. Wypełnij 4 kroki i pobierz PDF.',
  alternates: { canonical: '/generator-mobile' },
};

export default function MobileGeneratorPage() {
  return <OcCancellationMobileGenerator />;
}
