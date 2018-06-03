const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const defaultConfig = {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          // fallback to style-loader in development
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
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
