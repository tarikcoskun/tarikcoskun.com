
module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {
      width: {
        '28': '7rem'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  experimental: {
    applyComplexClasses: true,
  }
}
