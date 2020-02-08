import React from 'react';
import Category from '../screens/Category';
import Home from '../screens/Home';
import { screens } from '../utils/constants';

const NavContext = React.createContext();

export default function NavProvider({ onChange, children }) {
    const [currentScreen, setCurrentScreen] = React.useState(screens.HOME);

    let screenComponent;

    switch (currentScreen) {
        // only included to illustrate error state
        case 'SPORTS':
            screenComponent = (
                <Category
                    category={'sports'}
                    categoryTitle={'Example Error State'}
                />
            );
            break;
        case screens.SERIES: {
            screenComponent = (
                <Category
                    category={'series'}
                    categoryTitle={'Popular Series'}
                />
            );
            break;
        }
        case screens.MOVIES: {
            screenComponent = (
                <Category category={'movie'} categoryTitle={'Popular Movies'} />
            );
            break;
        }
        case screens.HOME:
        default:
            screenComponent = <Home />;
    }

    function getScreenFromUrl(url) {
        switch (url) {
            case '/':
            case '/home':
                return screens.HOME;
            case '/series':
                return screens.SERIES;
            case '/movies':
                return screens.MOVIES;
            // only included to illustrate error state
            case '/sports':
                return 'SPORTS';
            default:
                throw new Error(
                    'Attempting to navigate to nonexisting screen.'
                );
        }
    }

    function goTo(url) {
        const screen = getScreenFromUrl(url);

        if (onChange) {
            onChange(screen);
        }

        // do some clean up on the url
        let newUrl = url.replace('/', '');
        if (newUrl == 'home') {
            newUrl = '';
        }

        history.pushState({ screen }, '', `/${newUrl.replace('/', '')}`);
        setCurrentScreen(screen);
    }

    function handlePopState() {
        const screen = getScreenFromUrl(window.location.pathname);
        setCurrentScreen(screen);
    }

    React.useEffect(() => {
        window.addEventListener('popstate', handlePopState);
        // cleanup
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    return (
        <NavContext.Provider
            value={{
                goTo,
                screenComponent,
                currentScreen
            }}
        >
            {children(screenComponent)}
        </NavContext.Provider>
    );
}

export const useNav = () => React.useContext(NavContext);
