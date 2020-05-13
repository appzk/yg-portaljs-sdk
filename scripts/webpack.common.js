const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname,"../src/index.js"),
  // {
  //   app: ["@babel/polyfill",path.resolve(__dirname,'../src/index.js')] //'./src/index.js'
  // },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../lib'),
    // export to AMD, CommonJS, or window
    libraryTarget: 'umd',
    // the name exported to window
    library: 'yp',
    auxiliaryComment: {
      root: "Root yg-portaljs-sdk",
      commonjs: "CommonJS  yg-portaljs-sdk",
      commonjs2: "CommonJS2  yg-portaljs-sdk",
      amd: "AMD  yg-portaljs-sdk"
    }    
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