import React from 'react';
import Page from '../layout/Page';
import { Grid } from '../layout/Grid';
import { Loading, Error } from '../components/Feedback';
import { MediaPoster } from '../components/MediaPoster';
import api from '../services/api';

const states = {
    LOADED: 'LOADED',
    LOADING: 'LOADING',
    ERROR: 'ERROR'
};

const defaultFilters = {
    limit: 21,
    year: 2010,
};

function filter(items, filters) {
    const defaults = {
        from: 0,
        ...filters
    };

    let filtered = [...items];

    // sort alphanumerically before filtering
    filtered.sort((a, b) => a.title > b.title);
    
    if (defaults.year) {
        filtered = filtered.filter(item => item.releaseYear >= filters.year);
    }

    if (defaults.limit) {
        filtered = filtered.slice(defaults.from || 0, filters.limit)
    }

    return filtered;
}

/**
 * Display media within a category. Fetches items on mount and displays
 * filtered items in grid.
 * 
 * @param {Object} params
 * @param {string} params.category  category to load and display items for
 * @param {string} params.categoryTitle displayed on category screen
 */
export default function Category({ category, categoryTitle }) {
    const [loadingState, setLoadingState] = React.useState(states.LOADING);

    // from an imagined set of UI filters - this could be moved out of this
    // component and passed as prop or used in context
    const [filters, setFilters] = React.useState(defaultFilters);

    const [items, setItems] = React.useState([]);
    const [filteredItems, setFilteredItems] = React.useState([]);

    React.useEffect(() => {
        setFilteredItems(filter(items, filters));
    }, [items]);

    React.useEffect(() => {
        setFilteredItems(filter(items, filters));
    }, [filters]);

    // handle loading of category, setting load states appropriately
    React.useEffect(() => {
        setLoadingState(states.LOADING);
        api.fetchInCategory(category)
            .then(fetchedItems => {
                setItems(fetchedItems);
                setLoadingState(states.LOADED);
            })
            .catch(() => setLoadingState(states.ERROR));
    }, [category]);

    // render grid items
    const gridItems = filteredItems.map((item, i) => (
        <MediaPoster key={`poster-${i}`} {...item} />
    ));

    return (
        <Page title={categoryTitle}>
            {loadingState == states.LOADING ? (
                <Loading />
            ) : loadingState == states.ERROR ? (
                <Error />
            ) : (
                <Grid>{gridItems}</Grid>
            )}
        </Page>
    );
}
