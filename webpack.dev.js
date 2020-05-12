const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  entry:{
    app:path.join(__dirname,'src','app.js')
  },
  plugins: [ //数组：放着所有的webpack插件
    // 配置
     new HtmlWebpackPlugin({
       template: './src/index.html',
      //  filename: 'index1.html'
     })
  ],
 
  devServer: {
    // 启动的服务端口
    port: 8000,
    contentBase: './src',
    // 通过localhost或IP进行访问
    host: '0.0.0.0',
    // 若编译过程中有错误，显示到网页上,便于定位错误
    overlay: {
      errors: true,
    },
      //热加载
      hot: true
  }
});