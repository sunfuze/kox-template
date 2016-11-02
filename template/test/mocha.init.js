'use strict'
global.Promise = require('bluebird')
global.chai = require('chai')
chai.config.includeStack = true
chai.use(require('chai-http'))

global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.expect = chai.expect;
global.assert = chai.assert;
