import { readFile } from "node:fs/promises";

export async function readJsonlFile<T>(filePath: string): Promise<T[]> {
  try {
    const content = await readFile(filePath, "utf8");
    return content
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => JSON.parse(line) as T)
      .reverse();
  } catch {
    return [];
  }
}
