import React from 'react'

import { Link } from 'react-router-dom'

import {
  getPrice,
  getCurrency
} from 'utils/realty'

import {
  Wrapper,
  Frame,
  Image,
  Data,
  Title,
  Description,
  Value
} from './styles'

const translate = {
  businessType: ({ businessType }) => (
    (businessType === 'SALE' && 'à venda') ||
    (businessType === 'RENTAL' && 'para alugar') ||
    ('')
  )
}

export const ListItem = ({
  id,
  pricingInfos,
  bedrooms,
  bathrooms,
  usableAreas,
  parkingSpaces,
  images
}) => (
    <Wrapper>
      <Link to={`/imovel/${id}`} />
      <Frame>
        <Image src={images[0]} />
      </Frame>
      <Data>
        <Title>Imóvel {translate.businessType(pricingInfos)}</Title>
        <Description>
          {
            [
              [bedrooms, 'quartos'],
              [bathrooms, 'banheiros'],
              [usableAreas, 'm2'],
              [parkingSpaces, 'vagas']
            ].map(([value, label]) => parseFloat(value) > 0 && <li>{value} {label}</li>)
          }
        </Description>
        <Value>
          { getCurrency(getPrice({ pricingInfos })) }
        </Value>
      </Data>
    </Wrapper>
  )