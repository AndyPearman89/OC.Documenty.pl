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

export async function buildOswiadczenieSprawcyPdf(outputPath = path.resolve("public/wzory/oswiadczenie-sprawcy-wzor.pdf")) {
  const meta = createDocumentMeta({
    title: "Oświadczenie sprawcy kolizji drogowej",
    subtitle: "Oficjalny formularz danych zdarzenia drogowego przygotowany do wydruku, podpisu i wysyłki",
    documentType: "OSK",
    sourceUrl: "https://oc.documenty.pl/kolizja",
    revision: "r4",
  });
  const assets = { qr: await generateQrDataUrl(meta.uuid) };
  const { doc, layout } = createPdfDocument();
  const ctx = { PAGE, theme, typography, meta, assets, layout };
  const { sectionHeader, field, multilineField } = createFormComponents(doc, ctx);

  renderWatermark(doc);
  renderHeader(doc, ctx);

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

  renderFooter(doc, ctx);
  doc.save(outputPath);
  return outputPath;
}
