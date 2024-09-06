/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        rainbow: {
          red: '#FF0000',
          orange: '#FFA500',
          yellow: '#FFFF00',
          green: '#008000',
          blue: '#0000FF',
          indigo: '#4B0082',
          violet: '#EE82EE',
        },
      },
    },
  },
  plugins: [],
}

