module.exports = {
    base: {
        'import/order': 'warn',
        'no-shadow': 'warn',
        'no-new': 'warn',
        'import/no-cycle': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'class-methods-use-this': 'off',
        'no-restricted-syntax': 'off',
        'no-await-in-loop': 'off',
        'no-plusplus': 'off',
        'import/prefer-default-export': 'off',
        "import/extensions": [
            "error",
            "never"
        ],
    },
    react: {
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-props-no-spreading': 'off'
    }
};
