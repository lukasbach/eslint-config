module.exports = {
    extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'plugin:prettier/recommended',
    ], //.map(require.resolve),
    plugins: ['react-refresh', 'unused-imports'],
    rules: {
        ...require('./custom-rules').base,
        ...require('./custom-rules').react,
    },
}
