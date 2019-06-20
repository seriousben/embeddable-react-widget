const path = require('path')
const custom = require('../webpack.config.js')

module.exports = async ({ config, mode }) => {

  return { ...config, module: { ...config.module, rules: custom[0].module.rules } };
}