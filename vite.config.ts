import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: "eslint .",
        useFlatConfig: true,
      },
    }),
  ],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest-setup.js"],
    environmentOptions: {
      jsdom: {
        console: false,
      },
    },
    globals: false,
    testTimeout: 20000,
    passWithNoTests: true,
    coverage: {
      include: ["<rootDir>/app/**"],
      exclude: ["<rootDir>/node_modules/", "<rootDir>/build", "**/*.d.ts"],
      thresholds: {
        global: {
          branches: 60,
          functions: 70,
          lines: 75,
          statements: 75,
        },
      },
      enabled: true,
      provider: "v8",
      reporter: ["json", "html"],
      reportsDirectory: "./coverage",
    },
  },
});
