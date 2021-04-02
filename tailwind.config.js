let colors = require('tailwindcss/colors');
let defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./src/pages/**/*.jsx', './src/components/**/*.jsx'],
    darkMode: 'class',
    theme: {
        colors: {
            blue: {
                light: '#63b3ed',
                DEFAULT: '#2b6cb0',
            },

            green: {
                DEFAULT: '#81e6d9',
            },

            gray: {
                lightest: '#EDF2F7',
                lighter: '#E2E8F0',
                light: '#A0AEC0',
                DEFAULT: '#4A5568',
                dark: '#2D3748',
                darker: '#1A202C',
                darkest: '#161B25',
            },

            black: colors.black,
            white: colors.white,
        },

        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray'),
                        a: {
                            color: theme('colors.gray'),
                            '&:hover': {
                                color: theme('colors.blue.DEFAULT'),
                            },
                        },
                        h1: {
                            color: theme('colors.gray.dark'),
                        },
                        'h2, h3, h4, h5, h6': {
                            color: theme('colors.blue.DEFAULT'),
                        },
                        'blockquote, strong': {
                            color: theme('colors.gray'),
                        },
                        code: {
                            color: theme('colors.gray'),
                            fontWeight: 500,
                        },
                        'code::before, code::after': {
                            content: '',
                        },
                        pre: {
                            color: 'var(--code-text-color)',
                            backgroundColor: 'var(--code-background-color)',
                        },
                    },
                },

                dark: {
                    css: {
                        color: theme('colors.gray.light'),
                        a: {
                            color: theme('colors.gray.light'),
                            '&:hover': {
                                color: theme('colors.green.DEFAULT'),
                            },
                        },
                        h1: {
                            color: theme('colors.gray.lightest'),
                        },
                        'h2, h3, h4, h5, h6': {
                            color: theme('colors.green.DEFAULT'),
                        },
                        'blockquote, strong': {
                            color: theme('colors.gray.light'),
                        },
                        code: {
                            color: theme('colors.gray.light'),
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
};
