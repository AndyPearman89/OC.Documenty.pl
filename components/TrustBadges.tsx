'use client';

import { CheckCircle, Lock, Scale, Star, Zap, Download } from 'lucide-react';

interface TrustBadgesProps {
  variant?: 'desktop' | 'mobile' | 'footer';
  columns?: number;
}

export function TrustBadges({ variant = 'desktop', columns = 6 }: TrustBadgesProps) {
  const badges = [
    {
      icon: CheckCircle,
      title: 'Aktualne wzory',
      subtitle: 'Zgodne z przepisami',
    },
    {
      icon: Lock,
      title: 'Bezpieczne dane',
      subtitle: 'Szyfrowane lokalnie',
    },
    {
      icon: Scale,
      title: 'Zgodne z ustawą',
      subtitle: 'Art. 28, 28a, 31',
    },
    {
      icon: Star,
      title: '4.9/5 opinii',
      subtitle: '1200+ użytkowników',
    },
    {
      icon: Zap,
      title: 'Gotowe w 2 minuty',
      subtitle: 'Szybko i łatwo',
    },
    {
      icon: Download,
      title: 'PDF i DOCX',
      subtitle: 'Pobierz jak chcesz',
    },
  ];

  return (
    <div className="trust-badges">
      <style>{`
        .trust-badges {
          width: 100%;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .trust-grid {
          display: grid;
          gap: 24px;
          max-width: 1400px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .trust-grid.desktop {
          grid-template-columns: repeat(5, 1fr);
        }

        .badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
        }

        .badge-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f0f2f5;
          border-radius: 8px;
          color: #E31E24;
          flex-shrink: 0;
        }

        .badge-icon svg {
          width: 28px;
          height: 28px;
        }

        .badge-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .badge-title {
          font-size: 14px;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.3;
        }

        .badge-subtitle {
          font-size: 12px;
          color: #666;
          line-height: 1.3;
        }

        @media (max-width: 1024px) {
          .trust-grid.desktop {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 640px) {
          .trust-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 24px 16px;
          }

          .badge {
            flex-direction: row;
            text-align: left;
            gap: 16px;
          }

          .badge-icon {
            width: 48px;
            height: 48px;
          }

          .badge-icon svg {
            width: 24px;
            height: 24px;
          }

          .badge-title {
            font-size: 13px;
          }

          .badge-subtitle {
            font-size: 11px;
          }
        }
      `}</style>

      <div className="trust-grid desktop">
        {badges.map((badge) => {
          const Icon = badge.icon;
          return (
            <div key={badge.title} className="badge">
              <div className="badge-icon">
                <Icon />
              </div>
              <div className="badge-content">
                <div className="badge-title">{badge.title}</div>
                <div className="badge-subtitle">{badge.subtitle}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
