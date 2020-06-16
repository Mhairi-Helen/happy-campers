import React from 'react';

import {
    Router,
    Route,
    Switch
} from 'react-router-dom';

import Header from './Header';
import Card from './Card';
//import Campsite from './Campsite';
import Footer from './Footer';
import Hero from './Hero';


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





                    {/* <Route exact path="/campsites/:id" render={({ match }) => (
                        <Campsite id={match.params.id} />
                    )}>
                    </Route> */}

                    <Route exact path="/components">
                        {/**
                         * Components and style guide development go here
                         *
                         * e.g.
                         *
                         * <Button />
                         * <ListGroup>
                         *      <ListItem />
                         * </ListGroup>

                         */}
                    </Route>

                    <p>404 error. Site not found. </p>

                </Switch>

                <Footer />

            </Router>

        </div>
    );
}

export default App;
