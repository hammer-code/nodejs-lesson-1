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
  });

  if (!foundDiscount) return total;

  if (foundDiscount.type === 'percent') {
    return calculatePercentDiscount(total, foundDiscount.amount)
  } else if (foundDiscount.type === 'nominal') {
    return calculateNominalDiscount(total, foundDiscount.amount)
  }
}

function calculatePercentDiscount (total, amount) {
  return total - (total * amount / 100)
}

function calculateNominalDiscount (total, amount) {
  return total - amount 
}

module.exports = {
  applyDiscount,
  calculatePercentDiscount,
  calculateNominalDiscount
}