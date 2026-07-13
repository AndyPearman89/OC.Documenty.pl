export function createFormComponents(doc, ctx) {
  const { theme, typography, layout } = ctx;

  const sectionHeader = (index, title, x, y, w) => {
    layout.box(x, y, w, 10.8, [255, 255, 255], theme.colors.border, theme.radius.lg);
    doc.setFillColor(...theme.colors.primary);
    doc.roundedRect(x + 3, y + 2.3, 6.8, 6.8, 1.7, 1.7, "F");
    layout.text(String(index), x + 6.4, y + 7.1, typography.h2, [255, 255, 255], { align: "center", bold: true });
    doc.setFillColor(...theme.colors.text);
    doc.roundedRect(x + 12, y + 2.3, w - 15, 6.8, 1.4, 1.4, "F");
    layout.text(title.toUpperCase(), x + 14.2, y + 7.1, typography.h2, [255, 255, 255], { bold: true });
  };

  const field = (label, x, y, w, h = 8, required = false) => {
    layout.text(`${label}${required ? " *" : ""}`, x, y, typography.h2, required ? theme.colors.primary : theme.colors.text);
    layout.box(x, y + 2, w, h);
  };

  const multilineField = (label, x, y, w, h, required = false) => {
    layout.text(`${label}${required ? " *" : ""}`, x, y, typography.h2, required ? theme.colors.primary : theme.colors.text);
    layout.box(x, y + 2, w, h);
    for (let yy = y + 9; yy < y + h; yy += 6.6) {
      layout.line(x + 3, yy, x + w - 3, yy, theme.colors.softBorder, 0.15);
    }
  };

  const checkbox = (label, x, y, width) => {
    layout.box(x, y - 3.2, 4.5, 4.5, [255, 255, 255], theme.colors.border, theme.radius.sm);
    layout.text(label, x + 7, y, typography.body, theme.colors.text, { maxWidth: width - 7 });
  };

  return { sectionHeader, field, multilineField, checkbox };
}
