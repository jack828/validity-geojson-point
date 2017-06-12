module.exports = function (lat, lng) {
  if (!lat || !lng) {
    return false
  } else if (lat < -90 || lat > 90) {
    return false
  } else if (lng < -180 || lng > 90) {
    return false
  }
  return true
}
