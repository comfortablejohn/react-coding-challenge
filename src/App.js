import React from 'react';
import ReactDOM from 'react-dom';

// screens
import Home from './screens/Home';

import Header from './layout/Header';
import Footer from './layout/Footer';
import { screens } from './utils/constants';

function App() {
    const [ currentScreen, setCurrentScreen ] = React.useState(screens.HOME);

    let pageComponent;
    switch (currentScreen) {
        case screens.SERIES: {
            // pageComponent = 
            break;
        }
        case screens.MOVIES: {
            // pageComponent = 
            break;
        }
        case screens.HOME:
        default:
            pageComponent = <Home />;
    }

    return (
        <div className="container">
            <Header />
            {pageComponent}
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));