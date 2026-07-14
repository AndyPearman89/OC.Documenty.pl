import { NextResponse } from "next/server";
import { z } from "zod";
import { saveDocumentRecord } from "@/lib/documentRegistry";

const documentSchema = z.object({
  id: z.string().trim().min(3).max(120),
  type: z.string().trim().min(2).max(80),
  policy: z.string().trim().min(2).max(80),
  title: z.string().trim().min(2).max(160),
  verifyUrl: z.string().url(),
});

export async function POST(request: Request) {
  let parsedBody: unknown;

  try {
    parsedBody = await request.json();
  } catch {
    return NextResponse.json({ error: "Nieprawidłowe dane wejściowe." }, { status: 400 });
  }

  const result = documentSchema.safeParse(parsedBody);

  if (!result.success) {
    return NextResponse.json(
      { error: result.error.issues[0]?.message ?? "Nieprawidłowe dane dokumentu." },
      { status: 400 },
    );
  }

  await saveDocumentRecord({
    ...result.data,
    createdAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
