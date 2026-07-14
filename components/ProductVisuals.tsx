import {
  CarFront,
  Check,
  CloudDownload,
  FileCheck2,
  FileText,
  HandCoins,
  KeyRound,
  LockKeyhole,
  PenLine,
  ReceiptText,
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
