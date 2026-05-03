import { upstreamErrorToMessage } from "./newsletter-errors";

/**
 * Text safe to show when surfacing caught values in UI (Next error boundaries, etc.).
 * Avoids raw "[object Event]" when the thrown value is not an Error instance.
 * Coerces validation-style objects `{ type, loc, msg }` to a string so React never tries to render them.
 */
export function getSerializableErrorMessage(error: unknown): string {
  if (typeof error === "string" && error.trim().length > 0) {
    return error;
  }
  if (
    typeof ErrorEvent !== "undefined" &&
    error instanceof ErrorEvent &&
    error.message.trim().length > 0
  ) {
    return error.message;
  }
  if (error instanceof Error) {
    return error.message.trim().length > 0
      ? error.message
      : "An unexpected error occurred.";
  }
  if (typeof Event !== "undefined" && error instanceof Event) {
    return "An unexpected error occurred.";
  }
  if (error !== null && typeof error === "object") {
    return upstreamErrorToMessage(error);
  }
  return "An unexpected error occurred.";
}
