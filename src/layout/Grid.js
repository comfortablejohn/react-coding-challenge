import './Grid.css';
import React from 'react';
import Placeholder from '../assets/img/placeholder.png';

export function Grid({ children }) {
    return <div className="grid gutter">{children}</div>;
}

export function GridItem({ title, tooltip, children }) {
    const style = {
        backgroundImage: `url(${Placeholder})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div title={tooltip} className="grid-item">
            <a href="#">
                <div className="grid-item--image" style={style}>
                    {children}
                </div>
                <div className="grid-item--title">{title}</div>
            </a>
        </div>
    );
}
