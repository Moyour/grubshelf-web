import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "accent";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gs-brand-primary-bg text-gs-text-inverse border border-transparent shadow-[0_4px_14px_-4px_rgba(10,77,62,0.45)] hover:opacity-95 hover:shadow-[0_8px_24px_-6px_rgba(10,77,62,0.5)] dark:bg-gs-text-primary dark:text-gs-background dark:shadow-[0_4px_20px_-6px_rgba(0,0,0,0.4)] dark:hover:opacity-100 dark:hover:shadow-[0_8px_28px_-8px_rgba(225,245,238,0.18)]",
  secondary:
    "bg-transparent text-gs-brand-primary border-[1.5px] border-gs-brand-primary hover:bg-gs-surface-secondary hover:shadow-[0_8px_24px_-12px_rgba(10,77,62,0.12)] dark:hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)]",
  accent:
    "bg-gs-accent text-gs-accent-text border border-gs-accent/30 shadow-[0_6px_24px_-6px_rgba(232,160,32,0.45)] hover:opacity-95 hover:shadow-[0_12px_32px_-8px_rgba(232,160,32,0.5)]",
};

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  size?: "default" | "small";
};

const sizeClasses = {
  default:
    "py-3.5 px-7 text-[15px] font-semibold leading-none tracking-[0.01em]",
  small:
    "py-2.5 px-5 text-[13px] font-semibold leading-none tracking-[0.02em]",
};

export function cnMarketingButton(
  variant: Variant,
  size: "default" | "small",
  className = "",
): string {
  return `inline-flex items-center justify-center rounded-[10px] font-sans transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gs-input-border-focus focus-visible:ring-offset-gs-background dark:focus-visible:ring-offset-gs-background ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
}

export function MarketingButton({
  children,
  variant = "primary",
  className = "",
  size = "default",
  ...props
}: BaseProps & Omit<ComponentProps<"button">, "className">) {
  return (
    <button
      type="button"
      className={cnMarketingButton(variant, size, className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function MarketingButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  size = "default",
}: BaseProps & { href: string }) {
  const external = href.startsWith("http");
  const cls = cnMarketingButton(variant, size, className);
  if (external) {
    return (
      <a
        href={href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
