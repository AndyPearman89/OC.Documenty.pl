'use client';

import Image from 'next/image';
import { type ChangeEvent, useEffect, useState } from 'react';

export interface OcCancellationData {
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
  documentDate: string;
  documentPlace: string;
}

interface OcCancellationTemplateProps {
  data: Partial<OcCancellationData>;
  onDataChange?: (data: Partial<OcCancellationData>) => void;
  readOnly?: boolean;
  showSignature?: boolean;
}

const carIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.85 7H17.14L18.2 10H5.8L6.85 7ZM19 17H5V12H19V17ZM7.5 16C8.32843 16 9 15.3284 9 14.5C9 13.6716 8.32843 13 7.5 13C6.67157 13 6 13.6716 6 14.5C6 15.3284 6.67157 16 7.5 16ZM16.5 16C17.3284 16 18 15.3284 18 14.5C18 13.6716 17.3284 13 16.5 13C15.6716 13 15 13.6716 15 14.5C15 15.3284 15.6716 16 16.5 16Z"
      fill="white"
    />
  </svg>
);

const userIcon = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
      fill="white"
    />
  </svg>
);

const shieldIcon = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" fill="white" />
  </svg>
);

const fileIcon = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"
      fill="white"
    />
  </svg>
);

const infoIcon = (
  <svg viewBox="0 0 24 24">
    <path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5V11.24C15.21 11.64 16 12.75 16 14C16 15.66 14.66 17 13 17H10C8.34 17 7 15.66 7 14C7 12.75 7.79 11.64 9 11.24M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22S22 17.52 22 12C22 6.48 12 2M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4S20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
  </svg>
);

