import { includeIgnoreFile } from "@eslint/compat";
import jsPlugin from "@eslint/js";
import vitestPlugin from "@vitest/eslint-plugin";
import prettierPlugin from "eslint-config-prettier/flat";
import playwright from "eslint-plugin-playwright";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import testingLibraryPlugin from "eslint-plugin-testing-library";
import { defineConfig } from "eslint/config";
import { fileURLToPath } from "node:url";
import tsPlugin from "typescript-eslint";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath, "Imported .gitignore patterns"),
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
  {
    ...vitestPlugin.configs.all,
    files: ["test/**.[tj]sx?", "app/**.(spec|test).[tj]sx?"],
  },
  {
    ...testingLibraryPlugin.configs["flat/react"],
    files: ["test/**.[tj]sx?", "app/**.(spec|test).[tj]sx?"],
  },
  {
    ...playwright.configs["flat/recommended"],
    rules: {
      ...playwright.configs["flat/recommended"].rules,
    },
  },

  // {
  //   ...playwright.configs["flat/recommended"],
  //   files: ["e2e"],
  // },
  {
    rules: {
      "no-console": "error",
    },
  },
]);
