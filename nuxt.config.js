import pkg from './package';
import Prismic from 'prismic-javascript';
const PrismicConfig = require('./prismic.config');

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  assetsSubDirectory: '/static',
  assetsPublicPath: '/',
  head: {
    title: 'Data X Dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Let's create something together! You have an idea. We make it happen. Web and mobile app development for your business." }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'href="https://fonts.googleapis.com/css?family=Lato:500,700,900|Roboto&display=swap' }
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
  middleware: 'noroute',
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  generate: {
    async routes() {
      try {
        const res = await Prismic.getApi(PrismicConfig.apiEndpoint, { accessToken: PrismicConfig.token })
        if (res) {
          return res.query('').then(r => r.results.map(el => el.uid).filter(el => el).map(el => `/services/${el}`))
        }
      } catch (err) {
        return err
      }
    }
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
