module.exports = {
  extends: [
    // "airbnb",
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    // "prettier/react",
    // "prettier/@typescript-eslint",
    'plugin:prettier/recommended',
    'plugin:import/recommended',
  ],
  plugins: ['react', 'prettier', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    project: 'tsconfig.json',
  },
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': 'error',
  },
  // settings: {
  //   'import/resolver': {
  //     typescript: {},
  //   },
  //   react: {
  //     version: 'detect',
  //   },
  // },
};
