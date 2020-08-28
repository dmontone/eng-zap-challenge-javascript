import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1 0 auto;
`

export const Item = styled.a`
  display: block;
  width: 100%;
  height: ${({ theme }) => theme.getSpacing(10)};
  border-radius: 5px;
  padding: ${({ theme }) => theme.getSpacing(2)};
  ${({ theme }) => theme.props.shadow}

  &:not(:last-child){
    margin-right: ${({ theme }) => theme.getSpacing(2)};
  }

  ${({ type }) => {
    switch (type) {
      default:
      case 'viva-real':
        return css`
          background-color: ${({ theme }) => theme.colors.portal.viva};
        `
      case 'zap-imoveis':
        return css`
          background-color: ${({ theme }) => theme.colors.portal.zap};
        `
    }
  }}
`