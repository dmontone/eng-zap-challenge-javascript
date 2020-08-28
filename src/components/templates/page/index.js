import React from 'react'

import {
  Wrapper,
  Header,
  Content
} from './styles'

export const PageTemplate = ({
  children
}) => (
  <Wrapper>
    <Header />
    <Content>
      {children}
    </Content>
  </Wrapper>
)