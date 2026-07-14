import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().email("Podaj poprawny adres e-mail."),
  subject: z.string().trim().min(3).max(160),
  message: z.string().trim().min(10).max(4000),
});

const storageDir = path.join(process.cwd(), "data");
const storageFile = path.join(storageDir, "contact-messages.jsonl");

export async function POST(request: Request) {
  let parsedBody: unknown;

  try {
    parsedBody = await request.json();
  } catch {
    return NextResponse.json({ error: "Nieprawidłowe dane wejściowe." }, { status: 400 });
  }

  const result = contactSchema.safeParse(parsedBody);

  if (!result.success) {
    return NextResponse.json(
      { error: result.error.issues[0]?.message ?? "Nieprawidłowe dane formularza." },
      { status: 400 },
    );
  }

  const entry = {
    ...result.data,
    createdAt: new Date().toISOString(),
  };

  await mkdir(storageDir, { recursive: true });
  await appendFile(storageFile, `${JSON.stringify(entry)}\n`, "utf8");

  return NextResponse.json({ ok: true });
}
