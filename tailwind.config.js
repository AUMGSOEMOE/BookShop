/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        nav: "#ffd780",
        text: "#425272",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
