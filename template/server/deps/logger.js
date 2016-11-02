/**
 * Created by sunfuze on 11/1/16.
 */
'use strict'
const { join } = require('path')
const fs = require('fs-extra')
const winston = require('winston')
const koaLogger = require('winston-koa-logger')


const logDir = join(__dirname, '../..', 'logs')
fs.mkdirsSync(logDir)

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ name: 'info-log', filename: join(logDir, 'account.log'), level: 'info' }),
    new (winston.transports.File)({ name: 'error-log', filename: join(logDir, 'account-error.log'), level: 'error' })
  ]
})

logger.middleware = function () {
  return koaLogger(logger)
}

module.exports = logger
