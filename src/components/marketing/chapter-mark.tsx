type ChapterMarkProps = {
  index: string;
  title: string;
};

/** Editorial chapter rail — pairs with display headlines. */
export function ChapterMark({ index, title }: ChapterMarkProps) {
  return (
    <div className="flex items-stretch gap-4">
      <span
        className="w-px shrink-0 bg-gradient-to-b from-gs-accent via-gs-success/60 to-transparent opacity-90"
        aria-hidden
      />
      <p className="flex min-w-0 flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-4">
        <span className="font-display text-2xl font-semibold tabular-nums leading-none tracking-tight text-gs-text-primary sm:text-[1.65rem]">
          {index}
        </span>
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-gs-text-tertiary">
          {title}
        </span>
      </p>
    </div>
  );
}
