module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['@typescript-eslint', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    // no-unused-vars is triggered on interface methods
    '@typescript-eslint/no-unused-vars': 'error',
    'no-unused-vars': 'off',

    // // import/extensions is triggered on importing .ts files
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],

    // no-shadow is triggered on declaring enums
    '@typescript-eslint/no-shadow': 'error',
    'no-shadow': 'off',

    // no-redeclare is triggered on declaring overloads
    '@typescript-eslint/no-redeclare': 'error',
    'no-redeclare': 'off',

    // dev-dependencies may be used in tests
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.js', '**/*.spec.js', '**/*.test.ts', '**/*.spec.ts'],
      },
    ],

    'no-console': 'off',

    'max-classes-per-file': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
