import {
  isSale,
  isRental,
  getPrice,
  getCondoFee,
  getMaxVivaRent
} from 'utils/realty'

import * as CONFIG from 'config'

export const viva = {
  sale: realty => !(isSale(realty) && (getPrice(realty) > CONFIG.VIVAREAL.minSale)),
  rental: realty => !(isRental(realty) && (getPrice(realty) > CONFIG.VIVAREAL.minRental)),
  maxCondoFee: realty => !(
    (isRental(realty) && getCondoFee(realty) >= 0) &&
    (getCondoFee(realty) >= getMaxVivaRent(realty))
  )
}