import eslintPluginReact from 'eslint-plugin-react'

export default [
  {
    files: ['**/*.tsx', '**/*.ts'],
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
]
