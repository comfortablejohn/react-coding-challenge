import './Footer.css';
import React from 'react';
import AppStoreSVG from '../../assets/app-store.svg';
import PlayStoreSVG from '../../assets/play-store.svg';
import WindowsStoreSVG from '../../assets/windows-store.svg';
import Socials from './Socials';

function Stores() {
    return (
        <ul className="ul-stores">
            <li>
                <img src={AppStoreSVG} />
            </li>
            <li>
                <img src={PlayStoreSVG} />
            </li>
            <li>
                <img src={WindowsStoreSVG} height="40px" width="120px" />
            </li>
        </ul>
    );
}

export default function Footer() {
    const links = [
        'Home',
        'Terms and Conditions',
        'Privacy Policy',
        'Collection Statement',
        'Help',
        'Manage Account'
    ];

    const year = new Date().getFullYear();

    return (
        <footer className="footer-main gutter">
            <nav className="footer-main__nav">
                <ul>
                    {links.map((link, i) => (
                        <li key={`footer-link-${i}`}>
                            <a href="#">{link}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="footer-main__disclaimer">
                Copyright &copy; {year} DEMO Streaming. All Rights Reserved.
            </div>
            <div className="footer-main__socials">
                <Socials />
                <Stores />
            </div>
            <div className="footer-main__apps"></div>
        </footer>
    );
}
