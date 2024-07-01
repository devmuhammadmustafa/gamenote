/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}", "!./node_modules"],
  theme: {
    colors: {
      'green': '#99E000',
      'green-hover': '#7CB503',
      'dark-green': '#89C605',
      'black': '#1D1D1D',
      'red': '#FF0101',
      'black-hover': '#404040',
      'gray': '#D9D9D9',
      'white': '#FFFFFF',
      'dark-white': '#A5A5A5',
      'dark': '#292D32',
      'light': '#D9D9D9',
      'panel-dark': '#3B474E',
      'border-dark': '#7D7D7D',
      'star': '#F0CC0C',
      'transparent': 'rgba(0,0,0,0)'
    },
    extend: {
      boxShadow: {
        'catalog': '0px 20px 30px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}

