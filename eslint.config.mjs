import globals from "globals";
import pluginJs from "@eslint/js";

// Define Node.js globals
const nodeGlobals = {
  require: "readonly",
  module: "readonly",
};

const cypressGlobals = {
  describe: "readonly",
  it: "readonly",
  cy: "readonly"
};

export default [
  { 
    languageOptions: { 
      globals: {
        ...globals.browser, 
        ...nodeGlobals, // add Node.js globals
        ...cypressGlobals
      } 
    } 
  },
  pluginJs.configs.recommended,
  {
    ignores: [
      "!node_modules/",
      "node_modules/*",
      "!node_modules/mylibrary/"
    ]
  },
];
