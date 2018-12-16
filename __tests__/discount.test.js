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

  describe('applyDiscount', () => {
    it('should be apply correct discount', () => {
      var d1 =  {
        amount: 15,
        type: 'percent'
      }
  
      expect(discount.applyDiscount(d1, 1000)).toBe(850)
  
      var d2 =  {
        amount: 300,
        type: 'nominal'
      }
  
      expect(discount.applyDiscount(d2, 1000)).toBe(700)    
      expect(discount.applyDiscount(null, 1000)).toBe(1000)
      expect(discount.applyDiscount(undefined, 1000)).toBe(1000)
    })

    it('should throw error when invalid value of discount.type provided', () => {
      expect(() => {
        discount.applyDiscount({ amount: 20, type: 'invalid-type' }, 1000)
      }).toThrow()
    })

    it('should throw error when invalid type of discount.amount provided', () => {
      expect(() => {
        discount.applyDiscount({ amount: null, type: 'percent' }, 1000)
      }).toThrow()

      expect(() => {
        discount.applyDiscount({ amount: '20', type: 'percent' }, 1000)
      }).toThrow()
    })
  })
}) 