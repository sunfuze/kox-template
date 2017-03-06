'use strict'
const Joi = require('joi')

module.exports = [
  {
    path: '/',
    method: 'get',
    id: 'hello',
    tags: ['example'],
    summary: 'example api',
    handler: 'example.show',
    produces: ['text/html'],
    responses: {
      200: {
        description: 'response success',
        schema: Joi.string().description('返回')
      }
    }
  }
]
