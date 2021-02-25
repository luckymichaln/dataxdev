import Prismic from 'prismic-javascript';
const PrismicConfig = require('./prismic.config');
require('dotenv').config();

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
    __dangerouslyDisableSanitizers: ['script'],
  },

  router: {
    scrollBehavior: (to, from, savedPosition) => {
      return { x: 0, y: 0 }
    }
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
  plugins: [
    { src: './plugins/vue-awesome-swiper.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/prismic',
  ],
  buildModules: [
    '@nuxtjs/dotenv'
  ],
  env: {
    baseUrl: process.env.PRODUCTION_DOMAIN
  },
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
          return res.query('')
            .then(r => r.results.map(el => {
              if (el.uid) {
                return {
                  uid: el.uid,
                  type: el.type
                }
              }
            })
              .filter(el => el)
              .map(el => el.type === 'service_page' ? `/services/${el.uid}` : `/projects/${el.uid}`))
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
