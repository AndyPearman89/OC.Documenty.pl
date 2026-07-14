import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Podaj poprawny adres e-mail."),
  name: z.string().trim().max(80).optional().or(z.literal("")),
  source: z.string().trim().max(120).optional().or(z.literal("")),
});

const storageDir = path.join(process.cwd(), "data");
const storageFile = path.join(storageDir, "newsletter-subscribers.jsonl");

export async function POST(request: Request) {
  let parsedBody: unknown;

  try {
    parsedBody = await request.json();
  } catch {
    return NextResponse.json({ error: "Nieprawidłowe dane wejściowe." }, { status: 400 });
  }

  const result = newsletterSchema.safeParse(parsedBody);

  if (!result.success) {
    return NextResponse.json(
      { error: result.error.issues[0]?.message ?? "Nieprawidłowy adres e-mail." },
      { status: 400 },
    );
  }

  const entry = {
    email: result.data.email.toLowerCase(),
    name: result.data.name?.trim() ?? "",
    source: result.data.source?.trim() ?? "newsletter",
    createdAt: new Date().toISOString(),
  };

  await mkdir(storageDir, { recursive: true });
  await appendFile(storageFile, `${JSON.stringify(entry)}\n`, "utf8");

  return NextResponse.json({ ok: true });
}
