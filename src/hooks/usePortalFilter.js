import { useContextConsumer } from '_contexting/context'

import * as CONFIG from 'config'
import * as RULES from 'rules'

import { isValidLocation } from 'utils/realty'

export const usePortalFilter = type => {
  const [{ realty }] = useContextConsumer()
  const validItems = realty.data
    .filter(isValidLocation)

  if (type === 'zap-imoveis')
    return validItems
      .filter(RULES.zap.sale)
      .filter(RULES.zap.rental)
      .filter(RULES.zap.minM2Value)

  if (type === 'viva-real')
    return validItems
      .filter(RULES.viva.sale)
      .filter(RULES.viva.rental)
      .filter(RULES.viva.maxCondoFee)
}