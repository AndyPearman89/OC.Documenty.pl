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

export async function buildZwrotSkladkiOcPdf(outputPath = path.resolve("public/wzory/zwrot-skladki-oc-wzor.pdf")) {
  const meta = createDocumentMeta({
    title: "Wniosek o zwrot składki OC",
    subtitle: "Wniosek o rozliczenie niewykorzystanej części składki ubezpieczeniowej",
    documentType: "ZWR",
    sourceUrl: "https://oc.documenty.pl/dokumenty/zwrot-skladki-oc",
    revision: "r1",
  });
  const assets = { qr: await generateQrDataUrl(meta.uuid) };
  const { doc, layout } = createPdfDocument();
  const ctx = { PAGE, theme, typography, meta, assets, layout };
  const { sectionHeader, field, checkbox } = createFormComponents(doc, ctx);

  renderWatermark(doc);
  renderHeader(doc, ctx);
  field("Miejscowość i data", 145, 63.5, 55, 8, true);

  sectionHeader(1, "Dane wnioskodawcy", 10, 78.2, 92);
  layout.box(10, 90, 92, 52);
  field("Imię i nazwisko", 15, 97.5, 82, 7, true);
  field("Adres zamieszkania", 15, 109, 82, 7, true);
  field("PESEL", 15, 120.5, 39, 7, true);
  field("Telefon / e-mail", 58, 120.5, 39, 7);

  sectionHeader(2, "Dane ubezpieczyciela i polisy", 108, 78.2, 92);
  layout.box(108, 90, 92, 52);
  field("Nazwa zakładu ubezpieczeń", 113, 97.5, 82, 7, true);
  field("Numer polisy OC", 113, 109, 82, 7, true);
  field("Polisa ważna do", 113, 120.5, 39, 7, true);

  sectionHeader(3, "Podstawa zwrotu składki", 10, 145, 92);
  layout.box(10, 156.8, 92, 56.5);
  checkbox("Sprzedaż lub zbycie pojazdu", 16, 166, 80);
  checkbox("Wypowiedzenie umowy przed końcem okresu ochrony", 16, 176, 80);
  checkbox("Podwójne ubezpieczenie po automatycznym wznowieniu", 16, 186, 80);
  checkbox("Inna podstawa (opisana poniżej)", 16, 196, 80);
  field("Opis / uwagi", 16, 202, 80, 7);

  sectionHeader(4, "Dane do zwrotu środków", 108, 145, 92);
  layout.box(108, 156.8, 92, 56.5);
  field("Numer rachunku bankowego", 113, 164, 82, 7, true);
  field("Imię i nazwisko posiadacza rachunku", 113, 175.5, 82, 7, true);
  field("Nazwa banku", 113, 187, 82, 7);

  sectionHeader(5, "Treść oświadczenia i podpis", 10, 216, 190);
  layout.box(10, 227.8, 190, 37.7);
  layout.text("Wnoszę o zwrot niewykorzystanej części składki wskazanej powyżej polisy OC.", 16, 236.5, typography.body, theme.colors.text);
  layout.text("Oświadczam, że podane dane oraz numer rachunku bankowego są zgodne z prawdą.", 16, 242.1, typography.body, theme.colors.text);
  layout.text("Data i miejscowość", 16, 250, typography.h2, theme.colors.primary, { bold: true });
  layout.line(16, 260, 70, 260, theme.colors.border, 0.25);
  layout.text("Czytelny podpis wnioskodawcy", 105, 250, typography.h2, theme.colors.primary, { bold: true });
  layout.line(105, 260, 194, 260, theme.colors.primary, 0.3);
  layout.text("podpis własnoręczny lub elektroniczny", 149.5, 264, typography.caption, theme.colors.muted, { align: "center" });

  renderFooter(doc, ctx);
  doc.save(outputPath);
  return outputPath;
}
