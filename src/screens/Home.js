import React from 'react';
import { Grid } from '../layout/Grid';
import Page from '../layout/Page';
import { screens } from '../utils/constants';
import CategoryPoster from '../components/CategoryPoster';

export default function Home() {
    const categories = [
        {
            url: '/series',
            screen: screens.SERIES,
            title: 'Popular Series',
        },
        {
            url: '/movies',
            screen: screens.MOVIES,
            title: 'Popular Movies',
        },
        {
            url: '/sports',
            screen: 'SPORTS',
            title: 'Example Error State',
        }
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
