const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/api/v3/resource/io.pipeforce.hellovue/public/'
    : '/'
})
