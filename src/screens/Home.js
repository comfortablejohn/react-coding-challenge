import React from 'react';
import { Grid, GridItem } from '../layout/Grid';
import Page from '../layout/Page';
import { screens } from '../utils/constants';
import CategoryPoster from '../components/CategoryPoster';

export default function Home() {
    const categories = [
        {
            url: '/series',
            screen: screens.SERIES,
            title: 'Popular Series',
            image: '/img/placeholder.png'
        },
        {
            url: '/movies',
            screen: screens.MOVIES,
            title: 'Popular Movies',
            image: '/img/placeholder.png'
        },
        {
            url: '/sports',
            screen: 'SPORTS',
            title: 'Popular Sports',
            image: '/img/placeholder.png'
        },
    ];

    return (
        <Page title={'Popular Titles'}>
            <Grid>
                {categories.map((item, i) => (
                    <CategoryPoster key={`grid-item-${i}`} {...item} />
                ))}
            </Grid>
        </Page>
    );
}
