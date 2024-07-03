/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@mkmk4423/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
