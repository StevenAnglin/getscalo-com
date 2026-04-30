import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/password") ||
    pathname.startsWith("/api/unlock") ||
    pathname.startsWith("/api/subscribe") ||
    pathname.startsWith("/value") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  const hasAccess = request.cookies.get("scalo_access")?.value === "granted";

  if (!hasAccess) {
    return NextResponse.redirect(new URL("/password", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
