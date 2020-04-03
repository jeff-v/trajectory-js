const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: path.join(__dirname, 'javascript', 'index.js'),
  output: {
    filename: 'trajectory.js',
    publicPath: '/assets/',
    name: 'trajectory-js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: true,
        },
      },
      {
        test: /\.ts?$/,
        loader: 'assemblyscript-typescript-loader',
        include: /assemblyscript/,
        options: {
          limit: 1000,
          name: `static/assembly/[name].[hash:8].wasm`,
        },
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.css'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './canvas/index.html',
    }),
  ],
};
