const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'ypsdk': './src/index.js',
  },
  // {
  //   app: ["@babel/polyfill",path.resolve(__dirname,'../src/index.js')] //'./src/index.js'
  // },
  output: {
    path: path.join(__dirname, '../lib'),
    filename: './ypsdk.min.js',
    library: 'ypsdk',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
    // filename: 'ypsdk.js', //文件名
    // publicPath: '../lib/', //发布路径
    // library: 'ypsdk', //类库名称
    // libraryTarget: 'umd', //类库加载方式
    // umdNamedDefine: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'yg-portaljs-sdk',
      favicon: 'favicon.ico',
    })
  ],
  module:{
    rules:[
      {
        test:/\.js$/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        },
        exclude:/node_modules/
      },
   ]
  }


};