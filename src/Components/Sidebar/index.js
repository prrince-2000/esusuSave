import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarBtnWrap, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute } from './Sidebar Elements';

const Sidebar = ({toggle, isOpen}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to = 'about' onClick={toggle}>About</SidebarLink>
                <SidebarLink to = 'discover' onClick={toggle}>Discover</SidebarLink>
                <SidebarLink to = 'services' onClick={toggle}>Services</SidebarLink>
                <SidebarLink to = 'signup' onClick={toggle}>Sign up</SidebarLink>
            </SidebarMenu>
            <SidebarBtnWrap>
                <SidebarRoute to='/signin'>Sign-In</SidebarRoute>
            </SidebarBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;