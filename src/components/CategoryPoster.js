import './CategoryPoster.css';
import React from 'react';
import { GridItem } from '../layout/Grid';

export default function CategoryPoster({ url, screen, title }) {
    return (
        <GridItem url={url} title={title}>
            <div className="category-title">
                <h3 className="category-title--h3">{screen}</h3>
            </div>
        </GridItem>
    );
}
