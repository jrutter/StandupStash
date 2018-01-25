'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  MLABKEY: '"lAsBHd1474tcG5UNO_KlBFCb5nUWEtt-"',
  AUTH_REDIRECT : '"http://localhost:8080/callback"',
  AUTH_CLIENT: '"0ccWtJI4unjRAEgULYPIXS-lo5twGlYh"'
})
