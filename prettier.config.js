/** @type {import("prettier").Config} */
const prettierConfig = {
	arrowParens: "always",
	bracketSameLine: false,
	bracketSpacing: true,
	embeddedLanguageFormatting: "auto",
	endOfLine: "lf",
	htmlWhitespaceSensitivity: "css",
	insertPragma: false,
	jsxSingleQuote: false,
	printWidth: 100,
	proseWrap: "always",
	quoteProps: "as-needed",
	requirePragma: false,
	semi: false,
	singleAttributePerLine: false,
	singleQuote: false,
	tabWidth: 2,
	trailingComma: "all",
	useTabs: true,
	plugins: ["prettier-plugin-tailwindcss"],
}

export default prettierConfig
