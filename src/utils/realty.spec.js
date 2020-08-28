import * as method from './realty'

import * as CONFIG from 'config'

describe('UTILS: Realty', () => {
  test('isSale: should return true for SALE businessType', () => {
    const result = method.isSale({
      pricingInfos: {
        businessType: 'SALE'
      }
    })

    expect(result).toEqual(true)
  })

  test('isSale: should return false for non-SALE businessType', () => {
    const result = method.isSale({
      pricingInfos: {
        businessType: 'ANY TYPE'
      }
    })

    expect(result).toEqual(false)
  })

  test('isSale: should return false for null businessType', () => {
    const result = method.isSale({
      pricingInfos: {
        businessType: null
      }
    })

    expect(result).toEqual(false)
  })

  test('isRental: should return true for RENTAL businessType', () => {
    const result = method.isRental({
      pricingInfos: {
        businessType: 'RENTAL'
      }
    })

    expect(result).toEqual(true)
  })

  test('isSale: should return false for non-RENTAL businessType', () => {
    const result = method.isRental({
      pricingInfos: {
        businessType: 'ANY TYPE'
      }
    })

    expect(result).toEqual(false)
  })

  test('isSale: should return false for null businessType', () => {
    const result = method.isRental({
      pricingInfos: {
        businessType: null
      }
    })

    expect(result).toEqual(false)
  })

  test('getCurrency: should return formatted currency type to BRL', () => {
    const result = method.getCurrency(100)
    expect(result).toEqual('R$100.00')
  })

  test('getCurrency: should return 0 formatted currency type to BRL if value is empty', () => {
    const result = method.getCurrency()
    expect(result).toEqual('R$0.00')
  })

  test('getPrice: should return realty price as number', () => {
    const result = method.getPrice({
      pricingInfos: {
        price: '100'
      }
    })

    expect(result).toEqual(100)
  })

  test('getCondoFee: should return realty condoFee as number', () => {
    const result = method.getCondoFee({
      pricingInfos: {
        monthlyCondoFee: 100
      }
    })

    expect(result).toEqual(100)
  })

  test('getCondoFee: should return realty condoFee as -1 if invalid', () => {
    const result = method.getCondoFee({
      pricingInfos: {
        monthlyCondoFee: NaN
      }
    })

    expect(result).toEqual(-1)
  })

  test('getM2value: should return correct value per usable area', () => {
    const result = method.getM2Value({
      pricingInfos: {
        price: 500
      },
      usableAreas: 10
    })

    expect(result).toEqual(50)
  })

  test('isValidLocation: true for valid location', () => {
    const result = method.isValidLocation({
      address: {
        geoLocation: {
          location: {
            lat: 100,
            lon: 200
          }
        }
      }
    })

    expect(result).toEqual(true)
  })

  test('isValidLocation: false for location with 0', () => {
    const result = method.isValidLocation({
      address: {
        geoLocation: {
          location: {
            lat: 0,
            lon: 0
          }
        }
      }
    })

    expect(result).toEqual(false)
  })

  test('isGroupBound: true for location within GrupoZap limits', () => {
    const result = method.isGroupBound({
      address: {
        geoLocation: {
          location: {
            lat: -23.55,
            lon: -46.67
          }
        }
      }
    })

    expect(result).toEqual(true)
  })

  test('isGroupBound: false for location out of GrupoZap limits', () => {
    const result = method.isGroupBound({
      address: {
        geoLocation: {
          location: {
            lat: 50,
            lon: 50
          }
        }
      }
    })

    expect(result).toEqual(false)
  })

  test('getMinZapSale: minimum value if realty out of bounds', () => {
    const result = method.getMinZapSale({
      address: {
        geoLocation: {
          location: {
            lat: 50,
            lon: 50
          }
        }
      }
    })

    expect(result).toEqual(CONFIG.ZAPIMOVEIS.minSale)
  })

  test('getMinZapSale: 10 percent of minimum value if realty within bounds', () => {
    const result = method.getMinZapSale({
      address: {
        geoLocation: {
          location: {
            lat: -23.55,
            lon: -46.67
          }
        }
      }
    })

    expect(result).toEqual(CONFIG.ZAPIMOVEIS.minSale - (CONFIG.ZAPIMOVEIS.minSale/100 * 10))
  })

  test('getMaxVivaRent: minimum value if realty out of bounds', () => {
    const result = method.getMaxVivaRent({
      address: {
        geoLocation: {
          location: {
            lat: 50,
            lon: 50
          }
        }
      },
      pricingInfos: {
        price: 300
      }
    })

    expect(result).toEqual(90)
  })

  test('getMaxVivaRent: 10 percent of minimum value if realty within bounds', () => {
    const result = method.getMaxVivaRent({
      address: {
        geoLocation: {
          location: {
            lat: -23.55,
            lon: -46.67
          }
        }
      },
      pricingInfos: {
        price: 300
      }
    })

    expect(result).toEqual(135)
  })
})