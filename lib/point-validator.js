var coordValidator = require('./coord-validator')

module.exports = function (value) {
  var coords = value.coordinates
    , type = value.type
    , lng
    , lat

  if (!coords || !coords.length || coords.length !== 2) {
    return false
  }

  lng = coords[0]
  lat = coords[1]
  if (!coordValidator(lat, lng)) {
    return false
  }

  if (!type || type !== 'Point') {
    return false
  }
  return true
}
