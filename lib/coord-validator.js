module.exports = function (lat, lng) {
  if (isNaN(lat) || isNaN(lng)) {
    return false
  } else if (typeof lat !== 'number' && typeof lat !== 'number' && lat !== +lat && lng !== +lng) {
    return false
  } else if (lat < -90 || lat > 90) {
    return false
  } else if (lng < -180 || lng > 180) {
    return false
  }
  return true
}
