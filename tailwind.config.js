const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/*.tsx"],
  darkMode: false,
  theme: {
    colors: {
      gray: colors.gray,
      pink: colors.pink,
      yellow: colors.yellow,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
