import type { Metadata } from "next";
import { CheckCircle2, PenLine, ShieldCheck, Sparkles, Lock, Clock, FileCheck, User, Car, MapPin, PenTool } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JointStatementForm } from "@/features/collision/JointStatementForm";

export const metadata: Metadata = {
  title: "Wspólne oświadczenie o zdarzeniu drogowym",
  description: "Wypełnij dane obu uczestników, dodaj podpisy i pobierz wspólne oświadczenie PDF. Dokument do zgłoszenia kolizji ubezpieczycielowi OC.",
  alternates: { canonical: "/wspolne-oswiadczenie" },
};

export default function JointStatementPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="generatorPage">
        <div className="container">
          <Breadcrumbs items={[{ label: "Dokumenty", href: "/dokumenty" }, { label: "Wspólne oświadczenie" }]} />
          <div className="generatorIntro enterpriseGeneratorIntro">
            <span className="premiumPill"><Sparkles /> Dokument po kolizji</span>
            <h1>Wspólne oświadczenie<br />o zdarzeniu drogowym</h1>
            <p>Profesjonalny dokument dla obu stron. Jeden formularz, dwa podpisy, gotowy do wysłania do ubezpieczyciela.</p>
            <div>
              <span><CheckCircle2 /> Wysoka wiarygodność</span>
              <span><PenLine /> Cyfrowe podpisy</span>
              <span><ShieldCheck /> Bezpieczne dane</span>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "28px", alignItems: "start", marginTop: "32px" }}>
            <div>
              <JointStatementForm />
            </div>

            <aside style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Template Preview */}
              <div style={{ background: "#fff", border: "1px solid #e7edf4", borderRadius: "20px", padding: "20px", boxShadow: "0 12px 30px rgba(15,23,42,.05)" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 700, margin: "0 0 14px", color: "#111827" }}>Wzór dokumentu</h3>
                <div style={{ background: "#fff", border: "1px solid #e7edf4", borderRadius: "12px", overflow: "hidden", fontSize: "10px", fontFamily: "monospace", lineHeight: 1.5, color: "#536174" }}>
                  {/* Header */}
                  <div style={{ background: "#f8fafc", borderBottom: "2px solid #ef4444", padding: "10px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontWeight: 700, color: "#ef4444" }}>OC.Documenty.pl</div>
                    <div style={{ fontSize: "9px", color: "#64748b" }}>Wspólne Oświadczenie</div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "12px" }}>
                    <div style={{ fontWeight: 700, marginBottom: "8px", color: "#111827" }}>Wspólne Oświadczenie o Zdarzeniu Drogowym</div>

                    {/* Participant Section */}
                    <div style={{ marginBottom: "6px", fontSize: "9px", color: "#64748b", display: "flex", alignItems: "center", gap: "4px" }}>
                      <User size={12} style={{ color: "#ef4444" }} />
                      Strona 1 — Dane uczestnika
                    </div>
                    <div style={{ marginBottom: "3px" }}>Imię, nazwisko: ___________</div>
                    <div style={{ marginBottom: "3px" }}>Adres zamieszkania: ___________</div>
                    <div style={{ marginBottom: "8px" }}>Nr dowodu osobistego: ___________</div>

                    {/* Vehicle Section */}
                    <div style={{ marginBottom: "6px", fontWeight: 700, color: "#111827", display: "flex", alignItems: "center", gap: "4px" }}>
                      <Car size={12} style={{ color: "#ef4444" }} />
                      Pojazd
                    </div>
                    <div style={{ marginBottom: "3px" }}>Marka, model: ___________</div>
                    <div style={{ marginBottom: "8px" }}>Numer rejestracyjny: ___________</div>

                    {/* Event Section */}
                    <div style={{ marginBottom: "8px", fontWeight: 700, color: "#111827", display: "flex", alignItems: "center", gap: "4px" }}>
                      <MapPin size={12} style={{ color: "#ef4444" }} />
                      Opis zdarzenia
                    </div>
                    <div style={{ marginBottom: "3px" }}>Miejsce: ___________</div>
                    <div>Data i czas: ___________</div>
                  </div>

                  {/* Signature Area */}
                  <div style={{ borderTop: "1px solid #e7edf4", padding: "10px 12px", background: "#fbfcfd" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "8px", fontSize: "9px", fontWeight: 700, color: "#111827" }}>
                      <PenTool size={12} style={{ color: "#ef4444" }} />
                      Podpisy stron
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", fontSize: "9px" }}>
                      <div>Podpis: ___________</div>
                      <div>Data: ___________</div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div style={{ background: "#f8fafc", borderTop: "1px solid #e7edf4", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "8px", color: "#64748b" }}>
                    <div>© OC.Documenty.pl</div>
                    <div>Strona 1 z 2</div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div style={{ background: "#fff", border: "1px solid #e7edf4", borderRadius: "20px", padding: "20px", boxShadow: "0 12px 30px rgba(15,23,42,.05)" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 700, margin: "0 0 14px", color: "#111827" }}>Zalety dokumentu</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", gap: "10px", fontSize: "13px", alignItems: "flex-start" }}>
                    <Lock style={{ width: "16px", height: "16px", color: "#ef4444", flexShrink: 0, marginTop: "2px" }} />
                    <span>Bezpieczeństwo danych osobowych</span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", fontSize: "13px", alignItems: "flex-start" }}>
                    <Clock style={{ width: "16px", height: "16px", color: "#ef4444", flexShrink: 0, marginTop: "2px" }} />
                    <span>Szybka generacja (2 minuty)</span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", fontSize: "13px", alignItems: "flex-start" }}>
                    <FileCheck style={{ width: "16px", height: "16px", color: "#ef4444", flexShrink: 0, marginTop: "2px" }} />
                    <span>Akceptowany przez ubezpieczycieli</span>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div style={{ background: "linear-gradient(145deg,#fff,#fff8f9)", border: "1px solid #e7edf4", borderRadius: "20px", padding: "16px", fontSize: "12px", lineHeight: 1.6, color: "#536174" }}>
                <strong style={{ display: "block", marginBottom: "8px", color: "#111827" }}>Ważne informacje</strong>
                <p style={{ margin: 0 }}>Dokument musi być podpisany przez obydwu uczestników zdarzenia. Przygotuj go w ciągu 3 dni od kolizji.</p>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
