import React, {useEffect, useState} from 'react';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavbarItem, NavbarLink, NavBtn, NavBtnLink} from './Navbar Elements';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import './nav.css';

const Navbar = ({toggle}) => {

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () =>{
    if(window.scrollY >= 80) {
      setScrollNav(true);
    }else{
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

    const toggleHome = () =>{
      scroll.scrollToTop();
    };
  return (
    <>
    <IconContext.Provider value={{color: '#fff'}} >
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to ='/' onClick={toggleHome}>esusu<span className='span'>SAVE</span></NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars/>
                </MobileIcon>
                <NavMenu>
                  <NavbarItem>
                    <NavbarLink to = 'about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavbarLink>
                  </NavbarItem>
                  <NavbarItem>
                     <NavbarLink to = 'discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavbarLink>
                  </NavbarItem>
                  <NavbarItem>
                      <NavbarLink to = 'services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavbarLink>
                  </NavbarItem>
                  <NavbarItem>
                      <NavbarLink to = 'signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign up</NavbarLink>
                  </NavbarItem>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to = '/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar;