/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors: {
      navbar: "#8ACDD7",
      home:"#8ACDD7",
      pink: "#FF90BC"
     }
  },
  },
  plugins: [],
}

