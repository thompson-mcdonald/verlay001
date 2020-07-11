import styled from 'styled-components';
import { Large } from '../Breakpoints';
import { border, margin, padding, flexbox, width } from 'styled-system'

export const Wrap = styled.div`
  width: 90%;
  max-width: 840px;
  margin: 0 auto;
  @media (min-width: ${Large}) {
    width: 80%;
    max-width: 1240px;
  }
  ${width}
  ${border}
  ${padding}
  ${margin}`
  ;

  export const WrapFlex = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto;
    @media (min-width: ${Large}) {
      width: 80%;
      max-width: 1240px;
    }
    ${border}
    ${padding}
    ${margin}
    ${flexbox}`
  ;

  export const Flex = styled.div`
    display: flex;
    ${flexbox}
    ${padding}
  `;