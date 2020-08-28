import React from 'react'

import {
  Wrapper,
  Logo
} from './styles'

export const Header = ({
  className
}) => (
  <Wrapper className={className}>
    <Logo />
  </Wrapper>
)