'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, Check, Download, Mail, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import { type UseFormRegister, useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';
import { createPdfBlob, downloadPdf } from '@/lib/downloadPdf';
import { insurerProfiles } from '@/lib/catalog';

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
  { number: 1, label: 'Dane właściciela', icon: '👤' },
  { number: 2, label: 'Dane pojazdu', icon: '🚗' },
  { number: 3, label: 'Ubezpieczenie', icon: '🛡️' },
  { number: 4, label: 'Podsumowanie', icon: '✓' },
];

export function OcCancellationMobileGenerator() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [draftKey] = useState('oc-mobile-generator-draft');

  const { register, trigger, getValues, setValue, reset, control, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: { cancellationType: 'art28' },
  });

  const watchedValues = useWatch({ control });
  const progress = (step / steps.length) * 100;

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(draftKey);
      if (saved) reset(JSON.parse(saved));
    } catch {
      sessionStorage.removeItem(draftKey);
    }
  }, [reset, draftKey]);

  useEffect(() => {
    sessionStorage.setItem(draftKey, JSON.stringify(watchedValues));
  }, [watchedValues, draftKey]);

  const nextStep = async () => {
    const fieldsForStep: Record<number, (keyof FormData)[]> = {
      1: ['ownerName', 'pesel'],
      2: ['vehicleBrand', 'vehicleModel', 'registration'],
      3: ['insurer', 'policyNumber', 'endDate', 'cancellationType'],
    };

    const valid = await trigger(fieldsForStep[step] || []);
    if (valid && step < steps.length) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleGeneratePdf = async () => {
    const data = getValues();
    const documentId = `oc-${data.policyNumber}`;
    sessionStorage.removeItem(draftKey);
    setSubmitted(true);
  };

  const handleSendEmail = () => {
    const data = getValues();
    const subject = encodeURIComponent(`Wypowiedzenie umowy OC — polisa ${data.policyNumber}`);
    const body = encodeURIComponent(
      `Dzień dobry,\n\nw załączeniu przesyłam podpisane wypowiedzenie umowy OC pojazdu ${data.vehicleBrand} ${data.vehicleModel}, nr rej. ${data.registration}.\n\nProszę o potwierdzenie otrzymania dokumentu.\n\n${data.ownerName}`
    );
    window.location.href = `mailto:oc@documenty.pl?subject=${subject}&body=${body}`;
  };

  if (submitted) {
    return (
      <div className="oc-mobile-success">
        <div className="success-container">
          <div className="success-icon">✅</div>
          <h2>Gotowe!</h2>
          <p>PDF został wygenerowany i gotów do pobrania.</p>

          <div className="success-actions">
            <button className="btn btn-primary" onClick={() => downloadPdf('oc-document', 'wypowiedzenie-oc.pdf')}>
              <Download /> Pobierz PDF
            </button>
            <button className="btn btn-secondary" onClick={() => window.print()}>
              🖨️ Drukuj
            </button>
            <button className="btn btn-secondary" onClick={handleSendEmail}>
              <Mail /> Wyślij e-mail
            </button>
          </div>

          <button className="btn btn-outline" onClick={() => { setSubmitted(false); reset(); setStep(1); }}>
            Nowy dokument
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="oc-mobile-generator">
      <style>{`
        .oc-mobile-generator {
          background: #f0f2f5;
          min-height: 100vh;
          padding-bottom: 100px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .oc-mobile-header {
          background: white;
          padding: 16px;
          border-bottom: 1px solid #e0e0e0;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .oc-mobile-header h1 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .oc-mobile-rating {
          font-size: 12px;
          color: #666;
          margin-top: 4px;
        }

        .oc-progress-bar {
          height: 4px;
          background: #e0e0e0;
          margin-top: 12px;
          border-radius: 2px;
          overflow: hidden;
        }

        .oc-progress-fill {
          height: 100%;
          background: #E31E24;
          transition: width 0.3s ease;
        }

        .oc-progress-label {
          font-size: 12px;
          color: #666;
          margin-top: 8px;
        }

        .oc-stepper {
          display: flex;
          justify-content: space-between;
          padding: 16px;
          gap: 4px;
        }

        .oc-step-indicator {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .oc-step-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          background: #f0f2f5;
          color: #1a1a1a;
        }

        .oc-step-indicator.active .oc-step-icon {
          background: #E31E24;
          color: white;
        }

        .oc-step-label {
          font-size: 10px;
          text-align: center;
          color: #666;
          font-weight: 500;
        }

        .oc-mobile-form {
          padding: 16px;
          background: white;
          margin: 12px;
          border-radius: 8px;
        }

        .oc-form-step {
          display: none;
        }

        .oc-form-step.active {
          display: block;
        }

        .oc-form-step h2 {
          font-size: 20px;
          font-weight: 600;
          margin: 0 0 16px 0;
          color: #1a1a1a;
        }

        .oc-form-group {
          margin-bottom: 16px;
        }

        .oc-form-group label {
          display: block;
          font-size: 13px;
          font-weight: 500;
          color: #1a1a1a;
          margin-bottom: 6px;
        }

        .oc-form-group input,
        .oc-form-group select {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 16px;
          font-family: inherit;
          box-sizing: border-box;
        }

        .oc-form-group input:focus,
        .oc-form-group select:focus {
          outline: none;
          border-color: #E31E24;
          background: #fff9f9;
        }

        .oc-form-group input[type="date"] {
          cursor: pointer;
        }

        .oc-form-error {
          color: #d32f2f;
          font-size: 12px;
          margin-top: 4px;
        }

        .oc-optional {
          color: #999;
          font-weight: 400;
        }

        .oc-radio-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .oc-radio-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .oc-radio-item:hover {
          border-color: #E31E24;
          background: #fff9f9;
        }

        .oc-radio-item input[type="radio"] {
          width: 18px;
          height: 18px;
          margin-top: 2px;
          cursor: pointer;
          flex-shrink: 0;
        }

        .oc-radio-label {
          font-size: 13px;
          line-height: 1.4;
          color: #1a1a1a;
        }

        .oc-mobile-buttons {
          display: flex;
          gap: 8px;
          padding: 16px;
          background: white;
          border-top: 1px solid #e0e0e0;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 20;
        }

        .oc-mobile-buttons.four-cols {
          flex-wrap: wrap;
        }

        .btn {
          flex: 1;
          padding: 14px 16px;
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

        .btn-primary:active {
          background: #c41920;
        }

        .btn-secondary {
          background: #f0f2f5;
          color: #1a1a1a;
          border: 1px solid #ddd;
        }

        .btn-secondary:active {
          background: #e0e0e0;
        }

        .btn-outline {
          background: white;
          color: #E31E24;
          border: 1.5px solid #E31E24;
        }

        .oc-success-container {
          background: white;
          border-radius: 8px;
          padding: 24px 16px;
          text-align: center;
          margin: 16px;
        }

        .oc-success-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .oc-success-container h2 {
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 8px 0;
          color: #1a1a1a;
        }

        .oc-success-container p {
          font-size: 14px;
          color: #666;
          margin: 0 0 24px 0;
        }

        .oc-success-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 16px;
        }

        .oc-success-actions .btn {
          width: 100%;
        }

        @media (min-width: 768px) {
          .oc-mobile-generator {
            max-width: 600px;
            margin: 0 auto;
          }
        }
      `}</style>

      {/* Header */}
      <div className="oc-mobile-header">
        <h1>🛡️ OC.Documenty.pl</h1>
        <div className="oc-mobile-rating">Wypowiedzenie OC • ⭐⭐⭐⭐⭐ 4.9</div>
        <div className="oc-progress-bar">
          <div className="oc-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="oc-progress-label">{step} z 4 kroków</div>
      </div>

      {/* Stepper */}
      <div className="oc-stepper">
        {steps.map((s) => (
          <div key={s.number} className={`oc-step-indicator ${step >= s.number ? 'active' : ''}`}>
            <div className="oc-step-icon">{step > s.number ? '✓' : s.icon}</div>
            <div className="oc-step-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Form */}
      <form className="oc-mobile-form">
        {/* Step 1: Owner */}
        <div className={`oc-form-step ${step === 1 ? 'active' : ''}`}>
          <h2>Dane właściciela</h2>

          <div className="oc-form-group">
            <label>Imię i nazwisko *</label>
            <input
              {...register('ownerName')}
              type="text"
              placeholder="Jan Kowalski"
              autoComplete="name"
            />
            {errors.ownerName && <div className="oc-form-error">{errors.ownerName.message}</div>}
          </div>

          <div className="oc-form-group">
            <label>PESEL *</label>
            <input
              {...register('pesel')}
              type="text"
              placeholder="00000000000"
              inputMode="numeric"
              maxLength={11}
            />
            {errors.pesel && <div className="oc-form-error">{errors.pesel.message}</div>}
          </div>

          <div className="oc-form-group">
            <label>Telefon <span className="oc-optional">(opcjonalnie)</span></label>
            <input
              {...register('phone')}
              type="tel"
              placeholder="500 123 456"
              inputMode="tel"
            />
          </div>
        </div>

        {/* Step 2: Vehicle */}
        <div className={`oc-form-step ${step === 2 ? 'active' : ''}`}>
          <h2>Dane pojazdu</h2>

          <div className="oc-form-group">
            <label>Marka pojazdu *</label>
            <input
              {...register('vehicleBrand')}
              type="text"
              placeholder="Toyota"
            />
            {errors.vehicleBrand && <div className="oc-form-error">{errors.vehicleBrand.message}</div>}
          </div>

          <div className="oc-form-group">
            <label>Model *</label>
            <input
              {...register('vehicleModel')}
              type="text"
              placeholder="Corolla"
            />
            {errors.vehicleModel && <div className="oc-form-error">{errors.vehicleModel.message}</div>}
          </div>

          <div className="oc-form-group">
            <label>Nr rejestracyjny *</label>
            <input
              {...register('registration')}
              type="text"
              placeholder="WA 12345"
              style={{ textTransform: 'uppercase' }}
            />
            {errors.registration && <div className="oc-form-error">{errors.registration.message}</div>}
          </div>

          <div className="oc-form-group">
            <label>VIN <span className="oc-optional">(opcjonalnie)</span></label>
            <input
              {...register('vin')}
              type="text"
              placeholder="WBADT43452G297186"
            />
          </div>
        </div>

        {/* Step 3: Insurance */}
        <div className={`oc-form-step ${step === 3 ? 'active' : ''}`}>
          <h2>Ubezpieczenie</h2>

          <div className="oc-form-group">
            <label>Towarzystwo Ubezpieczeniowe *</label>
            <select {...register('insurer')}>
              <option value="">Wybierz towarzystwo</option>
              {insurerProfiles.map((insurer) => (
                <option key={insurer.slug} value={insurer.name}>
                  {insurer.name}
                </option>
              ))}
            </select>
            {errors.insurer && <div className="oc-form-error">{errors.insurer.message}</div>}
          </div>

          <div className="oc-form-group">
            <label>Numer polisy *</label>
            <input
              {...register('policyNumber')}
              type="text"
              placeholder="ABC123456789"
            />
            {errors.policyNumber && <div className="oc-form-error">{errors.policyNumber.message}</div>}
          </div>

          <div className="oc-form-group">
            <label>Data końca ubezpieczenia *</label>
            <input
              {...register('endDate')}
              type="date"
            />
            {errors.endDate && <div className="oc-form-error">{errors.endDate.message}</div>}
          </div>

          <div className="oc-form-group">
            <label>Typ wypowiedzenia *</label>
            <div className="oc-radio-group">
              <label className="oc-radio-item">
                <input
                  {...register('cancellationType')}
                  type="radio"
                  value="art28"
                />
                <div className="oc-radio-label">
                  <strong>Art. 28</strong> — Koniec okresu ubezpieczenia
                </div>
              </label>

              <label className="oc-radio-item">
                <input
                  {...register('cancellationType')}
                  type="radio"
                  value="art28a"
                />
                <div className="oc-radio-label">
                  <strong>Art. 28a</strong> — Podwójne ubezpieczenie OC
                </div>
              </label>

              <label className="oc-radio-item">
                <input
                  {...register('cancellationType')}
                  type="radio"
                  value="art31"
                />
                <div className="oc-radio-label">
                  <strong>Art. 31</strong> — Zakup pojazdu z polisą
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Step 4: Summary */}
        <div className={`oc-form-step ${step === 4 ? 'active' : ''}`}>
          <h2>Podsumowanie</h2>

          <div style={{ background: '#f9f9f9', padding: '12px', borderRadius: '6px', fontSize: '13px', lineHeight: '1.6' }}>
            <p>
              <strong>Właściciel:</strong> {watchedValues.ownerName || '—'}
            </p>
            <p>
              <strong>Pojazd:</strong> {watchedValues.vehicleBrand} {watchedValues.vehicleModel} ({watchedValues.registration})
            </p>
            <p>
              <strong>Ubezpieczyciel:</strong> {watchedValues.insurer || '—'}
            </p>
            <p>
              <strong>Polisa:</strong> {watchedValues.policyNumber || '—'}
            </p>
            <p>
              <strong>Koniec:</strong> {watchedValues.endDate || '—'}
            </p>
          </div>

          <p style={{ fontSize: '12px', color: '#666', marginTop: '16px' }}>
            ✓ Wszystkie wymagane dane zostały uzupełnione. Możesz teraz wygenerować dokument PDF.
          </p>
        </div>
      </form>

      {/* Bottom Buttons */}
      <div className={`oc-mobile-buttons ${step === 4 ? 'four-cols' : ''}`}>
        {step > 1 && (
          <button className="btn btn-secondary" onClick={previousStep}>
            ← Wstecz
          </button>
        )}

        {step < 4 && (
          <button className="btn btn-primary" onClick={nextStep}>
            Dalej <ArrowRight size={16} />
          </button>
        )}

        {step === 4 && (
          <button className="btn btn-primary" onClick={handleGeneratePdf}>
            <Download size={16} /> Pobierz PDF
          </button>
        )}
      </div>
    </div>
  );
}
