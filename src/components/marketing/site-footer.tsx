import Link from "next/link";
import { GrubShelfLogoLockup } from "@/components/brand/grubshelf-logo-lockup";
import { getFooterLegalLinks } from "@/lib/marketing-nav";

export function SiteFooter() {
  const links = getFooterLegalLinks();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gs-border bg-gs-surface px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20">
      <div className="gs-glow-line mb-12 opacity-60" aria-hidden />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <GrubShelfLogoLockup href="/" size="footer" />
          <p className="mt-5 max-w-sm font-sans text-lg leading-snug text-gs-text-secondary">
            Your grocery list, always in your pocket.{" "}
            <span className="text-gs-text-tertiary">
              No more guessing at the store.
            </span>
          </p>
          <p
            className="mt-12 font-display text-[clamp(3.25rem,11vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-gs-text-primary/[0.08] dark:text-gs-text-primary/[0.11]"
            aria-hidden
          >
            Sorted.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-10 lg:items-end lg:text-right">
          <nav className="flex flex-wrap gap-x-8 gap-y-3 lg:justify-end" aria-label="Legal">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-sm font-medium text-gs-text-secondary underline-offset-[6px] transition hover:text-gs-brand-primary hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gs-text-tertiary">
            © {year} GrubShelf
          </p>
        </div>
      </div>
    </footer>
  );
}
