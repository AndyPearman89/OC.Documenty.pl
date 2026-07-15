"use client";

interface CrossSellItem {
  title: string;
  description: string;
  href: string;
  icon: string;
}

interface CrossSellProps {
  items: CrossSellItem[];
  title?: string;
}

export function CrossSell({ items, title = "Powiązane dokumenty" }: CrossSellProps) {
  return (
    <section className="crossSellSection">
      <div className="container">
        <h2>{title}</h2>
        <div className="crossSellGrid">
          {items.map((item) => (
            <a href={item.href} key={item.href} className="crossSellCard">
              <div className="crossSellIcon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="crossSellCta">Wypełnij teraz →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
