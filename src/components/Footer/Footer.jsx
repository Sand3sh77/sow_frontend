import React, { useContext } from 'react';
import { TranslationContext } from '../../context';
import "./footer.css";

export default function Footer() {
    const { translations } = useContext(TranslationContext);

    return (
        <footer id='footer-container'>
            <div id="footer-content">
                <div id='footer-top'>
                    <span>{translations.footer_heading}</span>
                    <div id='footer-links-container'>
                        <a>{translations.home}</a>
                        <a>{translations.order}</a>
                        <a>{translations.contact_us}</a>
                    </div>
                </div>
                <hr />
                <div id='footer-bottom'>
                    {translations.copyright}
                </div>
            </div>
        </footer>
    )
}
