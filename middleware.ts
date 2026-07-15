import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createRateLimiter } from "./lib/rate-limit";

const rateLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  maxRequests: 20,
});

export function middleware(request: NextRequest) {
  if (!rateLimiter(request as any)) {
    return new NextResponse("Zbyt wiele żądań. Spróbuj ponownie za 15 minut.", {
      status: 429,
    });
  }

  const password = process.env.ADMIN_PANEL_PASSWORD;
  const authHeader = request.headers.get("authorization");
  const expected = password ? `Basic ${Buffer.from(`admin:${password}`).toString("base64")}` : null;

  if (!password) {
    return new NextResponse("Brak hasła administracyjnego. Skonfiguruj ADMIN_PANEL_PASSWORD.", {
      status: 500,
    });
  }

  if (expected && authHeader === expected) {
    const response = NextResponse.next();
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("X-XSS-Protection", "1; mode=block");
    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
    return response;
  }

  return new NextResponse("Autoryzacja wymagana.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Panel administracyjny"' },
  });
}

export const config = {
  matcher: "/panel/:path*",
};
