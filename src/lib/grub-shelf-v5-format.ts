/**
 * Format whole-dollar amounts for V5 marketing demos (charts, labels).
 */
export function formatUsdWhole(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(amount);
}
