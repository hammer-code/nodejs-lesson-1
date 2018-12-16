var cart = require('./src/cart')
var db = require('./src/db')

var myCartLineItems = [
  { id: 'item-1', name: 'YDKJS', price: 200, qty: 2 }, // product item
  { id: 'item-2', name: 'EloquentJS', price: 80, qty: 1 }, // product item
];

var totalA = cart.total(myCartLineItems);
console.log('Total sebelum diskon', cart.format(totalA));

var d = db.findDiscountByCode('HAMMERCODE10');
var totalB = cart.total(myCartLineItems, d)
console.log('Total setelah diskon', cart.format(totalB));
