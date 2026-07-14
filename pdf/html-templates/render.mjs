import puppeteer from "puppeteer";

let browserPromise;

function getBrowser() {
  if (!browserPromise) {
    browserPromise = puppeteer.launch({ headless: true });
  }
  return browserPromise;
}

export async function renderHtmlToPdf(html, outputPath) {
  const browser = await getBrowser();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });
  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: false,
  });
  await page.close();
  return outputPath;
}

export async function closeRenderer() {
  if (browserPromise) {
    const browser = await browserPromise;
    await browser.close();
    browserPromise = undefined;
  }
}
