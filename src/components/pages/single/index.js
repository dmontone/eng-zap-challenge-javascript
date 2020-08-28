import React from 'react'

import { useParams } from 'react-router-dom'

import { useRealty } from 'hooks'
import { Loading } from 'components/atoms'
import { PageTemplate } from 'components/templates'

import { getCurrency } from 'utils/realty'

import {
  Wrapper,
  Title,
  Value,
  OtherValues,
  Gallery,
  Address,
  Details,
  Data
} from './styles'

export const Single = () => {
  const { queryId } = useParams()

  const { isFetched, data } = useRealty()

  const singleRealty = data.find(({ id }) => id === queryId)

  if (isFetched && singleRealty) {
    const {
      images,
      address: {
        neighborhood,
        city
      },
      pricingInfos: {
        price,
        yearlyIptu,
        monthlyCondoFee
      },
      bedrooms,
      bathrooms,
      usableAreas,
      parkingSpaces
    } = singleRealty

    return (
      <PageTemplate>
        <Wrapper>
          <Title>Apartamento para alugar</Title>
          {
            images.length > 0 &&
            <Gallery
              images={images}
            />
          }
          <Data>
            <Value>
              {getCurrency(price)}
            </Value>
            <OtherValues>
              <li><span>IPTU/ano:</span> {getCurrency((yearlyIptu))}</li>
              <li><span>Condomínio/mês:</span> {getCurrency((monthlyCondoFee))}</li>
            </OtherValues>
            { neighborhood && city &&
              <Address>
                {neighborhood}, {city}
              </Address>
            }
            <Details>
              <li><span>Quartos</span>: { bedrooms || 0 }</li>
              <li><span>Banheiros</span>: { bathrooms || 0 }</li>
              <li><span>Área útil</span>: { usableAreas || 0 } m2</li>
              <li><span>Vagas</span>: { parkingSpaces || 0 }</li>
            </Details>
          </Data>
        </Wrapper>
      </PageTemplate>
    )
  }

  return <Loading />
}