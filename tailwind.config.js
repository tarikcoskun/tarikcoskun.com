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
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
