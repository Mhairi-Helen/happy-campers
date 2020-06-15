import React from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Form from './components/Form/Form';
import GET from './components/GET/GET';

function App() {
    return (
        <div className="App">

            <Router>
                <Switch>
                    <Route exact path="/">
                        <Form />
                    </Route>

                    <Route exact path="/campsites">
                        <GET></GET>
                    </Route>

                    <p>404 error. Site not found. </p>

                </Switch>
            </Router>

        </div>
    );
}

export default App;
