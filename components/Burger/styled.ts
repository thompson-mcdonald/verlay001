import styled from 'styled-components'

export const BurgerComp = styled.div`
  height: 20px;
  width: 30px;
  position: fixed;
  top: 2.25%;
  right: 4%;
  z-index: 200;
  display: none;
  &:hover {
    cursor: pointer;
  }
  .burger {
    padding: 0;
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 399;
  }

  @media only screen and (max-width: 1000px) {
    display: block;
  }
`