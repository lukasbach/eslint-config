module.exports = {
    extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:prettier/recommended',
        'plugin:import/typescript',
    ], // .map(require.resolve),
    plugins: ['unused-imports'],
    rules: {
        ...require('./custom-rules').base,
    },
}
