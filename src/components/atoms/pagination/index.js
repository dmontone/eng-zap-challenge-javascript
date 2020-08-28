import React from 'react'

import {
  Wrapper,
  Button,
  PageInfo
} from './styles'

export const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  className
}) => {
  const currentPageNumber = currentPage + 1

  return (
    <Wrapper className={className}>
      {<>
        <Button
          active={currentPage > 0}
          onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}
        >
          {'<'}
        </Button>
      </>}
      <PageInfo>
        {currentPageNumber} <span>/ {totalPages}</span>
      </PageInfo>
      {<>
        <Button
          active={currentPage < totalPages - 1}
          onClick={() => currentPage < totalPages - 1 && setCurrentPage(currentPage + 1)}
        >
          {'>'}
        </Button>
      </>}
    </Wrapper>
  )
}