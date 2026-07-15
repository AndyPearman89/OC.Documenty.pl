"use client";

import { ReactNode } from "react";

interface UnifiedGeneratorShellProps {
  title: string;
  progress: number;
  children: ReactNode;
  preview?: ReactNode;
  actions?: ReactNode;
}

export function UnifiedGeneratorShell({
  title,
  progress,
  children,
  preview,
  actions,
}: UnifiedGeneratorShellProps) {
  return (
    <div className="generatorShell">
      {/* Progress Header */}
      <div className="generatorProgress">
        <div>
          <span>Postęp dokumentu</span>
          <strong>{progress}%</strong>
        </div>
        <div className="progressTrack">
          <i style={{ width: `${progress}%` }} />
        </div>
        <small>
          <svg viewBox="0 0 24 24" fill="currentColor" width="14">
            <circle cx="12" cy="12" r="1" />
          </svg>
          Zapis lokalny
        </small>
      </div>

      {/* Main Content Grid */}
      <div className="generatorBody">
        {/* Form Section */}
        <section className="generatorFormSection">
          <div className="formHeading">
            <span style={{ color: "var(--brand)", fontSize: "12px", fontWeight: "800" }}>
              Wzór dokumentu
            </span>
            <h2>{title}</h2>
          </div>
          {children}
        </section>

        {/* Desktop Preview (hidden on mobile) */}
        {preview && (
          <aside className="generatorPreviewSection">
            {preview}
          </aside>
        )}
      </div>

      {/* Mobile Preview (shown only on mobile) */}
      {preview && <div className="generatorMobilePreview">{preview}</div>}

      {/* Actions Footer */}
      {actions && (
        <footer className="generatorFooter">
          {actions}
        </footer>
      )}
    </div>
  );
}
