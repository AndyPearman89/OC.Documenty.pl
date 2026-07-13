export function renderHeader(doc, ctx) {
  const { PAGE, theme, typography, meta, assets, layout } = ctx;
  const { text, line, box } = layout;

  doc.addImage(assets.icon, "PNG", PAGE.marginX, 9, 22, 22, undefined, "FAST");
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
