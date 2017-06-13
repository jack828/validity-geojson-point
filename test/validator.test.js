var assert = require('assert')
  , validator = require('../validator')
  , fixtures = require('./fixtures')

describe('GeoJSON validator', function () {
  it('should error with unknown', function (done) {
    validator('location', 'Location', fixtures.unknown, function (err, errors) {
      assert.equal(errors, 'Location must be a valid GeoJSON Point')
      done()
    })
  })

  it('should validate valid', function (done) {
    validator('location', 'Location', fixtures.valid, function (err, errors) {
      assert.equal(errors, null)
      done()
    })
  })

  it('should error on missing types', function (done) {
    validator('location', 'Location', fixtures.invalidNoType, function (err, errors) {
      assert.equal(errors, 'Location must be a valid GeoJSON Point')
      done()
    })
  })

  it('should error on missing coordinates', function (done) {
    validator('location', 'Location', fixtures.invalidMissingCoords, function (err, errors) {
      assert.equal(errors, 'Location must be a valid GeoJSON Point')
      done()
    })
  })

  it('should error on unknown types', function (done) {
    validator('location', 'Location', fixtures.invalidWrongType, function (err, errors) {
      assert.equal(errors, 'Location must be a valid GeoJSON Point')
      done()
    })
  })

  it('should error on invalid, out of bounds', function (done) {
    validator('location', 'Location', fixtures.invalidOob, function (err, errors) {
      assert.equal(errors, 'Location must be a valid GeoJSON Point')
      done()
    })
  })

  it('should error when passed objects as coordinates', function (done) {
    validator('location', 'Location', fixtures.invalidObjects, function (err, errors) {
      assert.equal(errors, 'Location must be a valid GeoJSON Point')
      done()
    })
  })
})
