/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        "black-10": "#151515",
      },
      backgroundImage: {
        "orange-gradient": "url('/images/bg-gradient.png')",
      },
    },
  },
  plugins: [require("rippleui")],
};
