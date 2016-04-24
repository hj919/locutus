module.exports = function strtoupper (str) {
  //  discuss at: http://locutusjs.io/php/strtoupper/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Onno Marsman (https://twitter.com/onnomarsman)
  //   example 1: strtoupper('Kevin van Zonneveld')
  //   returns 1: 'KEVIN VAN ZONNEVELD'

  return (str + '')
    .toUpperCase()
}
