module.exports = {
    extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:prettier/recommended',
    ].map(require.resolve),
    rules: {
        ...require('./custom-rules').base,
        ...require('./custom-rules').react,
    },
}
