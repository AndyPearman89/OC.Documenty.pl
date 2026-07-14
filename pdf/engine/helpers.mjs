export function createLayout(doc, theme, typography) {
  const rgb = (color) => (Array.isArray(color) ? color : theme.colors.text);

  function text(value, x, y, size = typography.body, color = theme.colors.text, options = {}) {
    doc.setFont("Inter", options.bold ? "bold" : "normal");
    doc.setFontSize(size);
    doc.setTextColor(...rgb(color));
    doc.text(String(value), x, y, options);
  }

  function line(x1, y1, x2, y2, color = theme.colors.border, width = 0.2) {
    doc.setDrawColor(...rgb(color));
    doc.setLineWidth(width);
    doc.line(x1, y1, x2, y2);
  }

  function box(x, y, w, h, fill = [255, 255, 255], stroke = theme.colors.border, radius = theme.radius.md) {
    doc.setFillColor(...rgb(fill));
    doc.setDrawColor(...rgb(stroke));
    doc.roundedRect(x, y, w, h, radius, radius, "FD");
  }

  return { text, line, box };
}
