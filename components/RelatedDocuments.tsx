import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

interface RelatedDoc {
  title: string;
  description: string;
  href: string;
}

interface RelatedDocumentsProps {
  documents: RelatedDoc[];
  title?: string;
}

export function RelatedDocuments({ documents, title = "Powiązane dokumenty" }: RelatedDocumentsProps) {
  return (
    <div style={{ marginTop: "48px", paddingTop: "48px", borderTop: "1px solid #e7edf4" }}>
      <h2 style={{ marginBottom: "28px", fontSize: "22px", fontWeight: 700 }}>{title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
        {documents.map((doc) => (
          <Link
            key={doc.href}
            href={doc.href}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              padding: "20px",
              background: "#f8fafc",
              border: "1px solid #e7edf4",
              borderRadius: "12px",
              textDecoration: "none",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "#ef4444";
              el.style.background = "#fff";
              el.style.boxShadow = "0 4px 12px rgba(239, 68, 68, 0.1)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "#e7edf4";
              el.style.background = "#f8fafc";
              el.style.boxShadow = "none";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FileText size={18} style={{ color: "#ef4444", flexShrink: 0 }} />
              <h3 style={{ fontSize: "15px", fontWeight: 600, margin: 0, color: "#111827" }}>{doc.title}</h3>
            </div>
            <p style={{ fontSize: "13px", color: "#536174", margin: 0, lineHeight: 1.5 }}>{doc.description}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#ef4444", fontSize: "12px", fontWeight: 600, marginTop: "6px" }}>
              Otwórz <ArrowRight size={14} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
