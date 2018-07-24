const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const loadHTML = new HTMLWebpackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    loadHTML
  ]
};

module.exports = config;
