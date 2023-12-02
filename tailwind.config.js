/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1080px",
    },
    fontFamily: {
      inter: "Inter, sans-serif",
    },
    borderColor: {
      1: "#000",
    },
    borderWidth: {
      1: "1px",
    },
    extend: {},
  },
  plugins: [],
};
