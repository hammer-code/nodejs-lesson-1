var cart = require('./cart')

var myCartLineItems = [
  { name: 'YDKJS', price: 200, qty: 2 }, // product item
  { name: 'EloquentJS', price: 80, qty: 1 }, // product item
];

var total = cart.getTotalCart(myCartLineItems);
console.log(cart.formatToLocal(total));
console.log(cart.isGettingDiscount(total));
