import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/ProductCard";
import { NavLink } from "react-router-dom";

import { getCategories } from "../../getDataFromServer";

const Woman = () => {
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState(["Catalogo Femenino"]);

    async function fetchWomanCategories() {
        const data = await getCategories("mujer");
        setCategories(data);
    }

    useEffect(() => {
        fetchWomanCategories();
    }, []);

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
                        <span onClick={() => fetchWomanCategories()}>Mujer</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/hombre">
                        <span>Hombre</span>
                    </NavLink>
                </li>
            </Header>

            <section id="catalogo" className="two">
                <div className="container">
                    <header>
                        <h2>{title} </h2>
                    </header>

                    <div className="row">
                        {categs.map((cat, i) => {
                            let url
                            if (cat.name.includes("Invierno")){
                                url = "otono-invierno"
                            } else if (cat.name.includes("Verano")){
                                url = "primavera-verano"
                            } else if (cat.name === "Carteras") {
                                url = "2"
                            } else if (cat.name === "Liquidación"){
                                url = "14"
                            }
                            return <ProductCard key={i} cat={cat} url={"/mujer/"+url} handler={handleClick}> <h3>{cat.name}</h3> </ProductCard>;
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Woman;
