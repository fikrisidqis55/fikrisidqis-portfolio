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
        white: "#ffffff",
        primary: "#D63200",
        secondary: "#FF10F0",
        tertiary: "#236CFF",
        background: "#333738",
      },
      borderRadius: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
