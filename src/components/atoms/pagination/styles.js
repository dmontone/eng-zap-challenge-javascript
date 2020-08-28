import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  min-width: ${({ theme }) => theme.getSpacing(16)};
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Button = styled.div`
  width: ${({ theme }) => theme.getSpacing(4)};
  height: ${({ theme }) => theme.getSpacing(4)};
  background: #FFF;
  cursor: pointer;
  font-size: ${({ theme }) => theme.getSpacing(2)};
  text-transform: uppercase;
  text-align: center;
  font-weight: 800;
  line-height: ${({ theme }) => theme.getSpacing(4)};
  background: ${({ theme }) => theme.colors.group};
  color: #FFF;

  ${({ active }) => !active && css`
    background: ${({ theme }) => theme.colors.inactive};
  `}
`

export const PageInfo = styled.div`
  width: calc(100% - ${({ theme }) => theme.getSpacing(13)});
  font-weight: 800;
  padding: 0 ${({ theme }) => theme.getSpacing(1)};
  text-align: center;

  span {
    font-weight: 300;
    font-size: 10px;
    display: block;
    width: 100%;
  }
`
