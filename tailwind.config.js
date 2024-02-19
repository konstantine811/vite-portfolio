/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./pages/**/*.{html,js,ts}", "./src/**/*.{js, ts}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
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
