const http = require('http')
const logger = require('./../components/logger')
const TAG = 'config/setup.js'

module.exports = function (app, config) {
  const server = http.createServer(app)

  server.listen(config.port, () => {
    logger.serverLog(TAG, `CloudKibo Demo App STARTED on ${
      config.port} in ${config.env} mode`)
  })

  if (config.env === 'production') {
    console.log('CloudKibo Demo App STARTED on %s in %s mode', config.port, config.env)
  }
}
