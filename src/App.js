import React from 'react';

import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import ProductDetail from './components/Products/ProductDetail';
import Subcategory from './components/Subcategory/Subcategory';


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

         
        
            {/* RUTA CATEGORIAS DE MUJER */}
            <Route path="/mujer" exact>
                {/* <Woman /> */}
                <Subcategory sex="mujer"title="Catálogo Femenino"/>
            </Route>
            <Route path="/mujer/otono-invierno"> 
                <Subcategory sex="invierno"/>
            </Route>
            <Route path="/mujer/primavera-verano"> 
                <Subcategory sex="verano"/>
            </Route>
            <Route path="/mujer/:id"> 
                <Products />
            </Route>

            {/* RUTA CATEGORIAS DE HOMBRES */}
            <Route path="/hombre" exact>
                {/* <Man /> */}
                <Subcategory sex="hombre" title="Catálogo Masculino"/>
            </Route>
            <Route path="/hombre/:id"> 
                <Products />
            </Route>

            {/* RUTA PRODUCTOS */}
            <Route path="/products/:id"> 
                <ProductDetail />
            </Route>

            <Route path="/" exact>
                <Home />
            </Route>
          </Switch>
            

            
            
        <Footer />
      </Router>
  );
}

export default App;
