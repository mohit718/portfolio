import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          900: "#00072D",
          800: "#001C55",
          700: "#0A2472",
          600: "#0E6BA8",
          500: "#A6E1FA",
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        zain: ["var(--font-zain)"],
        poppins: ["var(--font-poppins)"],
        monoton: ["var(--font-monoton)"],
      },
      spacing: {
        available: "calc(100vh - 80px)",
      },
      aspectRatio: {
        retro: "4 / 3",
        portrait: "3 / 4",
      },
    },
  },
  plugins: [],
} satisfies Config;
