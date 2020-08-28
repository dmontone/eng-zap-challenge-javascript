import styled, { css } from 'styled-components'

import {
  Logo as OriginLogo,
  Pagination as OriginPagination
} from 'components/atoms'

export const Wrapper = styled.div`
  width: 100%;
  height: auto;

  ${({ theme }) => theme.breakpoints.medium`
    display: flex;
    flex-wrap: wrap;
  `}
`

export const Logo = styled(OriginLogo)`
  width: ${({ theme }) => theme.getSpacing(16)};
  height: ${({ theme }) => theme.getSpacing(8)};
  background-size: 80%;

  ${({ type }) => {
    switch (type) {
      default:
      case 'zap-imoveis':
        return css`
          background-color: ${({ theme }) => theme.colors.portal.zap};
        `
      case 'viva-real':
        return css`
          background-color: ${({ theme }) => theme.colors.portal.viva};
        `
    }
  }}
`

export const Pagination = styled(OriginPagination)`
  ${({ theme }) => theme.breakpoints.medium`
    width: 296px;
    min-width: auto;
  `}
`

export const BackButton = styled.a`
  width: ${({ theme }) => theme.getSpacing(16)};
  height: ${({ theme }) => theme.getSpacing(8)};
  line-height: ${({ theme }) => theme.getSpacing(8)};
  text-align: center;
  ${({ theme }) => theme.props.shadow}
  text-transform: uppercase;
  font-size: 10px;
  display: block;
`

export const Header = styled.div`
  border-radius: ${({ theme }) => theme.getSpacing(1)};
  background: #FFF;
  ${({ theme }) => theme.props.shadow}
  margin: 0 0 ${({ theme }) => theme.getSpacing(5)} 0;
  overflow: hidden;
  display: flex;
  align-items: center;

  & :not(:last-child){
    margin-right: ${({ theme }) => theme.getSpacing(3)};
  }

  ${({ theme }) => theme.breakpoints.medium`
    width: 600px;
    margin-left: auto;
    margin-right: auto;
  `}
`