export default {
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
        fadeOut: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(10px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        fadeOut: "fadeOut 0.3s ease-in-out",
      },

      screens: {
        //customized breakpoints
        sm: "750px",
        md: "980px",
        lg: "1200px",
      },
    },
  },
  plugins: [],
};
