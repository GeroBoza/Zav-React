import React, { Fragment } from 'react';

import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Woman from './components/Woman/Woman';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";


function App() {
  return (
      <Router>
          <Route path="/" exact>
            <Home />
          </Route>
        
            <Route path="/mujer">
                <Woman />
            </Route>
            
        <Footer />
      </Router>
  );
}

export default App;
