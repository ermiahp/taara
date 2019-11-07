module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title:'تعارا',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'stylesheet', href: '/css/jquery.fsscroll.css' },
      { rel: 'stylesheet', href: '/fonts/css/style.css',},
      { rel: 'stylesheet', href: 'https://cdn.rtlcss.com/bootstrap/v4.2.1/css/bootstrap.min.css' ,integrity:'sha384-vus3nQHTD+5mpDiZ4rkEPlnkcyTP+49BhJ4wJeJunw06ZAp+wzzeBPUXr42fi8If',crossorigin:'anonymous'  },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes:'180x180' },
      { rel: 'icon', type: 'image/png' , href: '/favicon-32x32.png', sizes:'32x32' },
      { rel: 'icon', type: 'image/png' , href: '/favicon-194x194.png', sizes:'194x194' },
      { rel: 'icon', type: 'image/png' , href: '/android-chrome-192x192.png', sizes:'192x192' },
      { rel: 'icon', type: 'image/png' , href: '/favicon-16x16.png', sizes:'16x16' },
      { rel: 'manifest', href: '/site.webmanifest'},
      { rel: 'mask-icon', type: 'image/png' , href: '/safari-pinned-tab.svg', color:'#5bbad5' }
    ],
      script:[
          {src:'https://code.jquery.com/jquery-3.4.0.slim.min.js', integrity:'sha384-7WBfQYubrFpye+dGHEeA3fHaTy/wpTFhxdjxqvK04e4orV3z+X4XC4qOX3qnkVC6', crossorigin:'anonymous' },
        {src: '/js/jquery.fsscroll.min.js'}

      ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/fullpage.js', mode: 'client'  },
    { src: '~/plugins/scrollup.js', mode: 'client', ssr:false  },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
