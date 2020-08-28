import * as CONFIG from 'config'

export const isSale = ({ pricingInfos }) => pricingInfos.businessType === 'SALE'
export const isRental = ({ pricingInfos }) => pricingInfos.businessType === 'RENTAL'

export const getCurrency = value => parseFloat(value || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 })

export const getPrice = ({ pricingInfos: { price } }) => !isNaN(price) && parseFloat(price)
export const getCondoFee = ({ pricingInfos: { monthlyCondoFee } }) => !isNaN(monthlyCondoFee) ? parseFloat(monthlyCondoFee) : -1
export const getM2Value = realty => getPrice(realty) / realty.usableAreas

export const isValidLocation = ({ address }) => {
  const { lat, lon } = address.geoLocation.location
  return parseFloat(lat) !== 0 || parseFloat(lon) !== 0
}

export const isGroupBound = realty => {
  const { lat, lon } = realty.address.geoLocation.location
  return (
    (lat >= CONFIG.GROUP.bounds.lat.min && lat <= CONFIG.GROUP.bounds.lat.max) &&
    (lon >= CONFIG.GROUP.bounds.lon.min && lon <= CONFIG.GROUP.bounds.lon.max)
  )
}

export const getMinZapSale = realty => !isGroupBound(realty) ? CONFIG.ZAPIMOVEIS.minSale : CONFIG.ZAPIMOVEIS.minSale - (CONFIG.ZAPIMOVEIS.minSale * 0.1)
export const getMaxVivaRent = realty => !isGroupBound(realty) ? getPrice(realty) * 0.3 : ((getPrice(realty)) * 0.3) * 1.5
