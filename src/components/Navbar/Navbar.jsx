import React from 'react'
import NavLinks from './NavLink'
import { links } from './constants'
import "./navbar.css";

export default function Navbar() {

    return (
        <nav id='nav-container'>
            <div id='nav-content'>
                <img src="https://storage.123fakturera.se/public/icons/diamond.png" alt="SOW Logo" height="32px" />
                <div id="nav-links-container">
                    {links.map(link => (
                        <NavLinks label={link.label} url={link.url} key={link.label} />
                    ))}

                    <div id='nav-language-container'>
                        <a className='nav-link'>English</a>
                        <img src="https://storage.123fakturere.no/public/flags/GB.png" alt="UK Logo" height="25px" />
                    </div>
                </div>
            </div>
        </nav>
    )
}
