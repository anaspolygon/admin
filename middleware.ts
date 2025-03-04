import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define protected routes
const protectedRoutes = ["/dashboard", "/profile", "/settings"];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth-token"); // Get auth token from cookies

  // If the user is not logged in and tries to access a protected route
  if (!token && protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Run middleware on these routes
export const config = {
  matcher: ["/dashboard", "/profile", "/settings"], // Add your protected pages
};
