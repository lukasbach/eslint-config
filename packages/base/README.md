# My Eslint Config

This is my personal eslint config. It's based on the Airbnb Javascript Style Guide and includes additional
configuration for prettier and import rules. 

Install the rules

```bash
npx install-peerdeps --dev @lukasbach/eslint-config-base
yarn add @lukasbach/eslint-config-base --dev
```

Add the following object to the `eslint.rc`:

```json
{
  "extends": "@lukasbach/base"
}
```

or the following to your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@lukasbach/base"
  }
}
```

If you need react, extend from "@lukasbach/base/react" instead.

You can also install "@lukasbach/eslint-config-deps" to get all peer dependencies included as actual dependencies.

```bash
yarn add @lukasbach/eslint-config-deps --dev
```
