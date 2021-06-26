import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarLinkR
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='home' onClick={toggle}>Home</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink to='about-me' onClick={toggle}>About Me</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink to='experience' onClick={toggle}>Experience</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLinkR to='contact' onClick={toggle}>Contact</SidebarLinkR>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
