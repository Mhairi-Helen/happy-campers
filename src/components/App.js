import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import TempForm from './TempForm/index';
import TempListing from './TempListing/index';

const App = () => {
    return (
        <div className="App">

            <Router>

                <h1>CAMP SITES</h1>

                <Switch>
                    <Route exact path="/">
                        <TempForm />
                    </Route>

                    <Route exact path="/campsites">
                        <TempListing />
                    </Route>

                    <Route exact path="/campsites/:id" render={ ({ match }) => (
                        <TempListing id={ match.params.id }/>
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