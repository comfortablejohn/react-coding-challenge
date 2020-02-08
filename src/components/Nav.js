import React from 'react'; 
import Series from '../screens/Series';
import Home from '../screens/Home';
import { screens } from '../utils/constants';

const NavContext = React.createContext();

export default function NavProvider({ onChange, children }) {
    const [ currentScreen, setCurrentScreen ] = React.useState(screens.HOME);

    let screenComponent;

    switch (currentScreen) {
        case screens.SERIES: {
            screenComponent = <Series />
            break;
        }
        case screens.MOVIES: {
            // screenComponent = 
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
                break;
            case '/movies':
                return screens.MOVIES;
            default:
                throw new Error('Attempting to navigate to nonexisting screen.');
        }
    }

    function goTo(url) {
        const screen = getScreenFromUrl(url);

        if (onChange) {
            onChange(screen);
        }

        history.pushState({ screen }, '', `/${screen.toLowerCase()}`);
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
        }
    }, []);

    return (
        <NavContext.Provider value={{
            goTo,
            screenComponent,
            currentScreen,
        }}>
            {children(screenComponent)}
        </NavContext.Provider>
    );
}

export const useNav = () => React.useContext(NavContext);