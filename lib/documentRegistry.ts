import { readFile, appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

export type DocumentRecord = {
  id: string;
  type: string;
  policy: string;
  title: string;
  createdAt: string;
  verifyUrl: string;
};

const storageDir = path.join(process.cwd(), "data");
const storageFile = path.join(storageDir, "documents.jsonl");

export async function saveDocumentRecord(record: DocumentRecord) {
  await mkdir(storageDir, { recursive: true });
  await appendFile(storageFile, `${JSON.stringify(record)}\n`, "utf8");
}

export async function readDocumentRecord(id: string) {
  try {
    const file = await readFile(storageFile, "utf8");
    const lines = file.split(/\r?\n/).filter(Boolean);
    for (const line of lines.reverse()) {
      try {
        const entry = JSON.parse(line) as DocumentRecord;
        if (entry.id === id) return entry;
      } catch {
        continue;
      }
    }
    return null;
  } catch {
    return null;
  }
}
