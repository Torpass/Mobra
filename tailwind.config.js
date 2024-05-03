/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#EFF2EF',
      'gold': '#FFB703',
      'gray': '#62666A',
      'darkBlue': '#222831',
      'black': '#131614',
    },
    extend: {},
  },
  plugins: [],
}