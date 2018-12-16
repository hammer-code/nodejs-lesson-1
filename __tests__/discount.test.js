var discount = require('../discount')

describe('discount module', () => {
  test('calculatePercentDiscount', () => {
    var total = 2000
    var discountAmout = 10 // percent

    var result = discount.calculatePercentDiscount(total, discountAmout)

    expect(result).toBe(1800)
  })

  test('calculateNominalDiscount', () => {
    var total = 2000
    var discountAmout = 500 // nominal

    var result = discount.calculateNominalDiscount(total, discountAmout)

    expect(result).toBe(1500)
  })
}) 