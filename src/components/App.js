import React from 'react';

import {
    Router,
    Route,
    Switch
} from 'react-router-dom';

import Header from './Header';
import Card from './Card';
import Campsite from './Campsite';
import Footer from './Footer';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Nav from './Nav';
import Socials from './Socials';
import Reviews from './Reviews';

import TempForm from './TempForm/index.js';
import TempListing from './TempListing/index.js';
import TempListItem from './TempListItem/index.js';

/* import history for programmatic navigation */
import history from '../history';

/**
 * test axios
 */
import axios from '../axios';


const App = () => {
    return (
        <div className="App">

            <Router history={history}>

                <Header />

                <Switch>

                    <Route exact path="/">
                        <TempForm />
                    </Route>

                    <Route exact path="/campsites">
                        <Card />
                    </Route>

                    <Route exact path="/campsites/:id" render={ ({ match }) => (
                        <>
                            <Campsite id={ match.params.id }/>
                            <Reviews />
                        </>
                    )}>
                    </Route>



                    <Route exact path="/components">


                        {/**
                         * Components and style guide development go here
                         *
                         */}
                        <Footer/>
                        <Sidebar />
                        <Card />
                        <Header />
                        <Nav />
                        <Socials />

                    </Route>

                    <p>404 error. Site not found. </p>

                </Switch>

                <Footer />

            </Router>

        </div>
    );
}

export default App;
