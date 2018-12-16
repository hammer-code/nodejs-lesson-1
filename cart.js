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
}