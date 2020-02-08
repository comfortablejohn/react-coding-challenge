import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';
import NavProvider from './components/Nav';

function App() {
    return (
        <NavProvider>
            {(screenComponent) => 
            <div className="container">
                <Header />
                {screenComponent}
                <Footer />
            </div>
            }
        </NavProvider>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));