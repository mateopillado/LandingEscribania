/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        PtSans: ['"PT Sans"',...defaultTheme.fontFamily.sans],
        Lora: ['"Lora"',...defaultTheme.fontFamily.sans],
        Poppins: ['"Poppins"',...defaultTheme.fontFamily.sans],
        Carattere: ['"Carattere"',...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

