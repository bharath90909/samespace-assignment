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
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },

      screens: {
        sm: "750px", // Default
        md: "980px", // Default
        lg: "1200px", // Custom breakpoint
        xl: "1280px", // Default
        "2xl": "1536px", // Default
      },
    },
  },
  plugins: [],
};
