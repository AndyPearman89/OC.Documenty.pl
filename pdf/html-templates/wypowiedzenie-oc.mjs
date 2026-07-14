import { interFontFace, logoDataUri } from "./fonts.mjs";

export function buildWypowiedzenieOcHtml() {
  return `<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8" />
<title>Wypowiedzenie umowy OC</title>
<style>
${interFontFace()}
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
h2{text-align:center;font-size:32px;margin:20px 0;font-weight:800}
.legal{text-align:center;color:#666;margin-bottom:30px;line-height:1.6;font-size:13px}
.section{margin-top:26px}
.section-title{color:#e30613;font-weight:700;font-size:17px;border-bottom:2px solid #e30613;padding-bottom:7px;margin-bottom:16px}
.grid{display:grid;grid-template-columns:200px 1fr;gap:9px 20px;font-size:14px}
.value{border-bottom:1px solid #ddd;min-height:22px}
.statement{line-height:1.8;margin-top:8px;font-size:14px}
.attachments{margin-left:20px;margin-top:8px;font-size:14px}
.signature{margin-top:60px;display:flex;justify-content:flex-end}
.signature-box{width:300px;text-align:center;font-size:13px}
.signature-line{border-top:1px solid #222;margin-bottom:6px}
.footer{margin-top:50px;border-top:2px solid #e30613;padding-top:16px;display:flex;justify-content:space-between;color:#666;font-size:12px}
.footer strong{color:#e30613}
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

  <h2>WYPOWIEDZENIE UMOWY UBEZPIECZENIA OC</h2>
  <div class="legal">Podstawa prawna: art. 28 ustawy o ubezpieczeniach obowiązkowych.</div>

  <div class="section">
    <div class="section-title">1. Dane wypowiadającego</div>
    <div class="grid">
      <div>Imię i nazwisko</div><div class="value"></div>
      <div>Adres</div><div class="value"></div>
      <div>PESEL</div><div class="value"></div>
      <div>Telefon</div><div class="value"></div>
      <div>E-mail</div><div class="value"></div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">2. Dane ubezpieczyciela</div>
    <div class="grid">
      <div>Nazwa</div><div class="value"></div>
      <div>Adres</div><div class="value"></div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">3. Dane polisy</div>
    <div class="grid">
      <div>Numer polisy</div><div class="value"></div>
      <div>Numer rejestracyjny</div><div class="value"></div>
      <div>Marka i model</div><div class="value"></div>
      <div>Okres ubezpieczenia</div><div class="value"></div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">4. Oświadczenie</div>
    <div class="statement">
      Niniejszym wypowiadam umowę obowiązkowego ubezpieczenia OC zgodnie z obowiązującymi przepisami prawa.<br><br>
      Proszę o potwierdzenie przyjęcia niniejszego wypowiedzenia.
    </div>
  </div>

  <div class="section">
    <div class="section-title">5. Załączniki</div>
    <ul class="attachments">
      <li>Dowód rejestracyjny (jeżeli wymagany)</li>
      <li>Potwierdzenie zawarcia nowej polisy (jeżeli dotyczy)</li>
      <li>Inne dokumenty</li>
    </ul>
  </div>

  <div class="signature">
    <div class="signature-box">
      <div class="signature-line"></div>
      Czytelny podpis
    </div>
  </div>

  <div class="footer">
    <div><strong>OC.Documenty.pl</strong><br>Profesjonalne wzory dokumentów</div>
    <div>Wygenerowano przez OC.Documenty.pl</div>
    <div>Strona 1 / 1</div>
  </div>
</div>
</body>
</html>`;
}
