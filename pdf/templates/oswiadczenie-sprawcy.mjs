import fs from "node:fs";
import path from "node:path";
import { jsPDF } from "jspdf";
import { createDocumentMeta } from "../engine/document.mjs";
import { PAGE } from "../engine/grid.mjs";
import { theme } from "../engine/theme.mjs";
import { typography } from "../engine/typography.mjs";
import { createLayout } from "../engine/helpers.mjs";
import { renderHeader } from "../engine/header.mjs";
import { renderFooter } from "../engine/footer.mjs";
import { renderWatermark } from "../engine/watermark.mjs";
import { generateQrDataUrl } from "../engine/qr.mjs";

export async function buildOswiadczenieSprawcyPdf(outputPath = path.resolve("public/wzory/oswiadczenie-sprawcy-wzor.pdf")) {
  const meta = createDocumentMeta({
    title: "Oświadczenie sprawcy kolizji drogowej",
    subtitle: "Oficjalny formularz danych zdarzenia drogowego przygotowany do wydruku, podpisu i wysyłki",
    documentType: "OSK",
    sourceUrl: "https://oc.documenty.pl/kolizja",
    revision: "r4",
  });
  const assets = {
    icon: `data:image/png;base64,${fs.readFileSync("public/images/oc-icon.png").toString("base64")}`,
    qr: await generateQrDataUrl(meta.uuid),
  };

  const fontRegular = fs.readFileSync("C:/Windows/Fonts/calibri.ttf").toString("base64");
  const fontBold = fs.readFileSync("C:/Windows/Fonts/calibrib.ttf").toString("base64");
  const doc = new jsPDF({ unit: "mm", format: "a4", compress: true });

  doc.addFileToVFS("Calibri.ttf", fontRegular);
  doc.addFileToVFS("Calibrib.ttf", fontBold);
  doc.addFont("Calibri.ttf", "Calibri", "normal");
  doc.addFont("Calibrib.ttf", "Calibri", "bold");
  doc.setFont("Calibri", "normal");

  const layout = createLayout(doc, theme, typography);

  const sectionHeader = (index, title, x, y, w) => {
    layout.box(x, y, w, 10.8, [255, 255, 255], theme.colors.border, theme.radius.lg);
    doc.setFillColor(...theme.colors.primary);
    doc.roundedRect(x + 3, y + 2.3, 6.8, 6.8, 1.7, 1.7, "F");
    layout.text(String(index), x + 6.4, y + 7.1, typography.h2, [255, 255, 255], { align: "center", bold: true });
    doc.setFillColor(...theme.colors.text);
    doc.roundedRect(x + 12, y + 2.3, w - 15, 6.8, 1.4, 1.4, "F");
    layout.text(title.toUpperCase(), x + 14.2, y + 7.1, typography.h2, [255, 255, 255], { bold: true });
  };

  const field = (label, x, y, w, h = 8, required = false) => {
    layout.text(`${label}${required ? " *" : ""}`, x, y, typography.h2, required ? theme.colors.primary : theme.colors.text);
    layout.box(x, y + 2, w, h);
  };

  const multilineField = (label, x, y, w, h) => {
    layout.text(`${label} *`, x, y, typography.h2, theme.colors.primary);
    layout.box(x, y + 2, w, h);
    for (let yy = y + 9; yy < y + 2 + h - 2; yy += 6.6) {
      layout.line(x + 3, yy, x + w - 3, yy, theme.colors.softBorder, 0.15);
    }
  };

  renderWatermark(doc);
  renderHeader(doc, { PAGE, theme, typography, meta, assets, layout });

  field("Data zdarzenia", PAGE.marginX, 63.5, 37, 8, true);
  field("Godzina", 51, 63.5, 24, 8, true);
  field("Miejsce zdarzenia", 79, 63.5, 77, 8, true);
  field("Numer oświadczenia", 160, 63.5, 40, 8, false);

  sectionHeader(1, "Dane sprawcy zdarzenia", 10, 78.2, 92);
  layout.box(10, 90, 92, 65);
  field("Imię i nazwisko", 15, 97.5, 82, 7, true);
  field("Adres zamieszkania", 15, 109, 82, 7, true);
  field("Kod pocztowy", 15, 120.5, 24, 7);
  field("Miejscowość", 43, 120.5, 54, 7, true);
  field("Telefon", 15, 132, 39, 7);
  field("E-mail", 58, 132, 39, 7);

  sectionHeader(2, "Dane pojazdu i ubezpieczenia", 108, 78.2, 92);
  layout.box(108, 90, 92, 65);
  field("Marka i model", 113, 97.5, 82, 7, true);
  field("Numer rejestracyjny", 113, 109, 39, 7, true);
  field("Numer VIN", 156, 109, 39, 7);
  field("Ubezpieczyciel", 113, 120.5, 39, 7, true);
  field("Numer polisy OC", 156, 120.5, 39, 7, true);
  field("Polisa ważna do", 113, 132, 82, 7);

  sectionHeader(3, "Dane drugiego uczestnika", 10, 157.5, 92);
  layout.box(10, 169.3, 92, 47);
  field("Imię i nazwisko", 15, 176.6, 82, 7, true);
  field("Adres zamieszkania", 15, 188.1, 82, 7);
  field("Telefon", 15, 199.6, 39, 7);
  field("E-mail", 58, 199.6, 39, 7);

  sectionHeader(4, "Dane pojazdu uczestnika", 108, 157.5, 92);
  layout.box(108, 169.3, 92, 47);
  field("Marka i model", 113, 176.6, 82, 7, true);
  field("Numer rejestracyjny", 113, 188.1, 39, 7);
  field("Ubezpieczyciel", 156, 188.1, 39, 7);
  field("Widoczne uszkodzenia", 113, 199.6, 82, 7);

  sectionHeader(5, "Opis zdarzenia", 10, 210.8, 118);
  layout.box(10, 222.5, 118, 43);
  multilineField("Przebieg i okoliczności zdarzenia", 15, 230, 108, 21.5);
  layout.text("Wymień kolejno: manewr, kierunek jazdy, miejsce zderzenia i zauważalne uszkodzenia.", 15, 254.5, typography.caption, theme.colors.subtle);

  sectionHeader(6, "Oświadczenie i podpis", 133, 210.8, 67);
  layout.box(133, 222.5, 67, 43);
  layout.text("Oświadczam, że jestem sprawcą opisanego zdarzenia.", 137, 231.0, typography.body, theme.colors.text);
  layout.text("Podane dane są zgodne z prawdą i zostały podane dobrowolnie.", 137, 236.0, typography.body, theme.colors.text);
  field("Miejscowość i data", 137, 244, 25, 7, true);
  field("Czytelny podpis sprawcy", 166, 244, 28, 7, true);
  layout.text("podpis własnoręczny lub podpis elektroniczny", 166, 253.2, typography.caption, theme.colors.subtle);

  renderFooter(doc, { PAGE, theme, typography, meta, assets, layout });
  doc.save(outputPath);
  return outputPath;
}
