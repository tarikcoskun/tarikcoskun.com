module.exports = {
  future: {},
  purge: [],
  theme: {
    scale: {
      115: '1.15',
    },
    extend: {
      width: {
        28: '7rem',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar')],
  experimental: {
    applyComplexClasses: true,
  },
}
