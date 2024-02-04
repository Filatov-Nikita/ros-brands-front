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
    colors: {
      'black': '#1A1A1A',
      'white': '#ffffff',
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
