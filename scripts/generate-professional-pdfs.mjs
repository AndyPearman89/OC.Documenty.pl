import { buildOswiadczenieSprawcyPdf } from "../pdf/templates/oswiadczenie-sprawcy.mjs";
import { buildWspolneOswiadczeniePdf } from "../pdf/templates/wspolne-oswiadczenie.mjs";
import { buildWypowiedzenieOcPdf } from "../pdf/templates/wypowiedzenie-oc.mjs";
import { buildZmianaUbezpieczycielaPdf } from "../pdf/templates/zmiana-ubezpieczyciela.mjs";
import { buildZwrotSkladkiOcPdf } from "../pdf/templates/zwrot-skladki-oc.mjs";
import { buildZgloszenieSprzedazyPdf } from "../pdf/templates/zgloszenie-sprzedazy.mjs";
import { buildUmowaKupnaSprzedazyPdf } from "../pdf/templates/umowa-kupna-sprzedazy.mjs";
import { buildUmowaKupnaSprzedazyWspolwlascicielPdf } from "../pdf/templates/umowa-kupna-sprzedazy-wspolwlasciciel.mjs";
import { buildUmowaCesjiPrawZPolisyPdf } from "../pdf/templates/umowa-cesji-praw-z-polisy.mjs";
import { buildUmowaDarowiznySamochoduPdf } from "../pdf/templates/umowa-darowizny-samochodu.mjs";
import { buildOdstapienieOdUmowyPdf } from "../pdf/templates/odstapienie-od-umowy-ubezpieczenia-zawartej-na-odleglosc.mjs";
import { buildReklamacjaPdf } from "../pdf/templates/reklamacja.mjs";

const outputs = await Promise.all([
  buildOswiadczenieSprawcyPdf(),
  buildWspolneOswiadczeniePdf(),
  buildWypowiedzenieOcPdf(),
  buildZmianaUbezpieczycielaPdf(),
  buildZwrotSkladkiOcPdf(),
  buildZgloszenieSprzedazyPdf(),
  buildUmowaKupnaSprzedazyPdf(),
  buildUmowaKupnaSprzedazyWspolwlascicielPdf(),
  buildUmowaCesjiPrawZPolisyPdf(),
  buildUmowaDarowiznySamochoduPdf(),
  buildOdstapienieOdUmowyPdf(),
  buildReklamacjaPdf(),
]);

outputs.forEach((output) => console.log(output));
