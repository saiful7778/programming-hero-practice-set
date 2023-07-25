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
        sm: "500px",
        md: "600px",
        lg: "900px",
        xl: "1100px",
      },
    },
    extend: {
      colors: {
        "dark-1": "#111111",
        "dark-2": "#414040",
        "dark-3": "#707070",
        "dark-4": "#A0A0A0",
        "dark-5": "#CFCFCF",
        "dark-6": "#E7E7E7",
        "dark-7": "#F3F3F3",
      },
    },
    fontFamily: {
      "eb-garamond": ["EB Garamond", "serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
