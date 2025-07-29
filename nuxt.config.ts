// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-29',
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: 'Dariusz Kaczmarek - Portfolio',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  i18n: {
    vueI18n: '~/locales/i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/ui', '@nuxt/image', '@nuxtjs/i18n', '@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
});
