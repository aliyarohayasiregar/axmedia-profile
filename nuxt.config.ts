// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'Axmedia — Integrated media & communications partner',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Axmedia adalah mitra media dan komunikasi terintegrasi di Indonesia: strategi, kreatif, performa digital, dan brand experience.',
        },
        { name: 'theme-color', content: '#F6F5F2' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Axmedia' },
        {
          property: 'og:title',
          content: 'Axmedia — Integrated media & communications partner',
        },
        {
          property: 'og:description',
          content:
            'Mitra media dan komunikasi terintegrasi di Indonesia: strategi, kreatif, performa digital, dan brand experience.',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500&display=swap',
        },
      ],
    },
  },
})
