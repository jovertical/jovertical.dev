const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/pages/**/*.jsx', './src/components/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: '#7D7D7D',
      black: '#000000',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
