import React from 'react';
import { useNav } from './Nav';

export default function Link({ to, children }) {
    const { goTo } = useNav();

    function handleClick(event) {
        event.preventDefault();
        goTo(to);
    }

    return (
        <a href="#" onClick={handleClick}>
            {children}
        </a>
    );
}
