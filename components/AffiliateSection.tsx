"use client";

interface AffiliateCard {
  title: string;
  description: string;
  icon: string;
  link: string;
  isPartner?: boolean;
}

interface AffiliateSectionProps {
  cards: AffiliateCard[];
  title?: string;
}

export function AffiliateSection({ cards, title = "Powiązane usługi" }: AffiliateSectionProps) {
  return (
    <section className="affiliateSection">
      <div className="container">
        <div className="affiliateHeader">
          <h2>{title}</h2>
          <p>Rekomendacje partnerów ubezpieczeniowych</p>
        </div>

        <div className="affiliateGrid">
          {cards.map((card) => (
            <div key={card.link} className="affiliateCard">
              <div className="affiliateIcon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a href={card.link} className="affiliateLink" target="_blank" rel="noopener noreferrer">
                Dowiedz się więcej →
              </a>
              {card.isPartner && (
                <span className="partnerBadge">Materiał partnerski</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
