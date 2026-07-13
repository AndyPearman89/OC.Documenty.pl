import QRCode from "qrcode";

export function createQrUrl() {
  return "https://oc.documenty.pl/dokumenty";
}

export function generateQrDataUrl(uuid) {
  return QRCode.toDataURL(createQrUrl(uuid), {
    width: 420,
    margin: 1,
    color: { dark: "#E30613", light: "#FFFFFF" },
  });
}
