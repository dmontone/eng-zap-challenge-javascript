import { renderHook } from '@testing-library/react-hooks'

import { useContextConsumer } from '_contexting/context'
import { isValidLocation } from 'utils/realty'
import * as RULES from 'rules'

import { usePortalFilter } from './usePortalFilter'
import { RealtyDataMock } from './_test-mocks/realty-data'

jest.mock('_contexting/context')
jest.mock('utils/realty')
jest.mock('rules')

describe('HOOK: usePortalFilter', () => {
  beforeEach(() => {
    useContextConsumer.mockImplementation(() => ([
      {
        realty: {
          data: RealtyDataMock
        }
      },
      jest.fn()
    ]))

    isValidLocation.mockImplementation(() => true)
    RULES.zap.sale.mockImplementation(() => true)
    RULES.zap.rental.mockImplementation(() => true)
    RULES.zap.minM2Value.mockImplementation(() => true)
    RULES.viva.sale.mockImplementation(() => true)
    RULES.viva.rental.mockImplementation(() => true)
    RULES.viva.maxCondoFee.mockImplementation(() => true)
  })

  afterEach(() => {
    isValidLocation.mockReset()
  })

  it('Should run all filters for zap-imoveis type', () => {
    renderHook(() => usePortalFilter('zap-imoveis'))
    expect(isValidLocation).toHaveBeenCalledTimes(RealtyDataMock.length)
    expect(RULES.zap.sale).toHaveBeenCalledTimes(RealtyDataMock.length)
    expect(RULES.zap.rental).toHaveBeenCalledTimes(RealtyDataMock.length)
    expect(RULES.zap.minM2Value).toHaveBeenCalledTimes(RealtyDataMock.length)
  })

  it('Should run all filters for viva-real type', () => {
    renderHook(() => usePortalFilter('viva-real'))
    expect(isValidLocation).toHaveBeenCalledTimes(RealtyDataMock.length)
    expect(RULES.viva.sale).toHaveBeenCalledTimes(RealtyDataMock.length)
    expect(RULES.viva.rental).toHaveBeenCalledTimes(RealtyDataMock.length)
    expect(RULES.viva.maxCondoFee).toHaveBeenCalledTimes(RealtyDataMock.length)
  })
})