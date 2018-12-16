var DISCOUNT_CODES = [
  { code: 'HAMMERCODE10', amount: 10, type: 'percent' },
  { code: 'JS20', amount: 20, type: 'nominal' },
]

function findDiscountByCode (dicountCode) {
  return DISCOUNT_CODES.find(function (discount) {
    return discount.code === dicountCode;
  });
}

module.exports = {
  findDiscountByCode: findDiscountByCode
}
