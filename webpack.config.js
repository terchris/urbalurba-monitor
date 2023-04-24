// webpack.config.js
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map', 
  entry: './src/frontend/scriptfrontend.ts',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'script.js', // Update this line to change the output location
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/frontend/index.html', to: 'index.html' },
      ],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
