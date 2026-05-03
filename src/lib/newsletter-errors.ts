/**
 * Normalizes upstream API error payloads (e.g. Buttondown `detail`) to a user-facing string.
 * Some APIs return `detail` as an array of `{ type, loc, msg }` objects — not valid React children.
 */
export function upstreamErrorToMessage(detail: unknown): string {
  if (detail == null) {
    return "Something went wrong. Please try again.";
  }
  if (typeof detail === "string") {
    return detail;
  }
  if (Array.isArray(detail)) {
    const parts = detail
      .map((item) => {
        if (typeof item === "string") return item;
        if (item != null && typeof item === "object" && "msg" in item) {
          const msg = (item as { msg: unknown }).msg;
          return typeof msg === "string" ? msg : null;
        }
        return null;
      })
      .filter((s): s is string => Boolean(s));
    if (parts.length > 0) {
      return parts.join(" ");
    }
  }
  if (typeof detail === "object") {
    const o = detail as Record<string, unknown>;
    if (typeof o.msg === "string") return o.msg;
    if (typeof o.message === "string") return o.message;
  }
  return "Something went wrong. Please try again.";
}
