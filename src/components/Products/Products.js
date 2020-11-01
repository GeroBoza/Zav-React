import React, {useState, useEffect} from 'react'
import Header from "../Header/Header";
import ProductCard from "./ProductCard";
import { NavLink, useParams } from "react-router-dom";
import { getProducts, getSubcategory } from "../../getDataFromServer";

const Products = () => {
    const {id} = useParams()

    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState("");

    
    

    useEffect(() => {
        const fetchManProducts = async () => {
            const data = await getProducts(id);
            setProducts(data);
        }
        const fetchTitle = async () => {
            const data = await getSubcategory(id);
            setTitle(data);
        }

        fetchManProducts();
        fetchTitle();
    }, [id]);

    let prods;
    if (products === []) {
        prods = "Esperando..";
    } else {
        prods = products;
    }

    const handleClick = (prod) =>{
        // console.log("Hice click");
        setProducts([])
        setTitle(prod.name)
        // console.log(categories);
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
                                return <ProductCard key={i} cat={prod} url={"/products/"+prod.id} handler={handleClick}>
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
