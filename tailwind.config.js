/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        open: "'Open Sans', 'sans-serif'",
        mon: "'Montserrat', 'sans-serif'",
      },
      colors: {
        "cozy-green": "#3E895B",
        "cozy-yellow": "#FFD166",
      },
    },
  },
  plugins: [require("daisyui")],
};
