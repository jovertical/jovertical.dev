const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/pages/**/*.jsx', './src/components/**/*.jsx'],
  darkMode: 'class',
  theme: {
    textColor: {
      accent: {
        DEFAULT: '#2b6cb0',
        dark: '#81e6d9',
      },

      primary: {
        DEFAULT: '#2d3748',
        dark: '#f7fafc',
      },

      secondary: {
        DEFAULT: '#4a5568',
        dark: '#e2e8f0',
      },

      tertiary: {
        DEFAULT: '#4a5568',
        dark: '#a0aec0',
      },

      'on-accent': {
        DEFAULT: '#f7fafc',
        dark: '#1a202c'
      }
    },

    backgroundColor: {
      accent: {
        DEFAULT: '#63b3ed',
        dark: '#81e6d9',
      },

      primary: {
        DEFAULT: '#ffffff',
        dark: '#1a202c',
      },

      secondary: {
        DEFAULT: '#edf2f7',
        dark: '#161b25',
      },
    },

    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('textColor.tertiary'),
            a: {
              color: theme('textColor.tertiary'),
              '&:hover': {
                color: theme('textColor.accent'),
              },
            },
            h1: {
              color: theme('textColor.primary'),
            },
            'h2, h3, h4, h5, h6': {
              color: theme('textColor.accent'),
            },
            'blockquote, strong': {
              color: theme('textColor.tertiary'),
            },
            code: {
              color: theme('textColor.tertiary'),
              fontWeight: 500,
            },
            'code::before, code::after': {
              content: '',
            },
            pre: {
              color: 'var(--code-text-color)',
              backgroundColor: 'var(--code-background-color)'
            }
          },
        },

        dark: {
          css: {
            color: theme('textColor.tertiary.dark'),
            a: {
              color: theme('textColor.tertiary.dark'),
              '&:hover': {
                color: theme('textColor.accent.dark'),
              },
            },
            h1: {
              color: theme('textColor.primary.dark'),
            },
            'h2, h3, h4, h5, h6': {
              color: theme('textColor.accent.dark'),
            },
            'blockquote, strong': {
              color: theme('textColor.tertiary.dark'),
            },
            code: {
              color: theme('textColor.tertiary.dark'),
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
