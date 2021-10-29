module.exports = {
  extends: [
    'plugin:react/recommended',
    'standard',
    'standard-react',
    'standard-jsx',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  plugins: [
    'react-hooks',
    'jsx-a11y',
    'import'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal'],
      'newlines-between': 'always-and-inside-groups'
    }]
  },
  globals: {
    React: 'writable'
  }
}
