import fs from "node:fs";
import path from "node:path";
import { jsPDF } from "jspdf";
import { createLayout } from "./helpers.mjs";
import { theme } from "./theme.mjs";
import { typography } from "./typography.mjs";

const FONTS_DIR = path.resolve("pdf/assets/fonts");

export function createPdfDocument() {
  const doc = new jsPDF({ unit: "mm", format: "a4", compress: true });
  const regular = fs.readFileSync(path.join(FONTS_DIR, "Inter-Regular.ttf")).toString("base64");
  const bold = fs.readFileSync(path.join(FONTS_DIR, "Inter-Bold.ttf")).toString("base64");

  doc.addFileToVFS("Inter-Regular.ttf", regular);
  doc.addFileToVFS("Inter-Bold.ttf", bold);
  doc.addFont("Inter-Regular.ttf", "Inter", "normal");
  doc.addFont("Inter-Bold.ttf", "Inter", "bold");
  doc.setFont("Inter", "normal");

  return { doc, layout: createLayout(doc, theme, typography) };
}
