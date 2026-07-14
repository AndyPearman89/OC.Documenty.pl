import type { CSSProperties } from "react";
import { Building2, FileText, ShieldCheck } from "lucide-react";

export const insurerBrandStyles: Record<string, { className: string; accent: string; label: string; glow: string; panel: string; badge: string }> = {
  PZU: { className: "brand-pzu", accent: "#0057b8", label: "PZU", glow: "rgba(0,87,184,.16)", panel: "linear-gradient(145deg,#f1f7ff,#fff)", badge: "#dbeafe" },
  Warta: { className: "brand-warta", accent: "#003b7a", label: "Warta", glow: "rgba(0,59,122,.14)", panel: "linear-gradient(145deg,#eef4ff,#fff)", badge: "#dbeafe" },
  Allianz: { className: "brand-allianz", accent: "#0033a0", label: "Allianz", glow: "rgba(0,51,160,.14)", panel: "linear-gradient(145deg,#f2f6ff,#fff)", badge: "#dbeafe" },
  LINK4: { className: "brand-link4", accent: "#0f172a", label: "LINK4", glow: "rgba(15,23,42,.14)", panel: "linear-gradient(145deg,#f7f8fb,#fff)", badge: "#e2e8f0" },
  UNIQA: { className: "brand-uniqa", accent: "#9a0f27", label: "UNIQA", glow: "rgba(154,15,39,.14)", panel: "linear-gradient(145deg,#fff3f5,#fff)", badge: "#ffe4e8" },
  Generali: { className: "brand-generali", accent: "#e2001a", label: "Generali", glow: "rgba(226,0,26,.14)", panel: "linear-gradient(145deg,#fff1f3,#fff)", badge: "#ffe4e8" },
  Compensa: { className: "brand-compensa", accent: "#aa1f2a", label: "Compensa", glow: "rgba(170,31,42,.14)", panel: "linear-gradient(145deg,#fff4f4,#fff)", badge: "#fee2e2" },
  "ERGO Hestia": { className: "brand-ergo", accent: "#d71920", label: "ERGO Hestia", glow: "rgba(215,25,32,.14)", panel: "linear-gradient(145deg,#fff4f4,#fff)", badge: "#fee2e2" },
  InterRisk: { className: "brand-interrisk", accent: "#0b5cab", label: "InterRisk", glow: "rgba(11,92,171,.14)", panel: "linear-gradient(145deg,#eff7ff,#fff)", badge: "#dbeafe" },
  Proama: { className: "brand-proama", accent: "#7c3aed", label: "Proama", glow: "rgba(124,58,237,.14)", panel: "linear-gradient(145deg,#f5f0ff,#fff)", badge: "#e9d5ff" },
  TUW: { className: "brand-tuw", accent: "#2c6e49", label: "TUW", glow: "rgba(44,110,73,.14)", panel: "linear-gradient(145deg,#eefaf2,#fff)", badge: "#dcfce7" },
  Benefia: { className: "brand-benefia", accent: "#c2410c", label: "Benefia", glow: "rgba(194,65,12,.14)", panel: "linear-gradient(145deg,#fff6ef,#fff)", badge: "#ffedd5" },
};

export function InsurerBrand({ name }: { name: string }) {
  const brand = insurerBrandStyles[name] ?? { className: "brand-generic", accent: "#111827", label: name, glow: "rgba(17,24,39,.12)", panel: "linear-gradient(145deg,#f8fafc,#fff)", badge: "#e2e8f0" };
  const letters = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <span className={`insurerBrand ${brand.className}`} style={{ "--brand-accent": brand.accent } as CSSProperties}>
      <span className="insurerBrandMark">{letters}</span>
      <span className="insurerBrandText">{brand.label}</span>
    </span>
  );
}

export function InsurerHeroVisual({ name }: { name: string }) {
  const brand = insurerBrandStyles[name] ?? insurerBrandStyles.PZU;
  const letters = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <div className={`insurerHeroVisual ${brand.className}`} style={{ "--brand-accent": brand.accent, "--brand-glow": brand.glow, "--brand-panel": brand.panel, "--brand-badge": brand.badge } as CSSProperties}>
      <div className="insurerHeroBackdrop" />
      <div className="insurerHeroCard">
        <span className="insurerHeroBadge">{letters}</span>
        <strong>{name}</strong>
        <small>Formularze i wzory online</small>
      </div>
      <div className="insurerHeroSheet">
        <FileText />
        <span>Dokument</span>
      </div>
      <div className="insurerHeroShield">
        <ShieldCheck />
        <span>Zaufanie</span>
      </div>
      <div className="insurerHeroBubble">
        <Building2 />
      </div>
    </div>
  );
}
