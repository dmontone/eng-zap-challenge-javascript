import axios from 'axios'

export const svcRealty = {
  get: () => axios.get('/realty.json')
}