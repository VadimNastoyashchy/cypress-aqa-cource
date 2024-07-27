import js from "@eslint/js";
import prettier from "prettier"

export default [
  js.configs.recommended,
  prettier,

  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },

  {
    ignores: [
      "!node_modules/", // unignore `node_modules/` directory
      "node_modules/*", // ignore its content
      "!node_modules/mylibrary/", // unignore `node_modules/mylibrary` directory
    ],
  },
];
