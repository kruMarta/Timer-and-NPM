module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'no-unused-vars': 'off',
    'no-plusplus': 'off',
    'no-undef': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-template': 'off',
  },
};
