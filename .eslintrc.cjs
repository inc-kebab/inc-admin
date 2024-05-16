module.exports = {
  extends: ['next/core-web-vitals', '@it-incubator/eslint-config'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react/jsx-curly-brace-presence': [2, { children: 'never', props: 'never' }],
  },
}
