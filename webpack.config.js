const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const increaseSpecificity = require('postcss-increase-specificity');
const JavaScriptObfuscator = require('webpack-obfuscator');

const devMode = process.env.NODE_ENV !== 'production';

const defaultConfig = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist/']),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    devMode ? null : new JavaScriptObfuscator(),
  ].filter(i => i),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          // fallback to style-loader in development
          // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          'cssimportant-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                increaseSpecificity({
                  stackableRoot: '.cleanslate',
                  repeat: 1,
                }),
              ],
              sourceMap: devMode,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

};

module.exports = [{
  ...defaultConfig,
  entry: './src/outputs/embeddable-widget.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'widget.js',
    library: 'EmbeddableWidget',
    libraryExport: 'default',
    libraryTarget: 'window',
  },
}, {
  ...defaultConfig,
  entry: './src/outputs/bookmarklet.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bookmarklet.js',
  },
}];
