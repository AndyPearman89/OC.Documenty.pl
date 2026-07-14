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

export async function buildOdstapienieOdUmowyPdf(outputPath = path.resolve("public/wzory/odstapienie-od-umowy-ubezpieczenia-zawartej-na-odleglosc-wzor.pdf")) {
  const meta = createDocumentMeta({
    title: "Odstąpienie od umowy ubezpieczenia zawartej na odległość",
    subtitle: "Formalny wzór odstąpienia od umowy zawartej online lub telefonicznie",
    documentType: "ODU",
    sourceUrl: "https://oc.documenty.pl/dokumenty/odstapienie-od-umowy-ubezpieczenia-zawartej-na-odleglosc",
    revision: "r1",
  });
  const assets = { qr: await generateQrDataUrl(meta.uuid) };
  const { doc, layout } = createPdfDocument();
  const ctx = { PAGE, theme, typography, meta, assets, layout };
  const { sectionHeader, field, checkbox } = createFormComponents(doc, ctx);

  renderWatermark(doc);
  renderHeader(doc, ctx);
  field("Miejscowość i data", 145, 63.5, 55, 8, true);

  sectionHeader(1, "Dane konsumenta", 10, 78.2, 92);
  layout.box(10, 90, 92, 52);
  field("Imię i nazwisko", 15, 97.5, 82, 7, true);
  field("Adres zamieszkania", 15, 109, 82, 7, true);
  field("PESEL", 15, 120.5, 39, 7, true);
  field("Telefon / e-mail", 58, 120.5, 39, 7);

  sectionHeader(2, "Dane ubezpieczyciela i umowy", 108, 78.2, 92);
  layout.box(108, 90, 92, 52);
  field("Nazwa zakładu ubezpieczeń", 113, 97.5, 82, 7, true);
  field("Numer polisy / umowy", 113, 109, 82, 7, true);
  field("Data zawarcia umowy", 113, 120.5, 39, 7, true);

  sectionHeader(3, "Sposób zawarcia umowy", 10, 145, 92);
  layout.box(10, 156.8, 92, 56.5);
  checkbox("Umowa zawarta przez internet", 16, 166, 80);
  checkbox("Umowa zawarta telefonicznie", 16, 176, 80);
  checkbox("Umowa zawarta poza lokalem przedsiębiorstwa", 16, 186, 80);
  field("Numer rachunku do zwrotu składki", 16, 196, 80, 7);

  sectionHeader(4, "Podstawa prawna", 108, 145, 92);
  layout.box(108, 156.8, 92, 56.5);
  layout.text("Art. 40 ustawy o prawach konsumenta oraz art. 35 ustawy o dystrybucji ubezpieczeń", 113, 165, typography.body, theme.colors.text, { maxWidth: 82 });
  layout.text("dają prawo odstąpienia od umowy ubezpieczenia zawartej na odległość w terminie 30 dni", 113, 174, typography.body, theme.colors.text, { maxWidth: 82 });
  layout.text("od dnia poinformowania o zawarciu umowy, bez podawania przyczyny.", 113, 183, typography.body, theme.colors.text, { maxWidth: 82 });

  sectionHeader(5, "Treść oświadczenia i podpis", 10, 216, 190);
  layout.box(10, 227.8, 190, 37.7);
  layout.text("Niniejszym odstępuję od wskazanej powyżej umowy ubezpieczenia zawartej na odległość.", 16, 236.5, typography.body, theme.colors.text);
  layout.text("Proszę o potwierdzenie odstąpienia oraz zwrot wpłaconej składki na wskazany rachunek.", 16, 242.1, typography.body, theme.colors.text);
  layout.text("Data i miejscowość", 16, 250, typography.h2, theme.colors.primary, { bold: true });
  layout.line(16, 260, 70, 260, theme.colors.border, 0.25);
  layout.text("Czytelny podpis konsumenta", 105, 250, typography.h2, theme.colors.primary, { bold: true });
  layout.line(105, 260, 194, 260, theme.colors.primary, 0.3);
  layout.text("podpis własnoręczny lub elektroniczny", 149.5, 264, typography.caption, theme.colors.muted, { align: "center" });

  renderFooter(doc, ctx);
  doc.save(outputPath);
  return outputPath;
}
