"use client";

import { V5 } from "./v5-tokens";

/** Placeholders while lazy section chunks load (match section bg to limit flash). */
export function V5FallbackDark() {
  return (
    <div
      className="min-h-[85dvh] w-full"
      style={{ backgroundColor: V5.secondary }}
      aria-hidden
    />
  );
}

export function V5FallbackAccent() {
  return (
    <div
      className="min-h-[70dvh] w-full"
      style={{ backgroundColor: V5.accent }}
      aria-hidden
    />
  );
}

export function V5FallbackWhite() {
  return <div className="min-h-[50dvh] w-full bg-white" aria-hidden />;
}

export function V5FallbackDemoPanel() {
  return (
    <div
      className="flex min-h-[320px] flex-col justify-center rounded-2xl border border-black/[0.08] bg-white p-8 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.35)] md:min-h-[380px]"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="mx-auto h-2 w-32 animate-pulse rounded-full bg-black/10" />
      <p className="mt-4 text-center font-sans text-sm text-black/35">Loading demo…</p>
    </div>
  );
}
