import { Single } from './'

export const routeDefaultSingle = {
  redirect: {
    to: '/'
  },
  path: '/imovel',
  exact: true
}

export const routeSingle = {
  Component: Single,
  path: '/imovel/:queryId'
}