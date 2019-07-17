var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
    // import API_URL from './env'
    // var API_URL = require('../env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_URL: "'https://titanium-visage.glitch.me/api'",
})