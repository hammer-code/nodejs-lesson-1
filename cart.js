var MINIMUM_TOTAL_FOR_GETTING_DISCOUNT = 80;

/**
 * Menghitung jumlah total harga cart
 * @param  {array}   lineItems Item-item yang ada di keranjang
 * @return {number}  Total harga dari cart 
 */
function getTotalCart (lineItems) {
  return lineItems.reduce(function (total, lineItem) {
    return total + (lineItem.qty * lineItem.price);
  }, 0);
}

/**
 * Format ke bentuk lbh bagus dibaca
 * @param  {number} total 
 * @return {string}
 */
function formatToLocal (total) {
  return '$ ' + total.toLocaleString()
}

/**
 * @param  {number} total 
 * @return {boolean}
 */
function isGettingDiscount (total) {
  return total > MINIMUM_TOTAL_FOR_GETTING_DISCOUNT
}

module.exports = {
  getTotalCart: getTotalCart,
  formatToLocal: formatToLocal,
  isGettingDiscount: isGettingDiscount
}