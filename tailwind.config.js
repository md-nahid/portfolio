/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./blocks/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        ping: "ping 1s linear 1 forwards",
        "spin-slow": "spin 5s linear infinite",
      },
      borderWidth: {
        1: "1px",
      },
    },
    fontFamily: {
      inter: "'Inter', sans-serif",
    },
    screens: {
      ss: "425px",
      xs: "575px",
      sm: "640px",
      md: "768px",
      xmd: "870px",
      lg: "1024px",
      xlg: "1100px",
      xl: "1200px",
      "2xl": "1440px",
      "4xl": "1600px",
    },
  },
  plugins: [],
};
