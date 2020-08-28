import { renderHook } from '@testing-library/react-hooks'

import { usePagination } from './usePagination'

jest.mock('config', () => ({
  PAGELENGTH: 5
}))

describe('HOOK: usePagination', () => {
  const MOCK_LIST = Array(27).fill('item').map((item, index) => `${item}-${index + 1}`)

  it('Should return second page with 5 results and 6 total pages', () => {
    const { result: { current } } = renderHook(() => usePagination({
      list: MOCK_LIST,
      currentPage: 1
    }))
    
    expect(current).toEqual([
      ['item-6', 'item-7', 'item-8', 'item-9', 'item-10'],
      6
    ])
  })

  it('Should return last page with 2 results and 6 total pages', () => {
    const { result: { current } } = renderHook(() => usePagination({
      list: MOCK_LIST,
      currentPage: 5
    }))
    
    expect(current).toEqual([
      ['item-26', 'item-27'],
      6
    ])
  })
})