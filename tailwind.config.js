const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
    fontFamily: {
      base: ["Inter", "sans-serif"],
      title: "IBM Plex Sans",
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
