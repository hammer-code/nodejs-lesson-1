/**
 * @param {object} discount 
 * @param {string} discount.amount 
 * @param {string} discount.type   Possible values: percent / nominal
 * @param {number} total 
 */
function applyDiscount (discount, total) {
  if (!discount) return total;

  var validTypes = ['percent', 'nominal']
  if (!validTypes.includes(discount.type)) {
    throw new Error(`Valid type should be either one of ${validTypes.join(',')}`)
  }

  var isValidAmount = typeof discount.amount === 'number' 
  if (!isValidAmount) {
    throw new Error(`discount.amount should be type of number`)
  }

  if (discount.type === 'percent') {
    return calculatePercentDiscount(total, discount.amount)
  } else if (discount.type === 'nominal') {
    return calculateNominalDiscount(total, discount.amount)
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