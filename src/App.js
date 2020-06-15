import React from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';



function App() {
    return (
        <div className="App">

            <Router>
                <Switch>
                    <Route exact path="/">
                        <form>
                            <label>Where do you want to camp?</label>
                            <select>
                                <option>Bristol</option>
                                <option>Cornwall</option>
                                <option>Devon</option>
                            </select>
                        </form>

                        <button>Search</button>
                    </Route>

                    <Route exact path="/campsites">
                        <ul>
                            <li>Campsite 1</li>
                            <li>Campsite 2</li>
                            <li>Campsite 3</li>
                            <li>Campsite 4</li>
                        </ul>
                    </Route>

                    <p>404 error. Site not found. </p>

                </Switch>
            </Router>

        </div>
    );
}

export default App;
