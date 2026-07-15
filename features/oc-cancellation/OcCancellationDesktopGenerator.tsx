'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, Download, Mail, Printer } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';
import { OcCancellationTemplate, type OcCancellationData } from './OcCancellationTemplate';
import { insurerProfiles } from '@/lib/catalog';
import { generateOcCancellationPDF } from '@/lib/pdf/pdfGenerator';
import { PDFViewer } from '@/components/PDFViewer';

const mapFormDataToTemplate = (formData: any): Partial<OcCancellationData> => ({
  clientName: formData.ownerName || '',
  clientAddress: formData.address || '',
  clientPesel: formData.pesel || '',
  clientPhone: formData.phone || '',
  clientEmail: '',
  insurerName: formData.insurer || '',
  insurerAddress: '',
  policyNumber: formData.policyNumber || '',
  policyDate: formData.endDate || '',
  vehicleMake: formData.vehicleBrand || '',
  vehicleRegistration: formData.registration || '',
  cancellationOption: formData.cancellationType || 'art28',
  documentDate: new Date().toLocaleDateString('pl-PL'),
  documentPlace: formData.city || '',
});

const schema = z.object({
  ownerName: z.string().min(2, 'Wpisz imię i nazwisko'),
  pesel: z.string().min(11, 'PESEL musi mieć 11 cyfr'),
  phone: z.string().optional(),
  address: z.string().optional(),
  postalCode: z.string().optional(),
  city: z.string().optional(),
  vehicleBrand: z.string().min(2, 'Wpisz markę pojazdu'),
  vehicleModel: z.string().min(1, 'Wpisz model'),
  registration: z.string().min(4, 'Wpisz numer rejestracyjny'),
  vin: z.string().optional(),
  insurer: z.string().min(2, 'Wybierz towarzystwo'),
  policyNumber: z.string().min(3, 'Wpisz numer polisy'),
  endDate: z.string().min(1, 'Wybierz datę końca OC'),
  cancellationType: z.enum(['art28', 'art28a', 'art31']),
  newInsurerName: z.string().optional(),
  policyStartDate: z.string().optional(),
  policyEndDate: z.string().optional(),
  bankAccount: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const steps = [
  { number: 1, label: 'Dane właściciela' },
  { number: 2, label: 'Dane pojazdu' },
  { number: 3, label: 'Ubezpieczenie' },
  { number: 4, label: 'Podsumowanie' },
];

export function OcCancellationDesktopGenerator() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const { register, trigger, getValues, reset, control, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: { cancellationType: 'art28' },
  });

  const watchedValues = useWatch({ control });
  const progress = (step / steps.length) * 100;

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('oc-desktop-draft');
      if (saved) reset(JSON.parse(saved));
    } catch {
      sessionStorage.removeItem('oc-desktop-draft');
    }
  }, [reset]);

  useEffect(() => {
    sessionStorage.setItem('oc-desktop-draft', JSON.stringify(watchedValues));
  }, [watchedValues]);

  const nextStep = async () => {
    const values = getValues();
    const fieldGroups: Record<number, (keyof FormData)[]> = {
      1: ['ownerName', 'pesel'],
      2: ['vehicleBrand', 'vehicleModel', 'registration'],
      3: ['insurer', 'policyNumber', 'endDate'],
    };

    const fields = fieldGroups[step] || [];
    const isValid = fields.every(field => {
      const value = values[field];
      if (field === 'pesel') return value && value.length === 11;
      if (field === 'policyNumber') return value && value.length >= 3;
      return value && (value as string).length >= 2;
    });

    if (isValid && step < steps.length) {
      setStep(step + 1);
    }
  };

  const handleGeneratePdf = async () => {
    const mappedData = mapFormDataToTemplate(watchedValues);
    const pdfBlob = await generateOcCancellationPDF(mappedData);

    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Wypowiedzenie-OC-${new Date().toISOString().split('T')[0]}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    sessionStorage.removeItem('oc-desktop-draft');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="desktopSuccess">
        <style>{`
          .desktopSuccess {
            background: white;
            border-radius: 12px;
            padding: 48px;
            max-width: 900px;
            margin: 40px auto;
            text-align: center;
          }
          .successIcon {
            font-size: 64px;
            margin-bottom: 24px;
          }
          .successTitle {
            font-size: 32px;
            font-weight: 800;
            margin-bottom: 12px;
            color: #1a1a1a;
          }
          .successMessage {
            font-size: 16px;
            color: #666;
            margin-bottom: 32px;
          }
          .successActions {
            display: flex;
            gap: 12px;
            justify-content: center;
            flex-wrap: wrap;
          }
          .btn {
            padding: 12px 24px;
            border: none;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: all 0.2s;
          }
          .btn-primary {
            background: #E31E24;
            color: white;
          }
          .btn-primary:hover {
            background: #c41920;
          }
          .btn-secondary {
            background: #f0f2f5;
            color: #1a1a1a;
            border: 1px solid #ddd;
          }
          .btn-secondary:hover {
            background: #e0e0e0;
          }
        `}</style>

        <div className="successIcon">✅</div>
        <h2 className="successTitle">Gotowe!</h2>
        <p className="successMessage">PDF został wygenerowany. Możesz teraz pobrać, wydrukować lub wysłać e-mailem.</p>

        <div className="successActions">
          <button className="btn btn-primary">
            <Download size={16} /> Pobierz PDF
          </button>
          <button className="btn btn-secondary">
            <Download size={16} /> Pobierz DOCX
          </button>
          <button className="btn btn-secondary">
            <Mail size={16} /> Wyślij e-mail
          </button>
          <button className="btn btn-secondary">
            <Printer size={16} /> Drukuj
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="desktopGenerator">
      <style>{`
        .desktopGenerator {
          background: #f9f9f9;
          padding: 40px 20px;
          min-height: 100vh;
        }

        .generatorContainer {
          max-width: 1600px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }

        .generatorHeader {
          padding: 32px 40px;
          border-bottom: 1px solid #e0e0e0;
        }

        .progressBar {
          height: 4px;
          background: #e0e0e0;
          border-radius: 2px;
          margin-bottom: 24px;
          overflow: hidden;
        }

        .progressFill {
          height: 100%;
          background: #E31E24;
          transition: width 0.3s ease;
        }

        .stepper {
          display: flex;
          justify-content: space-between;
          gap: 24px;
        }

        .stepItem {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
        }

        .stepNumber {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f0f2f5;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #1a1a1a;
          flex-shrink: 0;
        }

        .stepItem.active .stepNumber {
          background: #E31E24;
          color: white;
        }

        .stepLabel {
          font-size: 13px;
          color: #666;
          font-weight: 500;
        }

        .stepItem.active .stepLabel {
          color: #1a1a1a;
          font-weight: 600;
        }

        .generatorContent {
          display: grid;
          grid-template-columns: 40% 60%;
          min-height: 600px;
        }

        .formColumn {
          padding: 40px;
          border-right: 1px solid #e0e0e0;
          overflow-y: auto;
        }

        .previewColumn {
          padding: 40px;
          background: #f9f9f9;
          overflow-y: auto;
        }

        .formSection h2 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 24px;
          color: #1a1a1a;
        }

        .formGroup {
          margin-bottom: 16px;
        }

        .formGroup label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 6px;
        }

        .formGroup input,
        .formGroup select {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
          font-family: inherit;
        }

        .formGroup input:focus,
        .formGroup select:focus {
          outline: none;
          border-color: #E31E24;
          background: #fffbfb;
        }

        .formError {
          color: #d32f2f;
          font-size: 12px;
          margin-top: 4px;
        }

        .formActions {
          display: flex;
          gap: 12px;
          margin-top: 40px;
          padding-top: 24px;
          border-top: 1px solid #e0e0e0;
        }

        .btn {
          flex: 1;
          padding: 12px 24px;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.2s;
        }

        .btn-primary {
          background: #E31E24;
          color: white;
        }

        .btn-primary:hover {
          background: #c41920;
        }

        .btn-secondary {
          background: #f0f2f5;
          color: #1a1a1a;
        }

        .btn-secondary:hover {
          background: #e0e0e0;
        }

        .previewTitle {
          font-size: 12px;
          font-weight: 700;
          color: #666;
          text-transform: uppercase;
          margin-bottom: 16px;
          letter-spacing: 0.5px;
        }

        .previewBox {
          background: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
        }

        .previewHeader {
          background: #f5f5f5;
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #ddd;
          font-size: 12px;
          color: #666;
        }

        .previewContent {
          aspect-ratio: 9 / 11;
          overflow: auto;
          padding: 24px;
          font-size: 11px;
          line-height: 1.5;
        }

        @media (max-width: 1200px) {
          .generatorContent {
            grid-template-columns: 1fr;
          }
          .formColumn {
            border-right: none;
            border-bottom: 1px solid #e0e0e0;
          }
        }
      `}</style>

      <div className="generatorContainer">
        <div className="generatorHeader">
          <div className="progressBar">
            <div className="progressFill" style={{ width: `${progress}%` }} />
          </div>
          <div className="stepper">
            {steps.map((s) => (
              <div key={s.number} className={`stepItem ${step >= s.number ? 'active' : ''}`}>
                <div className="stepNumber">{step > s.number ? '✓' : s.number}</div>
                <div className="stepLabel">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="generatorContent">
          {/* Form Column */}
          <div className="formColumn">
            <form>
              {step === 1 && (
                <div className="formSection">
                  <h2>Dane właściciela pojazdu</h2>
                  <div className="formGroup">
                    <label>Imię i nazwisko *</label>
                    <input {...register('ownerName')} type="text" placeholder="Jan Kowalski" />
                    {errors.ownerName && <div className="formError">{errors.ownerName.message}</div>}
                  </div>
                  <div className="formGroup">
                    <label>PESEL *</label>
                    <input {...register('pesel')} type="text" placeholder="79010112345" inputMode="numeric" maxLength={11} />
                    {errors.pesel && <div className="formError">{errors.pesel.message}</div>}
                  </div>
                  <div className="formGroup">
                    <label>Adres zamieszkania</label>
                    <input {...register('address')} type="text" placeholder="ul. Kwiatowa 10/5" />
                  </div>
                  <div className="formGroup">
                    <label>Kod pocztowy</label>
                    <input {...register('postalCode')} type="text" placeholder="30-001" />
                  </div>
                  <div className="formGroup">
                    <label>Miejscowość</label>
                    <input {...register('city')} type="text" placeholder="Kraków" />
                  </div>
                  <div className="formGroup">
                    <label>Telefon (opcjonalnie)</label>
                    <input {...register('phone')} type="tel" placeholder="600 123 456" />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="formSection">
                  <h2>Dane pojazdu</h2>
                  <div className="formGroup">
                    <label>Marka *</label>
                    <input {...register('vehicleBrand')} type="text" placeholder="Toyota" />
                    {errors.vehicleBrand && <div className="formError">{errors.vehicleBrand.message}</div>}
                  </div>
                  <div className="formGroup">
                    <label>Model *</label>
                    <input {...register('vehicleModel')} type="text" placeholder="Corolla" />
                    {errors.vehicleModel && <div className="formError">{errors.vehicleModel.message}</div>}
                  </div>
                  <div className="formGroup">
                    <label>Nr rejestracyjny *</label>
                    <input {...register('registration')} type="text" placeholder="WA 12345" />
                    {errors.registration && <div className="formError">{errors.registration.message}</div>}
                  </div>
                  <div className="formGroup">
                    <label>VIN (opcjonalnie)</label>
                    <input {...register('vin')} type="text" placeholder="WBADT43452G297186" />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="formSection">
                  <h2>Ubezpieczenie OC</h2>
                  <div className="formGroup">
                    <label>Towarzystwo ubezpieczeniowe *</label>
                    <select {...register('insurer')}>
                      <option value="">Wybierz towarzystwo</option>
                      {insurerProfiles.map((ins) => (
                        <option key={ins.slug} value={ins.name}>{ins.name}</option>
                      ))}
                    </select>
                    {errors.insurer && <div className="formError">{errors.insurer.message}</div>}
                  </div>
                  <div className="formGroup">
                    <label>Numer polisy *</label>
                    <input {...register('policyNumber')} type="text" placeholder="ABC123456789" />
                    {errors.policyNumber && <div className="formError">{errors.policyNumber.message}</div>}
                  </div>
                  <div className="formGroup">
                    <label>Data końca ubezpieczenia *</label>
                    <input {...register('endDate')} type="date" />
                    {errors.endDate && <div className="formError">{errors.endDate.message}</div>}
                  </div>
                  <div className="formGroup">
                    <label>Typ wypowiedzenia *</label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'normal', fontSize: '13px' }}>
                        <input {...register('cancellationType')} type="radio" value="art28" />
                        Art. 28 — Koniec okresu ubezpieczenia
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'normal', fontSize: '13px' }}>
                        <input {...register('cancellationType')} type="radio" value="art28a" />
                        Art. 28a — Podwójne ubezpieczenie
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'normal', fontSize: '13px' }}>
                        <input {...register('cancellationType')} type="radio" value="art31" />
                        Art. 31 — Zakup pojazdu z polisą
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="formSection">
                  <h2>Podsumowanie</h2>
                  <div style={{ background: '#f9f9f9', padding: '16px', borderRadius: '6px', fontSize: '13px', lineHeight: '1.6' }}>
                    <p><strong>Właściciel:</strong> {watchedValues.ownerName}</p>
                    <p><strong>Pojazd:</strong> {watchedValues.vehicleBrand} {watchedValues.vehicleModel} ({watchedValues.registration})</p>
                    <p><strong>Ubezpieczyciel:</strong> {watchedValues.insurer}</p>
                    <p><strong>Polisa:</strong> {watchedValues.policyNumber}</p>
                    <p><strong>Do:</strong> {watchedValues.endDate}</p>
                  </div>
                  <p style={{ marginTop: '16px', fontSize: '12px', color: '#666' }}>
                    ✓ Wszystkie wymagane dane zostały uzupełnione. Możesz teraz wygenerować dokument PDF.
                  </p>
                </div>
              )}

              <div className="formActions">
                {step > 1 && (
                  <button type="button" className="btn btn-secondary" onClick={() => setStep(step - 1)}>
                    ← Wstecz
                  </button>
                )}
                {step < 4 && (
                  <button type="button" className="btn btn-primary" onClick={nextStep}>
                    Dalej <ArrowRight size={16} />
                  </button>
                )}
                {step === 4 && (
                  <button type="button" className="btn btn-primary" onClick={handleGeneratePdf}>
                    <Download size={16} /> Pobierz PDF
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Preview Column */}
          <div className="previewColumn">
            <PDFViewer
              title="Podgląd dokumentu"
              currentPage={1}
              totalPages={1}
              onDownload={handleGeneratePdf}
              onPrint={() => {
                const printWindow = window.open('', '', 'width=800,height=600');
                if (printWindow) {
                  printWindow.document.write('<html><body>Drukowanie...</body></html>');
                  printWindow.window.print();
                }
              }}
            >
              <OcCancellationTemplate data={mapFormDataToTemplate(watchedValues)} readOnly={true} showSignature={false} />
            </PDFViewer>
          </div>
        </div>
      </div>
    </div>
  );
}
