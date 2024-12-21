/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1440px',
    }
  },
  plugins: [],
}

