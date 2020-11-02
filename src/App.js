import React from 'react';

import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Woman from './components/Woman/Woman';
import Man from './components/Man/Man';
import Products from './components/Products/Products';
import ProductDetail from './components/Products/ProductDetail';


import {
    BrowserRouter as Router,
    Route,
    Switch,
    // Switch,
    // Link,
    // NavLink
  } from "react-router-dom";


function App() {
  return (
      <Router>
          <Switch>

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
            <Route path="/products/:id"> 
                <ProductDetail />
            </Route>
          </Switch>
            

            
            
        <Footer />
      </Router>
  );
}

export default App;
