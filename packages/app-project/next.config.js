const path = require('path')

module.exports = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    // Ensure only one copy of styled-components is loaded - https://www.styled-components.com/docs/faqs#duplicated-module-in-node_modules
    config.resolve = {
      modules: [path.resolve('./', 'node_modules'), 'node_modules'],
    }
    return config
  }
}
