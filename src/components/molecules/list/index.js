import React, { useState } from 'react'

import { usePortalFilter, usePagination } from 'hooks'
import { ListItem } from 'components/atoms'

import {
  Wrapper,
  Header,
  Logo,
  Pagination,
  BackButton
} from './styles'

export const List = ({
  type,
  backHref
}) => {
  const [currentPage, setCurrentPage] = useState(0)

  const list = usePortalFilter(type)
  const [paginated, totalPages] = usePagination({ currentPage, list })

  return (
    <>
      <Header>
        <Logo type={type} />
        <Pagination
          {...{
            currentPage,
            setCurrentPage,
            totalPages
          }}
        />
        {backHref && <BackButton href={backHref}>voltar</BackButton>}
      </Header>
      <Wrapper>
        {paginated.map(item => <ListItem key={item.id} {...item} />)}
      </Wrapper>
    </>
  )
}