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
        "cozy-yellow": "#F2B950",
      },
      screens: {
        extra: "1170px",
      },
    },
  },
  plugins: [require("daisyui")],
};
