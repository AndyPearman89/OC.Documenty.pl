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

export async function buildWypowiedzenieOcPdf(outputPath = path.resolve("public/wzory/wypowiedzenie-oc-wzor.pdf")) {
  const meta = createDocumentMeta({
    title: "Wypowiedzenie umowy ubezpieczenia OC",
    subtitle: "Wzór wypowiedzenia polisy OC z wyborem właściwej podstawy prawnej",
    documentType: "WOC",
    sourceUrl: "https://oc.documenty.pl/generator",
    revision: "r5",
  });
  const assets = { qr: await generateQrDataUrl(meta.uuid) };
  const { doc, layout } = createPdfDocument();
  const ctx = { PAGE, theme, typography, meta, assets, layout };
  const { sectionHeader, field, checkbox } = createFormComponents(doc, ctx);

  renderWatermark(doc);
  renderHeader(doc, ctx);
  field("Miejscowość i data", 145, 63.5, 55, 8, true);

  sectionHeader(1, "Dane ubezpieczającego", 10, 78.2, 92);
  layout.box(10, 90, 92, 52);
  field("Imię i nazwisko", 15, 97.5, 82, 7, true);
  field("Adres zamieszkania", 15, 109, 82, 7, true);
  field("PESEL", 15, 120.5, 39, 7, true);
  field("Telefon / e-mail", 58, 120.5, 39, 7);

  sectionHeader(2, "Dane ubezpieczyciela", 108, 78.2, 92);
  layout.box(108, 90, 92, 52);
  field("Nazwa zakładu ubezpieczeń", 113, 97.5, 82, 7, true);
  field("Adres", 113, 109, 82, 7, true);
  field("Kod pocztowy", 113, 120.5, 30, 7);
  field("Miejscowość", 147, 120.5, 48, 7);

  sectionHeader(3, "Dane polisy i pojazdu", 10, 145, 92);
  layout.box(10, 156.8, 92, 56.5);
  field("Numer polisy OC", 15, 164, 82, 7, true);
  field("Marka i model pojazdu", 15, 175.5, 82, 7, true);
  field("Numer rejestracyjny", 15, 187, 39, 7, true);
  field("Data końca polisy", 58, 187, 39, 7);

  sectionHeader(4, "Podstawa wypowiedzenia", 108, 145, 92);
  layout.box(108, 156.8, 92, 56.5);
  checkbox("art. 28 — wypowiedzenie na koniec okresu ubezpieczenia", 114, 166.5, 80);
  checkbox("art. 28a — podwójne ubezpieczenie po automatycznym wznowieniu", 114, 177.7, 80);
  checkbox("art. 31 — wypowiedzenie polisy po zakupie pojazdu", 114, 190.6, 80);
  field("Inny powód / uwagi", 114, 201.5, 80, 7);

  sectionHeader(5, "Treść oświadczenia i podpis", 10, 216, 190);
  layout.box(10, 227.8, 190, 37.7);
  layout.text("Niniejszym wypowiadam wskazaną powyżej umowę obowiązkowego ubezpieczenia OC.", 16, 236.5, typography.body, theme.colors.text);
  layout.text("Proszę o potwierdzenie przyjęcia wypowiedzenia oraz wskazanie daty rozwiązania umowy.", 16, 242.1, typography.body, theme.colors.text);
  layout.text("Data i miejscowość", 16, 250, typography.h2, theme.colors.primary, { bold: true });
  layout.line(16, 260, 70, 260, theme.colors.border, 0.25);
  layout.text("Czytelny podpis ubezpieczającego", 105, 250, typography.h2, theme.colors.primary, { bold: true });
  layout.line(105, 260, 194, 260, theme.colors.primary, 0.3);
  layout.text("podpis własnoręczny lub elektroniczny", 149.5, 264, typography.caption, theme.colors.muted, { align: "center" });

  renderFooter(doc, ctx);
  doc.save(outputPath);
  return outputPath;
}
