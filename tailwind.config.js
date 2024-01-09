/** @type {import('tailwindcss').Config} */

const colors = require("./src/tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
    },
  },
  plugins: [],
};
