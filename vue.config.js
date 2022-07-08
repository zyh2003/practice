const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 是否在开发环境下每次保存代码时都启用 eslint验证
  lintOnSave: false,
  // 开发以及部署时的URL
  publicPath: './',
  // 跨域
  devServer: {
    // 是否自动打开浏览器
    open: false,
    // 端口号
    port: 9999,
    // 
    https: false,
    // 主域名
    host: 'localhost',
    // 代理
    proxy: {
      // 代理名称
      [process.env.VUE_APP_BASE_API]: {
        // 公共请求地址
        target: process.env.VUE_APP_SERVICE_URL,
         //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
        changeOrigin: true,
        // 重写路径
        pathRewrite: {
          // 如果接口本身没有/api需要通过pathRewrite来重写了地址,这里把/api转成‘ ’
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
})
