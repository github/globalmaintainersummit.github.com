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
  env: {
    fathomToken: process.env.FATHOM_TOKEN || null,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Global Maintainers Summit Event 2021',
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
