const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  mode: 'development',
  entry: './public_html/js/jsPractiice',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public_html/js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public_html/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.GITHUB_TOKEN': JSON.stringify(process.env.GITHUB_TOKEN),
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser', // Добавляем полифил для process
    }),
  ],
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify"),
      "buffer": require.resolve("buffer"),
      "process": require.resolve("process/browser"),
      "vm": require.resolve("vm-browserify"),
      "stream": require.resolve("stream-browserify"),
    }
  },
  devServer: {
    static: path.resolve(__dirname, 'public_html'),
    compress: true,
    port: 9000,
    watchFiles: ['public_html'],
    open: true,
  },
};
