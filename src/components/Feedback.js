import './Feedback.css';
import React from 'react';

export function Loading() {
    return (
        <div className="loading gutter">Loading...</div>
    );
}

export function Error() {
    return (
        <div className="loading gutter">Oops, something went wrong...</div>
    );
}