import { describe, expect, it } from "vitest";
import {
  getFooterLegalLinks,
  getMarketingNavLinks,
  resolveAppStoreUrl,
} from "./marketing-nav";

describe("getMarketingNavLinks", () => {
  it("returns features anchor link", () => {
    expect(getMarketingNavLinks()).toEqual([
      { href: "/#features", label: "Features" },
    ]);
  });
});

describe("getFooterLegalLinks", () => {
  it("returns privacy and terms", () => {
    expect(getFooterLegalLinks()).toEqual([
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ]);
  });
});

describe("resolveAppStoreUrl", () => {
  it("returns # when undefined", () => {
    expect(resolveAppStoreUrl(undefined)).toBe("#");
  });

  it("returns # when empty or whitespace", () => {
    expect(resolveAppStoreUrl("")).toBe("#");
    expect(resolveAppStoreUrl("   ")).toBe("#");
  });

  it("returns trimmed URL when set", () => {
    expect(resolveAppStoreUrl("  https://apps.apple.com/app/id123  ")).toBe(
      "https://apps.apple.com/app/id123",
    );
  });
});
