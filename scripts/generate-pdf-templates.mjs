import fs from "node:fs";
import path from "node:path";
import { jsPDF } from "jspdf";

const output=path.resolve("public/wzory");
fs.mkdirSync(output,{recursive:true});
const fontPath="C:/Windows/Fonts/arial.ttf";
const font=fs.readFileSync(fontPath).toString("base64");

function pdf(title){const doc=new jsPDF({unit:"mm",format:"a4"});doc.addFileToVFS("Arial.ttf",font);doc.addFont("Arial.ttf","Arial","normal");doc.setFont("Arial");doc.setTextColor(20,27,40);doc.setFontSize(11);doc.text("OC.Documenty.pl",15,15);doc.setDrawColor(230,0,18);doc.setLineWidth(.8);doc.line(15,19,195,19);doc.setFontSize(17);doc.text(title,105,32,{align:"center"});return doc;}
function line(doc,label,y,x=15,width=180){doc.setFontSize(9);doc.text(label,x,y);doc.setDrawColor(150);doc.setLineWidth(.2);doc.line(x,y+4,x+width,y+4);}
function box(doc,title,y,height=35){doc.setFillColor(16,26,42);doc.rect(15,y,180,8,"F");doc.setTextColor(255);doc.setFontSize(10);doc.text(title,19,y+5.5);doc.setTextColor(20,27,40);doc.setDrawColor(190);doc.rect(15,y+8,180,height);}

{
  const doc=pdf("WYPOWIEDZENIE UMOWY UBEZPIECZENIA OC");
  box(doc,"DANE UBEZPIECZAJĄCEGO",42,43);line(doc,"Imię i nazwisko",56,20,78);line(doc,"PESEL",56,105,84);line(doc,"Adres zamieszkania",69,20,169);line(doc,"Telefon / e-mail",82,20,169);
  box(doc,"DANE POLISY I POJAZDU",98,43);line(doc,"Numer polisy",112,20,78);line(doc,"Ubezpieczyciel",112,105,84);line(doc,"Marka i model",125,20,78);line(doc,"Numer rejestracyjny",125,105,84);line(doc,"Data końca polisy",138,20,169);
  box(doc,"PODSTAWA WYPOWIEDZENIA",154,35);doc.setFontSize(9);doc.text("[ ] art. 28     [ ] art. 28a     [ ] art. 31",20,171);line(doc,"Inny powód / uwagi",181,20,169);
  doc.setFontSize(10);doc.text("Niniejszym wypowiadam wskazaną powyżej umowę ubezpieczenia OC.",20,210);line(doc,"Miejscowość i data",230,20,75);line(doc,"Czytelny podpis ubezpieczającego",230,110,79);doc.setFontSize(8);doc.setTextColor(100);doc.text("Aktualny wzór dokumentu wygenerowany w serwisie OC.Documenty.pl",105,286,{align:"center"});doc.save(path.join(output,"wypowiedzenie-oc-wzor.pdf"));
}
{
  const doc=pdf("OŚWIADCZENIE SPRAWCY KOLIZJI DROGOWEJ");
  box(doc,"1. DANE SPRAWCY",42,48);line(doc,"Imię i nazwisko",56,20,169);line(doc,"Adres zamieszkania",69,20,169);line(doc,"Telefon / numer prawa jazdy",82,20,169);
  box(doc,"2. DANE POJAZDU I POLISY",103,48);line(doc,"Marka i model",117,20,78);line(doc,"Numer rejestracyjny",117,105,84);line(doc,"Ubezpieczyciel",130,20,78);line(doc,"Numer polisy OC",130,105,84);line(doc,"Ważna do",143,20,169);
  box(doc,"3. DANE ZDARZENIA",164,55);line(doc,"Data, godzina i miejsce",178,20,169);line(doc,"Opis przebiegu zdarzenia",192,20,169);line(doc,"",205,20,169);line(doc,"",218,20,169);
  doc.setFontSize(9);doc.text("Oświadczam, że powyższe dane są zgodne z prawdą.",20,239);line(doc,"Miejscowość i data",254,20,75);line(doc,"Czytelny podpis sprawcy",254,110,79);doc.setFontSize(8);doc.setTextColor(100);doc.text("Wzór dokumentu — OC.Documenty.pl",105,286,{align:"center"});doc.save(path.join(output,"oswiadczenie-sprawcy-wzor.pdf"));
}
{
  const doc=pdf("WSPÓLNE OŚWIADCZENIE O ZDARZENIU DROGOWYM");
  line(doc,"Data i godzina zdarzenia",45,15,85);line(doc,"Miejsce zdarzenia",45,108,87);line(doc,"Opis zdarzenia",59);line(doc,"",72);line(doc,"Uszkodzenia pojazdów",85);line(doc,"",98);line(doc,"Poszkodowani",111);
  box(doc,"SPRAWCA ZDARZENIA",124,54);line(doc,"Imię i nazwisko / adres / PESEL",138,20,169);line(doc,"Marka i model / numer rejestracyjny",151,20,169);line(doc,"Numer polisy OC",164,20,169);
  box(doc,"DRUGI UCZESTNIK ZDARZENIA",191,54);line(doc,"Imię i nazwisko / adres / PESEL",205,20,169);line(doc,"Marka i model / numer rejestracyjny",218,20,169);line(doc,"Numer polisy OC",231,20,169);
  line(doc,"Czytelny podpis sprawcy",260,20,75);line(doc,"Czytelny podpis uczestnika",260,110,79);doc.setFontSize(8);doc.setTextColor(100);doc.text("Wzór dokumentu — OC.Documenty.pl",105,286,{align:"center"});doc.save(path.join(output,"wspolne-oswiadczenie-wzor.pdf"));
}

function imageToA4(source,destination){
  const doc=new jsPDF({unit:"mm",format:"a4",compress:true});
  const image=fs.readFileSync(path.resolve(source)).toString("base64");
  const type=path.extname(source).slice(1).toUpperCase();
  doc.addImage(`data:image/${type.toLowerCase()};base64,${image}`,type,0,0,210,297,undefined,"FAST");
  doc.save(path.join(output,destination));
}

// Najbardziej kompletny wzór oświadczenia: dane obu stron, szkic i załączniki.
imageToA4("public/images/oswiadczenie-sprawcy-wzor.png","oswiadczenie-sprawcy-wzor.pdf");
// Branded example showing the intended visual standard for a completed cancellation.
imageToA4("public/images/wypowiedzenie-oc-przyklad.png","wypowiedzenie-oc-przyklad.pdf");
