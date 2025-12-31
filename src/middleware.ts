import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get("portfolio-auth");

  if (!authCookie) {
    return NextResponse.redirect(new URL("/portfolio/login", request.url));
  }

  return NextResponse.next();
}

// secured pages
export const config = {
  matcher: "/portfolio",
};
