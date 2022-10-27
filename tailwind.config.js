/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'lobster': ['Lobster', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },      
    },
  },
  plugins: [],
}
