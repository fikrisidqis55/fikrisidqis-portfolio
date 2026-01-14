import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/models/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Vaporwave color palette
        white: "#ffffff",
        primary: "#FF00FF", // Hot Magenta
        secondary: "#00FFFF", // Electric Cyan
        tertiary: "#FF9900", // Sunset Orange
        background: "#090014", // The Void - near black with purple tint
        foreground: "#E0E0E0", // Chrome Text
        card: "#1a103c", // Card Background (deep purple)
        "card-border": "#2D1B4E", // Default border
        "card-border-active": "#00FFFF", // Active border
        // Legacy colors (keeping for compatibility)
        "legacy-primary": "#D63200",
        "legacy-secondary": "#FF10F0",
        "legacy-tertiary": "#236CFF",
        "legacy-background": "#333738",
      },
      fontFamily: {
        heading: ['"Orbitron"', "sans-serif"],
        mono: ['"Share Tech Mono"', "monospace"],
      },
      boxShadow: {
        "neon-magenta": "0 0 10px #FF00FF, 0 0 20px #FF00FF",
        "neon-cyan": "0 0 20px rgba(0,255,255,0.2), 0 0 15px #00FFFF",
        "neon-orange": "0 0 10px #FF9900, 0 0 20px rgba(255,153,0,0.5)",
        "neon-large": "0 0 50px rgba(0,255,255,0.2)",
      },
      borderRadius: {
        none: "0px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
