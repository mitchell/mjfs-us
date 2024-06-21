import globals from "globals";
import js from "@eslint/js";
import ts from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import prettier from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { ignores: [".vitepress/dist", ".vitepress/cache"] },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...vue.configs["flat/recommended"],
  prettier,
  {
    files: ["*.vue", "**/*.vue"],
    languageOptions: {
      globals: globals.browser,
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        sourceType: "module",
      },
    },
  },
];
