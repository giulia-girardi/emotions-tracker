/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "dark-green": "#006262",
        "light-green": "#bfffd9",
        green: "#5cf8cf",
        yellow: "#febf00",
        blue: "#00a2fd",
        orange: "#fe5800",
        pink: "#ff8eed",
        "light-gray": "#f0f1f7",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      dropShadow: {
        "3xl": ["4px 4px 0 rgba(0, 0, 0, 0.95)"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
