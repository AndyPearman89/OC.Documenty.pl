export function renderFooter(doc, ctx) {
  const { PAGE, theme, typography, meta, assets, layout } = ctx;
  const { text, box } = layout;

  const bulletRow = (x, y, symbol, title, sub) => {
    doc.setFillColor(...theme.colors.primary);
    doc.circle(x + 2.5, y + 1.8, 1.8, "F");
    text(symbol, x + 2.5, y + 2.7, 5.2, [255, 255, 255], { align: "center", bold: true });
    text(title, x + 6.5, y + 1.7, 5.4, theme.colors.text, { bold: true });
    text(sub, x + 6.5, y + 5.6, typography.caption, theme.colors.muted);
  };

  box(10, 268, 190, 14, theme.colors.pale, [248, 210, 214], theme.radius.md);
  bulletRow(14, 271.1, "✓", "Czytelny układ A4", "Gotowy do sprawdzenia i podpisu");
  bulletRow(60, 271.1, "↗", "Wysyłka online", "E-mail, formularz lub ePUAP");
  bulletRow(103, 271.1, "•", "Bezpieczne dane", "Czytelny formularz urzędowy");

  doc.setFillColor(...theme.colors.primary);
  doc.roundedRect(147, 270.5, 13, 8, 1.5, 1.5, "F");
  text("PDF", 153.5, 275.7, 5.8, [255, 255, 255], { align: "center", bold: true });
  doc.setFillColor(...theme.colors.text);
  doc.roundedRect(162, 270.5, 13, 8, 1.5, 1.5, "F");
  text("DOCX", 168.5, 275.7, 5, [255, 255, 255], { align: "center", bold: true });

  box(178, 269.2, 11.5, 11.5, [255, 255, 255], theme.colors.border, theme.radius.md);
  doc.addImage(assets.qr, "PNG", 178.8, 270, 9.9, 9.9, undefined, "FAST");
  text("Wzory online", 198, 275.7, typography.caption, theme.colors.primary, { align: "right", bold: true });

  text("OC.Documenty.pl", 10, PAGE.footerY, typography.body, theme.colors.text, { bold: true });
  text("Serwis jest częścią Documenty.pl", 40, PAGE.footerY, typography.body, theme.colors.muted);
  text("oc@documenty.pl", 105, PAGE.footerY, typography.body, theme.colors.primary, { bold: true, align: "center" });
  text(`Strona 1/1 • Wersja ${meta.version}`, 200, PAGE.footerY, typography.body, theme.colors.muted, { align: "right" });
  text(`UUID: ${meta.uuid}`, 10, 293.2, typography.caption, theme.colors.muted);
  text("Wzór informacyjny — sprawdź wymagania ubezpieczyciela", 10, 296, typography.caption, theme.colors.muted);
  text(`Generator: ${meta.generatorId}`, 105, 293.2, typography.caption, theme.colors.muted, { align: "center" });
  text(`Rewizja: ${meta.revision} • ${meta.documentNumber}`, 200, 296, typography.caption, theme.colors.muted, { align: "right" });
}
