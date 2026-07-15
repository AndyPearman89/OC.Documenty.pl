import path from "node:path";
import { buildOswiadczenieSprawcyHtml } from "../pdf/html-templates/oswiadczenie-sprawcy.mjs";
import { buildWspolneOswiadczenieHtml } from "../pdf/html-templates/wspolne-oswiadczenie.mjs";
import { buildWypowiedzenieOcHtml } from "../pdf/html-templates/wypowiedzenie-oc.mjs";
import { buildZmianaUbezpieczycielaHtml } from "../pdf/html-templates/zmiana-ubezpieczyciela.mjs";
import { buildZwrotSkladkiOcHtml } from "../pdf/html-templates/zwrot-skladki-oc.mjs";
import { buildZgloszenieSprzedazyHtml } from "../pdf/html-templates/zgloszenie-sprzedazy.mjs";
import { buildUmowaKupnaSprzedazyHtml } from "../pdf/html-templates/umowa-kupna-sprzedazy.mjs";
import { buildUmowaKupnaSprzedazyWspolwlascicielHtml } from "../pdf/html-templates/umowa-kupna-sprzedazy-wspolwlasciciel.mjs";
import { buildUmowaCesjiPrawZPolisyHtml } from "../pdf/html-templates/umowa-cesji-praw-z-polisy.mjs";
import { buildUmowaDarowiznySamochoduHtml } from "../pdf/html-templates/umowa-darowizny-samochodu.mjs";
import { buildOdstapienieOdUmowyHtml } from "../pdf/html-templates/odstapienie-od-umowy-ubezpieczenia-zawartej-na-odleglosc.mjs";
import { buildReklamacjaHtml } from "../pdf/html-templates/reklamacja.mjs";
import { renderHtmlToPdf, closeRenderer } from "../pdf/html-templates/render.mjs";

const wzoryDir = path.resolve("public/wzory");

const documents = [
  ["oswiadczenie-sprawcy-wzor.pdf", buildOswiadczenieSprawcyHtml],
  ["wspolne-oswiadczenie-wzor.pdf", buildWspolneOswiadczenieHtml],
  ["wypowiedzenie-oc-wzor.pdf", buildWypowiedzenieOcHtml],
  ["zmiana-ubezpieczyciela-wzor.pdf", buildZmianaUbezpieczycielaHtml],
  ["zwrot-skladki-oc-wzor.pdf", buildZwrotSkladkiOcHtml],
  ["zgloszenie-sprzedazy-wzor.pdf", buildZgloszenieSprzedazyHtml],
  ["umowa-kupna-sprzedazy-wzor.pdf", buildUmowaKupnaSprzedazyHtml],
  ["umowa-kupna-sprzedazy-wspolwlasciciel-wzor.pdf", buildUmowaKupnaSprzedazyWspolwlascicielHtml],
  ["umowa-cesji-praw-z-polisy-wzor.pdf", buildUmowaCesjiPrawZPolisyHtml],
  ["umowa-darowizny-samochodu-wzor.pdf", buildUmowaDarowiznySamochoduHtml],
  ["odstapienie-od-umowy-ubezpieczenia-zawartej-na-odleglosc-wzor.pdf", buildOdstapienieOdUmowyHtml],
  ["reklamacja-wzor.pdf", buildReklamacjaHtml],
];

const outputs = [];
for (const [fileName, buildHtml] of documents) {
  outputs.push(await renderHtmlToPdf(buildHtml(), path.join(wzoryDir, fileName)));
}

await closeRenderer();
outputs.forEach((output) => console.log(output));
