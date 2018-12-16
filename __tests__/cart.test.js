var cart = require('../cart');

describe('cart module', () => {
  test('total', () => {
    var lineItems = [
      { id: 'item-1', qty: 5, price: 5 },
      { id: 'item-2', qty: 2, price: 20 },
    ]

    expect(cart.total(lineItems)).toBe(65)
  })

  test('format', () => {
    expect(cart.format(8000)).toBe('$8,000')
    expect(cart.format(400)).toBe('$400')
  })
})