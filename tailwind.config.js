/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: [
    './store/**/*.ts',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app-modules/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      zIndex: {
        '9000': '9000'
      }
    },
    colors: {
      'black': '#1A1A1A',
      'white': '#ffffff',
      'error': '#F13F36',
      'warning': '#FEBF22',
      'success': '#4FBA78',
    },
    fontFamily: {
      'manrope': ['Manrope', 'sans-serif'],
    },
    fontSize: {
      'base': ['16px', '24px'],
      'xl': ['24px', '32px'],
      '14': '14px',
      '18': '18px',
      '20': '20px',
    }
  },
}
