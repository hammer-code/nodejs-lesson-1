/**
 * Menghitung jumlah total harga cart
 * @param  {array}   lineItems Item-item yang ada di keranjang
 * @return {number}  Total harga dari cart 
 */
function total (lineItems) {
  return lineItems.reduce(function (total, lineItem) {
    return total + (lineItem.qty * lineItem.price);
  }, 0);
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

module.exports = {
  total: total,
  format: format,
  removeItem: removeItem,
}