/** @type {import("prettier").Options} */
module.exports = {
  printWidth: 140,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  proseWrap: "always",
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};
