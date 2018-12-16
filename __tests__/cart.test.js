var cart = require('../cart');

describe('cart module', () => {
  test('getTotalCart', () => {
    const lineItems = [
      { qty: 5, price: 5 },
      { qty: 2, price: 20 },
    ]

    expect(cart.getTotalCart(lineItems)).toBe(65)
  })

  test('formatToLocal', () => {
    expect(cart.formatToLocal(8000)).toBe('$8,000')
    expect(cart.formatToLocal(400)).toBe('$400')
  })
})