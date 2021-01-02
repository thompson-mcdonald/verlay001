import React from "react";
import Link from 'next/link'
import { Menu } from './styled'

interface Props {
  state: any;
  dispatch_openMobileMenu: any;
  dispatch_closeMobileMenu: any;
  dispatch_closeMobileMenuOpenModal: any;
  dispatch_closeMobileMenuCloseModal: any;
};

const MobileMenu: React.FC<Props> = ({ state, dispatch_closeMobileMenuOpenModal, dispatch_closeMobileMenuCloseModal }) => {
  const { store } = state
  return (
    <Menu className='mobile-menu' open={store.open}>
        <nav>
          <Link href="/" ><a onClick={dispatch_closeMobileMenuCloseModal}>Home</a></Link>
          <Link href="/about"><a onClick={dispatch_closeMobileMenuCloseModal}>About</a></Link>
          <a onClick={dispatch_closeMobileMenuOpenModal}>Contact</a>
        </nav>
    </Menu>
  )
}

export default MobileMenu
