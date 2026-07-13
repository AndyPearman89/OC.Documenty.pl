import { buildOswiadczenieSprawcyPdf } from "../pdf/templates/oswiadczenie-sprawcy.mjs";
import { buildWspolneOswiadczeniePdf } from "../pdf/templates/wspolne-oswiadczenie.mjs";
import { buildWypowiedzenieOcPdf } from "../pdf/templates/wypowiedzenie-oc.mjs";

const outputs = await Promise.all([
  buildOswiadczenieSprawcyPdf(),
  buildWspolneOswiadczeniePdf(),
  buildWypowiedzenieOcPdf(),
]);

outputs.forEach((output) => console.log(output));
