import { NextResponse } from "next/server";
import { readDocumentRecord } from "@/lib/documentRegistry";

type RouteParams = { params: Promise<{ id: string }> };

export async function GET(_: Request, { params }: RouteParams) {
  const { id } = await params;
  const record = await readDocumentRecord(id);

  if (!record) {
    return NextResponse.json({ ok: false, exists: false, id }, { status: 404 });
  }

  return NextResponse.json({ ok: true, exists: true, record });
}
