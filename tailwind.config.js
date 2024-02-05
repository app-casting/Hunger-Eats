/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar: "#8ACDD7",
        home: "#8ACDD7",
        pink: "#D63484",
        logobg: "#F9F9E0",
        primary: "#8ACDD7",
      },
    },
  },
  plugins: [],
};
