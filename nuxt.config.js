export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  router: {
    base: process.env.BASE_PATH || '/',
  },
  generate: {
    fallback: '404.html',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Open Source Maintainer Summit - June 7-9 2021',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
      { name: 'theme-color', content: '#040e21' },
      {
        hid: 'description',
        name: 'description',
        content:
          'A virtual gathering for the maintainers that make open source possible.',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@github',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@github',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content:
          'A virtual gathering for the maintainers that make open source possible.',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'A virtual gathering for the maintainers that make open source possible.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://globalmaintainersummit.github.com/social-card.png',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content:
          'A virtual gathering for the maintainers that make open source possible.',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'A virtual gathering for the maintainers that make open source possible.',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'A virtual gathering for the maintainers that make open source possible.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://globalmaintainersummit.github.com/social-card.png',
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '1200',
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '630',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://globalmaintainersummit.github.com/social-card.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content:
          'A virtual gathering for the maintainers that make open source possible.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
      './assets/scss/variables/main.scss',
      './assets/scss/mixins/main.scss',
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/svg',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: { sourceMap: false },
    },
  },
}
