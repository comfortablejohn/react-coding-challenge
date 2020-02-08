import './Header.css';
import React from 'react';
import Link from '../components/Link';

export default function Header() {
    return (
        <header className="header-main gutter">
            <h1 className="header-main--logo"><Link to={'/'}>DEMO Streaming</Link></h1>
            <nav className="header-main--nav">
                <ul>
                    <li>
                        <a href="#">Log in</a>
                    </li>
                    <li>
                        <a href="#" className="free-trial-cta">Start your free trial</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}