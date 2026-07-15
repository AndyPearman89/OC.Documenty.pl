import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import type { OcCancellationData } from '@/features/oc-cancellation';

export async function generateOcCancellationPDF(data: Partial<OcCancellationData>): Promise<Blob> {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  let yPosition = 15;

  pdf.setFontSize(10);
  pdf.setTextColor(40);

  // Header with logo
  pdf.setTextColor(227, 30, 36);
  pdf.setFontSize(18);
  pdf.setFont(undefined, 'bold');
  pdf.text('OC. Documenty.pl', pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 8;

  pdf.setFontSize(11);
  pdf.setFont(undefined, 'bold');
  pdf.text('WYPOWIEDZENIE UMOWY', pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 5;
  pdf.text('Obowiązkowego Ubezpieczenia OC Posiadaczy Pojazdów Mechanicznych', pageWidth / 2, yPosition, {
    align: 'center',
  });

  yPosition += 12;
  pdf.setDrawColor(227, 30, 36);
  pdf.setLineWidth(1);
  pdf.line(15, yPosition, pageWidth - 15, yPosition);
  yPosition += 8;

  // Place and date
  pdf.setTextColor(40);
  pdf.setFontSize(10);
  pdf.setFont(undefined, 'normal');
  const placeDate = `${data.documentPlace || '_______________'}, dnia ${data.documentDate || '_______________'}`;
  pdf.text(placeDate, 15, yPosition);
  yPosition += 12;

  // Client data section
  pdf.setFont(undefined, 'bold');
  pdf.setTextColor(40);
  pdf.setFontSize(10);
  pdf.text('DANE UBEZPIECZAJĄCEGO:', 15, yPosition);
  yPosition += 7;

  pdf.setFont(undefined, 'normal');
  const clientInfo = [
    `Imię i nazwisko: ${data.clientName || '_'.repeat(40)}`,
    `Adres: ${data.clientAddress || '_'.repeat(45)}`,
    `PESEL: ${data.clientPesel || '_'.repeat(20)}`,
    `Telefon: ${data.clientPhone || '_'.repeat(20)}`,
  ];

  clientInfo.forEach((line) => {
    pdf.text(line, 15, yPosition);
    yPosition += 6;
  });

  yPosition += 4;

  // Insurer data section
  pdf.setFont(undefined, 'bold');
  pdf.text('DANE UBEZPIECZYCIELA:', 15, yPosition);
  yPosition += 7;

  pdf.setFont(undefined, 'normal');
  const insurerInfo = [
    `Nazwa: ${data.insurerName || '_'.repeat(40)}`,
    `Adres: ${data.insurerAddress || '_'.repeat(45)}`,
  ];

  insurerInfo.forEach((line) => {
    pdf.text(line, 15, yPosition);
    yPosition += 6;
  });

  yPosition += 6;

  // Cancellation statement
  pdf.setFont(undefined, 'bold');
  pdf.setFontSize(10);
  pdf.text('WYPOWIEDZENIE UMOWY:', 15, yPosition);
  yPosition += 7;

  pdf.setFont(undefined, 'normal');
  pdf.setFontSize(9);

  const statement = `Niniejszym wypowiadam umowę obowiązkowego ubezpieczenia OC posiadaczy pojazdów mechanicznych nr ${data.policyNumber || '_______________'}, zawartą dnia ${data.policyDate || '_______________'}, na pojazd marki ${data.vehicleMake || '_______________'}, numer rejestracyjny ${data.vehicleRegistration || '_______________'}.`;

  const wrappedStatement = pdf.splitTextToSize(statement, pageWidth - 30);
  wrappedStatement.forEach((line: string) => {
    pdf.text(line, 15, yPosition);
    yPosition += 6;
  });

  yPosition += 8;

  // Cancellation options
  pdf.setFont(undefined, 'bold');
  pdf.setFontSize(10);
  pdf.text('Proszę o zaznaczenie jednej z poniższych opcji (właściwe zaznaczyć X):', 15, yPosition);
  yPosition += 8;

  pdf.setFont(undefined, 'normal');
  pdf.setFontSize(9);

  const isArt28 = data.cancellationOption === 'art28';
  const isArt28a = data.cancellationOption === 'art28a';
  const isArt31 = data.cancellationOption === 'art31';

  // Option 1
  pdf.text(isArt28 ? '☑' : '☐', 18, yPosition);
  const opt1 = pdf.splitTextToSize(
    'Oświadczam, że wypowiadam umowę ubezpieczenia z ostatnim dniem okresu, na jaki została zawarta (art. 28)',
    pageWidth - 35,
  );
  opt1.forEach((line: string, idx: number) => {
    pdf.text(line, 23, yPosition + idx * 6);
  });
  yPosition += opt1.length * 6 + 4;

  // Option 2
  pdf.text(isArt28a ? '☑' : '☐', 18, yPosition);
  const opt2 = pdf.splitTextToSize(
    'Oświadczam, że z dniem [___] wypowiadam umowę ubezpieczenia zawartą w [___] ponieważ zawarłem/-am na okres od [___] do [___] ubezpieczenie OC w [___] (art. 28a)',
    pageWidth - 35,
  );
  opt2.forEach((line: string, idx: number) => {
    pdf.text(line, 23, yPosition + idx * 6);
  });
  yPosition += opt2.length * 6 + 4;

  // Option 3
  pdf.text(isArt31 ? '☑' : '☐', 18, yPosition);
  const opt3 = pdf.splitTextToSize(
    'Oświadczam, że z dniem [___] wypowiadam umowę ubezpieczenia nr [___] (kupiłem/-am samochód z ubezpieczeniem - art. 31)',
    pageWidth - 35,
  );
  opt3.forEach((line: string, idx: number) => {
    pdf.text(line, 23, yPosition + idx * 6);
  });
  yPosition += opt3.length * 6 + 8;

  // Signature section
  yPosition = Math.max(yPosition, pageHeight - 35);
  pdf.text('Podpis ubezpieczającego: _____________________________', 15, yPosition);
  yPosition += 10;
  pdf.text('Data: _____________________________', 15, yPosition);

  // Footer
  yPosition = pageHeight - 15;
  pdf.setFontSize(8);
  pdf.setTextColor(100);
  pdf.text('OC. Documenty.pl | oc@documenty.pl', pageWidth / 2, yPosition, { align: 'center' });

  return pdf.output('blob');
}

export async function generateOcCancellationDOCX(data: Partial<OcCancellationData>): Promise<Blob> {
  // Phase 5: DOCX generation with docx library
  // For now, create a simple text-based DOCX placeholder
  // TODO: Replace with proper DOCX template using docx library

  const docContent = `
WYPOWIEDZENIE UMOWY
Obowiązkowego Ubezpieczenia OC Posiadaczy Pojazdów Mechanicznych

Miejscowość: ${data.documentPlace || '_______'}
Data: ${data.documentDate || '_______'}

DANE UBEZPIECZAJĄCEGO:
Imię i nazwisko: ${data.clientName || '_______'}
Adres: ${data.clientAddress || '_______'}
PESEL: ${data.clientPesel || '_______'}
Telefon: ${data.clientPhone || '_______'}

DANE UBEZPIECZYCIELA:
Nazwa: ${data.insurerName || '_______'}
Adres: ${data.insurerAddress || '_______'}

WYPOWIEDZENIE UMOWY:
Niniejszym wypowiadam umowę obowiązkowego ubezpieczenia OC posiadaczy pojazdów mechanicznych
nr ${data.policyNumber || '_______'}, zawartą dnia ${data.policyDate || '_______'},
na pojazd marki ${data.vehicleMake || '_______'}, numer rejestracyjny ${data.vehicleRegistration || '_______'}.

PODSTAWA PRAWNA WYPOWIEDZENIA:
${data.cancellationOption === 'art28' ? '☑' : '☐'} Art. 28 - Koniec okresu ubezpieczenia
${data.cancellationOption === 'art28a' ? '☑' : '☐'} Art. 28a - Podwójne ubezpieczenie OC
${data.cancellationOption === 'art31' ? '☑' : '☐'} Art. 31 - Zakup pojazdu z polisą

Podpis ubezpieczającego: _______________________________
Data: _______________________________

---
Wygenerowano przez OC.Documenty.pl
  `.trim();

  const blob = new Blob([docContent], { type: 'text/plain;charset=utf-8' });
  return blob;
}
