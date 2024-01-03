/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      'sm': '400px'
    }, 
    extend: {
      fontFamily: {
        'inter': ['inter', 'sans-serif']
    }
    },
  },
  plugins: [],
}

