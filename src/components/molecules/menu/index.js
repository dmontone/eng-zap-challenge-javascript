import React from 'react'

import {
  Wrapper,
  Item
} from './styles'

import {
  Logo
} from 'components/atoms'

export const Menu = () => (
  <Wrapper>
    <Item type='viva-real' href='/lista/viva-real'>
      <Logo type='viva-real' />
    </Item>
    <Item type='zap-imoveis' href='/lista/zap-imoveis'>
      <Logo type='zap-imoveis' />
    </Item>
  </Wrapper>
)