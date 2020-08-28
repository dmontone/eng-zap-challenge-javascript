import styled, { css } from 'styled-components'

import svgViva from 'assets/logo-viva-real.svg'
import svgZap from 'assets/logo-zap-imoveis.svg'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  background: no-repeat center center;
  background-size: contain;

  ${({ type }) => {
    switch (type) {
      default:
      case 'viva-real':
        return css`
          background-image: url(${ svgViva });
        `
      case 'zap-imoveis':
        return css`
          background-image: url(${ svgZap });
        `
    }
  }}
`