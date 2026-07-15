'use client';

import { useState, useEffect } from 'react';

export interface OcCancellationData {
  documentPlace: string;
  documentDate: string;
  clientName: string;
  clientAddress: string;
  clientPesel: string;
  clientPhone: string;
  clientEmail: string;
  insurerName: string;
  insurerAddress: string;
  policyNumber: string;
  policyDate: string;
  vehicleMake: string;
  vehicleRegistration: string;
  cancellationOption: 'art28' | 'art28a' | 'art31';
  cancellationDate?: string;
  newInsurer?: string;
  newPolicyPeriodFrom?: string;
  newPolicyPeriodTo?: string;
  bankAccount?: string;
}

interface OcCancellationTemplateProps {
  data: Partial<OcCancellationData>;
  onDataChange?: (data: Partial<OcCancellationData>) => void;
  readOnly?: boolean;
  showSignature?: boolean;
}

const userIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white" />
  </svg>
);

const shieldIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" fill="white" />
  </svg>
);

const fileIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="white" />
  </svg>
);

const handIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3ZM20 19H4V5H20V19ZM6 10H8V15H6ZM10 10H12V15H10ZM14 10H16V15H14Z" fill="white" />
  </svg>
);

export function OcCancellationTemplate({ data, onDataChange, readOnly = false }: OcCancellationTemplateProps) {
  const [values, setValues] = useState<Partial<OcCancellationData>>(data);

  useEffect(() => {
    setValues(data);
  }, [data]);

  const handleInputChange = (field: keyof OcCancellationData, value: string) => {
    const newValues = { ...values, [field]: value };
    setValues(newValues);
    onDataChange?.(newValues);
  };

  const handleOptionChange = (option: 'art28' | 'art28a' | 'art31') => {
    const newValues = { ...values, cancellationOption: option };
    setValues(newValues);
    onDataChange?.(newValues);
  };

  return (
    <article className="oc-template">
      <style>{`
        .oc-template {
          background: white;
          width: 210mm;
          height: 297mm;
          margin: 20px auto;
          padding: 20mm;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #1a1a1a;
          font-size: 11px;
          line-height: 1.5;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          display: flex;
          flex-direction: column;
        }

        .oc-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 12px;
          margin-bottom: 20px;
          border-bottom: 3px solid #E31E24;
        }

        .oc-logo-section {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .oc-logo-icon {
          width: 32px;
          height: 32px;
          background: #E31E24;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 18px;
        }

        .oc-logo-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .oc-logo-main {
          font-size: 14px;
          font-weight: 800;
          color: #1a1a1a;
        }

        .oc-logo-main .red {
          color: #E31E24;
        }

        .oc-logo-sub {
          font-size: 7px;
          color: #666;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .oc-header-title {
          color: #E31E24;
          font-weight: bold;
          font-size: 11px;
        }

        .oc-doc-title {
          text-align: center;
          font-size: 13px;
          font-weight: 800;
          margin: 15px 0 20px 0;
          line-height: 1.3;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .oc-date-place {
          text-align: right;
          margin-bottom: 20px;
          font-size: 11px;
        }

        .oc-date-place input {
          border: none;
          border-bottom: 1px dotted #1a1a1a;
          background: transparent;
          font-family: inherit;
          font-size: 11px;
          padding: 1px 3px;
          width: 120px;
          outline: none;
        }

        .oc-section {
          margin-bottom: 18px;
        }

        .oc-section-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .oc-section-icon {
          width: 18px;
          height: 18px;
          background: #E31E24;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .oc-section-title {
          color: #E31E24;
          font-weight: 800;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }

        .oc-form-grid {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 4px 8px;
          margin-bottom: 10px;
        }

        .oc-form-label {
          font-weight: 500;
          color: #1a1a1a;
          white-space: nowrap;
        }

        .oc-form-input {
          border: none;
          border-bottom: 1px dotted #1a1a1a;
          background: transparent;
          font-family: inherit;
          font-size: 11px;
          color: #1a1a1a;
          padding: 1px 3px;
          outline: none;
        }

        .oc-form-input:focus {
          border-bottom: 1px dashed #E31E24;
          background-color: #fffdfd;
        }

        .oc-text-content {
          font-size: 11px;
          line-height: 1.6;
          margin-bottom: 12px;
          text-align: justify;
        }

        .oc-options {
          margin: 15px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .oc-option {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .oc-option-number {
          width: 24px;
          height: 24px;
          background: #E31E24;
          color: white;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 12px;
          flex-shrink: 0;
        }

        .oc-option-checkbox {
          width: 16px;
          height: 16px;
          border: 1px solid #1a1a1a;
          border-radius: 2px;
          flex-shrink: 0;
          margin-top: 2px;
          cursor: pointer;
          background: white;
        }

        .oc-option-checkbox.checked {
          background: #E31E24;
          border-color: #E31E24;
        }

        .oc-option-text {
          font-size: 11px;
          line-height: 1.5;
          color: #1a1a1a;
          flex: 1;
        }

        .oc-signature {
          display: flex;
          justify-content: flex-end;
          margin-top: 30px;
          font-size: 11px;
        }

        .oc-signature-line {
          text-align: center;
          border-top: 1px solid #1a1a1a;
          width: 150px;
          padding-top: 3px;
        }

        .oc-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 15px;
          margin-top: auto;
          border-top: 2px solid #E31E24;
          font-size: 10px;
        }

        .oc-footer-logo {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .oc-footer-icon {
          width: 16px;
          height: 16px;
          background: #E31E24;
          color: white;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
        }

        .oc-footer-text {
          color: #1a1a1a;
          font-weight: 600;
        }

        .oc-footer-contact {
          display: flex;
          gap: 6px;
          align-items: center;
        }

        .oc-footer-contact-icon {
          width: 12px;
          height: 12px;
          background: #E31E24;
          color: white;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8px;
        }

        .oc-page-counter {
          color: #666;
          font-size: 10px;
        }

        @media print {
          .oc-template {
            margin: 0;
            padding: 15mm;
            box-shadow: none;
          }
        }
      `}</style>

      {/* Header */}
      <div className="oc-header">
        <div className="oc-logo-section">
          <div className="oc-logo-icon">OC</div>
          <div className="oc-logo-text">
            <div className="oc-logo-main"><span className="red">OC.</span>Documenty.pl</div>
            <div className="oc-logo-sub">Wzory pism i dokumentów</div>
          </div>
        </div>
        <div className="oc-header-title">Wypowiedzenie umowy OC</div>
      </div>

      {/* Main Title */}
      <div className="oc-doc-title">
        Wypowiedzenie umowy obowiązkowego<br />ubezpieczenia OC posiadaczy pojazdów mechanicznych
      </div>

      {/* Date & Place */}
      <div className="oc-date-place">
        Miejscowość, data:
        <input
          type="text"
          value={values.documentPlace || ''}
          onChange={(e) => handleInputChange('documentPlace', e.target.value)}
          placeholder="Miejsce"
          readOnly={readOnly}
        />
        <input
          type="text"
          value={values.documentDate || ''}
          onChange={(e) => handleInputChange('documentDate', e.target.value)}
          placeholder="Data"
          readOnly={readOnly}
        />
      </div>

      {/* Section: Dane Ubezpieczającego */}
      <div className="oc-section">
        <div className="oc-section-header">
          <div className="oc-section-icon">{userIcon}</div>
          <div className="oc-section-title">Dane ubezpieczającego:</div>
        </div>
        <div className="oc-form-grid">
          <label className="oc-form-label">Imię i nazwisko / Nazwa firmy:</label>
          <input
            className="oc-form-input"
            value={values.clientName || ''}
            onChange={(e) => handleInputChange('clientName', e.target.value)}
            placeholder="Imię i nazwisko"
            readOnly={readOnly}
          />
          <label className="oc-form-label">Adres zamieszkania / Siedziba:</label>
          <input
            className="oc-form-input"
            value={values.clientAddress || ''}
            onChange={(e) => handleInputChange('clientAddress', e.target.value)}
            placeholder="Adres"
            readOnly={readOnly}
          />
          <label className="oc-form-label">PESEL / NIP:</label>
          <input
            className="oc-form-input"
            value={values.clientPesel || ''}
            onChange={(e) => handleInputChange('clientPesel', e.target.value)}
            placeholder="PESEL"
            readOnly={readOnly}
          />
          <label className="oc-form-label">Numer telefonu:</label>
          <input
            className="oc-form-input"
            value={values.clientPhone || ''}
            onChange={(e) => handleInputChange('clientPhone', e.target.value)}
            placeholder="Numer telefonu"
            readOnly={readOnly}
          />
          <label className="oc-form-label">Adres e-mail:</label>
          <input
            className="oc-form-input"
            value={values.clientEmail || ''}
            onChange={(e) => handleInputChange('clientEmail', e.target.value)}
            placeholder="E-mail"
            readOnly={readOnly}
          />
        </div>
      </div>

      {/* Section: Dane Ubezpieczyciela */}
      <div className="oc-section">
        <div className="oc-section-header">
          <div className="oc-section-icon">{shieldIcon}</div>
          <div className="oc-section-title">Dane ubezpieczyciela:</div>
        </div>
        <div className="oc-form-grid">
          <label className="oc-form-label">Nazwa Towarzystwa Ubezpieczeniowego:</label>
          <input
            className="oc-form-input"
            value={values.insurerName || ''}
            onChange={(e) => handleInputChange('insurerName', e.target.value)}
            placeholder="Nazwa ubezpieczyciela"
            readOnly={readOnly}
          />
          <label className="oc-form-label">Adres:</label>
          <input
            className="oc-form-input"
            value={values.insurerAddress || ''}
            onChange={(e) => handleInputChange('insurerAddress', e.target.value)}
            placeholder="Adres"
            readOnly={readOnly}
          />
        </div>
      </div>

      {/* Section: Wypowiedzenie Umowy */}
      <div className="oc-section">
        <div className="oc-section-header">
          <div className="oc-section-icon">{fileIcon}</div>
          <div className="oc-section-title">Wypowiedzenie umowy</div>
        </div>
        <div className="oc-text-content">
          Niniejszym wypowiadam umowę obowiązkowego ubezpieczenia OC posiadaczy pojazdów mechanicznych o numerze polisy{' '}
          <input
            className="oc-form-input"
            value={values.policyNumber || ''}
            onChange={(e) => handleInputChange('policyNumber', e.target.value)}
            placeholder="nr polisy"
            readOnly={readOnly}
            style={{ width: '100px', display: 'inline-block', marginLeft: '4px', marginRight: '4px' }}
          />, zawartą dnia{' '}
          <input
            className="oc-form-input"
            value={values.policyDate || ''}
            onChange={(e) => handleInputChange('policyDate', e.target.value)}
            placeholder="data"
            readOnly={readOnly}
            style={{ width: '80px', display: 'inline-block', marginLeft: '4px', marginRight: '4px' }}
          />, na pojazd marki{' '}
          <input
            className="oc-form-input"
            value={values.vehicleMake || ''}
            onChange={(e) => handleInputChange('vehicleMake', e.target.value)}
            placeholder="marka"
            readOnly={readOnly}
            style={{ width: '80px', display: 'inline-block', marginLeft: '4px', marginRight: '4px' }}
          />, numer rejestracyjny{' '}
          <input
            className="oc-form-input"
            value={values.vehicleRegistration || ''}
            onChange={(e) => handleInputChange('vehicleRegistration', e.target.value)}
            placeholder="rejestracja"
            readOnly={readOnly}
            style={{ width: '80px', display: 'inline-block', marginLeft: '4px', marginRight: '4px' }}
          />.
        </div>
      </div>

      {/* Section: Options */}
      <div className="oc-section">
        <div className="oc-section-header">
          <div className="oc-section-icon">{handIcon}</div>
          <div className="oc-section-title">Proszę o zaznaczenie jednej z poniższych opcji (właściwe zaznaczyć X):</div>
        </div>

        <div className="oc-options">
          {/* Option 1 */}
          <div className="oc-option">
            <div className="oc-option-number">1</div>
            <div
              className={`oc-option-checkbox ${values.cancellationOption === 'art28' ? 'checked' : ''}`}
              onClick={() => !readOnly && handleOptionChange('art28')}
            />
            <div className="oc-option-text">
              Oświadczam, że wypowiadam umowę ubezpieczenia z ostatnim dniem okresu, na jaki została zawarta. (żeby moja
              polisa nie przedłużyła się na kolejny okres ubezpieczenia – podstawa prawna: <strong>art. 28 ustawy*</strong>)
            </div>
          </div>

          {/* Option 2 */}
          <div className="oc-option">
            <div className="oc-option-number">2</div>
            <div
              className={`oc-option-checkbox ${values.cancellationOption === 'art28a' ? 'checked' : ''}`}
              onClick={() => !readOnly && handleOptionChange('art28a')}
            />
            <div className="oc-option-text">
              Oświadczam, że z dniem{' '}
              <input
                className="oc-form-input"
                value={values.cancellationDate || ''}
                onChange={(e) => handleInputChange('cancellationDate', e.target.value)}
                placeholder="DD.MM.RRRR"
                readOnly={readOnly}
                style={{ width: '70px', display: 'inline-block' }}
              />, wypowiadam umowę ubezpieczenia zawartą w firmie{' '}
              <input
                className="oc-form-input"
                value={values.newInsurer || ''}
                onChange={(e) => handleInputChange('newInsurer', e.target.value)}
                placeholder="nazwa"
                readOnly={readOnly}
                style={{ width: '100px', display: 'inline-block' }}
              />{' '}
              ponieważ zawarłem/-am na okres od{' '}
              <input
                className="oc-form-input"
                value={values.newPolicyPeriodFrom || ''}
                onChange={(e) => handleInputChange('newPolicyPeriodFrom', e.target.value)}
                placeholder="od"
                readOnly={readOnly}
                style={{ width: '70px', display: 'inline-block' }}
              />{' '}
              do dnia{' '}
              <input
                className="oc-form-input"
                value={values.newPolicyPeriodTo || ''}
                onChange={(e) => handleInputChange('newPolicyPeriodTo', e.target.value)}
                placeholder="do"
                readOnly={readOnly}
                style={{ width: '70px', display: 'inline-block' }}
              />{' '}
              ubezpieczenie OC w mojej dotychczasowej firmie ubezpieczeniowej.
              <br />W przypadku gdy przysługuje mi zwrot składki, proszę o przekazanie jej na następujący nr rachunku:
              <input
                className="oc-form-input"
                value={values.bankAccount || ''}
                onChange={(e) => handleInputChange('bankAccount', e.target.value)}
                placeholder="nr konta"
                readOnly={readOnly}
                style={{ width: '150px', display: 'block', marginTop: '4px' }}
              />
              (jeśli mam podwójne ubezpieczenie OC – podstawa prawna: <strong>art. 28a ustawy*</strong>, dotyczy tylko umowy
              wznowionej z mocą ustawy)
            </div>
          </div>

          {/* Option 3 */}
          <div className="oc-option">
            <div className="oc-option-number">3</div>
            <div
              className={`oc-option-checkbox ${values.cancellationOption === 'art31' ? 'checked' : ''}`}
              onClick={() => !readOnly && handleOptionChange('art31')}
            />
            <div className="oc-option-text">
              Oświadczam, że z dniem wypowiadam umowę ubezpieczenia nr .... (jeśli kupiłem/-am samochód z ubezpieczeniem –
              podstawa prawna: <strong>art. 31 ustawy*</strong>, umowę wypowiedzieć może jedynie nabywca pojazdu)
            </div>
          </div>
        </div>
      </div>

      {/* Signature */}
      <div className="oc-signature">
        <div>
          <div style={{ marginBottom: '20px' }}>
            <div style={{ marginBottom: '4px' }}>Podpis Klienta</div>
            <div className="oc-signature-line">..........................................................................</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="oc-footer">
        <div className="oc-footer-logo">
          <div className="oc-footer-icon">OC</div>
          <span className="oc-footer-text">OC.Documenty.pl</span>
        </div>
        <div className="oc-footer-contact">
          <div className="oc-footer-contact-icon">✉</div>
          <span>kontakt@oc.documenty.pl</span>
        </div>
        <div className="oc-page-counter">Strona 1 z 1</div>
      </div>

      {/* Footnote */}
      <div style={{ fontSize: '9px', color: '#666', marginTop: '12px', lineHeight: '1.4' }}>
        * Ustawa z dnia 22 maja 2003 r. o ubezpieczeniach obowiązkowych, Ubezpieczeniowym Funduszu Gwarancyjnym i Polskim
        Biurze Ubezpieczycieli Komunikacyjnych
      </div>
    </article>
  );
}
