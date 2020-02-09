import React from 'react';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Category from '../screens/Category';

test('displays loading when fetch begins', async () => {
    const mockFetch = () => new Promise((resolve, reject) => {
        // add to queue
        setTimeout(resolve, 0);
    });

    const { getByText } = render(
        <Category
            category="series"
            categoryTitle="Popular Series"
            fetch={mockFetch}
        />
    );
    
    // By immediately testing we should get the loading state,
    // i.e. the fetch resolve is queued and won't execute until after this
    // call stack is cleared.
    expect(getByText('Loading...')).toBeInTheDocument();
});

test('displays error when fetch fails', async () => {
    const mockFetch = () => Promise.reject();

    const { findByText } = render(
        <Category
            category="series"
            categoryTitle="Popular Series"
            fetch={mockFetch}
        />
    );
    
    const error = await findByText('Oops, something went wrong...');
    expect(error).toBeInTheDocument();
});

test('displays correct page title', async () => {
    // mock promise to resolve synchronously
    const mockFetch = () => ({ then: () => ({  catch: () => { /* noop */ } }) });

    const { getByRole, rerender } = render(
        <Category
            category="series"
            categoryTitle="Popular Series"
            fetch={mockFetch}
        />
    );

    expect(getByRole('heading')).toHaveTextContent('Popular Series');

    rerender(
        <Category
            category="movie"
            categoryTitle="Popular Movies"
            fetch={mockFetch}
        />
    );

    expect(getByRole('heading')).toHaveTextContent('Popular Movies');
});