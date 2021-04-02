module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:@next/next/recommended',
        'prettier',
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        sourceType: 'module',
        babelOptions: {
            presets: ['next/babel'],
        },
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'no-unused-vars': 'error',
    },
};
