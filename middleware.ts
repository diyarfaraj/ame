import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const redirects: Record<string, string> = {
  "/about": "/",
  "/process": "/our-process",
  "/projects": "/",
  "/packages": "/design-for-investment",
  "/contact": "/get-started",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const destination = redirects[pathname];

  if (destination) {
    const url = request.nextUrl.clone();
    url.pathname = destination;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/about", "/process", "/projects", "/packages", "/contact"],
};
