"use client";

import React from "react";
import { Download, FileText, Printer, Share2, Send, Mail } from "lucide-react";

interface DocumentActionBarProps {
  documentName?: string;
  documentType?: "PDF" | "DOCX" | "Both";
  onDownloadPDF?: () => void;
  onDownloadDOCX?: () => void;
  onPrint?: () => void;
  onShare?: () => void;
  onSendEmail?: () => void;
}

export function DocumentActionBar({
  documentName = "dokument",
  documentType = "Both",
  onDownloadPDF,
  onDownloadDOCX,
  onPrint,
  onShare,
  onSendEmail,
}: DocumentActionBarProps) {
  const [shareOpen, setShareOpen] = React.useState(false);
  const [emailOpen, setEmailOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [copied, setCopied] = React.useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && onSendEmail) {
      onSendEmail();
      // In real implementation, would send to backend
      alert(`Dokument wysłany na: ${email}`);
      setEmail("");
      setEmailOpen(false);
    }
  };

  const handleDownloadPDF = () => {
    if (onDownloadPDF) {
      onDownloadPDF();
    } else {
      // Default PDF download
      const element = document.getElementById("print-area");
      if (element) {
        // Using html2pdf or similar library
        const html2pdf = (window as any).html2pdf;
        if (html2pdf) {
          html2pdf.save(element, {
            margin: 10,
            filename: `${documentName}.pdf`,
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { orientation: "portrait", unit: "mm", format: "a4" },
          });
        }
      }
    }
  };

  const handleDownloadDOCX = () => {
    if (onDownloadDOCX) {
      onDownloadDOCX();
    } else {
      // Default DOCX download (would need docx library)
      alert("DOCX download - wymagana integracja z biblioteka docx");
    }
  };

  const handlePrint = () => {
    if (onPrint) {
      onPrint();
    } else {
      window.print();
    }
  };

  return (
    <div className="documentActionBar">
      {/* Main Action Buttons */}
      <div className="actionButtonsGrid">
        {/* Download PDF */}
        {(documentType === "PDF" || documentType === "Both") && (
          <button
            className="actionButton actionButton-primary"
            onClick={handleDownloadPDF}
            title="Pobierz dokument w formacie PDF"
          >
            <Download size={20} />
            <span>Pobierz PDF</span>
          </button>
        )}

        {/* Download DOCX */}
        {(documentType === "DOCX" || documentType === "Both") && (
          <button
            className="actionButton actionButton-secondary"
            onClick={handleDownloadDOCX}
            title="Pobierz dokument w formacie DOCX"
          >
            <FileText size={20} />
            <span>Pobierz DOCX</span>
          </button>
        )}

        {/* Print */}
        <button
          className="actionButton actionButton-secondary"
          onClick={handlePrint}
          title="Drukuj dokument"
        >
          <Printer size={20} />
          <span>Drukuj</span>
        </button>

        {/* Share */}
        <div className="actionButtonWrapper">
          <button
            className="actionButton actionButton-secondary"
            onClick={() => setShareOpen(!shareOpen)}
            title="Udostępnij dokument"
          >
            <Share2 size={20} />
            <span>Udostępnij</span>
          </button>

          {shareOpen && (
            <div className="shareDropdown">
              <div className="shareOption">
                <label htmlFor="shareLink">Link do dokumentu:</label>
                <div className="shareLink">
                  <input
                    id="shareLink"
                    type="text"
                    value={shareUrl}
                    readOnly
                    className="shareLinkInput"
                  />
                  <button
                    className="copyButton"
                    onClick={handleCopyLink}
                    title={copied ? "Skopiowano!" : "Skopiuj link"}
                  >
                    {copied ? "✓" : "📋"}
                  </button>
                </div>
              </div>

              <div className="socialShare">
                <span className="shareLabel">Udostępnij w:</span>
                <div className="socialButtons">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialButton facebook"
                    title="Udostępnij na Facebooku"
                  >
                    f
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialButton twitter"
                    title="Udostępnij na Twitterze"
                  >
                    𝕏
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialButton linkedin"
                    title="Udostępnij na LinkedIn"
                  >
                    in
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Send Email */}
        <div className="actionButtonWrapper">
          <button
            className="actionButton actionButton-secondary"
            onClick={() => setEmailOpen(!emailOpen)}
            title="Wyślij dokument emailem"
          >
            <Send size={20} />
            <span>Wyślij</span>
          </button>

          {emailOpen && (
            <div className="emailDropdown">
              <form onSubmit={handleSendEmail} className="emailForm">
                <input
                  type="email"
                  placeholder="Wpisz adres e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="emailInput"
                  required
                />
                <button type="submit" className="sendButton">
                  <Mail size={16} />
                  Wyślij
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Document Info */}
      <div className="documentInfo">
        <p>
          <strong>Dokument:</strong> {documentName}
        </p>
        <p className="documentTip">💡 Dokumenty można pobierać, drukować, udostępniać i wysyłać emailem.</p>
      </div>
    </div>
  );
}
