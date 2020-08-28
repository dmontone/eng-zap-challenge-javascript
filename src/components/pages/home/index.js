import React from 'react'
import { PageTemplate } from 'components/templates'
import { Menu } from 'components/molecules'

import {
  Wrapper,
  Title,
  Subtitle
} from './styles'

export const Home = () => (
  <PageTemplate>
    <Wrapper>
      <Title>Teste de engenharia do GrupoZap</Title>
      <Subtitle>Clique abaixo para filtrar os imóveis por portal</Subtitle>
      <Menu />
    </Wrapper>
    {/* <Title>Teste de engenharia do GrupoZap</Title>
    <SubTitle>Clique abaixo para filtrar os imóveis por portal</SubTitle>
    <Menu>
      <Menu.Item type='viva-real'></Menu.Item>
      <Menu.Item type='zap-imoveis'></Menu.Item>
    </Menu> */}
  </PageTemplate>
)