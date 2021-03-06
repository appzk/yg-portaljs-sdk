const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = [{
  entry: {
    'ypsdk.debug': './src/index.js',
  },
  output: {
    path: path.join(__dirname, '../lib'),
    filename: '[name].js',
    library: 'ypsdk',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
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


},
{
  entry: {
    'ypsdk.min': './src/index.js',
  },
  mode: 'production',
  output: {
    path: path.join(__dirname, '../lib'),
    filename: '[name].js',
    library: 'ypsdk',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'yg-portaljs-sdk',
      favicon: 'favicon.ico',
    }),
  ],
  optimization: { //与entry同级
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          mangle: true,
          //删除注释
          output:{
            comments:false
          },
          //删除console 和 debugger  删除警告
          compress:{
              warnings:false,
              drop_debugger:true,
              drop_console:true
          }
        },
        sourceMap: false,
      })
    ]   
  },
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


}];