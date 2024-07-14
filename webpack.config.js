const path = require('path');

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
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'public_html'),
    compress: true,
    port: 9000,
    watchFiles: ['public_html'],
  },
};
