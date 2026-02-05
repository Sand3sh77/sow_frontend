import React from 'react';
import "./footer.css";

export default function Footer() {
    return (
        <footer id='footer-container'>
            <div id="footer-content">
                <div id='footer-top'>
                    <span>123 Fakturera</span>
                    <div id='footer-links-container'>
                        <a>Home</a>
                        <a>Order</a>
                        <a>Contact us</a>
                    </div>
                </div>
                <hr />
                <div id='footer-bottom'>
                    © Lättfaktura, CRO no. 638537, 2025. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
