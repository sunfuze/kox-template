/**
 * Created by sunfuze on 11/2/16.
 */
'use strict'
const app = require('../server')

describe('Kox template', function () {
  it('request should ok', function* () {
    const response = yield chai.request(app.callback()).get('/')
    expect(response).to.have.status(200)
    expect(response.text).to.equal('hello world from KOX')
  })
})
