'use strict'
// koa related
const kox = require('kox')
const etag = require('koa-etag')
const compress = require('koa-compress')

const config = require('sweet-config')

const app = kox()
Object.assign(app, config.get('application'))
app.use(etag())
app.use(compress())

app.swagger = config.get('swagger', {})
app.loadServer()
module.exports = app
