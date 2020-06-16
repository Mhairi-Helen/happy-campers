import React from 'react';
import '../style/App.css';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Header from './Header';
import Campsite from './Campsite';
import Sidebar from './Sidebar';
// import Footer from './Footer'


const App = () => (

  <Router>
    <Header />
    <Route exact path='/campsites/:id' render={({ match }) => (
      <Campsite campsite={match.params.id} />
    )} />
  </Router>

)

export default App;
