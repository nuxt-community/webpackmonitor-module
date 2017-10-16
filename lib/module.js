const { resolve } = require('path')
const WebpackMonitor = require('@pi0/webpack-monitor')

module.exports = async function (moduleOptions) {
  // Use only for production builds
  if (this.options.dev) {
    return
  }

  // Apply defaults
  // https://github.com/webpackmonitor/webpackmonitor
  const options = Object.assign({
    capture: true,
    target: resolve(this.options.rootDir, '.monitor/stats.json'),
    launch: process.argv.indexOf('--webpackmonitor') !== -1,
    port: 8085
  }, this.options.WebpackMonitor, moduleOptions)

  this.extendBuild((config, { isServer }) => {
    // Ignore SSR bundle
    if (isServer) {
      return
    }
    // Add WebpackMonitor plugin
    config.plugins.push(new WebpackMonitor(options))
  })
}
