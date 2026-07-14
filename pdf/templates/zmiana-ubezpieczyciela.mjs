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

export async function buildZmianaUbezpieczycielaPdf(outputPath = path.resolve("public/wzory/zmiana-ubezpieczyciela-wzor.pdf")) {
  const meta = createDocumentMeta({
    title: "Zawiadomienie o zmianie ubezpieczyciela OC",
    subtitle: "Pismo do uporządkowanego przejścia do nowego towarzystwa ubezpieczeń",
    documentType: "ZUB",
    sourceUrl: "https://oc.documenty.pl/dokumenty/zmiana-ubezpieczyciela",
    revision: "r1",
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

  sectionHeader(2, "Dotychczasowy ubezpieczyciel", 108, 78.2, 92);
  layout.box(108, 90, 92, 52);
  field("Nazwa zakładu ubezpieczeń", 113, 97.5, 82, 7, true);
  field("Numer dotychczasowej polisy", 113, 109, 82, 7, true);
  field("Polisa ważna do", 113, 120.5, 39, 7, true);

  sectionHeader(3, "Nowy ubezpieczyciel i polisa", 10, 145, 92);
  layout.box(10, 156.8, 92, 56.5);
  field("Nazwa nowego zakładu ubezpieczeń", 15, 164, 82, 7, true);
  field("Numer nowej polisy OC", 15, 175.5, 82, 7, true);
  field("Nowa polisa obowiązuje od", 15, 187, 39, 7, true);

  sectionHeader(4, "Dane pojazdu", 108, 145, 92);
  layout.box(108, 156.8, 92, 56.5);
  field("Marka i model pojazdu", 113, 164, 82, 7, true);
  field("Numer rejestracyjny", 113, 175.5, 39, 7, true);
  field("Numer VIN", 156, 175.5, 39, 7);
  checkbox("Zmiana dobrowolna — rezygnacja z automatycznego wznowienia", 114, 190.6, 80);

  sectionHeader(5, "Treść oświadczenia i podpis", 10, 216, 190);
  layout.box(10, 227.8, 190, 37.7);
  layout.text("Zawiadamiam, że z dniem wskazanym powyżej zmieniam ubezpieczyciela OC wskazanego pojazdu.", 16, 236.5, typography.body, theme.colors.text);
  layout.text("Proszę o potwierdzenie przyjęcia zawiadomienia oraz rozliczenie dotychczasowej polisy.", 16, 242.1, typography.body, theme.colors.text);
  layout.text("Data i miejscowość", 16, 250, typography.h2, theme.colors.primary, { bold: true });
  layout.line(16, 260, 70, 260, theme.colors.border, 0.25);
  layout.text("Czytelny podpis ubezpieczającego", 105, 250, typography.h2, theme.colors.primary, { bold: true });
  layout.line(105, 260, 194, 260, theme.colors.primary, 0.3);
  layout.text("podpis własnoręczny lub elektroniczny", 149.5, 264, typography.caption, theme.colors.muted, { align: "center" });

  renderFooter(doc, ctx);
  doc.save(outputPath);
  return outputPath;
}
