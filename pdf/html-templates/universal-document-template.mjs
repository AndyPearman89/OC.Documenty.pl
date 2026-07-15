import { documentPage, gridSection, statementSection, checklistSection, multilineSection } from "./layout.mjs";

export function buildUniversalDocumentHtml(config) {
  const { title, subtitle = "", legal = "", sections = [], signatures = ["Czytelny podpis"] } = config;

  const bodyHtml = sections
    .map((section, index) => {
      const number = index + 1;

      switch (section.type) {
        case "grid":
          return gridSection(number, section.title, section.labels);

        case "grid-two-col":
          const labels = section.labels;
          const rows = labels
            .map((label) => `<div>${label}</div><div class="value"></div>`)
            .join("\n");
          return `<div class="section">
            <div class="section-title">${number}. ${section.title}</div>
            <div class="grid two-col">${rows}</div>
          </div>`;

        case "statement":
          return statementSection(number, section.title, section.html);

        case "checklist":
          return checklistSection(number, section.title, section.items, {
            boxes: section.boxes || false,
          });

        case "multiline":
          return multilineSection(number, section.title, section.note || "");

        default:
          console.warn(`Unknown section type: ${section.type}`);
          return "";
      }
    })
    .join("\n");

  return documentPage({
    title,
    subtitle,
    legal,
    bodyHtml,
    signatures,
  });
}
