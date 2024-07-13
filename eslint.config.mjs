import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },

  {
    rules: {
      eqeqeq: "error", // Enforce strict equality
      curly: ["error", "all"], // Require curly braces for all control statements
      "no-var": "error", // Disallow var, use let or const instead
      "no-unused-vars": [
        "error",
        { vars: "all", args: "after-used", ignoreRestSiblings: false },
      ], // Disallow unused variables
      "no-console": "warn", // Warn on console statements
      indent: ["error", 2], // Enforce 2 spaces for indentation
      quotes: ["error", "single"], // Enforce single quotes
      semi: ["error", "always"], // Require semicolons
      "comma-dangle": ["error", "always-multiline"], // Require trailing commas in multiline objects and arrays
      "brace-style": ["error", "1tbs", { allowSingleLine: true }], // Enforce one true brace style (1TBS)
      "no-eval": "error", // Disallow eval()
      "consistent-return": "error", // Require consistent return statements
      "dot-notation": ["error", { allowKeywords: true }], // Encourage dot notation
      "prefer-const": [
        "error",
        { destructuring: "all", ignoreReadBeforeAssign: true },
      ], // Suggest using const
      "arrow-spacing": ["error", { before: true, after: true }], // Enforce spacing around arrow function arrows
      "no-duplicate-imports": "error", // Disallow duplicate imports
      "object-shorthand": ["error", "always"], // Require object shorthand syntax
    },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
