/** @type {import('tailwindcss').Config} */

const colors = require("./src/css/colors");
const IMAGES_PATH = "/assets/images/";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
    },
    backgroundImage: {
      "home-hero-1": `url('${IMAGES_PATH}home-hero-1.svg')`,
      "home-hero-2": `url('${IMAGES_PATH}home-hero-2.svg')`,
      "home-hero-3": `url('${IMAGES_PATH}home-hero-3.svg')`,
    },
  },
  plugins: [],
};
