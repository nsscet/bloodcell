var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
import * as global from './env'

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: global.API_URL
})
