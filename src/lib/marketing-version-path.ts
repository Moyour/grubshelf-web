/** Normalize pathname for comparison (trailing slash except root). */
export function normalizeMarketingPath(pathname: string): string {
  if (pathname !== "/" && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export function isMarketingVersionActive(href: string, pathname: string): boolean {
  const normalized = normalizeMarketingPath(pathname);
  if (href === "/") {
    return normalized === "/" || normalized === "";
  }
  return normalized === href;
}
