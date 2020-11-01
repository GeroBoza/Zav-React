import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/ProductCard";
import { 
     NavLink } from "react-router-dom";
import { getCategories } from "../../getDataFromServer";

const Woman = () => {
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState(["Catalogo Masculino"]);

    
    async function fetchManCategories() {
        const data = await getCategories("hombre");
        setCategories(data);
        setTitle("Catalogo Masculino")
        console.log("entre");
    }

    useEffect(() => {
        fetchManCategories();
    },[]);

    let categs;
    if (categories === []) {
        categs = "Esperando..";
    } else {
        categs = categories;
    }

    const handleClick = (cat) =>{
        console.log("Hice click");
        setCategories([])
        setTitle(cat.name)
        console.log(categories);
    }

    

    return (
        
            <div id="main">
                <Header>
                    <li>
                        <NavLink to="/" exact>
                            <span>Inicio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/mujer">
                            <span >Mujer</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/hombre">
                            <span onClick={() => fetchManCategories()}>Hombre</span>
                        </NavLink>
                    </li>
                </Header>

                <section id="catalogo" className="two">
                    <div className="container">
                        <header>
                            <h2>{title} </h2>
                        </header>

                        <div className="row">
                            
                            { categs.map((cat, i) => {
                                return <ProductCard key={i} cat={cat} url={"/hombre/"+cat.id} handler={handleClick}><h1>{cat.name}</h1></ProductCard>;
                            }) }
                            
                        </div>
                    </div>
                </section>
            </div>
            
    );
};

export default Woman;
