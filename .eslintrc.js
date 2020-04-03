module.exports = {
  env: {
    es6: true,
    'jest/globals': true,
    node: true
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jest',
    'toplevel',
    'eslint-plugin-no-inferred-method-name',
    'sonarjs',
    'node'
  ],
  rules: {
    'import/extensions': [0],
    'react/jsx-filename-extension': [0],
    '@typescript-eslint/no-var-requires': [0],
    '@typescript-eslint/explicit-function-return-type': [0],
    'react/prop-types': [0],
    'react/react-in-jsx-scope': [0],
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        noSortAlphabetically: false
      }
    ],
    'no-inferred-method-name/no-inferred-method-name': 2,
    'no-var': 2,
    'import/no-extraneous-dependencies': 0
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx']
      }
    }
  }
};
