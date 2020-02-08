# react-coding-challenge

# Data Fetching
Since we are only using static assets, I mocked a call to a fetch interface to
retrieve the feed `json` data.

# Images
## Lazy Loading
In order to improve performance on pages with many images (i.e. Series, or Movies),
poster images are loaded lazily using the `LazyImage` component (`/src/components/LazyImage.js`).
This component uses `IntersectionObserver` to trigger the image source to load
only when the element is close to the viewport, preventing wasted bandwidth
for content below the fold and making sure images in view are loaded first.

## Image Dimensions
I also noted that in production, Stan uses query parameters to request
appropriately sized assets on demand. I hope it's okay that I took the liberty
to repeat this pattern in order to reduce the payload and improve load times. I
used an image size that was about twice the dimensions of the container element
to ensure an aesthetic resolution.

# Navigation
There is a very basic and naive navigation context that manages the active 
screen. Obviously the routes will only work within the runtime of the app,
given the static nature of the demo (i.e. no server).

React Context was used in this case to avoid prop drilling, giving the `Link`
component access to the `goTo` function irrespective of its position in the
tree (as long as it has `NavProvider` as an ancestor).

The current screen component is provided through a render prop to the children.
This improves composability while still allowing other components such as
`Header` and `Footer` to have access to the navigation context if required.

I would typically use [React Router](https://github.com/ReactTraining/react-router)
for routing, but opted for this approach to avoid using third party libraries
as per the spec.

# TODO

+ style - anchor hover state
+ footer social anchors - hover shows blue svg

+ Integrate prop-types

+ Loading

+ Proper tooltips on hover to display e.g.:
    + description
    + seasons
    + add to lists