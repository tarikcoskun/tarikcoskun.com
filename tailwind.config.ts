import type { Config } from "tailwindcss";

const hslvar = (str: string) => `hsl(var(--${str}), <alpha-value>)`;

const tailwindConfig: Config = {
  darkMode: "media",
  content: ["./pages/**/*.tsx", "./ui/**/*.tsx"],
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      neutral: {
        50: hslvar("color-neutral-50"),
        100: hslvar("color-neutral-100"),
        200: hslvar("color-neutral-200"),
        300: hslvar("color-neutral-300"),
        400: hslvar("color-neutral-400"),
        500: hslvar("color-neutral-500"),
        600: hslvar("color-neutral-600"),
        700: hslvar("color-neutral-700"),
        800: hslvar("color-neutral-800"),
        900: hslvar("color-neutral-900"),
        950: hslvar("color-neutral-950"),
      },
      theme: {
        background: hslvar("theme-background"),
        surface: hslvar("theme-surface"),
        outline: hslvar("theme-outline"),
        title: hslvar("theme-text-title"),
        body: hslvar("theme-text-body"),
      },
    },
    fontFamily: {
      body: "var(--font-body)",
      serif: "var(--font-serif)",
    },
  },
  plugins: [],
};

export default tailwindConfig;
