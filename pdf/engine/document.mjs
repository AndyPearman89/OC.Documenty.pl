import crypto from "node:crypto";

export function createDocumentMeta(overrides = {}) {
  const uuid = crypto.randomUUID();
  const version = overrides.version ?? "2.2";
  const updateDate = overrides.updateDate ?? "14.07.2026";
  const generatorId = overrides.generatorId ?? "oc.documenty.pl/pdf-engine";
  const documentType = overrides.documentType ?? "DOC";

  const meta = {
    title: "Dokument OC",
    subtitle: "Profesjonalny wzór dokumentu przygotowany do wydruku, podpisu i wysyłki",
    version,
    revision: "r4",
    updateDate,
    generatorId,
    documentType,
    sourceUrl: "https://oc.documenty.pl",
    uuid,
    ...overrides,
  };

  meta.documentNumber = overrides.documentNumber ?? `${documentType}-${uuid.slice(0, 8).toUpperCase()}`;
  meta.hash = crypto
    .createHash("sha256")
    .update([uuid, version, updateDate, generatorId, documentType].join("|"))
    .digest("hex")
    .toUpperCase();

  return meta;
}

