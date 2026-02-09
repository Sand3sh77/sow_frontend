import React, { useContext, useState } from 'react';
import { getSidebarLinks } from './utils';
import SidebarItem from './SidebarItem';
import { AuthContext } from '../../context';
import "./sidebar.css";
import { useNavigate } from 'react-router';

export default function Sidebar() {
    const [selectedMenu, setSelectedMenu] = useState('pricelist');
    const sidebarLinks = getSidebarLinks();

    const navigate = useNavigate();

    const { logout } = useContext(AuthContext);


    const handleItemSelect = (item) => {
        if (item.id == "logout") logout();

        setSelectedMenu(item.id);

        navigate(item.path);
    }

    return (
        <aside id="sidebar-container">
            <div id="sidebar-header">Menu</div>
            <nav id="sidebar-item-container">
                {sidebarLinks.map(item => (
                    <SidebarItem
                        key={item.id}
                        item={item}
                        selectedMenu={selectedMenu}
                        handleItemSelect={() => handleItemSelect(item)}
                    />
                ))}
            </nav>
        </aside>
    )
}
