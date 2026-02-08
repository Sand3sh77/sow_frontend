import React from 'react'
import NavLinks from './NavLink'
import { getLinks } from './utils';
import { LanguageSelect } from '../LanguageSelect';
import "./navbar.css";

export default function Navbar() {
    const links = getLinks();

    return (
        <nav id='nav-container'>
            <div id='nav-content'>
                <img
                    src="https://storage.123fakturera.se/public/icons/diamond.png"
                    alt="SOW Logo"
                    height="32px"
                />
                <div id="nav-links-container">
                    {links.map(link => (
                        <NavLinks label={link.label} url={link.url} key={link.label} />
                    ))}
                    <LanguageSelect />
                </div>
            </div>
        </nav>
    )
}
