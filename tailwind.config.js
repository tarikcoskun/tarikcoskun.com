const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        ...colors,
        inherit: "inherit",
      },
    },
    fontFamily: {
      inherit: "inherit",
      base: ["Inter", "sans-serif"],
      title: ["IBM Plex Sans", "Inter", "sans-serif"],
    },
    fontSize: {
      inherit: "inherit",
      xl: ["1.25rem", "1.75rem"],
      "2xl": ["1.5rem", "2rem"],
      "4xl": ["2.25rem", "2.5rem"],
      "5xl": ["3.25rem", "3.75rem"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
