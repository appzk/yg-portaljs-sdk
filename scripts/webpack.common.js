const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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


}];