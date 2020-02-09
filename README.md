# react-coding-challenge

# Data Fetching
Since we are only using static assets, I mocked a call to a fetch interface to
retrieve the feed `json` data.

There is a simulated .5s loading time for data to exemplify the loading states.

I made a decision to request data only after navigating to the category. In
comparison to loading the entire feed on the home screen, this would reduce
the payload size in a more realistic scenario. 

## Caching
I also implemented/simulated some basic caching for category data, i.e. when
a category is fetched, the items are stored against that category in memory.
You can see this in effect by navigating e.g. Home -> Series -> Home -> Movies
-> Home -> Series. The second visit for Series will have no delay due to fetching
the data.

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
screen. I initially was using `window.history` to emulate routes, however
due to the static nature of the demo this violates cross origin security
requirements, so I have removed that functionality.

React Context was used in this case to avoid prop drilling, giving the `Link`
component access to the `goTo` function irrespective of its position in the
tree (as long as it has `NavProvider` as an ancestor).

The current screen component is provided through a render prop to the children.
This improves composability while still allowing other components such as
`Header` and `Footer` to have access to the navigation context if required.

# Tests
I have only written tests for one component (`Category`). While I realise
this is limited, I hope it shows that I have an understanding of testing
patterns, including mocking through dependency injection to make 
units more testable (e.g. mocking the `fetch` call). Focussing on TDD is
one of my current goals.

## Improvements
There are a few components which could be refactored to be more testable, an
indication that there are cross-cutting concerns.

The `Nav` context pattern was probably a bit convoluted for this example, and
felt overkill once I removed the `history` updates. A simple switch and state
in the `Home` component would have sufficed.

# TODO
Below is a list of features or implementation details that I would have used
given more time, or if not attempting to keep in theme with avoiding use of 
third party libraries.

+ More testing coverage
+ Redux for state management
+ Use [React Router](https://github.com/ReactTraining/react-router) for routing / navigation
+ Integrate prop-types for component props
+ Proper tooltips on poster component hover to display e.g.:
    + description
    + seasons
    + add to lists
+ Mobile menu, with hamburger menu CTA