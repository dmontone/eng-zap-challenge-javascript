import React, { useEffect } from 'react'

import { useRealty } from 'hooks'

import { PageTemplate } from 'components/templates'
import { Loading } from 'components/atoms'
import { List } from 'components/molecules'

import { useParams } from 'react-router-dom'

import { Wrapper } from './styles'

export const Listing = () => {
  const { portal } = useParams()
  const realty = useRealty()

  return (
    <PageTemplate>
      {realty.isFetching && <Loading data-test-id='loading' />}
      {realty.isFetched && (
        <Wrapper>
          <List type={portal} backHref={'/'} />
        </Wrapper>
      )}
    </PageTemplate>
  )
}