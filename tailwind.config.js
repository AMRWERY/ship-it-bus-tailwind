/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-rtl'),
    require('flowbite/plugin'),
    require('preline/plugin'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

