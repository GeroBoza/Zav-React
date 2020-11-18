import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import ProductCard from "../Products/ProductCard";
import { NavLink } from "react-router-dom";

import { getCategories } from "../../getDataFromServer";

const Subcategory = (props) => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        // console.log("se ejecuta");
        async function fetchCategories() {
            const data = await getCategories(props.sex);
            setCategories(data);
        }
        fetchCategories();
    }, [props.sex]);

    
    // let categs;
    // if (categories === []) {
    //     categs = "Esperando..";
    // } else {
    //     categs = categories;
    // }

    let path
    if(props.sex === "invierno" || props.sex ==="verano"){
        path = "mujer"
    } else {
        path = props.sex
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
                        <span>Hombre</span>
                    </NavLink>
                </li>
            </Header>

            <section id="catalogo" className="two">
                <div className="container">
                    <header>
                        <h2>{props.title} </h2>
                    </header>

                    <div className="row">
                        {categories.map((cat, i) => {
                            let url
                            if (cat.name.includes("Otoño / Invierno")){
                                url = "otono-invierno"
                            } else if (cat.name.includes("Primavera / Verano")){
                                url = "primavera-verano"
                            } else if (cat.name === "Carteras") {
                                url = "2"
                            } else if (cat.name === "Liquidación"){
                                url = "14"
                            } else {
                                url=cat.id
                            }
                            return <ProductCard key={i} cat={cat} url={`/${path}/`+url} > <h3>{cat.name}</h3> </ProductCard>;
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Subcategory;
