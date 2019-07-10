module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jquery: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    "no-console": "off",
    "arrow-parens": "off",
    "eslint-disable-next-line": "off",
    "vue/html-self-closing": "off",
    "vue/max-attributes-per-line": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/html-indent": "off"
  }
}
