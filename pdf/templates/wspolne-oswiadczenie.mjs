import path from "node:path";
import { createPdfDocument, loadBrandIcon } from "../engine/create-pdf.mjs";
import { createDocumentMeta } from "../engine/document.mjs";
import { renderHeader } from "../engine/header.mjs";
import { renderFooter } from "../engine/footer.mjs";
import { renderWatermark } from "../engine/watermark.mjs";
import { generateQrDataUrl } from "../engine/qr.mjs";
import { createFormComponents } from "../engine/form.mjs";
import { PAGE } from "../engine/grid.mjs";
import { theme } from "../engine/theme.mjs";
import { typography } from "../engine/typography.mjs";

export async function buildWspolneOswiadczeniePdf(outputPath = path.resolve("public/wzory/wspolne-oswiadczenie-wzor.pdf")) {
  const meta = createDocumentMeta({
    title: "Wspólne oświadczenie o zdarzeniu drogowym",
    subtitle: "Formularz danych obu uczestników, opisu zdarzenia, szkicu i podpisów",
    documentType: "WOZ",
    sourceUrl: "https://oc.documenty.pl/wspolne-oswiadczenie",
    revision: "r3",
  });
  const assets = { icon: loadBrandIcon(), qr: await generateQrDataUrl(meta.uuid) };
  const { doc, layout } = createPdfDocument();
  const ctx = { PAGE, theme, typography, meta, assets, layout };
  const { sectionHeader, field, multilineField } = createFormComponents(doc, ctx);

  renderWatermark(doc);
  renderHeader(doc, ctx);

  field("Data zdarzenia", 10, 63.5, 37, 8, true);
  field("Godzina", 51, 63.5, 24, 8, true);
  field("Miejsce zdarzenia", 79, 63.5, 77, 8, true);
  field("Numer oświadczenia", 160, 63.5, 40, 8);

  sectionHeader(1, "Sprawca zdarzenia", 10, 78.2, 92);
  layout.box(10, 90, 92, 59);
  field("Imię i nazwisko", 15, 97.2, 82, 7, true);
  field("Adres zamieszkania", 15, 108.3, 82, 7, true);
  field("PESEL", 15, 119.4, 39, 7);
  field("Telefon / e-mail", 58, 119.4, 39, 7);
  field("Marka i model pojazdu", 15, 130.5, 39, 7, true);
  field("Nr rejestracyjny", 58, 130.5, 39, 7, true);

  sectionHeader(2, "Drugi uczestnik", 108, 78.2, 92);
  layout.box(108, 90, 92, 59);
  field("Imię i nazwisko", 113, 97.2, 82, 7, true);
  field("Adres zamieszkania", 113, 108.3, 82, 7, true);
  field("PESEL", 113, 119.4, 39, 7);
  field("Telefon / e-mail", 156, 119.4, 39, 7);
  field("Marka i model pojazdu", 113, 130.5, 39, 7, true);
  field("Nr rejestracyjny", 156, 130.5, 39, 7, true);

  sectionHeader(3, "Opis zdarzenia i uszkodzenia", 10, 151.5, 92);
  layout.box(10, 163.3, 92, 54.5);
  multilineField("Opis przebiegu zdarzenia", 15, 170.5, 82, 18, true);
  multilineField("Widoczne uszkodzenia pojazdów", 15, 195, 82, 13);

  sectionHeader(4, "Szkic sytuacyjny", 108, 151.5, 92);
  layout.box(108, 163.3, 92, 54.5);
  for (let x = 113; x <= 195; x += 8.2) layout.line(x, 170, x, 207, theme.colors.softBorder, 0.15);
  for (let y = 170; y <= 207; y += 7.4) layout.line(113, y, 195, y, theme.colors.softBorder, 0.15);
  layout.text("Zaznacz pojazdy, kierunek jazdy i miejsce zderzenia", 154, 213.2, typography.caption, theme.colors.muted, { align: "center" });

  sectionHeader(5, "Oświadczenie i podpisy", 10, 220.2, 190);
  layout.box(10, 232, 190, 33.5);
  layout.text("Potwierdzamy zgodność powyższych danych, opisu zdarzenia oraz szkicu sytuacyjnego.", 16, 240.3, typography.body, theme.colors.text);
  layout.text("Data i miejscowość", 16, 247.2, typography.h2, theme.colors.primary, { bold: true });
  layout.line(16, 257, 52, 257, theme.colors.border, 0.25);
  layout.text("Czytelny podpis sprawcy", 66, 247.2, typography.h2, theme.colors.primary, { bold: true });
  layout.line(66, 257, 123, 257, theme.colors.primary, 0.3);
  layout.text("Czytelny podpis uczestnika", 137, 247.2, typography.h2, theme.colors.primary, { bold: true });
  layout.line(137, 257, 194, 257, theme.colors.primary, 0.3);
  layout.text("podpis własnoręczny lub elektroniczny", 94.5, 261.4, typography.caption, theme.colors.muted, { align: "center" });
  layout.text("podpis własnoręczny lub elektroniczny", 165.5, 261.4, typography.caption, theme.colors.muted, { align: "center" });

  renderFooter(doc, ctx);
  doc.save(outputPath);
  return outputPath;
}
