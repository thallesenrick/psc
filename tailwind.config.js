/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FB8500',
          200: '',
          300: '',
          400: '',
          500: '',
          600: '',
          700: '',
          800: '',
          900: '',
        },
        graylight: '#707070',
      },
      screens: {
        '3xl': '1800px',
      },
      fontFamily: {
        'montserrat': ['Montserrat']
      }
    },

  },
  plugins: [
    require('flowbite/plugin'),
]
}