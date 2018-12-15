var cart = require('./cart')
var discount = require('./discount')

var myCartLineItems = [
  { name: 'YDKJS', price: 200, qty: 2 }, // product item
  { name: 'EloquentJS', price: 80, qty: 1 }, // product item
];

var total = cart.getTotalCart(myCartLineItems);
console.log('Total sebelum diskon', cart.formatToLocal(total));
console.log('Total sebelum diskon', discount.applyDiscount('JS_20', total));

