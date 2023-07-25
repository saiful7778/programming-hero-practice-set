/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        sm: "600px",
        md: "700px",
        lg: "900px",
        xl: "1100px",
      },
    },
    extend: {
      colors: {
        "dark-1": "#1C1C1C",
        "dark-2": "#494949",
        "dark-3": "#777777",
        "btn-gra": "linear-gradient(270deg, #F00 0%, #FF8938 100%)",
      },
    },
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
  },
  plugins: [],
};
