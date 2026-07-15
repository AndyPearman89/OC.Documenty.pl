"use client";

interface TrustItem {
  icon?: string;
  value: string;
  label: string;
  note?: string;
}

interface TrustSectionProps {
  items: TrustItem[];
  title?: string;
}

export function TrustSection({ items, title = "Zaufaj nam" }: TrustSectionProps) {
  return (
    <section className="trustSection">
      <div className="container">
        {title && <h2 style={{ marginBottom: "var(--space-9)" }}>{title}</h2>}
        <div className="trustGrid">
          {items.map((item, i) => (
            <div key={i} className="trustItem">
              {item.icon && <div className="trustIcon">{item.icon}</div>}
              <strong>{item.value}</strong>
              <p>{item.label}</p>
              {item.note && <small>{item.note}</small>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
