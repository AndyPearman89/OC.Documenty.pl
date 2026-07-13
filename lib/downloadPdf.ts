export async function createPdfBlob(elementId:string){
  const element=document.getElementById(elementId)??document.querySelector<HTMLElement>(elementId);
  if(!element)throw new Error("Nie znaleziono dokumentu do pobrania.");
  const [{default:html2canvas},{jsPDF}]=await Promise.all([import("html2canvas"),import("jspdf")]);
  const canvas=await html2canvas(element,{scale:2,useCORS:true,backgroundColor:"#ffffff",logging:false});
  const pdf=new jsPDF({orientation:"portrait",unit:"mm",format:"a4",compress:true});
  const pageWidth=210,pageHeight=297,margin=8,imageWidth=pageWidth-margin*2;
  const imageHeight=canvas.height*imageWidth/canvas.width;
  const image=canvas.toDataURL("image/jpeg",.94);
  let remaining=imageHeight,position=margin;
  pdf.addImage(image,"JPEG",margin,position,imageWidth,imageHeight,undefined,"FAST");
  remaining-=pageHeight-margin*2;
  while(remaining>0){position=margin-(imageHeight-remaining);pdf.addPage();pdf.addImage(image,"JPEG",margin,position,imageWidth,imageHeight,undefined,"FAST");remaining-=pageHeight-margin*2;}
  return pdf.output("blob");
}

export async function downloadPdf(elementId:string,fileName:string){
  const blob=await createPdfBlob(elementId);
  const url=URL.createObjectURL(blob);
  const link=document.createElement("a");
  link.href=url;
  link.download=fileName.endsWith(".pdf")?fileName:`${fileName}.pdf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(()=>URL.revokeObjectURL(url),1000);
}
