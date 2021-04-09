const colors = require("tailwindcss/colors");

module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/line-clamp")],
};
