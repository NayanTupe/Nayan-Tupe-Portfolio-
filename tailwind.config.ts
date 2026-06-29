import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./types/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        secondaryBackground: "#111113",
        surface: "#17171B",
        mint: "#72F2C0",
        luxuryBlue: "#7BA8FF",
        softGold: "#FFD87A",
        warmCoral: "#FF7D6E",
        softLavender: "#B9A8FF",
      },
      borderRadius: {
        card: "24px",
        button: "18px",
      },
      maxWidth: {
        content: "1500px",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
        quart: "cubic-bezier(0.25, 1, 0.5, 1)",
      },
    },
  },
};

export default config;
