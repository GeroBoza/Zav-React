import React, {useState, useEffect} from 'react'
import Header from "../Header/Header";
import ProductCard from "../ProductCard/ProductCard";
import { NavLink, useParams } from "react-router-dom";
import { getProducts, getSubcategory } from "../../getDataFromServer";

const Products = () => {
    const {id} = useParams()

    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState("");

    
    async function fetchManProducts() {
        const data = await getProducts(id);
        setProducts(data);
    }
    async function fetchTitle() {
        const data = await getSubcategory(id);
        setTitle(data);
    }

    useEffect(() => {
        fetchManProducts();
        fetchTitle();
    }, []);

    let prods;
    if (products === []) {
        prods = "Esperando..";
    } else {
        prods = products;
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
                            <h2>{title.name} </h2>
                        </header>

                        <div className="row">
                            
                            { prods.map((prod, i) => {
                                return <ProductCard key={i} cat={prod} url={"/products/"+prod.id} >
                                    <h1>{prod.brand.name +" - "+ prod.article}</h1>
                                    <p>{prod.stock !== 0 ? "$ " + prod.price : "Sin Stock"}</p>
                                    
                                    </ProductCard>;
                            }) }
                            
                        </div>
                    </div>
                </section>
            </div>
    )
}

export default Products
