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

  test('removeItem', () => {
    var lineItems = [
      { id: 'item-1', qty: 5, price: 5 },
      { id: 'item-2', qty: 2, price: 20 },
      { id: 'item-3', qty: 1, price: 20 },
    ]

    var newLineItems = cart.removeItem('item-2', lineItems)

    expect(newLineItems.length).toBe(2)
    expect(cart.total(newLineItems)).toBe(45)
  })

  test('total with discount', () => {
    var lineItems = [
      { id: 'item-1', qty: 5, price: 10 },
      { id: 'item-2', qty: 2, price: 25 },
    ]

    expect(cart.total(lineItems)).toBe(100)

    var discountA = {
      type: 'percent',
      amount: 10
    }

    expect(cart.total(lineItems, discountA)).toBe(90)

    var discountB = {
      type: 'nominal',
      amount: 30
    }

    expect(cart.total(lineItems, discountB)).toBe(70)    
  })

  test('discountByPercent', () => {
    var total = 2000
    var discountAmout = 10 // percent

    var result = cart.discountByPercent(total, discountAmout)

    expect(result).toBe(1800)
  })

  test('discountByNominal', () => {
    var total = 2000
    var discountAmout = 500 // nominal

    var result = cart.discountByNominal(total, discountAmout)

    expect(result).toBe(1500)
  })

  describe('applyDiscount', () => {
    it('should be apply correct discount', () => {
      var d1 =  {
        amount: 15,
        type: 'percent'
      }
  
      expect(cart.applyDiscount(1000, d1)).toBe(850)
  
      var d2 =  {
        amount: 300,
        type: 'nominal'
      }
  
      expect(cart.applyDiscount(1000, d2)).toBe(700)    
      expect(cart.applyDiscount(1000, null)).toBe(1000)
      expect(cart.applyDiscount(1000, undefined)).toBe(1000)
    })

    it('should throw error when invalid value of discount.type provided', () => {
      expect(() => {
        discount.applyDiscount(1000, { amount: 20, type: 'invalid-type' })
      }).toThrow()
    })

    it('should throw error when invalid type of discount.amount provided', () => {
      expect(function () {
        discount.applyDiscount(1000, { amount: null, type: 'percent' })
      }).toThrow()

      expect(function () {
        discount.applyDiscount(1000, { amount: '20', type: 'percent' })
      }).toThrow()
    })
  })
})