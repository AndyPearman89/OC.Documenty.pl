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

export async function buildUmowaKupnaSprzedazyPdf(outputPath = path.resolve("public/wzory/umowa-kupna-sprzedazy-wzor.pdf")) {
  const meta = createDocumentMeta({
    title: "Umowa kupna-sprzedaży pojazdu",
    subtitle: "Profesjonalny wzór umowy zakupu samochodu lub motocykla",
    documentType: "UKS",
    sourceUrl: "https://oc.documenty.pl/dokumenty/umowa-kupna-sprzedazy",
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

  sectionHeader(2, "Kupujący", 108, 78.2, 92);
  layout.box(108, 90, 92, 52);
  field("Imię i nazwisko", 113, 97.5, 82, 7, true);
  field("Adres zamieszkania", 113, 109, 82, 7, true);
  field("PESEL / dokument tożsamości", 113, 120.5, 82, 7, true);

  sectionHeader(3, "Przedmiot umowy — pojazd", 10, 145, 92);
  layout.box(10, 156.8, 92, 56.5);
  field("Marka i model", 15, 164, 82, 7, true);
  field("Numer rejestracyjny", 15, 175.5, 39, 7, true);
  field("Numer VIN", 58, 175.5, 39, 7, true);
  field("Rok produkcji", 15, 187, 39, 7, true);
  field("Przebieg (km)", 58, 187, 39, 7);

  sectionHeader(4, "Cena i warunki", 108, 145, 92);
  layout.box(108, 156.8, 92, 56.5);
  field("Cena sprzedaży (słownie i cyfrowo)", 113, 164, 82, 7, true);
  field("Sposób i termin zapłaty", 113, 175.5, 82, 7, true);
  field("Data i miejsce wydania pojazdu", 113, 187, 82, 7, true);

  sectionHeader(5, "Oświadczenia i podpisy stron", 10, 216, 190);
  layout.box(10, 227.8, 190, 37.7);
  layout.text("Sprzedający oświadcza, że pojazd jest wolny od wad prawnych i obciążeń oraz zgodny z opisem.", 16, 236.5, typography.body, theme.colors.text);
  layout.text("Kupujący oświadcza, że zapoznał się ze stanem technicznym pojazdu i nie wnosi zastrzeżeń.", 16, 242.1, typography.body, theme.colors.text);
  layout.text("Podpis sprzedającego", 16, 250, typography.h2, theme.colors.primary, { bold: true });
  layout.line(16, 260, 70, 260, theme.colors.primary, 0.3);
  layout.text("Podpis kupującego", 110, 250, typography.h2, theme.colors.primary, { bold: true });
  layout.line(110, 260, 164, 260, theme.colors.primary, 0.3);
  layout.text("podpis własnoręczny lub elektroniczny", 43, 264, typography.caption, theme.colors.muted, { align: "center" });
  layout.text("podpis własnoręczny lub elektroniczny", 137, 264, typography.caption, theme.colors.muted, { align: "center" });

  renderFooter(doc, ctx);
  doc.save(outputPath);
  return outputPath;
}
