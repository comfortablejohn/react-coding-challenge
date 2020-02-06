import React from 'react';

import Page from '../layout/Page';

export default function Home() {


    return (
        <Page title={'Popular Titles'}>
            <div className="grid">
                <div className="item">Series</div>
                <div className="item">Movies</div>
            </div>
        </Page>
    );
}