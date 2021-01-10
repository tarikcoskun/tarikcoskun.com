module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {
      width: {
        28: '7rem',
      },
      animation: ['hover', 'focus'],
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar')],
  experimental: {
    applyComplexClasses: true,
  },
}
