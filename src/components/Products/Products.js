import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import ProductCard from "./ProductCard";
import { NavLink, useParams } from "react-router-dom";
import { getProducts, getSubcategory } from "../../getDataFromServer";

const Products = () => {
    const { id } = useParams();

    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts(id);
            setProducts(data);
        };
        const fetchTitle = async () => {
            const data = await getSubcategory(id);
            setTitle(data);
        };

        fetchProducts();
        fetchTitle();
    }, [id]);

    let prods;
    let mItems
    let url
    if (products === []) {
        prods = "Esperando..";
        mItems = ""
    } else {
        prods = products.data;
        mItems = products.menuItems
        url = products.url
    }

    console.log(mItems);

    const handleClick = (prod) => {
        // console.log("Hice click");
        setProducts([]);
        setTitle(prod.name);
        // console.log(categories);
    };

    return (
        <div id="main">
            <Header>
                <li>
                    <NavLink to="/" exact>
                        <span>Inicio</span>
                    </NavLink>
                </li>
                {url == "hombre" ? <li>
                    <NavLink to="/hombre" exact>
                        <span>Hombre</span>
                    </NavLink>
                </li> : <li>
                    <NavLink to="/mujer" exact>
                        <span>Mujer</span>
                    </NavLink>
                </li>}
                {mItems !== undefined
                    ? mItems.map((item, i) => {
                          return (
                              <li key={i}>
                                  <NavLink to={`/${url}/${item.id}`}>
                                      <span>{item.name}</span>
                                  </NavLink>
                              </li>
                          );
                      })
                    : ""}
                
            </Header>

            <section id="catalogo" className="two">
                <div className="container">
                    <header>
                        <h2>{title.name} </h2>
                    </header>

                    <div className="row">
                        {prods !== undefined
                            ? prods.map((prod, i) => {
                                  return (
                                      <ProductCard
                                          key={i}
                                          cat={prod}
                                          url={"/products/" + prod.id}
                                          handler={handleClick}
                                      >
                                          <h1>
                                              {prod.brand.name +
                                                  " - " +
                                                  prod.article}
                                          </h1>
                                          <p>
                                              {prod.stock !== 0
                                                  ? "$ " + prod.price
                                                  : "Sin Stock"}
                                          </p>
                                      </ProductCard>
                                  );
                              })
                            : ""}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
