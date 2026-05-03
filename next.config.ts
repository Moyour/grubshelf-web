import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

// Pin tracing root to this app so Next.js does not use a parent lockfile
// (e.g. ~/package-lock.json) as the workspace root.
const rootDir = path.resolve(fileURLToPath(new URL(".", import.meta.url)));

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
];

const nextConfig: NextConfig = {
  outputFileTracingRoot: rootDir,
  experimental: {
    /** Tree-shake icon barrel imports (smaller client bundles). */
    // lucide-react only: framer-motion is not reliably compatible with this optimization and can cause SSR/runtime failures.
    optimizePackageImports: ["lucide-react"],
  },
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      {
        source: "/:path*.(png|jpg|jpeg|webp|avif|ico|svg)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
