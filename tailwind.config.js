/** @type {import('tailwindcss').Config} */

const FormKitVariants = require("@formkit/themes/tailwindcss");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./tailwind-theme.js",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("tailwindcss-rtl"),
    FormKitVariants,
  ],
};
