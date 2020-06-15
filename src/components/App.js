import React from 'react';
import '../css/App.css';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


const App = () => (

  <Router>

    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

  </Router>

)

export default App;
