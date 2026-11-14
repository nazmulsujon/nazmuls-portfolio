import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#060B1E",
        surface: "#0B1430",
        card: "#101B3A",
        line: "rgba(148,163,184,0.16)",
        body: "#C9D4F2",
        muted: "#93A3CC",
        sky: "#38BDF8",
        brand: "#4285F4",
        mint: "#6EE7B7",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(56,189,248,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
