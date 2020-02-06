import React from 'react';

export default function Footer() {
    const links = [
        'Home',
        'Terms and Conditions',
        'Privacy Policy',
        'Collection Statement',
        'Help',
        'Manage Account',
    ];

    return (
        <footer className="footer-main">
            <nav>
                <ul>
                    {links.map((link, i) => <li key={`footer-link-${i}`}><a href="#">{link}</a></li>)}
                </ul>
            </nav>
        </footer>
    )
}