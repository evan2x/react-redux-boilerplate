
const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: [
    'react'
  ],
  extends: 'plugin:react/recommended',
  rules: {
    'comma-dangle': ERROR,
    'no-console': ERROR,
    'no-constant-condition': ERROR,
    'no-control-regex': ERROR,
    'no-debugger': ERROR,
    'no-dupe-args': ERROR,
    'no-dupe-keys': ERROR,
    'no-duplicate-case': ERROR,
    'no-empty-character-class': ERROR,
    'no-empty': [ERROR, {allowEmptyCatch: true}],
    'no-ex-assign': ERROR,
    'no-extra-boolean-cast': ERROR,
    'no-extra-semi': ERROR,
    'no-func-assign': ERROR,
    'no-inner-declarations': [ERROR, "both"],
    'no-invalid-regexp': ERROR,
    'no-irregular-whitespace': ERROR,
    'no-obj-calls': ERROR,
    'no-regex-spaces': ERROR,
    'no-sparse-arrays': ERROR,
    'no-template-curly-in-string': ERROR,
    'no-unexpected-multiline': ERROR,
    'no-unreachable': ERROR,
    'no-unsafe-finally': ERROR,
    'no-unsafe-negation': ERROR,
    'use-isnan': ERROR,
    'valid-typeof': ERROR,

    'accessor-pairs': ERROR,
    'array-callback-return': ERROR,
    'block-scoped-var': ERROR,
    'curly': [ERROR, "multi-line"],
    'dot-location': [ERROR, "property"],
    'dot-notation': ERROR,
    'eqeqeq': [ERROR, "smart"],
    'guard-for-in': ERROR,
    'no-alert': ERROR,
    'no-caller': ERROR,
    'no-case-declarations': ERROR,
    'no-div-regex': ERROR,
    'no-else-return': ERROR,
    'no-empty-function': ERROR,
    'no-empty-pattern': ERROR,
    'no-eval': ERROR,
    'no-extend-native': ERROR,
    'no-extra-bind': ERROR,
    'no-extra-label': ERROR,
    'no-fallthrough': ERROR,
    'no-floating-decimal': ERROR,
    'no-global-assign': ERROR,
    'no-implicit-globals': ERROR,
    'no-implied-eval': ERROR,
    'no-iterator': ERROR,
    'no-labels': [ERROR, {allowLoop: true, allowSwitch: true}],
    'no-lone-blocks': ERROR,
    'no-loop-func': ERROR,
    'no-multi-spaces': ERROR,
    'no-multi-str': ERROR,
    'no-new-func': ERROR,
    'no-new-wrappers': ERROR,
    'no-octal-escape': ERROR,
    'no-octal': ERROR,
    'no-proto': ERROR,
    'no-redeclare': ERROR,
    'no-return-assign': ERROR,
    'no-script-url': ERROR,
    'no-self-assign': ERROR,
    'no-self-compare': ERROR,
    'no-sequences': ERROR,
    'no-throw-literal': ERROR,
    'no-unmodified-loop-condition': ERROR,
    'no-unused-expressions': [ERROR, {allowShortCircuit: true, allowTernary: true}],
    'no-unused-labels': ERROR,
    'no-useless-concat': ERROR,
    'no-useless-escape': ERROR,
    'no-with': ERROR,
    'radix': [ERROR, 'as-needed'],
    'wrap-iife': [ERROR, 'any'],
    'yoda': ERROR,

    'strict': ERROR,

    'no-catch-shadow': ERROR,
    'no-delete-var': ERROR,
    'no-label-var': ERROR,
    'no-shadow-restricted-names': ERROR,
    'no-shadow': ERROR,
    'no-undef-init': ERROR,
    'no-undef': ERROR,
    'no-undefined': ERROR,
    'no-unused-vars': ERROR,
    'no-use-before-define': ERROR,

    'callback-return': ERROR,
    'handle-callback-err': ERROR,
    'no-new-require': ERROR,
    'no-path-concat': ERROR,

    'array-bracket-spacing': ERROR,
    'block-spacing': [ERROR, 'never'],
    'brace-style': [ERROR, '1tbs', {allowSingleLine: true }],
    'camelcase': ERROR,
    'comma-spacing': ERROR,
    'comma-style': ERROR,
    'computed-property-spacing': ERROR,
    'consistent-this': [ERROR, 'that'],
    'eol-last': ERROR,
    'func-call-spacing': [ERROR, 'never'],
    'indent': [ERROR, ERROR, {SwitchCase: 1}],
    'jsx-quotes': ERROR,
    'key-spacing': ERROR,
    'keyword-spacing': ERROR,
    'linebreak-style': [ERROR, "unix"],
    'max-len': [WARN, 80, ERROR],
    'max-params': [ERROR, 5],
    'new-cap': ERROR,
    'new-parens': ERROR,
    'newline-after-var': ERROR,
    'no-array-constructor': ERROR,
    'no-inline-comments': ERROR,
    'no-lonely-if': ERROR,
    'no-mixed-spaces-and-tabs': ERROR,
    'no-multiple-empty-lines': [ERROR, {max: 1}],
    'no-negated-condition': ERROR,
    'no-new-object': ERROR,
    'no-trailing-spaces': [ERROR, {skipBlankLines: true }],
    'no-underscore-dangle': [ERROR, {allowAfterThis: true, allowAfterSuper: true}],
    'no-unneeded-ternary': ERROR,
    'no-whitespace-before-property': ERROR,
    'object-curly-spacing': [ERROR, "always"],
    'object-property-newline': [ERROR, {allowMultiplePropertiesPerLine: true}],
    'one-var-declaration-per-line': [ERROR, 'initializations'],
    'operator-assignment': ERROR,
    'operator-linebreak': ERROR,
    'quote-props': [ERROR, 'as-needed', {keywords: true}],
    'quotes': [ERROR, 'single', 'avoid-escape'],
    'semi-spacing': ERROR,
    'semi': ERROR,
    'space-before-blocks': ERROR,
    'space-before-function-paren': [ERROR, 'never'],
    'space-in-parens': ERROR,
    'space-infix-ops': ERROR,
    'space-unary-ops': ERROR,
    'spaced-comment': ERROR,
    'unicode-bom': ERROR,

    'arrow-body-style': ERROR,
    'arrow-parens': [ERROR, 'as-needed', {requireForBlockBody: true}],
    'arrow-spacing': ERROR,
    'constructor-super': ERROR,
    'generator-star-spacing': [ERROR, "after"],
    'no-class-assign': ERROR,
    'no-confusing-arrow': ERROR,
    'no-const-assign': ERROR,
    'no-dupe-class-members': ERROR,
    'no-duplicate-imports': [ERROR, {includeExports: true}],
    'no-new-symbol': ERROR,
    'no-this-before-super': ERROR,
    'no-useless-constructor': ERROR,
    'no-var': ERROR,
    'object-shorthand': ERROR,
    'prefer-arrow-callback': ERROR,
    'prefer-rest-params': ERROR,
    'prefer-spread': ERROR,
    'prefer-template': ERROR,
    'require-yield': ERROR,
    'rest-spread-spacing': ERROR,
    'symbol-description': ERROR,
    'template-curly-spacing': ERROR,
    'yield-star-spacing': ERROR
  },
  env: {
    node: true,
    browser: true,
    es6: true,
    worker: true,
    serviceworker: true,
    mocha: true
  }
}
