import type { CSSProperties } from "react";
import {
  BadgeDollarSign,
  Building2,
  CarFront,
  Check,
  ClipboardList,
  CloudDownload,
  FileCheck2,
  FileClock,
  FileText,
  Gavel,
  HandCoins,
  KeyRound,
  Landmark,
  LockKeyhole,
  PenLine,
  ReceiptText,
  ScrollText,
  ShieldCheck,
  ShieldQuestion,
  Signature,
  TrafficCone,
} from "lucide-react";

export function HeroProductVisual() {
  return (
    <div className="productVisual" aria-label="Podgląd generatora dokumentów OC">
      <div className="visualGlow" />
      <div className="visualDocument">
        <div className="visualDocHeader">
          <span>
            <FileText />
          </span>
          <b>Wypowiedzenie OC</b>
          <small>PDF A4</small>
        </div>
        <div className="visualLines">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="visualSignature">
          <PenLine />
          <span>Podpisano</span>
        </div>
      </div>
      <div className="visualShield">
        <ShieldCheck />
        <span>Przetwarzanie lokalne</span>
      </div>
      <div className="visualDownload">
        <span>
          <b>Dokument gotowy</b>
          <small>do pobrania</small>
        </span>
        <Check />
      </div>
      <div className="visualLock">
        <LockKeyhole /> Bez konta
      </div>
    </div>
  );
}

export function WorkflowVisual() {
  return (
    <div className="workflowVisual" aria-hidden="true">
      <div>
        <FileText />
        <span>Formularz</span>
      </div>
      <i />
      <div>
        <PenLine />
        <span>Podpis</span>
      </div>
      <i />
      <div>
        <CloudDownload />
        <span>PDF</span>
      </div>
    </div>
  );
}

export function DocumentCardVisual() {
  return (
    <div className="documentCardVisual" aria-hidden="true">
      <div className="documentCardOrnament" />
      <div className="documentCardPaper">
        <FileText />
        <strong>Wzór PDF</strong>
        <span>Aktualny i czytelny</span>
      </div>
      <div className="documentCardCar">
        <CarFront />
        <small>Pojazd</small>
      </div>
    </div>
  );
}

type LandingVisualKind = "document" | "agreement" | "request" | "transfer" | "statement";

export function LandingVisual({ kind = "document" }: { kind?: LandingVisualKind }) {
  const Icon =
    kind === "agreement"
      ? Signature
      : kind === "request"
        ? FileCheck2
        : kind === "transfer"
          ? HandCoins
          : kind === "statement"
            ? ShieldQuestion
            : FileText;

  const label =
    kind === "agreement"
      ? "Umowa"
      : kind === "request"
        ? "Pismo"
        : kind === "transfer"
          ? "Cesja"
          : kind === "statement"
            ? "Oświadczenie"
            : "Wzór PDF";

  const subtitle =
    kind === "agreement"
      ? "Do podpisu stron"
      : kind === "request"
        ? "Formalny styl"
        : kind === "transfer"
          ? "Przeniesienie praw"
          : kind === "statement"
            ? "Po zdarzeniu"
            : "Aktualny i czytelny";

  return (
    <div className={`documentCardVisual landingVisual ${kind}`} aria-hidden="true">
      <div className="documentCardOrnament" />
      <div className="documentCardPaper">
        <Icon />
        <strong>{label}</strong>
        <span>{subtitle}</span>
      </div>
      <div className="documentCardCar">
        <Check />
        <small>Gotowe</small>
      </div>
    </div>
  );
}

export function SectionVisual({ section }: { section: "Umowy" | "Odstąpienia" | "Oświadczenia" }) {
  const Icon = section === "Umowy" ? Signature : section === "Odstąpienia" ? KeyRound : TrafficCone;
  return (
    <div className={`sectionVisual sectionVisual-${section.toLowerCase()}`} aria-hidden="true">
      <div className="sectionVisualBadge">
        <Icon />
        <span>{section}</span>
      </div>
      <div className="sectionVisualCard">
        <ReceiptText />
        <strong>{section}</strong>
        <span>
          {section === "Umowy"
            ? "Dokumenty do podpisu stron"
            : section === "Odstąpienia"
              ? "Pisma formalne i terminowe"
              : "Wzory po zdarzeniu drogowym"}
        </span>
      </div>
    </div>
  );
}

