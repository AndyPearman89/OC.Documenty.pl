function renderBrandMark(doc, x, y, size) {
  const s = size / 22;
  doc.setFillColor(227, 6, 19);
  doc.roundedRect(x, y, size, size, 4 * s, 4 * s, "F");

  doc.setFillColor(255, 255, 255);
  doc.roundedRect(x + 4 * s, y + 3.5 * s, 9 * s, 15 * s, 1 * s, 1 * s, "F");
  doc.setFillColor(227, 6, 19);
  doc.triangle(x + 10 * s, y + 3.5 * s, x + 13 * s, y + 3.5 * s, x + 13 * s, y + 6.5 * s, "F");
  doc.setDrawColor(227, 6, 19);
  doc.setLineWidth(0.5 * s);
  doc.line(x + 6 * s, y + 10.5 * s, x + 11 * s, y + 10.5 * s);
  doc.line(x + 6 * s, y + 13.5 * s, x + 11 * s, y + 13.5 * s);
  doc.line(x + 6 * s, y + 16.5 * s, x + 11 * s, y + 16.5 * s);

  doc.setFillColor(255, 255, 255);
  doc.circle(x + 15.5 * s, y + 15.5 * s, 5 * s, "F");
  doc.setDrawColor(227, 6, 19);
  doc.setLineWidth(0.9 * s);
  doc.line(x + 13 * s, y + 15.7 * s, x + 14.8 * s, y + 17.7 * s);
  doc.line(x + 14.8 * s, y + 17.7 * s, x + 18.3 * s, y + 13.3 * s);
}

export function renderHeader(doc, ctx) {
  const { PAGE, theme, typography, meta, layout } = ctx;
  const { text, line, box } = layout;

  renderBrandMark(doc, PAGE.marginX, 9, 22);
  text("OC.", 37, 17.6, typography.h1, theme.colors.primary, { bold: true });
  text("Documenty.pl", 49, 17.6, typography.h1, theme.colors.text, { bold: true });
  text("Wzory dokumentów OC/AC online", 37, 24.5, typography.body, theme.colors.muted);

  const badges = [
    ["Aktualny wzór", "2026"],
    ["Wzór informacyjny", "Sprawdź przed wysłaniem"],
    ["PDF A4", "Do pobrania"],
  ];

  badges.forEach(([title, sub], index) => {
    const x = 111 + index * 30;
    box(x, 10, 28, 19, theme.colors.surface, theme.colors.border, theme.radius.md);
    doc.setFillColor(...theme.colors.primary);
    doc.circle(x + 5.3, 16, 2.2, "F");
    text("✓", x + 5.3, 17.3, 5.4, [255, 255, 255], { align: "center", bold: true });
    text(title, x + 9, 15.2, 5.3, theme.colors.text, { bold: true });
    text(sub, x + 9, 21.1, 4.6, theme.colors.muted);
  });

  line(PAGE.marginX, 35, 200, 35, theme.colors.primary, 0.7);
  text(meta.title.toUpperCase(), 10, 46.8, typography.h1, theme.colors.text, { bold: true });
  text(meta.subtitle, 10, 53.2, typography.body, theme.colors.muted, { maxWidth: 140 });
  text(`Wersja ${meta.version}`, 156, 46.3, typography.h2, theme.colors.muted);
  text(`Rewizja: ${meta.revision}`, 156, 51, typography.h2, theme.colors.muted);
  text(`Aktualizacja: ${meta.updateDate}`, 156, 55.7, typography.h2, theme.colors.text);
}
