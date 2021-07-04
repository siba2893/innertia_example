const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
const path = require('path')

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)

environment.config.merge({
  resolve: {
    alias: {
      '@': path.resolve('app/javascript'),
      '@pages': path.resolve( 'app/javascript/pages'),
      '@components': path.resolve('app/javascript/components'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
})

module.exports = environment
