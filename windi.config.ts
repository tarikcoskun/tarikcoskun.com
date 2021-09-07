import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";
import plugin from "windicss/plugin";

export default defineConfig({
  darkMode: "class",
  theme: {
    colors: {
      ...colors,
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".gradient-thingy": {
          width: "32rem",
          height: "32rem",
          borderRadius: "50%",
          filter: "blur(150px)",
          background:
            "linear-gradient(135deg, rgba(151, 158, 194, 0.3) 30.79%, rgba(21, 19, 25, 0) 68.03%);",
        },
      };
      addUtilities(newUtilities);
    }),
    plugin(({ addComponents }) => {
      const buttons = {
        ".button": {
          transition: "0.15s",
          padding: "0.375rem 1.5rem",
          borderRadius: "0.5rem",
          fontWeight: "500",
          background: "#ffffff10",
          border: "2px solid #ffffff20",
          "&:hover": {
            background: "#ffffff20",
          },
        },
      };
      addComponents(buttons);
    }),
    require("windicss/plugin/line-clamp"),
  ],
});
