"use client";

import { Building2 } from "lucide-react";
import type { insurerProfiles } from "@/lib/catalog";

type InsurerProfile = (typeof insurerProfiles)[number];

interface InsurerButtonsGridProps {
  insurers: readonly InsurerProfile[];
}

export function InsurerButtonsGrid({ insurers }: InsurerButtonsGridProps) {
  return (
    <div style={{ marginTop: "20px" }}>
      <p style={{ fontSize: "12px", color: "#64748b", marginBottom: "12px", margin: "12px 0 12px" }}>
        Popularne ubezpieczyciele:
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "10px" }}>
        {insurers.map((insurer) => (
          <button
            key={insurer.slug}
            style={{
              padding: "12px 14px",
              border: "1px solid #e7edf4",
              borderRadius: "12px",
              background: "#fbfcfd",
              color: "#111827",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.borderColor = "#ef4444";
              e.currentTarget.style.color = "#ef4444";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fbfcfd";
              e.currentTarget.style.borderColor = "#e7edf4";
              e.currentTarget.style.color = "#111827";
            }}
          >
            <Building2 size={14} />
            {insurer.name}
          </button>
        ))}
      </div>
    </div>
  );
}
