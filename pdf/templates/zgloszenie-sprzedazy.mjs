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

export async function buildZgloszenieSprzedazyPdf(outputPath = path.resolve("public/wzory/zgloszenie-sprzedazy-wzor.pdf")) {
  const meta = createDocumentMeta({
    title: "Zgłoszenie sprzedaży pojazdu",
    subtitle: "Zawiadomienie ubezpieczyciela o zbyciu pojazdu",
    documentType: "ZGS",
    sourceUrl: "https://oc.documenty.pl/dokumenty/zgloszenie-sprzedazy",
    revision: "r1",
  });
  const assets = { icon: loadBrandIcon(), qr: await generateQrDataUrl(meta.uuid) };
  const { doc, layout } = createPdfDocument();
  const ctx = { PAGE, theme, typography, meta, assets, layout };
  const { sectionHeader, field } = createFormComponents(doc, ctx);

  renderWatermark(doc);
  renderHeader(doc, ctx);
  field("Miejscowość i data", 145, 63.5, 55, 8, true);

  sectionHeader(1, "Dane zbywcy (sprzedającego)", 10, 78.2, 92);
  layout.box(10, 90, 92, 52);
  field("Imię i nazwisko", 15, 97.5, 82, 7, true);
  field("Adres zamieszkania", 15, 109, 82, 7, true);
  field("PESEL", 15, 120.5, 39, 7, true);
  field("Telefon / e-mail", 58, 120.5, 39, 7);

  sectionHeader(2, "Dane nabywcy (kupującego)", 108, 78.2, 92);
  layout.box(108, 90, 92, 52);
  field("Imię i nazwisko / nazwa firmy", 113, 97.5, 82, 7, true);
  field("Adres zamieszkania / siedziby", 113, 109, 82, 7, true);
  field("PESEL / NIP", 113, 120.5, 82, 7);

  sectionHeader(3, "Dane pojazdu i polisy", 10, 145, 92);
  layout.box(10, 156.8, 92, 56.5);
  field("Marka i model pojazdu", 15, 164, 82, 7, true);
  field("Numer rejestracyjny", 15, 175.5, 39, 7, true);
  field("Numer VIN", 58, 175.5, 39, 7, true);
  field("Numer polisy OC", 15, 187, 82, 7, true);

  sectionHeader(4, "Data i podstawa zbycia", 108, 145, 92);
  layout.box(108, 156.8, 92, 56.5);
  field("Data zbycia pojazdu", 113, 164, 39, 7, true);
  field("Forma zbycia", 156, 164, 39, 7, true);
  field("Numer dokumentu zbycia (jeśli dotyczy)", 113, 175.5, 82, 7);

  sectionHeader(5, "Treść oświadczenia i podpis", 10, 216, 190);
  layout.box(10, 227.8, 190, 37.7);
  layout.text("Zawiadamiam, że w dniu wskazanym powyżej zbyłem/zbyłam wskazany pojazd na rzecz nabywcy.", 16, 236.5, typography.body, theme.colors.text);
  layout.text("Wnoszę o przeniesienie praw i obowiązków z polisy OC lub jej rozliczenie zgodnie z przepisami.", 16, 242.1, typography.body, theme.colors.text);
  layout.text("Data i miejscowość", 16, 250, typography.h2, theme.colors.primary, { bold: true });
  layout.line(16, 260, 70, 260, theme.colors.border, 0.25);
  layout.text("Czytelny podpis zbywcy", 105, 250, typography.h2, theme.colors.primary, { bold: true });
  layout.line(105, 260, 194, 260, theme.colors.primary, 0.3);
  layout.text("podpis własnoręczny lub elektroniczny", 149.5, 264, typography.caption, theme.colors.muted, { align: "center" });

  renderFooter(doc, ctx);
  doc.save(outputPath);
  return outputPath;
}
