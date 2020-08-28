import styled from 'styled-components'

import { Gallery as OriginGallery } from 'components/molecules'

export const Wrapper = styled.div`
  padding: 0 ${({ theme }) => theme.getSpacing(2)};
  
  ${({ theme }) => theme.breakpoints.wide`
    display: flex;
    flex-wrap: wrap;
  `}
`

export const Title = styled.div`
  font-size: ${({ theme }) => theme.getSpacing(3)};
  font-weight: 700;
  margin: 0 0 ${({ theme }) => theme.getSpacing(3)} 0;

  ${({ theme }) => theme.breakpoints.medium`
    max-width: 600px;
    margin: 0 auto 24px auto;
  `}

  ${({ theme }) => theme.breakpoints.wide`
    max-width: 100%;
    display: none;
  `}
`

export const Value = styled.div`
  font-size: ${({ theme }) => theme.getSpacing(4)};
  line-height: ${({ theme }) => theme.getSpacing(4)};
  height: ${({ theme }) => theme.getSpacing(4)};
  font-weight: 700;
  margin: 0 0 ${({ theme }) => theme.getSpacing(1)} 0;
`

export const OtherValues = styled.div`
  margin: 0 0 ${({ theme }) => theme.getSpacing(3)} 0;

  li {
    font-size: 12px;
    font-weight: 400;
    line-height: ${({ theme }) => theme.getSpacing(2)};
    width: 50%;

    span {
      font-weight: 600;
    }
  }
`

export const Data = styled.div`
  ${({ theme }) => theme.breakpoints.medium`
    max-width: 600px;
    margin: 0 auto;
  `}

  ${({ theme }) => theme.breakpoints.wide`
    width: 50%;
  `}
`

export const Gallery = styled(OriginGallery)`
  margin: 0 0 ${({ theme }) => theme.getSpacing(1)} 0;

  ${({ theme }) => theme.breakpoints.medium`
    max-width: 600px;
    margin: 0 auto 24px auto;
  `}

  ${({ theme }) => theme.breakpoints.wide`
    margin: 0;
  `}
`

export const Address = styled.div`
  margin: 0 0 ${({ theme }) => theme.getSpacing(3)} 0;

  a {
    display: block;
    color: ${({ theme }) => theme.colors.link};
  }
`

export const Details = styled.div`
  li {
    font-size: 12px;
    display: inline-block;
    line-height: ${({ theme }) => theme.getSpacing(3)};
    width: 50%;
    margin: 0 0 ${({ theme }) => theme.getSpacing(1)} 0;

    span {
      font-weight: 600;
    }
  }
`
