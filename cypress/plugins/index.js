/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const { startDevServer } = require('@cypress/webpack-dev-server')
const { getWebpackConfig } = require('nuxt')

/**
 * @type Cypress.PluginConfig
 */
module.exports = (on, config) => {
  on('dev-server:start', async (options) => {
    const webpackConfig = await getWebpackConfig('client', {
      for: 'dev',
    })

    // cleanup the webpack config from everything we do not need for testing components
    delete webpackConfig.output
    webpackConfig.plugins = webpackConfig.plugins.filter(
      (a) => a.constructor.name !== 'HtmlWebpackPlugin'
    )

    return startDevServer({
      options,
      webpackConfig,
    })
  })

  return config
}
