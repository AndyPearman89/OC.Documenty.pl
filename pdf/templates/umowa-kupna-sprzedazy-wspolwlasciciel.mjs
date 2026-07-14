import path from "node:path";
import { createPdfDocument } from "../engine/create-pdf.mjs";
import { createDocumentMeta } from "../engine/document.mjs";
import { renderHeader } from "../engine/header.mjs";
import { renderFooter } from "../engine/footer.mjs";
import { renderWatermark } from "../engine/watermark.mjs";
import { generateQrDataUrl } from "../engine/qr.mjs";
import { createFormComponents } from "../engine/form.mjs";
import { PAGE } from "../engine/grid.mjs";
import { theme } from "../engine/theme.mjs";
import { typography } from "../engine/typography.mjs";

export async function buildUmowaKupnaSprzedazyWspolwlascicielPdf(outputPath = path.resolve("public/wzory/umowa-kupna-sprzedazy-wspolwlasciciel-wzor.pdf")) {
  const meta = createDocumentMeta({
    title: "Umowa kupna-sprzedaży pojazdu ze współwłaścicielem",
    subtitle: "Wzór umowy z udziałem współwłaściciela pojazdu",
    documentType: "UKW",
    sourceUrl: "https://oc.documenty.pl/dokumenty/umowa-kupna-sprzedazy-wspolwlasciciel",
    revision: "r1",
  });
  const assets = { qr: await generateQrDataUrl(meta.uuid) };
  const { doc, layout } = createPdfDocument();
  const ctx = { PAGE, theme, typography, meta, assets, layout };
  const { sectionHeader, field } = createFormComponents(doc, ctx);

  renderWatermark(doc);
  renderHeader(doc, ctx);
  field("Miejscowość i data zawarcia umowy", 145, 63.5, 55, 8, true);

  sectionHeader(1, "Sprzedający", 10, 78.2, 92);
  layout.box(10, 90, 92, 52);
  field("Imię i nazwisko", 15, 97.5, 82, 7, true);
  field("Adres zamieszkania", 15, 109, 82, 7, true);
  field("PESEL / dokument tożsamości", 15, 120.5, 82, 7, true);

  sectionHeader(2, "Kupujący (współwłaściciel 1)", 108, 78.2, 92);
  layout.box(108, 90, 92, 52);
  field("Imię i nazwisko", 113, 97.5, 82, 7, true);
  field("Adres zamieszkania", 113, 109, 82, 7, true);
  field("PESEL / dokument tożsamości", 113, 120.5, 82, 7, true);

  sectionHeader(3, "Współwłaściciel 2", 10, 145, 92);
  layout.box(10, 156.8, 92, 56.5);
  field("Imię i nazwisko", 15, 164, 82, 7, true);
  field("Adres zamieszkania", 15, 175.5, 82, 7, true);
  field("Udział we współwłasności", 15, 187, 82, 7, true);

  sectionHeader(4, "Pojazd, cena i warunki", 108, 145, 92);
  layout.box(108, 156.8, 92, 56.5);
  field("Marka, model, nr rej. i VIN", 113, 164, 82, 7, true);
  field("Cena sprzedaży (słownie i cyfrowo)", 113, 175.5, 82, 7, true);
  field("Sposób i termin zapłaty", 113, 187, 82, 7, true);

  sectionHeader(5, "Oświadczenia i podpisy stron", 10, 216, 190);
  layout.box(10, 227.8, 190, 37.7);
  layout.text("Sprzedający oświadcza, że pojazd jest wolny od wad prawnych i obciążeń oraz zgodny z opisem.", 16, 236.5, typography.body, theme.colors.text);
  layout.text("Kupujący nabywają pojazd na współwłasność w częściach wskazanych powyżej.", 16, 242.1, typography.body, theme.colors.text);
  layout.text("Sprzedający", 13, 250, typography.h2, theme.colors.primary, { bold: true });
  layout.line(13, 260, 68, 260, theme.colors.primary, 0.3);
  layout.text("Kupujący 1", 76, 250, typography.h2, theme.colors.primary, { bold: true });
  layout.line(76, 260, 131, 260, theme.colors.primary, 0.3);
  layout.text("Kupujący 2", 139, 250, typography.h2, theme.colors.primary, { bold: true });
  layout.line(139, 260, 194, 260, theme.colors.primary, 0.3);
  layout.text("podpis", 40.5, 264, typography.caption, theme.colors.muted, { align: "center" });
  layout.text("podpis", 103.5, 264, typography.caption, theme.colors.muted, { align: "center" });
  layout.text("podpis", 166.5, 264, typography.caption, theme.colors.muted, { align: "center" });

  renderFooter(doc, ctx);
  doc.save(outputPath);
  return outputPath;
}
