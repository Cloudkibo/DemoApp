const config = require('../config/environment/index')

exports.serverLog = function (label, data) {
  const namespace = `DemoApp:${label}`
  const debug = require('debug')(namespace)

  if (config.env === 'development' || config.env === 'test') {
    debug(data)
    // todo use log levels like info, warn, error and debug
    // logger.info(`${namespace} - ${data}`)
  }
}

exports.clientLog = function (label, data) {
  const namespace = `DemoApp:client:${label}`
  const debug = require('debug')(namespace)

  if (config.env === 'development' || config.env === 'test') {
    debug(data)
    // todo use log levels like info, warn, error and debug
  }
}
