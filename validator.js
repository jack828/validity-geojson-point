var pointValidator = require('./lib/point-validator')

module.exports = function (propertyName, errorName, object, callback) {
  var value = object[propertyName]
    , errorMessage = errorName + ' must be a valid GeoJSON Point'

  if (!value) {
    return callback(null, errorMessage)
  }
  callback(null, pointValidator(value) ? null : errorMessage)
}
