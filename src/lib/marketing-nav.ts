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

const DEFAULT_APP_URL = "https://testflight.apple.com/join/8M8EJsUE";

/** Use for App Store badge href; falls back to TestFlight beta link when unset or blank. */
export function resolveAppStoreUrl(envValue: string | undefined): string {
  const v = envValue?.trim();
  return v && v.length > 0 ? v : DEFAULT_APP_URL;
}
