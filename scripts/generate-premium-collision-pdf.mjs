import { buildOswiadczenieSprawcyPdf } from "../pdf/templates/oswiadczenie-sprawcy.mjs";

const output = await buildOswiadczenieSprawcyPdf();
console.log(output);
