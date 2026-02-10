import NavLinks from './NavLink'
import { useNavLinks } from './hooks';
import { LanguageSelect } from '../LanguageSelect';
import "./navbar.css";
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const links = useNavLinks();
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const handleBurgerToggle = () => setIsBurgerOpen(!isBurgerOpen);

    return (
        <nav id='nav-container'>
            <div id='nav-content'>
                <div id="burger-icon-container">
                    <Menu stroke='white' width={30} height={30} onClick={handleBurgerToggle} />
                    {
                        isBurgerOpen &&
                        <div id='burger-links' onClick={handleBurgerToggle}>
                            {links.map(link => (
                                <NavLinks label={link.label} url={link.url} key={link.label} />
                            ))}
                        </div>
                    }
                </div>
                <img
                    id='nav-image'
                    src="https://storage.123fakturera.se/public/icons/diamond.png"
                    alt="SOW Logo"
                    height="32px"
                />
                <div id="nav-links-container">
                    <div id="nav-links-content">
                        {links.map(link => (
                            <NavLinks label={link.label} url={link.url} key={link.label} />
                        ))}
                    </div>
                    <LanguageSelect />
                </div>
            </div>
        </nav>
    )
}
