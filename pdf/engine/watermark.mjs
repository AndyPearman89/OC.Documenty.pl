export function renderWatermark(doc) {
  doc.setTextColor(17, 24, 39);
  doc.setFont("Inter", "bold");
  doc.setFontSize(24);
  doc.setGState(new doc.GState({ opacity: 0.04 }));
  doc.text("OC.Documenty.pl", 105, 155, { align: "center", angle: 18 });
  doc.setGState(new doc.GState({ opacity: 1 }));
}
