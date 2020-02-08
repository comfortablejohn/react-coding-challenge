import './Grid.css';
import React from 'react';

export function Grid({ children }) {
    return <div className="grid gutter">{children}</div>;
}

export function GridItem({
    url,
    image,
    title,
}) {
    return (
        <div className="grid-item">
            <a href="#">
                <div className="grid-item--image">
                    <img src={image} />
                </div>
                <div className="grid-item--title">{title}</div>
            </a>
        </div>
    )
}