import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, localeCookieName, locales } from "@/i18n/config";

const PUBLIC_FILE = /\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|json|css|js|map|woff2?|ttf|otf)$/i;

function pickLocale(request: NextRequest): (typeof locales)[number] {
  const cookieValue = request.cookies.get(localeCookieName)?.value;
  if (cookieValue && isLocale(cookieValue)) return cookieValue;

  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const preferred = header
    .split(",")
    .map((part) => {
      const [tag, qStr] = part.trim().split(";q=");
      const q = qStr ? Number.parseFloat(qStr) : 1;
      return { tag: tag.toLowerCase(), q: Number.isFinite(q) ? q : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of preferred) {
    const base = tag.split("-")[0];
    if (isLocale(base)) return base;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  const first = pathname.split("/", 2)[1];
  if (first && isLocale(first)) return;

  const locale = pickLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.redirect(url);
  response.cookies.set(localeCookieName, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|_next/data|favicon\\.ico|robots\\.txt|sitemap\\.xml|icon\\.png|apple-icon\\.png).*)",
  ],
};
