import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";

const hsl = (str: string) => `hsl(var(${str}), <alpha-value>)`;

const tailwindConfig: Config = {
  darkMode: "media",
  content: ["./pages/**/*.tsx", "./ui/**/*.tsx"],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "transparent",
      theme: {
        background: hsl("--theme-background"),
        surface: hsl("--theme-surface"),
        overlay: hsl("--theme-overlay"),
        outline: hsl("--theme-outline"),
        foreground: hsl("--theme-foreground"),
        heading: hsl("--theme-heading"),
        subtext: hsl("--theme-subtext"),
      },
      color: {
        neutral: {
          10: hsl("--color-neutral-10"),
          50: hsl("--color-neutral-50"),
          100: hsl("--color-neutral-100"),
          200: hsl("--color-neutral-200"),
          300: hsl("--color-neutral-300"),
          400: hsl("--color-neutral-400"),
          500: hsl("--color-neutral-500"),
          600: hsl("--color-neutral-600"),
          700: hsl("--color-neutral-700"),
          800: hsl("--color-neutral-800"),
          900: hsl("--color-neutral-900"),
        },
      },
    },
    fontFamily: {
      body: "var(--font-body)",
      serif: "var(--font-serif)",
    },
    backgroundImage: {
      "hero-gradient": "linear-gradient(to bottom, rgb(254,220,231), transparent)",
      "hero-gradient-dark": "linear-gradient(to bottom, rgb(77,18,47,0.5), transparent)",
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const transform =
        "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))";

      addUtilities({
        ".absolute-center": {
          "--tw-translate-x": "-50%",
          "--tw-translate-y": "-50%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform,
        },
        ".absolute-center-x": {
          "--tw-translate-x": "-50%",
          position: "absolute",
          left: "50%",
          transform,
        },
        ".absolute-center-y": {
          "--tw-translate-y": "-50%",
          position: "absolute",
          top: "50%",
          transform,
        },
      });
    }),
  ],
};

export default tailwindConfig;
