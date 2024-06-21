import globals from "globals";
import js from "@eslint/js";
import ts from "typescript-eslint";
import vue from "eslint-plugin-vue";
import prettier from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { ignores: [".vitepress/dist", ".vitepress/cache"] },
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...vue.configs["flat/recommended"],
  prettier,
];
