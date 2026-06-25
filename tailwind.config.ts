import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        line: "var(--line)",
        surface: "var(--surface)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: ["clamp(3rem, 8vw, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        h1: ["clamp(2.25rem, 4vw, 3rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        h2: ["clamp(1.75rem, 3vw, 2rem)", { lineHeight: "1.12", letterSpacing: "-0.01em" }],
        h3: ["1.5rem", { lineHeight: "1.2" }],
        "body-lg": ["1.25rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        label: ["0.8125rem", { lineHeight: "1", letterSpacing: "0.08em" }],
      },
      maxWidth: {
        content: "1200px",
        measure: "68ch",
      },
      spacing: {
        section: "clamp(4rem, 10vw, 8rem)",
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
