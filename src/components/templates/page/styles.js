import styled from 'styled-components'

import { Header as OriginHeader } from 'components/organisms'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const Header = styled(OriginHeader)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`

export const Content = styled.div`
  min-height: calc(100% - ${({ theme }) => theme.getSpacing(10)});
  width: 100%;
  position: absolute;
  top: ${({ theme }) => theme.getSpacing(10)};
  padding: ${({ theme }) => theme.getSpacing(4)} 0;
  z-index: 1;
`
