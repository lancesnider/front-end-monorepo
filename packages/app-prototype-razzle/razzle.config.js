module.exports = {
  modify: (config, { target, dev }, webpack) => {
    const EnvironmentWebpackPlugin = new webpack.EnvironmentPlugin({
      DEBUG: false,
      NODE_ENV: 'development',
      PANOPTES_ENV: 'staging'
    })

    config.plugins.push(EnvironmentWebpackPlugin)
    return config;
  }
}
