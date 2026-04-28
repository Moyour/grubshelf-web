import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gs: {
          background: "var(--gs-background)",
          surface: "var(--gs-surface)",
          "surface-secondary": "var(--gs-surface-secondary)",
          "text-primary": "var(--gs-text-primary)",
          "text-secondary": "var(--gs-text-secondary)",
          "text-tertiary": "var(--gs-text-tertiary)",
          "text-inverse": "var(--gs-text-inverse)",
          border: "var(--gs-border)",
          "border-secondary": "var(--gs-border-secondary)",
          "brand-primary": "var(--gs-brand-primary)",
          "brand-primary-bg": "var(--gs-brand-primary-bg)",
          accent: "var(--gs-accent)",
          "accent-text": "var(--gs-accent-text)",
          "accent-surface": "var(--gs-accent-surface)",
          success: "var(--gs-success)",
          "success-surface": "var(--gs-success-surface)",
          warning: "var(--gs-warning)",
          "warning-surface": "var(--gs-warning-surface)",
          danger: "var(--gs-danger)",
          "danger-surface": "var(--gs-danger-surface)",
          "nav-active": "var(--gs-nav-active)",
          "nav-inactive": "var(--gs-nav-inactive)",
          "input-background": "var(--gs-input-background)",
          "input-border": "var(--gs-input-border)",
          "input-border-focus": "var(--gs-input-border-focus)",
          "input-placeholder": "var(--gs-input-placeholder)",
          shimmer: "var(--gs-shimmer)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: [
          "var(--font-outfit)",
          "system-ui",
          "Segoe UI",
          "sans-serif",
        ],
        mono: ["var(--font-ibm-plex-mono)", "ui-monospace", "monospace"],
        handwriting: ["var(--font-patrick-hand)", "cursive"],
      },
      borderRadius: {
        brand: "12px",
        card: "14px",
        badge: "6px",
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(1.25rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "hero-float": {
          "0%, 100%": { transform: "translateY(0) rotate(-0.5deg)" },
          "50%": { transform: "translateY(-10px) rotate(0.5deg)" },
        },
        "hero-drift": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "shelf-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.72" },
        },
        beam: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        "shimmer-bg": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.85s cubic-bezier(0.22, 1, 0.36, 1) both",
        "hero-float": "hero-float 9s ease-in-out infinite",
        "hero-drift": "hero-drift 5s ease-in-out infinite",
        "shelf-pulse": "shelf-pulse 4s ease-in-out infinite",
        beam: "beam 3.5s ease-in-out infinite",
        "shimmer-slow": "shimmer-bg 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
