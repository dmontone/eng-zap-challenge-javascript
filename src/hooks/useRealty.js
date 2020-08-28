import { useContextConsumer } from '_contexting/context'
import { useRequest } from 'hooks'
import { svcRealty } from 'services/realty'

export const useRealty = () => {
  const [{ realty }, dispatch] = useContextConsumer()

  useRequest({
    service: svcRealty.get,
    storage: realty,
    on: {
      before: () => dispatch({ type: 'realty_get' }),
      success: ({ data }) => dispatch({ type: 'realty_get_success', payload: data }),
      error: err => dispatch({ type: 'realty_get_error', payload: err })
    }
  })

  return realty
}