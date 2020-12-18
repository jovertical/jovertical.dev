const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/pages/**/*.jsx', './src/components/**/*.jsx'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            pre: {
              backgroundColor: '#323B49',
            },
          },
        },

        dark: {
          css: {
            color: theme('colors.gray.100'),
            'h1, a, code, strong': {
              color: theme('colors.gray.100'),
            },
            'ol > li::before': {
              color: theme('colors.gray.300'),
            },
          },
        },
      }),
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    typography: ['dark', 'responsive'],
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
