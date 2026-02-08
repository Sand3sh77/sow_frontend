import { User } from 'lucide-react'
import React from 'react'

export default function SidebarItem({ item, selectedMenu, handleItemSelect }) {
    return (
        <div
            key={item.id}
            className="menu-item"
            onClick={handleItemSelect}
        >
            {selectedMenu === item.id && <span className="active-indicator" />}
            <span className="menu-icon">
                {item.icon}
            </span>
            <span className="menu-label">{item.label}</span>
        </div>
    )
}
