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
import Socials from './Socials';
import Review from './Review';
import Hero from './Hero/Hero'
import Filter from './Filter';
import MapContainer from './Map/Map';
import Search from './TempForm/index.js';

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

                <Route exact path="/region/:id/campsites" render={({ match }) => (
                    <>
                        <Filter />
                        <main className="map__container">
                            <div>
                                <Card id={match.params.id}/>
                            </div>
                            <div className="map__aside">
                                <MapContainer />
                            </div>
                        </main>
                    </>
                )}>
                </Route>

                <Route exact path="/region/campsites/:id" render={({ match }) => (
                    <>
                        <Campsite id={match.params.id}/>
                        <Review id={match.params.id}/>
                    </>
                )}>
                </Route>

                <Route exact path="/components">

                    {/*
                    * Components and style guide development go here
                    *
                    */}

                </Route>

                <p>404 error. Site not found. </p>

            </Switch>

            <Footer />

        </Router>


    );
}

export default App;
