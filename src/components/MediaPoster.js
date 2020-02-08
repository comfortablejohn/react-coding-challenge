import React from 'react';

import { GridItem } from '../layout/Grid';
import LazyImage from '../components/LazyImage';

// {
//     "title": "Almost Royal",
//     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     "programType": "series",
//     "images": {
//       "Poster Art": {
//         "url": "https://streamcoimg-a.akamaihd.net/000/124/27/12427-PosterArt-92cd41fc035a71a5e5f6cc7569b4266e.jpg",
//         "width": 1000,
//         "height": 1500
//       }
//     },
//     "releaseYear": 2014
//   }

export function MediaPoster({ title, description, images }) {
    // TODO: build urls for different sizes to be used with srcset

    // Use StanCo resize query param for appropriately sized image
    const imageUrl = images['Poster Art'].url + '?resize=376px:* 376w';

    return (
        <GridItem title={title} tooltip={description}>
            <LazyImage imageUrl={imageUrl} />
        </GridItem>
    );
}
