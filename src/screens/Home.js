import React from 'react';
import { Grid, GridItem } from '../layout/Grid';
import Page from '../layout/Page';

export default function Home() {
    const items = [
        {
            url: 'series',
            title: 'Popular Series',
            image: '/img/placeholder.png',
        },
        {
            url: 'movies',
            title: 'Popular Movies',
            image: '/img/placeholder.png',
        },
    ];

    return (
        <Page title={'Popular Titles'}>
            <Grid>
                {items.map((item, i) => <GridItem key={`grid-item-${i}`} {...item} />)}
            </Grid>
        </Page>
    );
}
