import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 ${({ theme }) => theme.getSpacing(2)} ${({ theme }) => theme.getSpacing(3)} ${({ theme }) => theme.getSpacing(2)};
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.getSpacing(4)};
  line-height: ${({ theme }) => theme.getSpacing(5)};
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.getSpacing(4)};
  font-weight: 700;
`

export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.getSpacing(3)};
  line-height: ${({ theme }) => theme.getSpacing(4)};
  font-weight: 300;
`
