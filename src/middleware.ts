import { NextResponse, type NextRequest } from "next/server";

// Better Auth's session cookie ("__Secure-" prefixed on HTTPS). We check the
// cookie name directly instead of importing better-auth/cookies, which pulls
// Node-only code into the Edge runtime. The admin layout does the real check.
const SESSION_COOKIES = ["better-auth.session_token", "__Secure-better-auth.session_token"];

export function middleware(request: NextRequest) {
  if (!SESSION_COOKIES.some((name) => request.cookies.has(name))) {
    const url = new URL("/sign-in", request.url);
    url.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/admin/:path*"] };
