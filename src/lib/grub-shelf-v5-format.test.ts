import { describe, expect, it } from "vitest";
import { formatUsdWhole } from "./grub-shelf-v5-format";

describe("formatUsdWhole", () => {
  it("formats integers as USD without cents", () => {
    expect(formatUsdWhole(42)).toMatch(/\$42/);
    expect(formatUsdWhole(1200)).toMatch(/1,200/);
  });
});
