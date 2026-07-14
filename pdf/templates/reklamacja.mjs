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

export async function buildReklamacjaPdf(outputPath = path.resolve("public/wzory/reklamacja-wzor.pdf")) {
  const meta = createDocumentMeta({
    title: "Reklamacja do ubezpieczyciela",
    subtitle: "Wniosek o ponowne rozpatrzenie decyzji lub szkody",
    documentType: "REK",
    sourceUrl: "https://oc.documenty.pl/dokumenty/reklamacja",
    revision: "r1",
  });
  const assets = { qr: await generateQrDataUrl(meta.uuid) };
  const { doc, layout } = createPdfDocument();
  const ctx = { PAGE, theme, typography, meta, assets, layout };
  const { sectionHeader, field, multilineField, checkbox } = createFormComponents(doc, ctx);

  renderWatermark(doc);
  renderHeader(doc, ctx);
  field("Miejscowość i data", 145, 63.5, 55, 8, true);

  sectionHeader(1, "Dane składającego reklamację", 10, 78.2, 92);
  layout.box(10, 90, 92, 52);
  field("Imię i nazwisko", 15, 97.5, 82, 7, true);
  field("Adres zamieszkania", 15, 109, 82, 7, true);
  field("PESEL", 15, 120.5, 39, 7, true);
  field("Telefon / e-mail", 58, 120.5, 39, 7);

  sectionHeader(2, "Dane ubezpieczyciela i sprawy", 108, 78.2, 92);
  layout.box(108, 90, 92, 52);
  field("Nazwa zakładu ubezpieczeń", 113, 97.5, 82, 7, true);
  field("Numer polisy / szkody", 113, 109, 82, 7, true);
  field("Data decyzji, której dotyczy reklamacja", 113, 120.5, 82, 7, true);

  sectionHeader(3, "Przedmiot reklamacji", 10, 145, 92);
  layout.box(10, 156.8, 92, 56.5);
  checkbox("Odmowa wypłaty odszkodowania", 16, 166, 80);
  checkbox("Zaniżona kwota odszkodowania", 16, 176, 80);
  checkbox("Opóźnienie w rozpatrzeniu szkody", 16, 186, 80);
  checkbox("Inny powód (opisany poniżej)", 16, 196, 80);

  sectionHeader(4, "Uzasadnienie reklamacji", 108, 145, 92);
  layout.box(108, 156.8, 92, 56.5);
  multilineField("Opis okoliczności i uzasadnienie", 113, 164, 82, 45, true);

  sectionHeader(5, "Żądanie i podpis", 10, 216, 190);
  layout.box(10, 227.8, 190, 37.7);
  layout.text("Wnoszę o ponowne rozpatrzenie sprawy i wskazane powyżej rozstrzygnięcie w terminie ustawowym.", 16, 236.5, typography.body, theme.colors.text);
  layout.text("Oświadczam, że podane dane oraz okoliczności są zgodne z prawdą.", 16, 242.1, typography.body, theme.colors.text);
  layout.text("Data i miejscowość", 16, 250, typography.h2, theme.colors.primary, { bold: true });
  layout.line(16, 260, 70, 260, theme.colors.border, 0.25);
  layout.text("Czytelny podpis składającego", 105, 250, typography.h2, theme.colors.primary, { bold: true });
  layout.line(105, 260, 194, 260, theme.colors.primary, 0.3);
  layout.text("podpis własnoręczny lub elektroniczny", 149.5, 264, typography.caption, theme.colors.muted, { align: "center" });

  renderFooter(doc, ctx);
  doc.save(outputPath);
  return outputPath;
}
