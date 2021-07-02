import React from 'react';
import {
    CloseIcon, Icon, SidebarContainer, SidebarLinkR, SidebarLinkS, SidebarMenu, SidebarWrapper
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle, sidebarMenuItems }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                {
                    sidebarMenuItems.map(menuItem => {
                        if (menuItem.routeType === "R") {
                            return (
                                <SidebarMenu>
                                    <SidebarLinkR to={menuItem.route} onClick={toggle}>
                                        {menuItem.title}
                                    </SidebarLinkR>
                                </SidebarMenu>
                            );
                        } else {
                            return (
                                <SidebarMenu>
                                    <SidebarLinkS to={menuItem.route} onClick={toggle}>
                                        {menuItem.title}
                                    </SidebarLinkS>
                                </SidebarMenu>
                            );
                        }
                    })
                }
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
