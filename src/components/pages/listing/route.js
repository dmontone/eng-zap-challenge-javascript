import { Listing } from './'

const availableListings = [ 'zap-imoveis', 'viva-real' ]

export const routeDefaultListing = {
  redirect: {
    to: '/'
  },
  path: '/lista',
  exact: true
}

export const routeListing = {
  Component: Listing,
  path: `/lista/:portal(${availableListings.join('|')})`
}