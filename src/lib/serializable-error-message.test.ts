import { describe, expect, it } from "vitest";
import { getSerializableErrorMessage } from "./serializable-error-message";

describe("getSerializableErrorMessage", () => {
  it("uses Error.message when present", () => {
    expect(getSerializableErrorMessage(new Error("boom"))).toBe("boom");
  });

  it("uses non-empty strings", () => {
    expect(getSerializableErrorMessage("plain")).toBe("plain");
  });

  it("falls back for empty Error message", () => {
    expect(getSerializableErrorMessage(new Error(""))).toBe(
      "An unexpected error occurred.",
    );
  });

  it("falls back for DOM Event (not ErrorEvent)", () => {
    expect(getSerializableErrorMessage(new Event("error"))).toBe(
      "An unexpected error occurred.",
    );
  });

  it("uses ErrorEvent.message when set", () => {
    if (typeof ErrorEvent === "undefined") {
      return;
    }
    const ev = new ErrorEvent("error", { message: "failed to load" });
    expect(getSerializableErrorMessage(ev)).toBe("failed to load");
  });
});
