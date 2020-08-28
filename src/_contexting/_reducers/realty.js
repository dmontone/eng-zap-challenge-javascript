export const RealtyReducer = ({ realty }, { type, payload = {} }) => {
  switch (type) {
    case 'realty_get':
      return {
        ...realty,
        isFetching: true
      }
    case 'realty_get_success':
      return {
        ...realty,
        isFetching: false,
        isFetched: true,
        data: payload
      }
    case 'realty_get_error':
      return {
        ...realty,
        isFetching: false,
        isFetched: true,
        error: payload
      }
    default:
      return realty
  }
}

RealtyReducer.key = 'realty'

RealtyReducer.initialState = {
  isFetched: false,
  isFetching: false,
  error: null,
  data: []
}
