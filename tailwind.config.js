/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#8576FF",
        primaryDark: "#484554",
        deepestBg: "#383544",
        secondaryLight: "#ADA9BB",
        secondaryDark: "#6A6676",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
