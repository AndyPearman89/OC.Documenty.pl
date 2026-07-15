"use client";

import { ReactNode, useMemo } from "react";

interface LivePreviewProps {
  title: string;
  fields: Record<string, string>;
  children: ReactNode;
  variant?: "pdf" | "docx" | "preview";
}

export function LivePreview({ title, fields, children, variant = "preview" }: LivePreviewProps) {
  const filledCount = useMemo(
    () => Object.values(fields).filter((v) => v?.trim()).length,
    [fields]
  );
  const totalCount = Object.keys(fields).length;

  return (
    <div className="livePreviewContainer">
      <div className="previewHeader">
        <h3>{title}</h3>
        <div className="previewMeta">
          <span>
            <strong>{filledCount}</strong> z {totalCount} pól
          </span>
          {variant === "pdf" && (
            <span style={{ color: "var(--brand)" }}>
              📄 PDF
            </span>
          )}
          {variant === "docx" && (
            <span style={{ color: "var(--brand)" }}>
              📄 DOCX
            </span>
          )}
        </div>
      </div>

      {/* Real-time preview content */}
      <div className="previewContent">
        {children}
      </div>

      {/* Preview footer with download hints */}
      <div className="previewFooter">
        <small>Podgląd aktualizuje się na żywo</small>
      </div>
    </div>
  );
}
