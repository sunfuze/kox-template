'use strict'
global.Promise = require('bluebird')
const http = require('http')
const config = require('sweet-config')

const app = require('./server/index')

const server = http.createServer(app.callback())

server.listen(config.get('application.port'))

server.on('listening', function() {
  console.log('server is listening to', config.get('application.port'))
})
