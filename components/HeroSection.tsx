"use client";

import { ReactNode } from "react";

interface HeroSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  checks: string[];
  ctaLabel: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  children?: ReactNode;
  variant?: "default" | "compact";
}

export function HeroSection({
  eyebrow,
  title,
  description,
  checks,
  ctaLabel,
  ctaHref,
  onCtaClick,
  children,
  variant = "default",
}: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="container">
        <div className="heroGrid">
          <div className="heroContent">
            <span className="heroEyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p className="lead">{description}</p>
            <ul className="heroChecks">
              {checks.map((check, i) => (
                <li key={i}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {check}
                </li>
              ))}
            </ul>
            <div className="heroActions" style={{ marginTop: "var(--space-6)" }}>
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
          {children && <div className="heroVisual">{children}</div>}
        </div>
      </div>
    </section>
  );
}
