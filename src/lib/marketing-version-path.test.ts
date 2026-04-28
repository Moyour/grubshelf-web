import { describe, expect, it } from "vitest";
import {
  isMarketingVersionActive,
  normalizeMarketingPath,
} from "./marketing-version-path";

describe("marketing-version-path", () => {
  it("normalizes trailing slashes except root", () => {
    expect(normalizeMarketingPath("/")).toBe("/");
    expect(normalizeMarketingPath("/v5")).toBe("/v5");
    expect(normalizeMarketingPath("/v5/")).toBe("/v5");
    expect(normalizeMarketingPath("")).toBe("");
  });

  it("detects active v2 (main)", () => {
    expect(isMarketingVersionActive("/", "/")).toBe(true);
    expect(isMarketingVersionActive("/", "")).toBe(true);
    expect(isMarketingVersionActive("/v5", "/")).toBe(false);
  });

  it("detects active v5", () => {
    expect(isMarketingVersionActive("/v5", "/v5")).toBe(true);
    expect(isMarketingVersionActive("/v5", "/v5/")).toBe(true);
    expect(isMarketingVersionActive("/", "/v5")).toBe(false);
  });
});
