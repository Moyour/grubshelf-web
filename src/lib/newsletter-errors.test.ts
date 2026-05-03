import { describe, expect, it } from "vitest";

import { upstreamErrorToMessage } from "./newsletter-errors";

describe("upstreamErrorToMessage", () => {
  it("returns plain strings", () => {
    expect(upstreamErrorToMessage("Email invalid")).toBe("Email invalid");
  });

  it("joins msg from validation-style objects (Buttondown-style)", () => {
    expect(
      upstreamErrorToMessage([
        { type: "value_error", loc: ["body", "email"], msg: "Invalid email" },
      ]),
    ).toBe("Invalid email");
  });

  it("joins multiple msgs with spaces", () => {
    expect(
      upstreamErrorToMessage([
        { msg: "First issue" },
        { msg: "Second issue" },
      ]),
    ).toBe("First issue Second issue");
  });

  it("reads msg from a single object", () => {
    expect(
      upstreamErrorToMessage({ type: "error", loc: [], msg: "Nope" }),
    ).toBe("Nope");
  });

  it("reads message fallback", () => {
    expect(upstreamErrorToMessage({ message: "Fallback" })).toBe("Fallback");
  });

  it("falls back when detail is unusable", () => {
    expect(upstreamErrorToMessage(null)).toBe(
      "Something went wrong. Please try again.",
    );
    expect(upstreamErrorToMessage({})).toBe(
      "Something went wrong. Please try again.",
    );
    expect(upstreamErrorToMessage(123)).toBe(
      "Something went wrong. Please try again.",
    );
  });
});
