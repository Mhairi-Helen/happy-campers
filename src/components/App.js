import React from 'react';

import {
    Router,
    Route,
    Switch
} from 'react-router-dom';

import Header from './Header';
import Card from './Card';
import Campsite from './Campsite/index.js';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Nav from './Nav';
import Socials from './Socials';
import Review from './Review';
import Hero from './Hero'
import Filter from './Filter';
// import MapContainer from './Map/Map';


import Search from './TempForm/index.js';

/* import history for programmatic navigation */
import history from '../history';

const App = () => {
    return (


        <Router history={history}>

            <Header />

            <Switch>

                <Route exact path="/">

                    <Hero>
                        <Search />
                    </Hero>
                </Route>

                <Route exact path="/campsites">

                    <Filter />
                    <Card />

                    {/* <main className="map__container" style={{ display: "flex", width: "100vw" }}>
                        <div className="card__list" style={{ width: "50vw" }}>
                            <Card />

                        </div>
                        <div className="map__aside">
                            <MapContainer />
                        </div>
                    </main> */}

                </Route>

                <Route exact path="/campsites/:id" render={({ match }) => (
                    <>
                        <Campsite id={match.params.id} />
                        <Review id={match.params.id} />
                    </>
                )}>
                </Route>


                <Route exact path="/components">


                    {/**
                         * Components and style guide development go here
                         *
                         */}
                    <Footer />
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


    );
}

export default App;