export function BlogHeroVisual() {
  return (
    <div className="blogHeroVisual" aria-hidden="true">
      <div className="blogHeroStack">
        <div>
          <FileText />
          <span>Poradnik</span>
        </div>
        <div>
          <ShieldCheck />
          <span>Zaufanie</span>
        </div>
        <div>
          <CloudDownload />
          <span>PDF</span>
        </div>
      </div>
    </div>
  );
}

const blogThumbnailThemes = {
  "Kolizje i wypadki": { accent: "#ef4444", tint: "rgba(239,68,68,.12)", label: "Kolizje", icon: CarFront, chip: "Auto" },
  "Ubezpieczenie OC": { accent: "#1d4ed8", tint: "rgba(29,78,216,.12)", label: "OC", icon: ScrollText, chip: "Polisa" },
  "Kupno i sprzedaż auta": { accent: "#0f766e", tint: "rgba(15,118,110,.12)", label: "Auto", icon: ClipboardList, chip: "Umowa" },
  Odszkodowania: { accent: "#7c3aed", tint: "rgba(124,58,237,.12)", label: "Zwrot", icon: BadgeDollarSign, chip: "Szkoda" },
  "UFG i przepisy": { accent: "#0f172a", tint: "rgba(15,23,42,.12)", label: "UFG", icon: Landmark, chip: "Przepisy" },
  "Dokumenty i wzory": { accent: "#ea580c", tint: "rgba(234,88,12,.12)", label: "PDF", icon: FileText, chip: "Wzór" },
  Porównania: { accent: "#059669", tint: "rgba(5,150,105,.12)", label: "Porady", icon: Gavel, chip: "Porównanie" },
} as const;

export function BlogThumbnailVisual({ category, title }: { category: keyof typeof blogThumbnailThemes; title: string }) {
  const theme = blogThumbnailThemes[category] ?? blogThumbnailThemes["Dokumenty i wzory"];
  const Icon = theme.icon;
  const initials = title
    .split(" ")
    .slice(0, 3)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className="blogThumbnail"
      style={{ "--thumb-accent": theme.accent, "--thumb-tint": theme.tint } as CSSProperties}
      aria-hidden="true"
    >
      <div className="blogThumbnailGlow" />
      <div className="blogThumbnailOrbit" />
      <div className="blogThumbnailBadge">{theme.label}</div>
      <div className="blogThumbnailCard">
        <div className="blogThumbnailSymbol">
          <Icon />
        </div>
        <div className="blogThumbnailIdentity">
          <span>{initials}</span>
          <small>{theme.chip}</small>
        </div>
      </div>
      <div className="blogThumbnailMeta">
        <span>
          <Check />
          Gotowe
        </span>
        <span>
          <CloudDownload />
          PDF
        </span>
      </div>
    </div>
  );
}

export function BlogCoverVisual({ category, title }: { category: keyof typeof blogThumbnailThemes; title: string }) {
  const theme = blogThumbnailThemes[category] ?? blogThumbnailThemes["Dokumenty i wzory"];
  const Icon = theme.icon;
  const initials = title
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className="blogCover"
      style={{ "--thumb-accent": theme.accent, "--thumb-tint": theme.tint } as CSSProperties}
      aria-hidden="true"
    >
      <div className="blogCoverTop">
        <span>{theme.label}</span>
        <i />
      </div>
      <div className="blogCoverTitle">{initials}</div>
      <div className="blogCoverCard">
        <Icon />
        <strong>{title}</strong>
      </div>
      <div className="blogCoverFooter">
        <span>{category}</span>
        <small>{theme.chip} • OC.Documenty.pl</small>
      </div>
    </div>
  );
}
