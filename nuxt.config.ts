// https://nuxt.com/docs/api/configuration/nuxt-config

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  css: [
    '~/assets/css/fonts.scss',
    '~/assets/css/app.scss',
    'animate.css',
  ],
  plugins: [
    '~/plugins/icons-sprite.ts',
    '~/directives/click-outside.ts',
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
