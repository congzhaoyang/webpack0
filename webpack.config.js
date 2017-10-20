
/**
 * webpack.config.js
 * @author: congzhaoyang
 * webpack配置
 */

var path = require("path")
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  //entry: ['./src/script/main.js', './src/script/main1.js'],
  //context: 执行上下文

  entry: {
    main: './src/script/main.js',
    main1: './src/script/main1.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name]-[chunkhash].js', //版本号，MD5值 ,js指定文件路径
    publicPath: 'http://cdn.com/' //上线路径设置
  },

  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: false, //script标签放在哪里
      title: 'webpack is headsome', //指定生成页面title
      date: new Date(),
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ]
}