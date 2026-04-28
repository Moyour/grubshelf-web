"use client";

import { useEffect } from "react";
import { getSerializableErrorMessage } from "@/lib/serializable-error-message";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const message = getSerializableErrorMessage(error);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[var(--gs-background)] px-6 text-[var(--gs-text-primary)]">
      <h1 className="font-sans text-xl font-semibold">Something went wrong</h1>
      <p className="max-w-md text-center font-sans text-sm text-[var(--gs-text-secondary)]">
        {message}
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-brand bg-[var(--gs-brand-primary-bg)] px-6 py-3 font-sans text-sm font-semibold text-[var(--gs-text-inverse)]"
      >
        Try again
      </button>
    </div>
  );
}
