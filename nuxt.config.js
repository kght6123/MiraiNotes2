const webpack = require('webpack')
// const firebaseConfig = require('./firebase.app.json')

export default {
  mode: 'universal',
  /*
   ** Custom Loading
   ** https://ja.nuxtjs.org/api/configuration-loading
   */
  loading: '~/components/loading.vue',
  // loadingIndicator: {
  //   name: 'nuxt',
  //   color: '#3B8070',
  //   background: 'white'
  // },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s - MiraiNotes',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width,maximum-scale=1.0,minimum-scale=0.5,user-scalable=yes,initial-scale=1.0,shrink-to-fit=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || 'Mirai Note Homepage.'
      },
      { name: 'author', content: 'kght6123' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'MiraiNotes' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://example.com' },
      { hid: 'og:title', property: 'og:title', content: 'MiraiNotes' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://example.com/img/ogp/common.jpg'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    'codemirror/lib/codemirror.css',
    'tui-editor/dist/tui-editor.css',
    'tui-editor/dist/tui-editor-contents.css',
    '@mdi/font/css/materialdesignicons.css',
    'open-iconic/font/css/open-iconic-bootstrap.css',
    '~/assets/css/halocontext/jquery.halocontext.css',
    '~/assets/css/sidebar/bootstrap-sidebar.css',
    '~/assets/scss/custom.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // {
    //   src: '~/plugins/localStorage.js',
    //   ssr: false
    // },
    { src: '~/plugins/fontawesome.js', ssr: false },
    { src: '~/plugins/validate.js', ssr: false },
    { src: '~/plugins/bootstrap.js', ssr: false },
    { src: '~/plugins/app.js', ssr: false }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/localforage-module
    '@nuxtjs/localforage' // ,
    // [
    //   'nuxt-fire',
    //   {
    //     config: {
    //       development: firebaseConfig,
    //       production: firebaseConfig
    //     },
    //     useOnly: ['auth', 'firestore'], // ,'functions','storage','realtimeDb', 'messaging', 'performance'
    //     customEnv: false
    //   }
    // ]
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },
  styleResources: {
    sass: ['~/assets/scss/*.scss']
  },
  /*
   ** PWA manifest
   */
  manifest: {
    name: 'mirai-notes2',
    lang: 'ja'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /**
     * add external plugins
     */
    vendor: ['jquery', 'bootstrap', 'popper.js'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.devtool = 'inline-cheap-module-source-map'
      }
    }
  },
  // settings deploy firebase
  // publicPath: '/',
  extractCSS: true,
  buildDir: './functions/nuxt'
}
