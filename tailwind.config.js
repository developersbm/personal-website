/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#fefce8', // near-white crème (innermost elements)
          100: '#faf4cc', // light crème (cards)
          200: '#f0e6b0', // main page background
          300: '#ddd0a0', // borders
          400: '#c8ba80', // hover borders / darker accents
          500: '#a89860', // strong accent
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("preline/plugin")],
};
