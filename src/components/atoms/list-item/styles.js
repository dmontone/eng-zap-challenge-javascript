import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 ${({ theme }) => theme.getSpacing(1)};
  ${({ theme }) => theme.props.shadow}
  border-radius: 5px;
  overflow: hidden;
  position: relative;

  &:not(:last-child){
    margin-bottom: ${({ theme }) => theme.getSpacing(3)};
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    z-index: 10;
  }

  ${({ theme }) => theme.breakpoints.medium`
    width: calc(50% - 16px);
  `}

  ${({ theme }) => theme.breakpoints.wide`
    width: calc(25% - 16px);
  `}
`

export const Frame = styled.div`
  background: #F60;
  width: 100%;
  height: ${({ theme }) => theme.getSpacing(16)};
  position: relative;
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Data = styled.div`
  padding: ${({ theme }) => theme.getSpacing(1)};
`

export const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 ${({ theme }) => theme.getSpacing(1)} 0;
`

export const Description = styled.ul`
  margin: 0 0 ${({ theme }) => theme.getSpacing(2)} 0;

  li {
    font-size: 10px;
    display: inline-block;
    text-transform: uppercase;
    line-height: ${({ theme }) => theme.getSpacing(3)};

    &:not(:last-child){
      margin: 0 ${({ theme }) => theme.getSpacing(1)} 0 0;
      padding: 0 ${({ theme }) => theme.getSpacing(1)} 0 0;
      border-right: 1px solid #000;
    }
  }
`

export const Value = styled.div`
  font-size: ${({ theme }) => theme.getSpacing(3)};
  font-weight: 800;
  margin: 0 0 ${({ theme }) => theme.getSpacing(1)} 0;
`
