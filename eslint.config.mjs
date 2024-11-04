import globals from "globals";
import pluginJs from "@eslint/js";
import daStyle from "eslint-config-dicodingacademy";

/** @type {import('eslint').Linter.Config} */
export default {
  extends: [
    "eslint:recommended",
    daStyle,
    // config style lainnya
  ],
  overrides: [
    {
      files: ["**/*.js"],
      languageOptions: {
        sourceType: "commonjs",
        globals: globals.node,
      },
    },
  ],
  ...pluginJs.configs.recommended,
};
