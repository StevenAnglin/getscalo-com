import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const VALUE_BYPASS_TOKENS = ["vital2025"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/password") ||
    pathname.startsWith("/api/unlock") ||
    pathname.startsWith("/api/subscribe") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/value")) {
    const token = request.nextUrl.searchParams.get("token");
    if (token && VALUE_BYPASS_TOKENS.includes(token)) {
      const response = NextResponse.next();
      response.cookies.set("scalo_access", "granted", { path: "/", httpOnly: true, sameSite: "lax" });
      return response;
    }
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
