// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Nova Axmedia — Retail branding & out-of-home media in Indonesia',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'PT Nova Axmedia Branding is a specialist retail branding and OOH media company in Indonesia: outdoor signage, indoor branding, activation, and nationwide production & installation.',
        },
        { name: 'theme-color', content: '#F6F5F2' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Nova Axmedia' },
        {
          property: 'og:title',
          content: 'Nova Axmedia — Retail branding & out-of-home media in Indonesia',
        },
        {
          property: 'og:description',
          content:
            '1000+ stores branded across 30+ cities. Outdoor signage, indoor branding, activation & OOH, and in-house production with nationwide installation.',
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
