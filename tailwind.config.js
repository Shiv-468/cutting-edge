/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-green": "#6E9277",
        "shade-green":"#F5F8F6",
        "custom-black":"#001008"
      },
      fontFamily:{
        "KaushanScript":"Kaushan Script, cursive",
        "Archivo":"Archivo, sans-serif"
      },
      borderColor:{
        "light-black":"#0000001A"
      }
    },
  },
  plugins: [],
}

