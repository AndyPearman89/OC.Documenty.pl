import fs from "node:fs";
import { jsPDF } from "jspdf";
import { createLayout } from "./helpers.mjs";
import { theme } from "./theme.mjs";
import { typography } from "./typography.mjs";

export function createPdfDocument() {
  const doc = new jsPDF({ unit: "mm", format: "a4", compress: true });
  const regular = fs.readFileSync("C:/Windows/Fonts/calibri.ttf").toString("base64");
  const bold = fs.readFileSync("C:/Windows/Fonts/calibrib.ttf").toString("base64");

  doc.addFileToVFS("Calibri.ttf", regular);
  doc.addFileToVFS("Calibrib.ttf", bold);
  doc.addFont("Calibri.ttf", "Calibri", "normal");
  doc.addFont("Calibrib.ttf", "Calibri", "bold");
  doc.setFont("Calibri", "normal");

  return { doc, layout: createLayout(doc, theme, typography) };
}

export function loadBrandIcon() {
  return `data:image/png;base64,${fs.readFileSync("public/images/oc-icon.png").toString("base64")}`;
}
