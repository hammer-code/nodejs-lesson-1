var DISCOUNT_CODES = [
  { code: 'HAMMERCODE_10', amount: 10, type: 'percent' },
  { code: 'JS_20', amount: 20, type: 'nominal' },
]

/**
 * @param {string} dicountCode 
 * @param {number} total 
 */
function applyDiscount (dicountCode, total) {
  var foundDiscount = DISCOUNT_CODES.find(function (discount) {
    return discount.code === dicountCode
  })

  if (!foundDiscount) return total;

  if (foundDiscount.type === 'percent') {
    return total - (total * foundDiscount.amount / 100)
  } else if (foundDiscount.type === 'nominal') {
    return total - foundDiscount.amount
  }
}

module.exports = {
  applyDiscount
}