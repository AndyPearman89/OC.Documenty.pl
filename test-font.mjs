import fs from "node:fs";
import { jsPDF } from "jspdf";

function test(name, regularPath) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const regular = fs.readFileSync(regularPath).toString("base64");
  doc.addFileToVFS("F.ttf", regular);
  doc.addFont("F.ttf", "F", "normal");
  doc.setFont("F", "normal");
  doc.setFontSize(14);
  const raw = "Oświadczenie: dokumentów, wysłania, miejscowość, żółć";
  const nfc = raw.normalize("NFC");
  const nfd = raw.normalize("NFD");
  console.log(name, "raw codepoints:", [...raw].map(c=>c.codePointAt(0).toString(16)).join(","));
  console.log(name, "raw===nfc:", raw===nfc, "raw===nfd:", raw===nfd);
  doc.text(nfc, 10, 20);
  doc.save(`test-${name}.pdf`);
}

test("inter", "pdf/assets/fonts/Inter-Regular.ttf");
