module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'prettier',
    'plugin:jest/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-babel',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'jest',
    'prettier',
  ],
  rules: {
    'no-console': 'error',
  },
  settings: {
    jest: {
      version: 26,
    },
  },
};
