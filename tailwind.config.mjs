import { Instrument_Sans } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        wine: {
          800: "#5D0C16",
          900: "#35040B"
        }
      },
      fontFamily: {
        InstrumentSans: ["InstrumentSans", "sans"],
      }
    },
  },
  plugins: [],
};
