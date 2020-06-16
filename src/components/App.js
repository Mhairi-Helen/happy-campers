import React from 'react';
import './App.scss';

import {
    Router,
    Route,
    Switch
} from 'react-router-dom';

import TempForm from './TempForm/index';
import TempListing from './TempListing/index';
import TempListItem from './TempListItem/index';

/* import history for programmatic navigation */
import history from '../history';

/**
 * test axios
 */
import axios from '../axios';


const App = () => {
    return (
        <div className="App">

            <Router history={ history }>

                <h1>CAMPSITES.CO.UK</h1>

                <Switch>
                    <Route exact path="/">
                        <TempForm />
                    </Route>

                    <Route exact path="/campsites">
                        <TempListing />
                    </Route>

                    <Route exact path="/campsites/:id" render={ ({ match }) => (
                        <TempListItem id={ match.params.id }/>
                    )}>
                    </Route>

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

                <p>Footer goes here. Copyright, 2020. </p>

            </Router>

        </div>
    );
}

export default App;
