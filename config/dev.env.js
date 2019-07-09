var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
    // import API_URL from './env'
    // var API_URL = require('../env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_URL: "'http://localhost:3000/api'"
})