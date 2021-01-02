import React, {useState} from "react";
import styled from 'styled-components'

const OverlayComp = styled.div`
  opacity: ${(props) => props.show ? "1" : "0"};
  z-index: ${(props) => props.show ? "1" : "-1"};
  background: yellow;
  height: 100%;
  width: 100%;
  z-index: 16;
  top: 0;
  left: 0;
  position: ${(props) => props.show ? "fixed" : "relative"};
  transition: all 1s;
`

  interface Props {
    state: any;
    dispatch_openMobileMenu: any;
    dispatch_closeMobileMenu: any;
  };
  
  const Overlay: React.FC<Props> = ({ state, dispatch_openMobileMenu, dispatch_closeMobileMenu }) => {
    const { store } = state
    return (
      <OverlayComp className='menu-overlay' show={store.open} onClick={store.open ? dispatch_closeMobileMenu : dispatch_openMobileMenu} />
    )
}

export default Overlay