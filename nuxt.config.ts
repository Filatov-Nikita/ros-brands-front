// https://nuxt.com/docs/api/configuration/nuxt-config

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/favorites': {
      ssr: false,
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-swiper',
  ],
  css: [
    '~/assets/css/fonts.scss',
    '~/assets/css/app.scss',
    'animate.css',
  ],
  plugins: [
    '~/plugins/icons-sprite.ts',
    '~/directives/click-outside.ts',
    '~/plugins/pretty-amount.ts',
    '~/plugins/format-date.ts',
  ],
  tailwindcss: {
    cssPath: false,
  },
  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [ path.resolve(process.cwd(), 'assets/icons') ],
        symbolId: 'icon-[dir]-[name]',
        inject: 'body-last',
        customDomId: '__svg__icons__dom__',
      }),
    ],
  }
})
