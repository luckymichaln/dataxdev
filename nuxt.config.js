import pkg from './package';
const PrismicConfig = require('./prismic.config');

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'href="https://fonts.googleapis.com/css?family=Lato:700,900|Roboto&display=swap' }
    ],
    script: [
      // { innerHTML: '{ window.prismic = { endpoint: "' + PrismicConfig.apiEndpoint + '"} }' },
      // { src: '//static.cdn.prismic.io/prismic.min.js' }
    ],
    __dangerouslyDisableSanitizers: ['script'],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#F05252' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/main.scss',
  ],

  prismic: {
    endpoint: 'https://data-x.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },

  /*
  ** Plugins to load before mounting the App
  */
  // plugins: [
  //   '~/plugins/link-resolver.js',
  //   '~/plugins/html-serializer.js',
  //   '~/plugins/prismic-vue.js',
  // ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/prismic',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  }
}
