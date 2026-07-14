type PdfOptions = {
  title?: string;
  documentId?: string;
  verifyUrl?: string;
};

export async function createPdfBlob(elementId: string, options: PdfOptions = {}) {
  const element=document.getElementById(elementId)??document.querySelector<HTMLElement>(elementId);
  if(!element)throw new Error("Nie znaleziono dokumentu do pobrania.");
  const [{default:html2canvas},{jsPDF},{default:QRCode}]=await Promise.all([import("html2canvas"),import("jspdf"),import("qrcode")]);
  const canvas=await html2canvas(element,{scale:2,useCORS:true,backgroundColor:"#ffffff",logging:false});
  const pdf=new jsPDF({orientation:"portrait",unit:"mm",format:"a4",compress:true});
  const pageWidth=210,pageHeight=297,margin=8,footerHeight=12,imageWidth=pageWidth-margin*2;
  const imageHeight=canvas.height*imageWidth/canvas.width;
  const image=canvas.toDataURL("image/jpeg",.94);
  const printableHeight=pageHeight-margin*2-footerHeight;
  let remaining=imageHeight,position=margin;
  pdf.setProperties({
    title: options.title ?? "Dokument OC.Documenty.pl",
    subject: "Profesjonalny dokument PDF",
    author: "OC.Documenty.pl",
    creator: "OC.Documenty.pl",
  });
  pdf.addImage(image,"JPEG",margin,position,imageWidth,imageHeight,undefined,"FAST");
  remaining-=printableHeight;
  while(remaining>0){position=margin-(imageHeight-remaining);pdf.addPage();pdf.addImage(image,"JPEG",margin,position,imageWidth,imageHeight,undefined,"FAST");remaining-=pageHeight-margin*2;}
  const totalPages=pdf.getNumberOfPages();
  const qrDataUrl = options.verifyUrl ? await QRCode.toDataURL(options.verifyUrl, { margin: 0, width: 120, errorCorrectionLevel: "M" }) : "";
  for (let page = 1; page <= totalPages; page += 1) {
    pdf.setPage(page);
    pdf.setDrawColor(229, 233, 240);
    pdf.line(margin, pageHeight - margin - footerHeight + 2, pageWidth - margin, pageHeight - margin - footerHeight + 2);
    pdf.setFontSize(8);
    pdf.setTextColor(100, 116, 139);
    pdf.text("OC.Documenty.pl", margin, pageHeight - margin - 4);
    if (options.documentId) {
      pdf.text(`ID: ${options.documentId}`, pageWidth / 2, pageHeight - margin - 4, { align: "center" });
    }
    pdf.text(`Strona ${page} / ${totalPages}`, pageWidth - margin, pageHeight - margin - 4, { align: "right" });
    if (qrDataUrl && page === totalPages) {
      pdf.addImage(qrDataUrl, "PNG", pageWidth - margin - 18, pageHeight - margin - footerHeight + 0.5, 12, 12);
    }
  }
  return pdf.output("blob");
}

export async function downloadPdf(elementId: string, fileName: string, options: PdfOptions = {}) {
  const blob=await createPdfBlob(elementId, options);
  const url=URL.createObjectURL(blob);
  const link=document.createElement("a");
  link.href=url;
  link.download=fileName.endsWith(".pdf")?fileName:`${fileName}.pdf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(()=>URL.revokeObjectURL(url),1000);
}
