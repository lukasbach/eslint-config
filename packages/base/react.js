module.exports = {
    extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'plugin:prettier/recommended',
    ], //.map(require.resolve),
    rules: {
        ...require('./custom-rules').base,
        ...require('./custom-rules').react,
    },
}
