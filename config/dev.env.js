var merge = require('webpack-merge')
var commonEnv = require('./common.env')

module.exports = merge(commonEnv, {
    NODE_ENV: '"development"'
})
