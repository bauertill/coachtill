/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  // Core formatting
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  trailingComma: "es5",
  printWidth: 100,

  // JSX
  bracketSameLine: false,
  jsxSingleQuote: false,

  // Other
  arrowParens: "always",
  endOfLine: "lf",
  bracketSpacing: true,
  proseWrap: "preserve",

  // Plugins
  plugins: ["prettier-plugin-tailwindcss"],

  // Tailwind plugin options
  tailwindFunctions: ["cn", "clsx", "cva"],
};
