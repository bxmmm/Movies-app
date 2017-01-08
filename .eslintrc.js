module.exports = {
  "parser": "babel-eslint",
  "rules": {
    "strict": 0
  },
  "env": {
    "browser": true,
    "es6": true,
    "jquery": true
  },

  "plugins": [
    "react"
  ],
  "rules": {
    "comma-dangle": [
      "warn",
      "never"
    ],
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "warn",
      "always"
    ],
    /* Advanced Rules*/
    "no-unused-expressions": "warn",
    "no-useless-concat": "warn",
    "block-scoped-var": "error",
    "consistent-return": "error"
  }
};