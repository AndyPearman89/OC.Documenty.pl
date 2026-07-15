"use client";

interface CTABlockProps {
  headline: string;
  subheadline?: string;
  ctaLabel: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  variant?: "primary" | "secondary";
}

export function CTABlock({
  headline,
  subheadline,
  ctaLabel,
  ctaHref,
  onCtaClick,
  variant = "primary",
}: CTABlockProps) {
  return (
    <section className={`ctaBlock ctaBlock-${variant}`}>
      <div className="container">
        <div className="ctaContent">
          <h2>{headline}</h2>
          {subheadline && <p>{subheadline}</p>}
          {ctaHref ? (
            <a href={ctaHref} className="button buttonPrimary">
              {ctaLabel}
            </a>
          ) : (
            <button className="button buttonPrimary" onClick={onCtaClick}>
              {ctaLabel}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
