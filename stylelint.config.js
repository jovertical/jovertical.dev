module.exports = {
    extends: ['stylelint-config-standard'],
    rules: {
        indentation: 4,
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'tailwind',
                    'apply',
                    'layer',
                    'variants',
                    'responsive',
                    'screen',
                ],
            },
        ],
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity': null,
    },
};
