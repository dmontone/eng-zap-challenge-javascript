import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 250px;
  background: #F60;
  position: relative;
  overflow: hidden;
`

export const Items = styled.div`
  width: 300%;
  height: 100%;
  position: absolute;
  top: 0;
  left: -100%;
  background: ${({ theme }) => theme.colors.inactive};
  display: flex;
  z-index: 1;
  transition: left .5s;
`

export const Item = styled.div`
  width: 33.33333%;
  height: 100%;
  background: url(${({ photo }) => photo}) no-repeat center center;
  background-size: contain;
`

export const Arrow = styled.div`
  width: ${({ theme }) => theme.getSpacing(6)};
  height: ${({ theme }) => theme.getSpacing(6)};
  position: absolute;
  top: 50%;
  ${({ left }) => left ? css`left` : css`right`}: 16px;
  z-index: 2;
  transform: translateY(-50%) rotate(45deg);

  border: 8px solid ${({ theme }) => theme.colors.group};

  ${({ left }) => left ?
    css`
    border-right: 0;
    border-top: 0;
    `
  :
    css`
      border-left: 0;
      border-bottom: 0;
    `
  }
`

export const Pager = styled.ul`
  width: 100%;
  height: ${({ theme }) => theme.getSpacing(1)};
  position: absolute;
  bottom: ${({ theme }) => theme.getSpacing(2)};
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: space-around;

  li {
    width: ${({ theme }) => theme.getSpacing(1)};
    height: ${({ theme }) => theme.getSpacing(1)};
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.empty};

    &:nth-child(${({ current }) => current + 1}){
      background-color: ${({ theme }) => theme.colors.group};
    }
  }
`
