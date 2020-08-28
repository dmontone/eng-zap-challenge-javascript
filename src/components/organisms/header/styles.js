import styled from 'styled-components'

import pngLogo from 'assets/logo-grupo-zap.png'

export const Wrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.getSpacing(10)};

  background: ${({ theme }) => theme.colors.group};
  ${({ theme }) => theme.props.shadow}

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.div`
  width: 220px;
  height: 38px;
  background: url(${pngLogo});
`