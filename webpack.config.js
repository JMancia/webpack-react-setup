const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    hot: true,
    open: true,
  },

  devtool: 'source-map',
  entry: './src/index.js',
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(gif|jpg|png|svg)$/,
        use: 'file-loader',
      },
    ],
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HTMLWebpackPlugin({
      favicon: './assets/favicon.ico',
      filename: 'index.html',
      template: './src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
}
