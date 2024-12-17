/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
        cursive: ["Cedarville Cursive", "cursive", "serif"],
      },
      backgroundColor: {
        blue: "#1c26ff",
        purple: "#7e5bef",
      },
      borderColor: {
        blue: "#1fb6ff",
        purple: "#7e5bef",
      },
      textColor: {
        blue: "#24b6fa",
        purple: "#7e5bef",
      },
    },
  },
  plugins: [],
};
