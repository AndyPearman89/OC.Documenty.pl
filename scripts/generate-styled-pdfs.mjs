import fs from "node:fs";
import path from "node:path";
import { jsPDF } from "jspdf";

const out=path.resolve("public/wzory");
const font=fs.readFileSync("C:/Windows/Fonts/arial.ttf").toString("base64");
const icon=`data:image/png;base64,${fs.readFileSync("public/images/oc-icon.png").toString("base64")}`;
const RED=[230,0,18],NAVY=[16,26,42],GRAY=[105,115,130],LINE=[215,220,228],SOFT=[255,245,246];

function document(title,subtitle){const d=new jsPDF({unit:"mm",format:"a4",compress:true});d.addFileToVFS("Arial.ttf",font);d.addFont("Arial.ttf","Arial","normal");d.setFont("Arial");d.setFillColor(...RED);d.roundedRect(10,10,23,23,3,3,"F");d.setTextColor(255);d.setFontSize(15);d.text("OC",21.5,25,{align:"center"});d.setTextColor(...NAVY);d.setFontSize(18);d.text("OC.Documenty.pl",38,20);d.setFontSize(8);d.setTextColor(...GRAY);d.text("Profesjonalne wzory dokumentów",38,26);d.setTextColor(...NAVY);d.setFontSize(15);d.text(title,108,18);d.setFontSize(8);d.setTextColor(...GRAY);d.text(subtitle,108,25);d.setDrawColor(...RED);d.setLineWidth(.8);d.line(10,38,200,38);return d;}
function section(d,title,x,y,w,h){d.setDrawColor(...LINE);d.setFillColor(255,255,255);d.roundedRect(x,y,w,h,3,3,"FD");d.setTextColor(...RED);d.setFontSize(10);d.text(title.toUpperCase(),x+5,y+8);}
function field(d,label,x,y,w){d.setTextColor(...NAVY);d.setFontSize(7);d.text(label,x,y);d.setDrawColor(...LINE);d.roundedRect(x,y+2,w,7,1,1,"S");}
function multiline(d,label,x,y,w,lines){d.setTextColor(...NAVY);d.setFontSize(7);d.text(label,x,y);d.setDrawColor(...LINE);d.rect(x,y+2,w,lines*7);for(let i=1;i<lines;i++)d.line(x+2,y+2+i*7,x+w-2,y+2+i*7);}
function footer(d){d.setFillColor(...RED);d.rect(0,278,210,19,"F");d.setTextColor(255);d.setFontSize(10);d.text("OC.Documenty.pl",14,286);d.setFontSize(6.5);d.text("Serwis jest częścią Documenty.pl",14,291);d.setFontSize(7);d.text("Gotowy wzór · Bezpieczne dane · PDF do pobrania",105,287,{align:"center"});d.text("oc@documenty.pl",196,287,{align:"right"});}

