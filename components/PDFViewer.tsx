'use client';

import { Minus, Plus, Download, Printer, Maximize2 } from 'lucide-react';
import { useState } from 'react';

interface PDFViewerProps {
  title?: string;
  currentPage?: number;
  totalPages?: number;
  onDownload?: () => void;
  onPrint?: () => void;
  children?: React.ReactNode;
}

export function PDFViewer({
  title = 'Podgląd dokumentu',
  currentPage = 1,
  totalPages = 1,
  onDownload,
  onPrint,
  children,
}: PDFViewerProps) {
  const [zoom, setZoom] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleZoomIn = () => setZoom(Math.min(zoom + 10, 200));
  const handleZoomOut = () => setZoom(Math.max(zoom - 10, 50));
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  return (
    <div
      className={`pdf-viewer-container ${isFullscreen ? 'fullscreen' : ''}`}
      style={{
        position: isFullscreen ? 'fixed' : 'relative',
        top: isFullscreen ? 0 : 'auto',
        left: isFullscreen ? 0 : 'auto',
        width: isFullscreen ? '100vw' : '100%',
        height: isFullscreen ? '100vh' : '100%',
        zIndex: isFullscreen ? 9999 : 'auto',
        backgroundColor: isFullscreen ? '#1a1a1a' : 'transparent',
      }}
    >
      <style>{`
        .pdf-viewer-container {
          display: flex;
          flex-direction: column;
          background: #f9f9f9;
          border-radius: 12px;
          overflow: hidden;
          height: 100%;
        }

        .pdf-viewer-header {
          background: white;
          border-bottom: 1px solid #e5e7eb;
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .pdf-viewer-title {
          font-size: 12px;
          font-weight: 700;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .pdf-viewer-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .pdf-page-counter {
          font-size: 13px;
          color: #666;
          font-weight: 500;
        }

        .pdf-viewer-toolbar {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .pdf-toolbar-btn {
          width: 36px;
          height: 36px;
          border: 1px solid #e5e7eb;
          background: white;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          transition: all 0.2s;
          font-size: 12px;
        }

        .pdf-toolbar-btn:hover {
          background: #f5f7fa;
          border-color: #d71920;
          color: #d71920;
        }

        .pdf-toolbar-btn:active {
          background: #e5e7eb;
        }

        .pdf-zoom-control {
          display: flex;
          align-items: center;
          gap: 4px;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          padding: 4px;
          background: white;
        }

        .pdf-zoom-value {
          font-size: 12px;
          color: #666;
          min-width: 40px;
          text-align: center;
        }

        .pdf-viewer-content {
          flex: 1;
          overflow: auto;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 20px;
          gap: 20px;
        }

        .pdf-viewer-content > * {
          transform: scale(${zoom / 100});
          transform-origin: top center;
          transition: transform 0.2s;
        }

        .pdf-viewer-container.fullscreen .pdf-viewer-content {
          background: #1a1a1a;
        }

        .pdf-viewer-container.fullscreen .pdf-viewer-header {
          background: #2a2a2a;
          border-bottom-color: #444;
        }

        .pdf-viewer-container.fullscreen .pdf-toolbar-btn {
          background: #3a3a3a;
          border-color: #444;
          color: #ccc;
        }

        .pdf-viewer-container.fullscreen .pdf-toolbar-btn:hover {
          background: #454545;
          border-color: #d71920;
          color: #d71920;
        }

        @media (max-width: 1200px) {
          .pdf-viewer-container {
            border-radius: 8px;
          }

          .pdf-viewer-toolbar {
            gap: 4px;
          }

          .pdf-toolbar-btn {
            width: 32px;
            height: 32px;
          }
        }
      `}</style>

      {/* Header */}
      <div className="pdf-viewer-header">
        <div className="pdf-viewer-title">{title}</div>
        <div className="pdf-viewer-info">
          <div className="pdf-page-counter">
            {currentPage} / {totalPages}
          </div>
          <div className="pdf-viewer-toolbar">
            {/* Zoom Controls */}
            <div className="pdf-zoom-control">
              <button
                className="pdf-toolbar-btn"
                onClick={handleZoomOut}
                title="Zmniejsz (−10%)"
                style={{ borderRadius: '4px 0 0 4px', border: 'none' }}
              >
                <Minus size={16} />
              </button>
              <div className="pdf-zoom-value">{zoom}%</div>
              <button
                className="pdf-toolbar-btn"
                onClick={handleZoomIn}
                title="Powiększ (+10%)"
                style={{ borderRadius: '0 4px 4px 0', border: 'none' }}
              >
                <Plus size={16} />
              </button>
            </div>

            {/* Action Buttons */}
            <button
              className="pdf-toolbar-btn"
              onClick={onDownload}
              title="Pobierz PDF"
            >
              <Download size={16} />
            </button>

            <button
              className="pdf-toolbar-btn"
              onClick={onPrint}
              title="Drukuj"
            >
              <Printer size={16} />
            </button>

            <button
              className="pdf-toolbar-btn"
              onClick={toggleFullscreen}
              title="Pełny ekran"
            >
              <Maximize2 size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pdf-viewer-content">{children}</div>
    </div>
  );
}
