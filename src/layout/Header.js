import React from 'react';
import { screens } from '../utils/constants';

export default function Header() {
    return (
        <header className="header-main">
            <h1 className="header-main__logo">DEMO Streaming</h1>
            <nav>
                <ul>
                    <li>
                        <a href="#">Log in</a>
                    </li>
                    <li>
                        <a href="#">Start your free trial</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}