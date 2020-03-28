module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:react-hooks/recommended'
  ],
  rules: {
    "quotes": ["error", "double"],
    "import/no-unresolved": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/semi": ["error", "always", { "omitLastInOneLineBlock": true }],
  }
};
