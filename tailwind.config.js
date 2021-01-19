module.exports = {
  future: {},
  purge: [],
  theme: {
    scale: {
      115: '1.15',
    },
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar')],
  experimental: {
    applyComplexClasses: true,
  },
}