export function OcCancellationTemplate({
  data,
  onDataChange,
  readOnly = false,
  showSignature = false,
}: OcCancellationTemplateProps) {
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

  const InputField = ({
    value,
    onChange,
    placeholder,
    style = {},
  }: {
    value?: string;
    onChange?: (val: string) => void;
    placeholder?: string;
    style?: React.CSSProperties;
  }) => (
    <input
      type="text"
      value={value || ''}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      readOnly={readOnly}
      style={style}
    />
  );

  return (
    <article className="oc-cancellation-template">
      <style>{`
        .oc-cancellation-template {
          background: #ffffff;
          width: 210mm;
          margin: 20px auto;
          padding: 15mm;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 297mm;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #1a1a1a;
          line-height: 1.4;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          font-size: 12px;
        }

        .oc-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid #E31E24;
          padding-bottom: 12px;
          margin-bottom: 20px;
        }

        .oc-logo-container {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .oc-logo-icon {
          width: 38px;
          height: 38px;
          background-color: #E31E24;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .oc-logo-text {
          display: flex;
          flex-direction: column;
        }

        .oc-logo-main {
          font-size: 20px;
          font-weight: 800;
          color: #1a1a1a;
          letter-spacing: -0.5px;
        }

        .oc-logo-main span {
          color: #E31E24;
        }

        .oc-logo-sub {
          font-size: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #666;
          font-weight: bold;
          margin-top: -2px;
        }

        .oc-header-title {
          color: #E31E24;
          font-size: 13px;
          font-weight: bold;
        }

        .oc-doc-title {
          text-align: center;
          font-size: 14px;
          font-weight: 800;
          margin: 15px 0 25px 0;
          line-height: 1.3;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .oc-date-place {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin-bottom: 25px;
          font-size: 12px;
          font-weight: 500;
        }

        .oc-date-place input {
          width: 180px;
          margin-left: 5px;
          border: none;
          border-bottom: 1px dotted #1a1a1a;
          background: transparent;
          font-family: inherit;
          font-size: 12px;
          padding: 2px 5px;
          outline: none;
        }

        .oc-section-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          margin-top: 15px;
        }

        .oc-section-icon {
          width: 20px;
          height: 20px;
          background-color: #E31E24;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .oc-section-title {
          color: #E31E24;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .oc-form-grid {
          display: grid;
          grid-template-columns: auto 1fr;
          row-gap: 8px;
          column-gap: 10px;
          align-items: center;
          margin-bottom: 15px;
        }

        .oc-form-label {
          font-size: 11px;
          color: #1a1a1a;
          white-space: nowrap;
        }

        .oc-form-grid input {
          border: none;
          border-bottom: 1px dotted #1a1a1a;
          background: transparent;
          font-family: inherit;
          font-size: 12px;
          color: #000;
          padding: 2px 5px;
          width: 100%;
          outline: none;
        }

        .oc-form-grid input:focus {
          border-bottom: 1px dashed #E31E24;
          background-color: #fffdfd;
        }

        .oc-text-flow {
          font-size: 11.5px;
          line-height: 1.8;
          text-align: justify;
          margin-bottom: 15px;
        }

        .oc-text-flow input {
          display: inline-block;
          width: auto;
          min-width: 100px;
          border: none;
          border-bottom: 1px dotted #1a1a1a;
          background: transparent;
          font-family: inherit;
          font-size: 12px;
          color: #000;
          padding: 2px 5px;
          outline: none;
        }

        .oc-options-container {
          background-color: #FFF5F5;
          border-radius: 6px;
          padding: 12px;
          margin-bottom: 15px;
        }

        .oc-options-info {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .oc-options-info svg {
          width: 14px;
          height: 14px;
          fill: #E31E24;
        }

        .oc-option-row {
          background: #ffffff;
          border: 1px solid #ffcccc;
          border-radius: 6px;
          padding: 12px;
          display: grid;
          grid-template-columns: 45px 32px 1fr;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
          cursor: pointer;
          transition: border-color 0.2s;
        }

        .oc-option-row:last-child {
          margin-bottom: 0;
        }

        .oc-option-row:hover {
          border-color: #E31E24;
        }

        .oc-checkbox-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .oc-real-radio {
          display: none;
        }

        .oc-custom-box {
          width: 25px;
          height: 25px;
          border: 1.5px solid #1a1a1a;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border-radius: 2px;
          transition: all 0.2s;
        }

        .oc-real-radio:checked + .oc-custom-box {
          border-color: #E31E24;
        }

        .oc-real-radio:checked + .oc-custom-box::after {
          content: "X";
          font-family: Arial, sans-serif;
          font-size: 18px;
          font-weight: 900;
          color: #E31E24;
          position: absolute;
        }

        .oc-badge {
          width: 24px;
          height: 24px;
          background-color: #E31E24;
          color: #ffffff;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
        }

        .oc-option-content {
          font-size: 11px;
          line-height: 1.4;
        }

        .oc-option-content strong {
          color: #E31E24;
        }

        .oc-option-content input {
          display: inline-block;
          width: auto;
          min-width: 80px;
          border: none;
          border-bottom: 1px dotted #1a1a1a;
          background: transparent;
          font-family: inherit;
          font-size: 11px;
          color: #000;
          padding: 0 3px;
          outline: none;
        }

        .oc-signature-block {
          align-self: flex-end;
          width: 220px;
          text-align: center;
          margin-top: 30px;
        }

        .oc-signature-line {
          border-top: 1px dotted #1a1a1a;
          margin-bottom: 5px;
          min-height: 40px;
        }

        .oc-signature-label {
          font-size: 10px;
          font-style: italic;
          color: #1a1a1a;
        }

        .oc-footnote {
          font-size: 8.5px;
          color: #1a1a1a;
          margin-top: 20px;
          line-height: 1.3;
        }

        .oc-footnote span {
          color: #E31E24;
          font-weight: bold;
        }

        .oc-footer {
          border-top: 2px solid #E31E24;
          padding-top: 10px;
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 10.5px;
          color: #1a1a1a;
        }

        .oc-footer-logo {
          display: flex;
          align-items: center;
          gap: 5px;
          font-weight: bold;
        }

        .oc-footer-logo span {
          color: #E31E24;
        }

        .oc-footer-contact {
          display: flex;
          align-items: center;
          gap: 5px;
          font-weight: bold;
        }

        .oc-footer-contact svg {
          width: 14px;
          height: 14px;
          fill: #E31E24;
        }

        .oc-footer-page {
          font-weight: 500;
        }

        @media print {
          .oc-cancellation-template {
            width: 210mm;
            height: 297mm;
            margin: 0;
            padding: 10mm 12mm;
            box-shadow: none;
          }
          .oc-form-grid input {
            border-bottom: 1px dotted #1a1a1a;
          }
          .oc-options-container {
            page-break-inside: avoid;
          }
        }
      `}</style>

      <div>
        {/* Header */}
        <header className="oc-header">
          <div className="oc-logo-container">
            <div className="oc-logo-icon">{carIcon}</div>
            <div className="oc-logo-text">
              <span className="oc-logo-main">
                OC.<span>Documenty.pl</span>
              </span>
              <span className="oc-logo-sub">Wzory pism i dokumentów</span>
            </div>
          </div>
          <div className="oc-header-title">Wypowiedzenie umowy OC</div>
        </header>

        {/* Date and Place */}
        <div className="oc-date-place">
          Miejscowość, dnia{' '}
          <InputField
            value={values.documentDate}
            onChange={(val) => handleInputChange('documentDate', val)}
            placeholder="np. Warszawa, 15.07.2026"
            style={{ width: '160px' }}
          />
        </div>

        {/* Document Title */}
        <h1 className="oc-doc-title">
          Wypowiedzenie umowy obowiązkowego<br />
          ubezpieczenia OC posiadaczy pojazdów mechanicznych
        </h1>

        {/* Section 1: Client Data */}
        <div className="oc-section-header">
          <div className="oc-section-icon">{userIcon}</div>
          <h2 className="oc-section-title">Dane ubezpieczającego:</h2>
        </div>
        <div className="oc-form-grid">
          <span className="oc-form-label">Imię i nazwisko / Nazwa firmy:</span>
          <InputField
            value={values.clientName}
            onChange={(val) => handleInputChange('clientName', val)}
            placeholder="Wpisz imię i nazwisko lub pełną nazwę firmy"
          />

          <span className="oc-form-label">Adres zamieszkania / Siedziba:</span>
          <InputField
            value={values.clientAddress}
            onChange={(val) => handleInputChange('clientAddress', val)}
            placeholder="Ulica, nr domu/lokalu, kod pocztowy, miasto"
          />

          <span className="oc-form-label">PESEL / NIP:</span>
          <InputField
            value={values.clientPesel}
            onChange={(val) => handleInputChange('clientPesel', val)}
            placeholder="Numer PESEL dla osób prywatnych, NIP dla firm"
          />

          <span className="oc-form-label">Numer telefonu:</span>
          <InputField
            value={values.clientPhone}
            onChange={(val) => handleInputChange('clientPhone', val)}
            placeholder="Kontaktowy numer telefonu"
          />

          <span className="oc-form-label">Adres e-mail:</span>
          <InputField
            value={values.clientEmail}
            onChange={(val) => handleInputChange('clientEmail', val)}
            placeholder="Twój adres e-mail"
          />
        </div>

        {/* Section 2: Insurer Data */}
        <div className="oc-section-header">
          <div className="oc-section-icon">{shieldIcon}</div>
          <h2 className="oc-section-title">Dane ubezpieczyciela:</h2>
        </div>
        <div className="oc-form-grid">
          <span className="oc-form-label">Nazwa Towarzystwa Ubezpieczeniowego:</span>
          <InputField
            value={values.insurerName}
            onChange={(val) => handleInputChange('insurerName', val)}
            placeholder="np. PZU, Warta, Ergo Hestia"
          />

          <span className="oc-form-label">Adres:</span>
          <InputField
            value={values.insurerAddress}
            onChange={(val) => handleInputChange('insurerAddress', val)}
            placeholder="Adres siedziby Towarzystwa Ubezpieczeniowego"
          />
        </div>

        {/* Section 3: Cancellation */}
        <div className="oc-section-header">
          <div className="oc-section-icon">{fileIcon}</div>
          <h2 className="oc-section-title">Wypowiedzenie umowy</h2>
        </div>
        <div className="oc-text-flow">
          Niniejszym wypowiadam umowę obowiązkowego ubezpieczenia OC posiadaczy pojazdów mechanicznych
          o numerze polisy{' '}
          <InputField
            value={values.policyNumber}
            onChange={(val) => handleInputChange('policyNumber', val)}
            placeholder="numer polisy"
            style={{ width: '210px' }}
          />
          , zawartą dnia{' '}
          <InputField
            value={values.policyDate}
            onChange={(val) => handleInputChange('policyDate', val)}
            placeholder="DD.MM.RRRR"
            style={{ width: '120px' }}
          />
          ,<br />
          na pojazd marki{' '}
          <InputField
            value={values.vehicleMake}
            onChange={(val) => handleInputChange('vehicleMake', val)}
            placeholder="np. Volkswagen Golf"
            style={{ width: '220px' }}
          />
          , nr rejestracyjny{' '}
          <InputField
            value={values.vehicleRegistration}
            onChange={(val) => handleInputChange('vehicleRegistration', val)}
            placeholder="np. WI 12345"
            style={{ width: '140px' }}
          />
          .
        </div>

        {/* Options Container */}
        <div className="oc-options-container">
          <div className="oc-options-info">
            {infoIcon}
            Proszę o zaznaczenie jednej z poniższych opcji (właściwe zaznaczyć X):
          </div>

          {/* Option 1 */}
          <label className="oc-option-row">
            <div className="oc-checkbox-container">
              <input
                type="radio"
                name="cancellation_option"
                className="oc-real-radio"
                checked={values.cancellationOption === 'art28'}
                onChange={() => handleOptionChange('art28')}
                disabled={readOnly}
              />
              <div className="oc-custom-box"></div>
            </div>
            <div className="oc-badge">1</div>
            <div className="oc-option-content">
              Oświadczam, że wypowiadam umowę ubezpieczenia z ostatnim dniem okresu, na jaki została zawarta. (żeby moja polisa
              nie przedłużyła się na kolejny okres ubezpieczenia &ndash; podstawa prawna: <strong>art. 28 ustawy*</strong>)
            </div>
          </label>

          {/* Option 2 */}
          <label className="oc-option-row">
            <div className="oc-checkbox-container">
              <input
                type="radio"
                name="cancellation_option"
                className="oc-real-radio"
                checked={values.cancellationOption === 'art28a'}
                onChange={() => handleOptionChange('art28a')}
                disabled={readOnly}
              />
              <div className="oc-custom-box"></div>
            </div>
            <div className="oc-badge">2</div>
            <div className="oc-option-content">
              Oświadczam, że z dniem{' '}
              <InputField
                value={values.cancellationDate}
                onChange={(val) => handleInputChange('cancellationDate', val)}
                placeholder="DD.MM.RRRR"
                style={{ width: '100px' }}
              />{' '}
              wypowiadam umowę ubezpieczenia zawartą w firmie{' '}
              <InputField
                value={values.insurerName}
                onChange={(val) => handleInputChange('insurerName', val)}
                placeholder="nazwa firmy"
                style={{ width: '130px' }}
              />{' '}
              ponieważ zawarłem/-am na okres od dnia{' '}
              <InputField
                value={values.newPolicyPeriodFrom}
                onChange={(val) => handleInputChange('newPolicyPeriodFrom', val)}
                placeholder="DD.MM"
                style={{ width: '90px' }}
              />{' '}
              do dnia{' '}
              <InputField
                value={values.newPolicyPeriodTo}
                onChange={(val) => handleInputChange('newPolicyPeriodTo', val)}
                placeholder="DD.MM"
                style={{ width: '90px' }}
              />{' '}
              ubezpieczenie na mój pojazd w firmie{' '}
              <InputField
                value={values.newInsurer}
                onChange={(val) => handleInputChange('newInsurer', val)}
                placeholder="nazwa nowej firmy"
                style={{ width: '130px' }}
              />
              .<br />
              W przypadku gdy przysługuje mi zwrot składki, proszę o przekazanie jej na następujący nr rachunku:<br />
              <InputField
                value={values.bankAccount}
                onChange={(val) => handleInputChange('bankAccount', val)}
                placeholder="PL XX XXXX XXXX XXXX XXXX XXXX XXXX"
                style={{ width: '100%', marginTop: '3px' }}
              />
              <br />
              (jeśli mam podwójne ubezpieczenie OC &ndash; podstawa prawna <strong>art. 28a ustawy*</strong>, dotyczy tylko umowy
              wznowionej z mocy ustawy)
            </div>
          </label>

          {/* Option 3 */}
          <label className="oc-option-row">
            <div className="oc-checkbox-container">
              <input
                type="radio"
                name="cancellation_option"
                className="oc-real-radio"
                checked={values.cancellationOption === 'art31'}
                onChange={() => handleOptionChange('art31')}
                disabled={readOnly}
              />
              <div className="oc-custom-box"></div>
            </div>
            <div className="oc-badge">3</div>
            <div className="oc-option-content">
              Oświadczam, że z dniem wypowiadam umowę ubezpieczenia nr{' '}
              <InputField
                value={values.policyNumber}
                onChange={(val) => handleInputChange('policyNumber', val)}
                placeholder="numer polisy"
                style={{ width: '150px' }}
              />
              .<br />
              (jeśli kupiłem/-am samochód z ubezpieczeniem &ndash; podstawa prawna: <strong>art. 31 ustawy*</strong>, umowę
              wypowiedzieć może jedynie nabywca pojazdu)
            </div>
          </label>
        </div>
      </div>

      <div>
        {/* Signature Block */}
        {showSignature && (
          <div className="oc-signature-block">
            <div className="oc-signature-line"></div>
            <div className="oc-signature-label">podpis Klienta</div>
          </div>
        )}

        {/* Footnote */}
        <div className="oc-footnote">
          <span>*</span> Ustawa z dnia 22 maja 2003 r. o ubezpieczeniach obowiązkowych, Ubezpieczeniowym Funduszu Gwarancyjnym i
          Polskim Biurze Ubezpieczycieli Komunikacyjnych
        </div>

        {/* Footer */}
        <footer className="oc-footer">
          <div className="oc-footer-logo">
            <div className="oc-logo-icon" style={{ width: '14px', height: '14px' }}>
              {carIcon}
            </div>
            OC.<span>Documenty.pl</span>
          </div>
          <div className="oc-footer-contact">
            <svg viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            oc@documenty.pl
          </div>
          <div className="oc-footer-page">Strona 1 z 1</div>
        </footer>
      </div>
    </article>
  );
}
