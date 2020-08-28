import {
  isSale,
  isRental,
  getPrice,
  getM2Value,
  getMinZapSale
} from 'utils/realty'

import * as CONFIG from 'config'

export const zap = {
  sale: realty => !(isSale(realty) && (getPrice(realty) < getMinZapSale(realty))),
  rental: realty => !(isRental(realty) && (getPrice(realty) < CONFIG.ZAPIMOVEIS.minRental)),
  minM2Value: realty => !(
    (isSale(realty) && realty.usableAreas > 0) &&
    (getM2Value(realty) <= CONFIG.ZAPIMOVEIS.minM2Value)
  )
}