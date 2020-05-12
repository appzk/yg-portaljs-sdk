const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  entry:{
    app:path.join(__dirname,'../example','app.js')
  },
  plugins: [ //数组：放着所有的webpack插件
    // 配置
     new HtmlWebpackPlugin({
       template: './example/index.html',
     })
  ],
 
  devServer: {
    // 启动的服务端口
    port: 8000,
    contentBase: './example/index.html',
    overlay: {
      errors: true,
    },
    //热加载
    hot: true,
    clientLogLevel: 'silent',// 'info': 'silent' | 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'none' | 'warning'
    after: function(app, server, compiler) {
      // do fancy stuff
      console.log('编译成功');
    },
    
    stats: "errors-only",
    progress: true,
  }
});