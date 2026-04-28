import type { ReactNode } from "react";
import type { FeatureVisualId } from "./feature-types";
import { FeatureVisual } from "./feature-visual";

export type { FeatureVisualId };

type FeatureCardProps = {
  step?: string;
  title: string;
  children: ReactNode;
  visualId: FeatureVisualId;
  className?: string;
};

export function FeatureCard({
  step,
  title,
  children,
  visualId,
  className = "",
}: FeatureCardProps) {
  return (
    <article
      className={`group relative flex min-h-[280px] flex-col overflow-hidden rounded-[16px] border border-gs-border/90 bg-gs-surface/90 shadow-[0_1px_0_rgba(255,255,255,0.06),0_18px_40px_-28px_rgba(0,0,0,0.35)] ring-1 ring-black/[0.03] backdrop-blur-md transition duration-500 ease-out hover:-translate-y-0.5 hover:border-gs-border-secondary hover:shadow-[0_1px_0_rgba(255,255,255,0.08),0_28px_56px_-24px_rgba(0,0,0,0.45)] dark:bg-gs-surface/80 dark:shadow-[0_1px_0_rgba(255,255,255,0.05),0_20px_48px_-28px_rgba(0,0,0,0.6)] dark:ring-white/[0.04] dark:hover:shadow-[0_1px_0_rgba(255,255,255,0.07),0_32px_64px_-24px_rgba(0,0,0,0.65)] ${className}`}
    >
      {step ? (
        <span
          className="pointer-events-none absolute right-5 top-4 font-display text-5xl font-semibold leading-none text-gs-text-primary/[0.06] dark:text-gs-text-primary/[0.09]"
          aria-hidden
        >
          {step}
        </span>
      ) : null}
      <div className="relative flex min-h-[176px] w-full shrink-0 flex-col justify-center overflow-hidden border-b border-gs-border/70 bg-gradient-to-b from-gs-surface-secondary/80 to-gs-surface-secondary/40 dark:from-gs-surface-secondary/30 dark:to-gs-teal-deep/25">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gs-accent/40 to-transparent opacity-80"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gs-accent/12 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-gs-accent/18"
          aria-hidden
        />
        <div className="relative flex w-full flex-1 items-center justify-center">
          <FeatureVisual id={visualId} />
        </div>
      </div>
      <div className="relative flex flex-1 flex-col px-5 pb-5 pt-5">
        <h3 className="pr-12 font-display text-[1.125rem] font-semibold leading-snug tracking-tight text-gs-text-primary sm:text-[1.2rem]">
          {title}
        </h3>
        <p className="mt-2 flex-1 font-sans text-[15px] leading-relaxed text-gs-text-secondary">
          {children}
        </p>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-gs-text-tertiary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          In the app
        </p>
      </div>
    </article>
  );
}
