var cart = require('./cart')
var discount = require('./discount')
var db = require('./db')

var myCartLineItems = [
  { id: 'item-1', name: 'YDKJS', price: 200, qty: 2 }, // product item
  { id: 'item-2', name: 'EloquentJS', price: 80, qty: 1 }, // product item
];

var total = cart.total(myCartLineItems);
console.log('Total sebelum diskon', cart.format(total));

var d = db.findDiscountByCode('HAMMERCODE_10');
console.log('Total sebelum diskon', discount.applyDiscount(d, total));
