export type MarketingNavLink = {
  href: string;
  label: string;
};

export function getMarketingNavLinks(): MarketingNavLink[] {
  return [{ href: "/#features", label: "Features" }];
}

export function getFooterLegalLinks(): MarketingNavLink[] {
  return [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ];
}

/** Use for App Store badge href; falls back to `#` when unset or blank. */
export function resolveAppStoreUrl(envValue: string | undefined): string {
  const v = envValue?.trim();
  return v && v.length > 0 ? v : "#";
}
