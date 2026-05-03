"use client";

import { getSerializableErrorMessage } from "@/lib/serializable-error-message";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const messageRaw = getSerializableErrorMessage(error);
  const message =
    typeof messageRaw === "string"
      ? messageRaw
      : "An unexpected error occurred.";

  return (
    <html lang="en" className="dark">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          background: "#04342c",
          color: "#e1f5ee",
          fontFamily: "system-ui, sans-serif",
          padding: "1.5rem",
        }}
      >
        <h1 style={{ fontSize: "1.25rem", fontWeight: 600 }}>Something went wrong</h1>
        <p style={{ opacity: 0.85, textAlign: "center", maxWidth: "28rem" }}>
          {message}
        </p>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            border: "none",
            borderRadius: "12px",
            padding: "12px 24px",
            fontWeight: 600,
            cursor: "pointer",
            background: "#e8a020",
            color: "#412402",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
