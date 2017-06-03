module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
  },
  extends: ['airbnb', 'plugin:import/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  plugins: ['babel', 'import', 'jsx-a11y', 'mocha', 'flowtype'],
  settings: {
    'import/resolver': {
      webpack: {
        config: './configuration/webpack/webpack.config.dev.js',
      },
    },
  },
  rules: {
    'no-plusplus': 'off',
    'arrow-body-style': 'off', // Not our taste?
    'arrow-parens': 'off', // Incompatible with prettier
    indent: 'off', // Incompatible with prettier
    'space-before-function-paren': 'off', // Incompatible with prettier
    'no-mixed-operators': 'off', // Incompatible with prettier
    'consistent-this': ['error', 'self'],
    'max-len': ['error', 100, 2, { ignoreUrls: true }], // airbnb is allowing some edge cases
    'no-console': 'error', // airbnb is using warn
    'no-alert': 'error', // airbnb is using warn
    'no-param-reassign': 'off', // Not our taste?
    'no-prototype-builtins': 'off', // airbnb use error
    'object-curly-spacing': 'off', // use babel plugin rule
    'no-restricted-properties': 'off', // To remove once react-docgen support ** operator.
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }], // airbnb use ignoreRestSiblings

    'babel/object-curly-spacing': ['error', 'always'],

    'import/unambiguous': 'off', // scripts
    'import/namespace': ['error', { allowComputed: true }],
    'import/no-extraneous-dependencies': 'off',

    'react/jsx-indent': 'off', // Incompatible with prettier
    'react/jsx-closing-bracket-location': 'off', // Incompatible with prettier
    'react/jsx-wrap-multilines': 'off', // Incompatible with prettier
    'react/jsx-indent-props': 'off', // Incompatible with prettier
    'react/jsx-handler-names': ['error', { eventHandlerPrefix: 'handle', eventHandlerPropPrefix: 'on' }],
    'react/require-default-props': 'off', // airbnb use error
    'react/forbid-prop-types': 'off', // airbnb use error
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // airbnb is using .jsx
    'react/no-danger': 'error', // airbnb is using warn
    'react/no-direct-mutation-state': 'error', // airbnb is disabling this rule
    'react/no-find-dom-node': 'off', // I don't know
    'react/no-unused-prop-types': 'off', // Is still buggy
    'react/sort-prop-types': 'off', // airbnb do nothing here.
    'react/sort-comp': [2, {
        order: [
          'type-annotations',
          'static-methods',
          'props',
          'lifecycle',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],

    'mocha/handle-done-callback': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-global-tests': 'error',
    'mocha/no-pending-tests': 'error',
    'mocha/no-skipped-tests': 'error',

    'flowtype/define-flow-type': 'error',
    'flowtype/require-valid-file-annotation': ['error', 'always'],
    'flowtype/require-parameter-type': 'off',
    'flowtype/require-return-type': 'off',
    'flowtype/space-after-type-colon': 'off',
    'flowtype/space-before-type-colon': 'off',
    'flowtype/type-id-match': 'off',
    'flowtype/use-flow-type': 'error',
  },
};