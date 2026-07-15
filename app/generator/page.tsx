import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, FileText, LockKeyhole, Sparkles, ShieldCheck, TimerReset, Zap, User, DollarSign, Lock, Eye, Building2 } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionVisual } from "@/components/ProductVisuals";
import { InsurerButtonsGrid } from "@/components/InsurerButtonsGrid";
import { GeneratorForm } from "@/features/generator/GeneratorForm";
import { generatorDocuments, insurerProfiles } from "@/lib/catalog";

type GeneratorDoc = (typeof generatorDocuments)[number];
type GeneratorGroup = "Umowy" | "Odstąpienia" | "Oświadczenia";

export const metadata: Metadata = {
  title: "Generator wypowiedzenia OC",
  description: "Wybierz dokument i przygotuj wypowiedzenie umowy OC online krok po kroku. Profesjonalne dokumenty bez logowania.",
  alternates: { canonical: "/generator" },
};

export default function GeneratorPage() {
  const order = ["Umowy", "Odstąpienia", "Oświadczenia"] as const;
  const grouped = generatorDocuments.reduce<Record<GeneratorGroup, GeneratorDoc[]>>(
    (acc, doc) => {
      (acc[doc.group] ||= []).push(doc);
      return acc;
    },
    { Umowy: [], Odstąpienia: [], Oświadczenia: [] },
  );

  return (
    <>
      <Header />
      <main id="main-content" className="generatorPage">
        <div className="container">
          <div className="generatorHeroPanel">
            <div className="generatorIntro enterpriseGeneratorIntro">
              <span className="premiumPill">
                <Sparkles /> Generator online
              </span>
              <h1>Wypowiedzenie OC i dokumenty pojazdowe gotowe w kilka minut</h1>
              <p>
                Zacznij od właściwego wzoru, uzupełnij dane krok po kroku i pobierz profesjonalny PDF bez logowania, bez chaosu i bez
                szukania po całym serwisie. Wszystkie dokumenty w zgodzie z obowiązującym prawem.
              </p>
              <div className="generatorHighlights">
                <span>
                  <ShieldCheck /> Bezpieczne dane lokalnie
                </span>
                <span>
                  <TimerReset /> Około 2–5 minut pracy
                </span>
                <span>
                  <CheckCircle2 /> Gotowe do druku i wysyłki
                </span>
              </div>
              <div className="generatorHeroActions">
                <Link className="premiumButton primary" href="#generator-shell">
                  Zacznij teraz <ArrowRight />
                </Link>
                <Link className="premiumButton secondary" href="/dokumenty">
                  <FileText /> Wszystkie wzory
                </Link>
              </div>
            </div>
            <aside className="generatorHeroSide">
              <div className="generatorHeroStat">
                <strong>1</strong>
                <span>wybór dokumentu</span>
              </div>
              <div className="generatorHeroStat">
                <strong>5</strong>
                <span>kroków do PDF</span>
              </div>
              <div className="generatorHeroStat">
                <strong>100%</strong>
                <span>bez konta</span>
              </div>
            </aside>
          </div>

          {/* Insurance Companies Section */}
          <div style={{ background: "#fff", border: "1px solid #e7edf4", borderRadius: "20px", padding: "28px", boxShadow: "0 12px 30px rgba(15,23,42,.05)", marginTop: "32px", marginBottom: "28px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <Building2 size={20} style={{ color: "#ef4444" }} />
              <h2 style={{ fontSize: "20px", fontWeight: 700, margin: 0, color: "#111827" }}>Twój ubezpieczyciel</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "14px", fontWeight: 600, marginBottom: "8px", color: "#111827" }}>Wybierz ubezpieczyciela</label>
                <select style={{ width: "100%", padding: "12px 14px", border: "1px solid #e7edf4", borderRadius: "12px", fontSize: "14px", background: "#fff", color: "#111827", cursor: "pointer" }}>
                  <option value="">Wybierz z listy...</option>
                  {insurerProfiles.map((insurer) => (
                    <option key={insurer.slug} value={insurer.slug}>
                      {insurer.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "14px", fontWeight: 600, marginBottom: "8px", color: "#111827" }}>Lub wyszukaj</label>
                <input type="text" placeholder="Wpisz nazwę ubezpieczyciela..." style={{ width: "100%", padding: "12px 14px", border: "1px solid #e7edf4", borderRadius: "12px", fontSize: "14px" }} />
              </div>
            </div>

            <InsurerButtonsGrid insurers={insurerProfiles} />
          </div>

          {/* Two-column layout with generator picker and preview */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "28px", alignItems: "start" }}>
            <div className="generatorPicker">
              <h2>Dostępne generatory</h2>
              {order.map((group) => (
                <section key={group} className="generatorGroup">
                  <div className="generatorGroupHeader">
                    <SectionVisual section={group} />
                    <strong>{group}</strong>
                  </div>
                  <div>
                    {grouped[group].map((doc: GeneratorDoc) => (
                      <Link
                        key={doc.slug}
                        className="generatorDocChoice"
                        href={doc.slug === "wypowiedzenie-oc" ? "/generator" : `/${doc.slug}`}
                      >
                        <strong>{doc.title}</strong>
                        <small>{doc.description}</small>
                        <span>Otwórz <ArrowRight /></span>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Right sidebar with template preview and benefits */}
            <aside style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Template Preview */}
              <div style={{ background: "#fff", border: "1px solid #e7edf4", borderRadius: "20px", padding: "20px", boxShadow: "0 12px 30px rgba(15,23,42,.05)" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 700, margin: "0 0 14px", color: "#111827" }}>Wzór dokumentu</h3>
                <div style={{ background: "#fff", border: "1px solid #e7edf4", borderRadius: "12px", overflow: "hidden", fontSize: "10px", fontFamily: "monospace", lineHeight: 1.5, color: "#536174" }}>
                  {/* Header */}
                  <div style={{ background: "#f8fafc", borderBottom: "2px solid #ef4444", padding: "10px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontWeight: 700, color: "#ef4444" }}>OC.Documenty.pl</div>
                    <div style={{ fontSize: "9px", color: "#64748b" }}>Dokument Umowy</div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "12px" }}>
                    <div style={{ fontWeight: 700, marginBottom: "8px", color: "#111827" }}>Pismo Wypowiedzenia Umowy OC</div>
                    <div style={{ marginBottom: "6px", fontSize: "9px", color: "#64748b", display: "flex", alignItems: "center", gap: "4px" }}>
                      <User size={12} style={{ color: "#ef4444" }} />
                      Dane ubezpieczającego
                    </div>
                    <div style={{ marginBottom: "3px" }}>Imię, nazwisko: ___________</div>
                    <div style={{ marginBottom: "8px" }}>Nr polisy: ___________</div>

                    <div style={{ marginBottom: "6px", fontWeight: 700, color: "#111827", display: "flex", alignItems: "center", gap: "4px" }}>
                      <DollarSign size={12} style={{ color: "#ef4444" }} />
                      Dane wznowienia
                    </div>
                    <div style={{ marginBottom: "3px" }}>Data wznowienia: ___________</div>
                    <div style={{ marginBottom: "8px" }}>Powód: ___________</div>

                    <div style={{ marginBottom: "8px", fontWeight: 700, color: "#111827", display: "flex", alignItems: "center", gap: "4px" }}>
                      <Zap size={12} style={{ color: "#ef4444" }} />
                      Oświadczenia
                    </div>
                    <div style={{ fontSize: "9px" }}>☐ Potwierdzam dokładność danych</div>
                  </div>

                  {/* Footer */}
                  <div style={{ background: "#f8fafc", borderTop: "1px solid #e7edf4", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "8px", color: "#64748b" }}>
                    <div>© OC.Documenty.pl</div>
                    <div>Strona 1 z 1</div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div style={{ background: "#fff", border: "1px solid #e7edf4", borderRadius: "20px", padding: "20px", boxShadow: "0 12px 30px rgba(15,23,42,.05)" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 700, margin: "0 0 14px", color: "#111827" }}>Dlaczego ten generator?</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", gap: "10px", fontSize: "13px", alignItems: "flex-start" }}>
                    <Lock style={{ width: "16px", height: "16px", color: "#ef4444", flexShrink: 0, marginTop: "2px" }} />
                    <span>Dane zabezpieczone lokalnie</span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", fontSize: "13px", alignItems: "flex-start" }}>
                    <TimerReset style={{ width: "16px", height: "16px", color: "#ef4444", flexShrink: 0, marginTop: "2px" }} />
                    <span>Szybka generacja dokumentów</span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", fontSize: "13px", alignItems: "flex-start" }}>
                    <Eye style={{ width: "16px", height: "16px", color: "#ef4444", flexShrink: 0, marginTop: "2px" }} />
                    <span>Bez ukrytych opłat</span>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div style={{ background: "linear-gradient(145deg,#fff,#fff8f9)", border: "1px solid #e7edf4", borderRadius: "20px", padding: "16px", fontSize: "12px", lineHeight: 1.6, color: "#536174" }}>
                <strong style={{ display: "block", marginBottom: "8px", color: "#111827" }}>💡 Warto wiedzieć</strong>
                <p style={{ margin: 0 }}>Wszystkie dokumenty są przygotowywane na urządzeniu. Twoje dane nigdy nie opuszczają przeglądarki.</p>
              </div>
            </aside>
          </div>

          <div id="generator-shell">
            <GeneratorForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
