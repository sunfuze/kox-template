/**
 * Created by sunfuze on 17/11/2016.
 */
'use strict'
const requireDir = require('require-dir')
const helper = module.exports = {}

const deps = requireDir('../server/deps')
helper.genContext = function () {
  const context = ['request', 'session', 'state', 'params', 'query']
  .reduce((context, field) => {
    context[field] = {}
  }, {})
  Object.assign(context, deps)
  return context
}
