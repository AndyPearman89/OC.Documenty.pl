'use client';

import { ArrowRight, Download, Mail, Printer, Shield } from 'lucide-react';

interface DocumentShowcaseProps {
  documentType: 'wypowiedzenie-oc';
  showPreview?: boolean;
  onGeneratorClick?: () => void;
}

export function DocumentShowcase({
  documentType,
  showPreview = true,
  onGeneratorClick,
}: DocumentShowcaseProps) {
  const config = {
    'wypowiedzenie-oc': {
      title: 'Wypowiedzenie umowy OC',
      subtitle: 'kupna-sprzedaży pojazdu',
      description:
        'Wypełnij formularz krok po kroku, a my wygenerujemy profesjonalną umowę w PDF lub DOCX.',
      features: [
        '✓ Zgodne z prawem',
        '✓ Gotowy do pobrania',
        '✓ Do edycji i wydruku',
      ],
      rating: '4.9/5',
      ratingCount: '1200+',
      time: '2 minuty',
    },
  };

  const doc = config[documentType];

  return (
    <div className="document-showcase">
      <style>{`
        .document-showcase {
          padding: 40px 20px;
          background: #f9f9f9;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .showcase-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .showcase-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .showcase-left {
          padding-right: 40px;
        }

        .showcase-right {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .showcase-title {
          font-size: 48px;
          font-weight: 800;
          line-height: 1.2;
          margin: 0 0 16px 0;
          color: #1a1a1a;
        }

        .showcase-title .red {
          color: #E31E24;
        }

        .showcase-description {
          font-size: 16px;
          color: #666;
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .showcase-features {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
        }

        .feature-item {
          font-size: 15px;
          color: #1a1a1a;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .feature-item strong {
          color: #E31E24;
        }

        .showcase-meta {
          display: flex;
          gap: 24px;
          margin-bottom: 32px;
          padding-bottom: 32px;
          border-bottom: 1px solid #e0e0e0;
        }

        .meta-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .meta-label {
          font-size: 12px;
          color: #999;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .meta-value {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .showcase-buttons {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
        }

        .btn {
          padding: 14px 28px;
          border: none;
          border-radius: 6px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s;
        }

        .btn-primary {
          background: #E31E24;
          color: white;
        }

        .btn-primary:hover {
          background: #c41920;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: white;
          color: #E31E24;
          border: 1.5px solid #E31E24;
        }

        .btn-secondary:hover {
          background: #fff5f5;
        }

        .showcase-security {
          font-size: 13px;
          color: #666;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .showcase-security svg {
          width: 18px;
          height: 18px;
          color: #E31E24;
        }

        /* Preview Section */
        .showcase-preview {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          aspect-ratio: 9 / 11;
          display: flex;
          flex-direction: column;
        }

        .preview-header {
          background: #f5f5f5;
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e0e0e0;
        }

        .preview-pages {
          font-size: 13px;
          color: #666;
          font-weight: 500;
        }

        .preview-controls {
          display: flex;
          gap: 8px;
        }

        .control-btn {
          width: 32px;
          height: 32px;
          border: none;
          background: #e0e0e0;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: #666;
          transition: all 0.2s;
        }

        .control-btn:hover {
          background: #d0d0d0;
        }

        .preview-content {
          flex: 1;
          padding: 24px;
          background: white;
          overflow-y: auto;
          font-size: 12px;
          line-height: 1.6;
        }

        .preview-header-doc {
          text-align: center;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 2px solid #E31E24;
        }

        .preview-title {
          font-size: 14px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 12px;
        }

        .preview-subtitle {
          font-size: 11px;
          color: #E31E24;
          font-weight: bold;
        }

        .preview-section {
          margin-bottom: 12px;
        }

        .preview-label {
          font-size: 10px;
          color: #E31E24;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .preview-line {
          height: 4px;
          background: #f0f0f0;
          margin-bottom: 6px;
          border-radius: 2px;
        }

        .preview-line.short {
          width: 60%;
        }

        /* Tablet & Mobile */
        @media (max-width: 1024px) {
          .showcase-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .showcase-left {
            padding-right: 0;
          }

          .showcase-title {
            font-size: 36px;
          }

          .showcase-preview {
            max-width: 100%;
            aspect-ratio: auto;
            max-height: 500px;
          }
        }

        @media (max-width: 640px) {
          .document-showcase {
            padding: 24px 16px;
          }

          .showcase-title {
            font-size: 28px;
          }

          .showcase-description {
            font-size: 14px;
          }

          .showcase-meta {
            flex-direction: column;
            gap: 16px;
          }

          .showcase-buttons {
            flex-direction: column;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <div className="showcase-container">
        <div className="showcase-grid">
          {/* Left Column */}
          <div className="showcase-left">
            <h1 className="showcase-title">
              Generator umowy<br />
              <span className="red">{doc.subtitle}</span> pojazdu
            </h1>

            <p className="showcase-description">{doc.description}</p>

            <div className="showcase-features">
              {doc.features.map((feature) => (
                <div key={feature} className="feature-item">
                  <span dangerouslySetInnerHTML={{ __html: feature.replace('✓', '') }} />
                </div>
              ))}
            </div>

            <div className="showcase-meta">
              <div className="meta-item">
                <span className="meta-label">Ocena</span>
                <span className="meta-value">
                  {doc.rating} <span style={{ fontSize: '12px', color: '#FFB800' }}>★★★★★</span>
                </span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Czas</span>
                <span className="meta-value">~{doc.time}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Opinie</span>
                <span className="meta-value">{doc.ratingCount} opinii</span>
              </div>
            </div>

            <div className="showcase-buttons">
              <button className="btn btn-primary" onClick={onGeneratorClick}>
                <ArrowRight size={18} />
                Przejdź do generatora
              </button>
              <button className="btn btn-secondary">
                <Download size={18} />
                Pobierz PDF
              </button>
            </div>

            <div className="showcase-security">
              <Shield size={18} />
              <span>Twoje dane są bezpieczne i szyfrowane</span>
            </div>
          </div>

          {/* Right Column - Illustration/Preview */}
          {showPreview && (
            <div className="showcase-right">
              <div className="showcase-illustration" style={{
                width: '100%',
                maxWidth: '500px',
                height: '400px',
                background: 'linear-gradient(135deg, #f5f7fa 0%, #e5e7eb 100%)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop"
                  alt="Bezpieczeństwo OC"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '16px',
                  }}
                />
              </div>
              <div className="showcase-preview">
                <div className="preview-header">
                  <span className="preview-pages">1 / 1</span>
                  <div className="preview-controls">
                    <button className="control-btn">−</button>
                    <span style={{ padding: '0 8px', color: '#666', fontSize: '12px' }}>100%</span>
                    <button className="control-btn">+</button>
                    <button className="control-btn">⇓</button>
                    <button className="control-btn">⎙</button>
                  </div>
                </div>
                <div className="preview-content">
                  <div className="preview-header-doc">
                    <div className="preview-subtitle">OC.Documenty.pl</div>
                    <div className="preview-title">UMOWA KUPNA-SPRZEDAŻY POJAZDU</div>
                  </div>

                  <div className="preview-section">
                    <div className="preview-label">§ 1. STRONY UMOWY</div>
                    <div className="preview-line"></div>
                    <div className="preview-line short"></div>
                  </div>

                  <div className="preview-section">
                    <div className="preview-label">§ 2. PRZEDMIOT UMOWY</div>
                    <div className="preview-line"></div>
                    <div className="preview-line short"></div>
                  </div>

                  <div className="preview-section">
                    <div className="preview-label">§ 3. CENA I ZAPŁATA</div>
                    <div className="preview-line"></div>
                    <div className="preview-line"></div>
                  </div>

                  <div className="preview-section">
                    <div className="preview-label">§ 4. OŚWIADCZENIA STRON</div>
                    <div className="preview-line"></div>
                    <div className="preview-line"></div>
                    <div className="preview-line short"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
