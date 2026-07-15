import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type");

    if (contentType?.includes("application/json")) {
      const event = await request.json();
      // Log analytics event (implement with your analytics service)
      console.log("[ANALYTICS]", event);
      return NextResponse.json({ ok: true });
    }

    // Handle beacon format (form data)
    const data = await request.text();
    console.log("[ANALYTICS BEACON]", data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Analytics error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
