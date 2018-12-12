const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin(),
    new WebpackManifestPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.woff2$/,
        use: 'file-loader'
      }
    ]
  }
}
