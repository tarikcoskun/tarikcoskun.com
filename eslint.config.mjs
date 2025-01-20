import config from "@antfu/eslint-config";

export default config(
  {
    stylistic: {
      semi: true,
      indent: 2,
      quotes: "double",
    },
  },
  {
    rules: {
      "antfu/if-newline": "off",
      "style/brace-style": ["warn", "1tbs"],
      "style/arrow-parens": ["warn", "always"],
      "style/jsx-one-expression-per-line": "off",
      "perfectionist/sort-imports": "off",
    },
  },
);
