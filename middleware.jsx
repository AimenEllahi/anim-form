import { NextResponse, NextRequest } from "next/server";

export default async function middleware(req) {
  let url = req.url;
  let baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  let clientLogin = req.cookies.get("uid")?.value;

  //if not logged in and not on the login page
  if (
    !clientLogin &&
    !url.includes("/login") &&
    url !== baseURL + "/" &&
    !url.includes("/register")
  ) {
    console.log("here");
    return NextResponse.redirect(`${baseURL}/`);
  }

  if (clientLogin && (url.includes("/login") || url.includes("/register"))) {
    return NextResponse.redirect(`${baseURL}/`);
  }
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (SEO metadata file)
     * - public (public files)
     * - images (image files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|public|images|models|fonts|Audio|Logo).*)",
  ],
};
