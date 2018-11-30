const path = require('path')
const webpack = require('webpack')

const EnvironmentWebpackPlugin = new webpack.EnvironmentPlugin({
  DEBUG: false,
  NODE_ENV: 'production',
  PANOPTES_ENV: 'production'
})

module.exports = {
  entry: './src/index.node.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  output: {
    path: path.resolve('dist'),
    filename: 'main.node.js',
    library: '@zooniverse/classifier',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    EnvironmentWebpackPlugin,
  ],
  resolve: {
    modules: [
      path.resolve(__dirname),
      'node_modules'
    ]
  }
}
