import './Page.css';
import React from 'react';

export default function Page({ title, children }) {
    React.useEffect(() => {
        document.title = `DEMO Stream - ${title}`;
    }, [title]);

    return (
        <main className="container-inner">
            <div className="header-page gutter">
                <h2>{title}</h2>
            </div>
            {children}
        </main>
    )
}