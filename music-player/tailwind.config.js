// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "var(--color-white)",
        background: "var(--color-background)",
      },
      fontFamily: {
        inter: ["var(--font-family-inter)", "sans-serif"],
      },
      fontWeight: {
        regular: "var(--font-weight-regular)",
        bold: "var(--font-weight-bold)",
      },
    },
  },
  plugins: [],
};
