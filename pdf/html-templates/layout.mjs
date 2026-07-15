import { interFontFace, logoDataUri } from "./fonts.mjs";

const baseStyles = `
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:Inter,Arial,sans-serif;background:#fff;color:#222}
.document{width:210mm;min-height:297mm;background:#fff;padding:20mm}
.header{display:flex;justify-content:space-between;align-items:center;border-bottom:3px solid #e30613;padding-bottom:18px;margin-bottom:30px}
.logo{display:flex;align-items:center;gap:16px}
.logo img{width:52px}
.logo h1{font-size:32px;font-weight:800}
.logo span{color:#e30613}
.subtitle{color:#666;margin-top:4px;font-size:13px}
.contact{text-align:right;font-size:14px;line-height:1.8}
.contact a{color:#222;text-decoration:none}
h2{text-align:center;font-size:30px;margin:20px 0;font-weight:800}
.legal{text-align:center;color:#666;margin-bottom:28px;line-height:1.6;font-size:13px}
.section{margin-top:24px}
.section-title{color:#e30613;font-weight:700;font-size:17px;border-bottom:2px solid #e30613;padding-bottom:7px;margin-bottom:16px}
.grid{display:grid;grid-template-columns:200px 1fr;gap:9px 20px;font-size:14px}
.grid.two-col{grid-template-columns:200px 1fr 200px 1fr}
.value{border-bottom:1px solid #ddd;min-height:22px}
.statement{line-height:1.8;margin-top:8px;font-size:14px}
.checklist{margin-left:20px;margin-top:8px;font-size:14px;line-height:1.8}
.checklist.boxes{list-style:none;margin-left:0}
.checklist.boxes li{display:flex;align-items:center;gap:10px}
.checklist.boxes li::before{content:"";width:14px;height:14px;border:1px solid #999;border-radius:2px;flex:0 0 auto}
.multiline{border:1px solid #ddd;border-radius:4px;min-height:90px;margin-top:8px}
.signature{margin-top:50px;display:flex;justify-content:space-around;gap:24px}
.signature-box{flex:1;max-width:280px;text-align:center;font-size:13px}
.signature-line{border-top:1px solid #222;margin-bottom:6px}
.footer{margin-top:50px;border-top:2px solid #e30613;padding-top:16px;display:flex;justify-content:space-between;color:#666;font-size:12px}
.footer strong{color:#e30613}
`;

export function documentPage({ title, subtitle = "", legal = "", bodyHtml, signatures = ["Czytelny podpis"] }) {
  const signatureBoxes = signatures
    .map((label) => `<div class="signature-box"><div class="signature-line"></div>${label}</div>`)
    .join("");

  return `<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8" />
<title>${title}</title>
<style>
${interFontFace()}
${baseStyles}
</style>
</head>
<body>
<div class="document">
  <div class="header">
    <div class="logo">
      <img src="${logoDataUri()}" alt="OC.Documenty.pl">
      <div>
        <h1><span>OC.</span>Documenty.pl</h1>
        <div class="subtitle">WZORY DOKUMENTÓW OC/AC ONLINE</div>
      </div>
    </div>
    <div class="contact">
      <a href="https://www.oc.documenty.pl">www.oc.documenty.pl</a><br>
      kontakt@oc.documenty.pl
    </div>
  </div>

  <h2>${title}</h2>
  ${subtitle ? `<div class="legal">${subtitle}</div>` : ""}
  ${legal ? `<div class="legal">${legal}</div>` : ""}

  ${bodyHtml}

  <div class="signature">${signatureBoxes}</div>

  <div class="footer">
    <div><strong>OC.Documenty.pl</strong><br>Profesjonalne wzory dokumentów</div>
    <div>Wygenerowano przez OC.Documenty.pl</div>
    <div>Strona 1 / 1</div>
  </div>
</div>
</body>
</html>`;
}

export function gridSection(number, title, labels) {
  const rows = labels.map((label) => `<div>${label}</div><div class="value"></div>`).join("\n");
  return `<div class="section">
    <div class="section-title">${number}. ${title}</div>
    <div class="grid">${rows}</div>
  </div>`;
}

export function statementSection(number, title, html) {
  return `<div class="section">
    <div class="section-title">${number}. ${title}</div>
    <div class="statement">${html}</div>
  </div>`;
}

export function checklistSection(number, title, items, { boxes = false } = {}) {
  const listItems = items.map((item) => `<li>${item}</li>`).join("\n");
  return `<div class="section">
    <div class="section-title">${number}. ${title}</div>
    <ul class="checklist${boxes ? " boxes" : ""}">${listItems}</ul>
  </div>`;
}

export function multilineSection(number, title, note = "") {
  return `<div class="section">
    <div class="section-title">${number}. ${title}</div>
    <div class="multiline"></div>
    ${note ? `<div class="legal" style="margin-top:8px;text-align:left">${note}</div>` : ""}
  </div>`;
}
