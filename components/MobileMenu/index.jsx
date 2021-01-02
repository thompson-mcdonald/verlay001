import React, {useState} from "react";
import Link from 'next/link'
import { Menu } from './styled'

function MobileMenu(props) {
    const { state, dispatch_closeMobileMenuOpenModal, dispatch_closeMobileMenuCloseModal } = props
    const { store } = state
    return (
      <Menu className='mobile-menu' open={store.open}>
          <nav>
            <Link href="/" ><a onClick={dispatch_closeMobileMenuCloseModal}>Home</a></Link>
            <Link href="/about"><a onClick={dispatch_closeMobileMenuCloseModal}>About</a></Link>
            <a onClick={dispatch_closeMobileMenuOpenModal}>Contact</a>
            <div className='nested-links'>
              <Link href="/404" ><a onClick={dispatch_closeMobileMenuCloseModal}>Empty Page</a></Link>
            </div>
          </nav>
      </Menu>
    )
}

export default MobileMenu
