import jsPlugin from "@eslint/js";
import vitestPlugin from "@vitest/eslint-plugin";
import prettierPlugin from "eslint-config-prettier/flat";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import testingLibraryPlugin from "eslint-plugin-testing-library";
import { defineConfig } from "eslint/config";
import tsPlugin from "typescript-eslint";

export default defineConfig([
  jsPlugin.configs.recommended,
  tsPlugin.configs.strict,
  tsPlugin.configs.stylistic,
  prettierPlugin,
  {
    ...reactPlugin.configs.flat.recommended,
    rules: {
      ...reactPlugin.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
  },
  reactHooksPlugin.configs.flat["recommended-latest"],
  vitestPlugin.configs.all,
  testingLibraryPlugin.configs["flat/react"],
  {
    ignores: [".react-router/*", "build/*", "package-lock.json"],
  },
  {
    rules: {
      "no-console": "error",
    },
  },
]);
