'use client';

import { Calendar, FileCheck, Key } from 'lucide-react';
import { useState } from 'react';

interface LegalBasisOption {
  id: 'art28' | 'art28a' | 'art31';
  title: string;
  article: string;
  description: string;
  icon: React.ReactNode;
  badge: string;
  popular?: boolean;
}

interface LegalBasisSelectorProps {
  value?: 'art28' | 'art28a' | 'art31';
  onChange?: (value: 'art28' | 'art28a' | 'art31') => void;
}

export function LegalBasisSelector({ value = 'art28', onChange }: LegalBasisSelectorProps) {
  const [selected, setSelected] = useState<'art28' | 'art28a' | 'art31'>(value);

  const options: LegalBasisOption[] = [
    {
      id: 'art28',
      title: 'Koniec okresu ubezpieczenia',
      article: 'Art. 28 ustawy',
      description:
        'Wypowiadam umowę z końcem okresu ubezpieczenia, aby polisa nie została automatycznie przedłużona.',
      icon: <Calendar size={32} />,
      badge: 'Najczęściej wybierane',
      popular: true,
    },
    {
      id: 'art28a',
      title: 'Podwójne ubezpieczenie OC',
      article: 'Art. 28a ustawy',
      description: 'Podwójne ubezpieczenie OC. Wypowiadam automatycznie wznowioną polisę.',
      icon: <FileCheck size={32} />,
      badge: 'Podwójne OC',
    },
    {
      id: 'art31',
      title: 'Zakup pojazdu z polisą',
      article: 'Art. 31 ustawy',
      description:
        'Kupiłem pojazd z polisą OC poprzedniego właściciela i wypowiadam przejęte ubezpieczenie.',
      icon: <Key size={32} />,
      badge: 'Zakup pojazdu',
    },
  ];

  const handleSelect = (id: 'art28' | 'art28a' | 'art31') => {
    setSelected(id);
    onChange?.(id);
  };

  return (
    <div className="legal-basis-selector">
      <style>{`
        .legal-basis-selector {
          width: 100%;
        }

        .legal-basis-title {
          font-size: 14px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .legal-basis-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 16px;
        }

        .legal-basis-card {
          position: relative;
          padding: 20px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          background: white;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .legal-basis-card:hover {
          border-color: #d71920;
          box-shadow: 0 4px 12px rgba(215, 25, 32, 0.1);
        }

        .legal-basis-card.selected {
          border-color: #d71920;
          background: #fff5f5;
          box-shadow: 0 4px 12px rgba(215, 25, 32, 0.15);
        }

        .legal-basis-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: #f5f7fa;
          color: #666;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .legal-basis-card.selected .legal-basis-badge {
          background: #d71920;
          color: white;
        }

        .legal-basis-card.selected .legal-basis-badge::after {
          content: ' ✓';
          margin-left: 4px;
        }

        .legal-basis-icon {
          color: #666;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .legal-basis-card.selected .legal-basis-icon {
          color: #d71920;
        }

        .legal-basis-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .legal-basis-article {
          font-size: 12px;
          font-weight: 600;
          color: #d71920;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .legal-basis-subtitle {
          font-size: 13px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .legal-basis-description {
          font-size: 12px;
          color: #666;
          line-height: 1.5;
          margin-top: 4px;
        }

        .legal-basis-info {
          background: #f5f7fa;
          border-left: 3px solid #d71920;
          padding: 12px;
          border-radius: 6px;
          font-size: 12px;
          color: #666;
          line-height: 1.5;
        }

        .legal-basis-info-title {
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 4px;
        }

        @media (max-width: 1024px) {
          .legal-basis-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .legal-basis-grid {
            grid-template-columns: 1fr;
          }

          .legal-basis-card {
            padding: 16px;
          }

          .legal-basis-icon {
            font-size: 24px;
          }
        }
      `}</style>

      <div className="legal-basis-title">Wybierz podstawę prawną wypowiedzenia</div>

      <div className="legal-basis-grid">
        {options.map((option) => (
          <div
            key={option.id}
            className={`legal-basis-card ${selected === option.id ? 'selected' : ''}`}
            onClick={() => handleSelect(option.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleSelect(option.id);
              }
            }}
          >
            {option.badge && <div className="legal-basis-badge">{option.badge}</div>}

            <div className="legal-basis-icon">{option.icon}</div>

            <div className="legal-basis-content">
              <div className="legal-basis-article">{option.article}</div>
              <div className="legal-basis-subtitle">{option.title}</div>
              <div className="legal-basis-description">{option.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="legal-basis-info">
        <div className="legal-basis-info-title">ℹ️ Generator automatycznie dostosuje treść dokumentu do wybranej podstawy prawnej.</div>
      </div>
    </div>
  );
}
