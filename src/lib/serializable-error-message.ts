/**
 * Text safe to show when surfacing caught values in UI (Next error boundaries, etc.).
 * Avoids raw "[object Event]" when the thrown value is not an Error instance.
 */
export function getSerializableErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message.trim().length > 0) {
    return error.message;
  }
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
  return "An unexpected error occurred.";
}
