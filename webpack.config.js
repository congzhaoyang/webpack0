
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
    main1: './src/script/main1.js',
    main2: './src/script/main2.js',
    main3: './src/script/main3.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name]-[chunkhash].js', //版本号，MD5值 ,js指定文件路径
    //publicPath: 'http://cdn.com/' //上线路径设置
  },

  plugins: [
    new htmlWebpackPlugin({
      filename: 'index1.html',
      template: 'index.html',
      inject: 'body', //script标签放在哪里
      title: 'index1', //指定生成页面title
      chunks: ['main', 'main1'] // 指定只引入哪个JS
      // date: new Date(),
      // minify: {
      //   removeComments: true, //删除注释
      //   collapseWhitespace: true //删除空格
      // }
    }),

    new htmlWebpackPlugin({
      filename: 'index2.html',
      template: 'index.html',
      inject: 'body', //script标签放在哪里
      title: 'index2', //指定生成页面title
      chunks: ['main', 'main2']
      // date: new Date(),
      // minify: {
      //   removeComments: true,
      //   collapseWhitespace: true
      // }
    }),

    new htmlWebpackPlugin({
      filename: 'index3.html',
      template: 'index.html',
      inject: 'body', //script标签放在哪里
      title: 'index3', //指定生成页面title
      chunks: ['main', 'main3']
      // date: new Date(),
      // minify: {
      //   removeComments: true,
      //   collapseWhitespace: true
      // }
    })
  ]
}