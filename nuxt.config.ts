// https://nuxt.com/docs/api/configuration/nuxt-config

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';
import * as YaMetrika from './scripts/ya_metrika';
import * as GoogleTag from './scripts/google_tag';

export default defineNuxtConfig({
  devtools: { enabled: true },
  $production: {
    app: {
      head: {
        script: [
          ...YaMetrika.scripts(),
          ...GoogleTag.scripts(),
        ],
        noscript: [
          ...YaMetrika.noscript(),
          ...GoogleTag.noscript(),
        ]
      }
    },
  },
  routeRules: {
    '/favorites': {
      ssr: false,
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-swiper',
    '@nuxtjs/device',
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
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/mixins/screens.scss" as *;'
        }
      }
    },
  }
})