{
  const d=document("WYPOWIEDZENIE UMOWY OC","Wzór do samodzielnego wypełnienia");d.addImage(icon,"PNG",10,10,23,23,undefined,"FAST");
  field(d,"Miejscowość i data",130,46,65);
  section(d,"Dane ubezpieczającego",10,59,92,55);field(d,"Imię i nazwisko",16,72,80);field(d,"Adres zamieszkania",16,85,80);field(d,"PESEL",16,98,38);field(d,"Telefon / e-mail",58,98,38);
  section(d,"Dane ubezpieczyciela",108,59,92,55);field(d,"Nazwa firmy",114,72,80);field(d,"Adres",114,85,80);field(d,"Kod pocztowy i miejscowość",114,98,80);
  section(d,"Dane polisy i pojazdu",10,121,92,62);field(d,"Numer polisy OC",16,134,80);field(d,"Marka i model",16,147,80);field(d,"Numer rejestracyjny",16,160,38);field(d,"Data końca polisy",58,160,38);
  section(d,"Powód wypowiedzenia",108,121,92,62);d.setFontSize(7);d.setTextColor(...NAVY);d.text("□ art. 28 — koniec okresu ubezpieczenia",114,138);d.text("□ art. 28a — podwójne ubezpieczenie",114,150);d.text("□ art. 31 — polisa po zakupie pojazdu",114,162);field(d,"Inny powód / uwagi",114,169,80);
  d.setFontSize(15);d.setTextColor(...NAVY);d.text("WYPOWIEDZENIE UMOWY UBEZPIECZENIA OC",105,198,{align:"center"});d.setFontSize(8);d.text("Niniejszym wypowiadam wskazaną powyżej umowę obowiązkowego ubezpieczenia OC.",15,210);d.text("Proszę o potwierdzenie przyjęcia wypowiedzenia oraz wskazanie daty rozwiązania umowy.",15,217);
  d.setFillColor(...SOFT);d.setDrawColor(245,190,195);d.roundedRect(10,230,190,35,3,3,"FD");d.setTextColor(...RED);d.setFontSize(9);d.text("PODPIS UBEZPIECZAJĄCEGO",16,240);d.setDrawColor(...RED);d.line(65,253,145,253);d.setFontSize(7);d.setTextColor(...GRAY);d.text("czytelny podpis",105,258,{align:"center"});footer(d);d.save(path.join(out,"wypowiedzenie-oc-wzor.pdf"));
}

{
  const d=document("WSPÓLNE OŚWIADCZENIE","O zdarzeniu drogowym");d.addImage(icon,"PNG",10,10,23,23,undefined,"FAST");
  field(d,"Data zdarzenia",10,46,40);field(d,"Godzina",55,46,28);field(d,"Miejsce zdarzenia",88,46,77);field(d,"Numer oświadczenia",170,46,30);
  section(d,"Sprawca zdarzenia",10,61,92,76);field(d,"Imię i nazwisko",16,74,80);field(d,"Adres zamieszkania",16,87,80);field(d,"PESEL",16,100,38);field(d,"Telefon / e-mail",58,100,38);field(d,"Marka i model pojazdu",16,113,80);field(d,"Nr rejestracyjny / nr polisy OC",16,126,80);
  section(d,"Drugi uczestnik",108,61,92,76);field(d,"Imię i nazwisko",114,74,80);field(d,"Adres zamieszkania",114,87,80);field(d,"PESEL",114,100,38);field(d,"Telefon / e-mail",156,100,38);field(d,"Marka i model pojazdu",114,113,80);field(d,"Nr rejestracyjny / nr polisy OC",114,126,80);
  section(d,"Opis zdarzenia i uszkodzenia",10,144,92,75);multiline(d,"Opis przebiegu zdarzenia",16,157,80,4);multiline(d,"Widoczne uszkodzenia pojazdów",16,190,80,3);
  section(d,"Szkic sytuacyjny",108,144,92,75);d.setDrawColor(230,233,238);for(let x=114;x<=194;x+=8)d.line(x,158,x,210);for(let y=158;y<=210;y+=8)d.line(114,y,194,y);d.setTextColor(...GRAY);d.setFontSize(6);d.text("Zaznacz pojazdy, kierunek jazdy i miejsce zderzenia",154,216,{align:"center"});
  section(d,"Oświadczenie i podpisy",10,226,190,40);d.setTextColor(...NAVY);d.setFontSize(7);d.text("Potwierdzamy zgodność powyższych danych i opisu zdarzenia.",16,238);d.setDrawColor(...RED);d.line(20,255,90,255);d.line(120,255,190,255);d.setTextColor(...GRAY);d.setFontSize(6);d.text("czytelny podpis sprawcy",55,260,{align:"center"});d.text("czytelny podpis uczestnika",155,260,{align:"center"});footer(d);d.save(path.join(out,"wspolne-oswiadczenie-wzor.pdf"));
}
