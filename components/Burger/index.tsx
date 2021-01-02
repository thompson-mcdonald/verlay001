import React, {useState} from "react";
import { BurgerComp } from './styled'
import { HamburgerCollapseReverse } from 'react-animated-burgers'

interface Props {
    state: any;
    dispatch_openMobileMenu: any;
    dispatch_closeMobileMenu: any;
};

const Burger: React.FC<Props> = ({ state, dispatch_openMobileMenu, dispatch_closeMobileMenu }) => {
    const { store } = state
    const [isOpen, setIsOpen] = useState(store.open)
    const handleOpen = () => {
      if (!isOpen) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }
    return (
      <BurgerComp onClick={store.open ? dispatch_closeMobileMenu : dispatch_openMobileMenu}>
        <HamburgerCollapseReverse toggleButton={handleOpen} isActive={store.open} buttonWidth={20} className='burger'  />
      </BurgerComp>
    )
}

export default Burger