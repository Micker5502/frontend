module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
  ],
  parser: "vue-eslint-parser",
  
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true
    },
    ecmaVersion: 2020
  }, 
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    camelcase: 'off',
    '@typescript-eslint/camelcase': 0,
    "@typescript-eslint/no-explicit-any": ["off"]
  }
};
