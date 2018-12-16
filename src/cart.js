/**
 * Menghitung jumlah total harga cart
 * @param  {array}   lineItems Item-item yang ada di keranjang
 * @param  {object?} discount 
 * @return {number}  Total harga dari cart 
 */
function total (lineItems, discount) {
  var sum =  lineItems.reduce(function (total, lineItem) {
    return total + (lineItem.qty * lineItem.price);
  }, 0);

  return applyDiscount(sum, discount);
}

/**
 * Membuang line item
 * @param {string} lineItemId
 * @param {object[]} lineItems
 */
function removeItem (lineItemId, lineItems) {
  return lineItems.filter(function (lineItem) {
    return lineItem.id !== lineItemId
  });
}

/**
 * Format ke bentuk lbh bagus dibaca
 * @param  {number} total 
 * @return {string}
 */
function format (total) {
  return '$' + total.toLocaleString()
}

/**
 * @param  {number} total 
 * @param  {object} discount 
 * @param  {string} discount.amount 
 * @param  {string} discount.type   Possible values: percent / nominal
 * @return {number}
 */
function applyDiscount (total, discount) {
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
    return discountByPercent(total, discount.amount)
  } else if (discount.type === 'nominal') {
    return discountByNominal(total, discount.amount)
  }
}

function discountByPercent (total, amount) {
  return total - (total * amount / 100)
}

function discountByNominal (total, amount) {
  return total - amount 
}

module.exports = {
  total: total,
  format: format,
  removeItem: removeItem,
  applyDiscount: applyDiscount,
  discountByPercent: discountByPercent,
  discountByNominal: discountByNominal,
}