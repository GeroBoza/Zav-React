import React from 'react';

import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Woman from './components/Woman/Woman';
import Man from './components/Man/Man';
import Products from './components/Products/Products';


import {
    BrowserRouter as Router,
    Route,
    // Switch,
    // Link,
    // NavLink
  } from "react-router-dom";


function App() {
  return (
      <Router>
          <Route path="/" exact>
            <Home />
          </Route>
        
            <Route path="/mujer" exact>
                <Woman />
            </Route>
            <Route path="/mujer/:id"> 
                <Products />
            </Route>
            
            <Route path="/hombre" exact>
                <Man />
            </Route>
            <Route path="/hombre/:id"> 
                <Products />
            </Route>
            

            
            
        <Footer />
      </Router>
  );
}

export default App;
