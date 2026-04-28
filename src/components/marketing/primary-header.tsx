import Link from "next/link";
import { GrubShelfLogoLockup } from "@/components/brand/grubshelf-logo-lockup";
import { getMarketingNavLinks, resolveAppStoreUrl } from "@/lib/marketing-nav";
import { MarketingButtonLink } from "./marketing-button";
import { ThemeToggle } from "./theme-toggle";

export function PrimaryHeader() {
  const nav = getMarketingNavLinks();
  const appUrl = resolveAppStoreUrl(process.env.NEXT_PUBLIC_APP_STORE_URL);

  return (
    <header className="sticky top-0 z-50 border-b border-gs-border/60 bg-gs-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-gs-background/55 dark:border-gs-border/40 dark:bg-gs-background/65 dark:supports-[backdrop-filter]:bg-gs-background/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3.5 sm:gap-4 sm:px-6">
        <GrubShelfLogoLockup href="/" size="header" priority />
        <nav
          className="flex min-w-0 flex-1 items-center justify-center gap-5 sm:gap-8"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative font-sans text-[11px] font-medium tracking-wide text-gs-text-secondary transition hover:text-gs-text-primary sm:text-sm after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-gs-accent after:to-gs-success after:transition after:duration-300 hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <MarketingButtonLink href={appUrl} variant="primary" size="small">
            Try the Beta
          </MarketingButtonLink>
        </div>
      </div>
    </header>
  );
}
