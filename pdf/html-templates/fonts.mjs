import fs from "node:fs";
import path from "node:path";

const FONTS_DIR = path.resolve("pdf/assets/fonts");

export function interFontFace() {
  const regular = fs.readFileSync(path.join(FONTS_DIR, "Inter-Regular.ttf")).toString("base64");
  const bold = fs.readFileSync(path.join(FONTS_DIR, "Inter-Bold.ttf")).toString("base64");
  return `
@font-face{font-family:"Inter";font-weight:400;font-style:normal;src:url(data:font/ttf;base64,${regular}) format("truetype");}
@font-face{font-family:"Inter";font-weight:700 800;font-style:normal;src:url(data:font/ttf;base64,${bold}) format("truetype");}
`;
}

export function logoDataUri() {
  const svg = fs.readFileSync(path.resolve("public/images/oc-logo.svg")).toString("base64");
  return `data:image/svg+xml;base64,${svg}`;
}
