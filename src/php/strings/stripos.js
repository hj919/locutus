module.exports = function stripos (f_haystack, f_needle, f_offset) {
  //  discuss at: http://locutusjs.io/php/stripos/
  // original by: Martijn Wieringa
  //  revised by: Onno Marsman (https://twitter.com/onnomarsman)
  //   example 1: stripos('ABC', 'a')
  //   returns 1: 0

  var haystack = (f_haystack + '')
    .toLowerCase()
  var needle = (f_needle + '')
    .toLowerCase()
  var index = 0

  if ((index = haystack.indexOf(needle, f_offset)) !== -1) {
    return index
  }
  return false
}
